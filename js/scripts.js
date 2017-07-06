$(function(){
  $("form#market").submit(function(event) {
    var name = $("input#name").val();
    var street = $("input#street").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zip = $("input#zip").val();

    $(".name").text(name);
    $(".street").text(street);
    $(".city").text(city);
    $(".state").text(state);
    $(".zip").text(zip);

    $("#page").show();
    event.preventDefault();
  });

});
