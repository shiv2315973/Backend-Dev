import createMovie from "./movie.js";
import createUser from "./user.js";
import bookTickets from "./booking.js";

// Create Movies
const movie1 = createMovie(1, "Avengers", 250);
const movie2 = createMovie(2, "Inception", 300);
const movie3 = createMovie(3, "Interstellar", 280);

// Create Users
const user1 = createUser(101, "Shivam", "STANDARD");
const user2 = createUser(102, "Rahul", "VIP");


const booking1 = bookTickets(user1, [movie1, movie2]);

console.log("STANDARD USER BILL");
console.log(booking1);


const booking2 = bookTickets(user2, [movie1, movie2, movie3]);

console.log("\nVIP USER BILL");
console.log(booking2);
