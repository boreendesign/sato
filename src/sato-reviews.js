function simpleTemplating(data) {
    var html = '<div class = "container">';
    var review_counter = 0;
    $.each(data, function(index, item){
        html += '<div class="review"><div class = "review_name">'+ item.name +'</div>';
        html += '<div class = "review_desc">'+ item.review +'</div>';
        html += '<div class = "review_rating'+ review_counter + '"></div></div>';
        review_counter++;
    });
    html += '</div>';
    $('#review-container').html(html);
    return review_counter;
}

function setPagination(ref,numberPerPage,totalNumber){
  ref.on("value", function(snapshot) {
    $('#pagination-container').pagination({
        dataSource: snapshot.val().posts,
        pageSize:numberPerPage,
        callback: function(data, pagination) {
            var review_counter = simpleTemplating(data);

        }
    })
     console.log(snapshot.val());
  }, function (error) {
     console.log("Error: " + error.code);
  });
}
