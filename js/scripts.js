$(document).ready(function() {
  $("#userName").submit(function(event) {
    var nameInput = $("input#name").val();
    $(".nameReturn").text(nameInput); //Need to add .nameReturn spans to results.
  })




})
