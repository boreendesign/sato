function simpleTemplating(data) {
    var html = '<div class = "container">';
    $.each(data, function(index, item){
        html += '<div class="review"><div class = "review_name">'+ item.name +'</div>';
        html += '<div class = "review_desc">'+ item.review +'</div></div>';
    });
    html += '</div>';
    return html;
}

function setPagination(ref,numberPerPage,totalNumber){
  ref.on("value", function(snapshot) {
    $('#pagination-container').pagination({
        dataSource: snapshot.val().posts,
        pageSize:numberPerPage,
        callback: function(data, pagination) {
            var html = simpleTemplating(data);
            $('#review-container').html(html);
        }
    })
     console.log(snapshot.val());
  }, function (error) {
     console.log("Error: " + error.code);
  });
}
