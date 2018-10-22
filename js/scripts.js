
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var lists = ["drinks","snacks","veg"];
    var outputs = [];
    lists.forEach(function(list) {
      var userinput = $("input#" + list).val();
      outputs.push(userinput)
    });

    outputs.forEach(function(element) {
      $(".list").append("<li>" + element + "</li>")
    });
    var result = outputs.map(function(output){
      return output.toUpperCase();
    });
    result.map(function(element) {
      $(".reciept").append("<li>" + element + "</li>")

    });
  });    // $(".list").append(output + " ");
  });


// variable with empty array
// loop through something and get values
// push the value into array
// when loop is finished, return the array
