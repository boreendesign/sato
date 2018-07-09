function simpleTemplating(data) {
    var html = '<div class = "container">';
    var review_counter = 0;
    $.each(data, function(index, item){
        html += '<div class="review"><div class = "review_name">'+ item.name +'</div>';
        html += '<div class = "review_desc">'+ item.review +'</div>';
        html += '<div class="rating" data-rate-value=' + item.rating + '></div></div>';
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
            var options = {
                max_value: 5,
                step_size: 0.5,
                initial_value: 0,
                selected_symbol_type: 'utf8_star', // Must be a key from symbols
                cursor: 'default',
                readonly: false,
                change_once: false, // Determines if the rating can only be set once
                additional_data: {} // Additional data to send to the server
            }

            $(".rating").rate(options);
        }
    })
     console.log(snapshot.val());
  }, function (error) {
     console.log("Error: " + error.code);
  });
}
