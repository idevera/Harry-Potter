$(document).ready(function() {
  $("form#quiz").submit(function(event) {

    var house = $("#house").val();
    var age = parseInt($("input#age").val());
    var haircolor = $("input:radio[name=hair]:checked").val();

if (house === 'sl' && age < 20 && haircolor === 'blonde') {
  $("#draco").show();
} else if (house === 'rc' && age > 25 && haircolor === 'red') {
  $("#ron").show();
} else if (house === 'gr' && age < 30 && haircolor === 'brown') {
  $("#hermione").show();
} else  if (age >= 1) {
  $("#harry").show();
} else {
  alert('Please fill in the form');
}

  event.preventDefault();
  });
});
