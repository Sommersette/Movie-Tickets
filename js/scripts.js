// backend logic //
function Ticket(age, time, movie) {
  this.age = age;
  this.time = time;
  this.movie = movie;
  this.price = 5;
  // this.receipt=[]; might need this, might not...
}

Ticket.prototype.alterPrice = function() {
  if ((this.age < 12) || (this.age >= 65)) {
    this.price += 0
  }
  else {
    this.price += 2
  }
  if (this.time >= 17) {
    this.price += 3
  }
  else {
    this.price += 1
  }
  if (this.movie === "oldy"){
    this.price += 3
  }
  else {
    this.price += 5
  }
  return this.price;
}


// front end //

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var inputtedAge = $("#age").val();
    var inputtedTime = parseFloat($("#time").val());
    var inputtedMovie = $("input:radio[name=movie]:checked").val();
    var newTicket = new Ticket(inputtedAge, inputtedTime, inputtedMovie);
    $("#receipt").append("<li>" + newTicket.alterPrice() + "</li>");
    newTicket.alterPrice();
  });
});
