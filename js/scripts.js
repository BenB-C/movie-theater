// Business logic --------------------------------
const FULL_PRICE = 12;
const MATINEE_PRICE = 9;
const OLD_MOVIE_PRICE = 6;
const MATINEE_TIME = 1600;
const DISCOUNT_RATE = 0.20;

function Ticket(name, showtime, releaseDate) {
  this.name = name,
  this.showtime = showtime,
  this.releaseDate = releaseDate
}

function Theater() {
  this.tickets = [];
}

Theater.prototype.addTicket = function(name, showtime) {
  this.tickets.push(new Ticket(name, showtime));
};

Theater.prototype.findTicket(name, time) {
  this.tickets.forEach(function(ticket) {
    if (name == ticket.name && time == ticket.showTime) {
      return ticket;
    }
  });
  return false;
}

function price(name, time, age) {
  var TicketPrice = FULL_PRICE;
  var ticket = theater.findTicket(name, time);
  if (ticket.showTime <= MATINEE_TIME) {
    TicketPrice = MATINEE_PRICE;
  }

  if (age < 19 ||age > 55) {
    TicketPrice *= 1 - DISCOUNT_RATE;
  }
  console.log(TicketPrice)
  return TicketPrice
}

// User interface --------------------------------
var theater = new Theater();
movieNames = ["Men In Black: International", "Late Night"];

theater.addTicket("Men In Black: International", 1130);
theater.addTicket("Men In Black: International", 1430);
theater.addTicket("Men In Black: International", 2015);
theater.addTicket("Late Night", 1140);
theater.addTicket("Late Night", 1425);
theater.addTicket("Late Night", 1700);
theater.addTicket("Late Night", 1945);
theater.addTicket("Late Night", 2020);

$(document).ready(function() {
  // movieNames.forEach(function(movieName) {
  //   $("#movie-select").append(`<option>${movieName}</option>`);
  // });

  $("#movie-select").append(`
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  `);

  $("#some-form").submit(function(event) {
    event.preventDefault();

    var someInputVar = $("#some-input").val(); // Don't forget it's a string without parseInt()
    var someOutputVar = someInputVar;

    $("#output").text(someOutputVar);
    $("#output").show();
  });
});
