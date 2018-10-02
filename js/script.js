



$(document).ready(function() {
  $("form#word").submit(function(event){
    event.preventDefault();
    var word = text($("input#word").toString());
    var result= wordResult(word);

    $(".wordResult").text(word);
  });
});
