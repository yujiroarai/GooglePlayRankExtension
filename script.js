$(function(){
  var rank = 1;
  $('.card').each(function(){
    var title = $(this).find(".title").text();
    $(this).find(".title").text(rank++ + ": " + title);
    console.log(rank);
  });

  var page_title = $('.cluster-heading').text();
  $('.cluster-heading').text(page_title + ": 検索結果数 (" + (rank - 1) + ")");
});
