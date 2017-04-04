// backend logic //
function Ticket(age, time, movie) {
  this.age = age;
  this.time = time;
  this.movie = movie;
  // this.receipt=[]; might need this, might not...
}

Ticket.prototype.price = function() {
  return this.age + " " + this.time + " " + this.movie;
}

// front end //

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var inputtedAge = $("#age").val();
    var inputtedTime = $("#time").val();
    var inputtedMovie = $("input:radio[name=movie]:checked").val();
    var newTicket = new Ticket("Your age is", inputtedAge, inputtedTime, inputtedMovie);
    $("#receipt").append("<li>" + newTicket.price() + "</li>");
  });


});
