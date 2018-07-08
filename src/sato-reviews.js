function simpleTemplating(data) {
    var html = '<div class = "container">';
    $.each(data, function(index, item){
        html += '<div class="review"><div class = "review_name">'+ item.name +'</div>';
        html += '<div class = "review_desc">'+ item.review +'</div></div>';
    });
    html += '</div>';
    return html;
}
