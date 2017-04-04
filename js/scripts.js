// backend logic //

function Ticket(age, time, movie){
  this.age = age;
  this.time = time;
  this.movie = movie;
  // this.reciept=[]; might need this, might not...
}



Ticket.prototype.price = function(){
  return this.age + " " + this.time + " " + this.movie;
}


// front end //
