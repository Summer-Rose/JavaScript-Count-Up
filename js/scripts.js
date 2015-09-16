var findMultiples = function(multiple,finalNumber) {
  var y = multiple;
  var x = finalNumber;
  var multiplesList = [];

  for (var i = y; i <= x; i = i + y) {
    multiplesList.push(i);
  }
  return multiplesList;
};

$(document).ready(function() {
  $("form#findMultiples").submit(function(event) {
    multiple = parseInt($("input#multiple").val());
    finalNumber = parseInt($("input#finalNumber").val());

    var result = findMultiples(multiple, finalNumber);

    $(".multipleList").text(result);
    $(".userMultiple").text(multiple);
    $(".userFinalNumber").text(finalNumber);

    $("#result").show();
    event.preventDefault();
  });
});
