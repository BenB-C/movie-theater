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
}

Theater.prototype.findTicket = function(name, time) {
  this.tickets.forEach(function(ticket) {
    if (name == ticket.name && time == ticket.showtime) {
      return ticket;
    }
  });
  return false;
}

Theater.prototype.showtimes = function(movieName) {
  var showtimes = [];
  this.tickets.forEach(function(ticket) {
    if (ticket.name == movieName) {
      showtimes.push(ticket.showtime);
    }
  });
  return showtimes;
}

function price(name, time, age) {
  var TicketPrice = FULL_PRICE;
  var ticket = theater.findTicket(name, time);
  if (ticket.showtime <= MATINEE_TIME) {
    TicketPrice = MATINEE_PRICE;
  }

  if (age < 19 ||age > 55) {
    TicketPrice *= 1 - DISCOUNT_RATE;
  }
  console.log(TicketPrice)
  return TicketPrice;
}

// User interface --------------------------------
var theater = new Theater();
movieNames = ["Men In Black: International", "Late Night"];

theater.addTicket("Men In Black: International", "11:30 am");
theater.addTicket("Men In Black: International", "02:30 pm");
theater.addTicket("Men In Black: International", "08:15 pm");
theater.addTicket("Late Night", "11:40 am");
theater.addTicket("Late Night", "02:25 am");
theater.addTicket("Late Night", "05:00 pm");
theater.addTicket("Late Night", "07:45 pm");
theater.addTicket("Late Night", "08:20 pm");

function updateTimeSelect(movieName) {
  theater.showtimes(movieName).forEach(function(showtime){
    $("#time-select").append(`<option>${showtime}</option>`);
  });
}

$(document).ready(function() {
  movieNames.forEach(function(movieName) {
    $("#movie-select").append(`<option>${movieName}</option>`);
  });

  updateTimeSelect($("#movie-select").val());

  $("#movie-select").change(function(event) {
    $("#time-select").empty();
    updateTimeSelect($("#movie-select").val());
  });

  $("#some-form").submit(function(event) {
    event.preventDefault();

    var someInputVar = $("#some-input").val(); // Don't forget it's a string without parseInt()
    var someOutputVar = someInputVar;

    $("#output").text(someOutputVar);
    $("#output").show();
  });
});
