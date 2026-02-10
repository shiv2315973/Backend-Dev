import { StatusCodes } from "http-status-codes";

function bookTickets(user, movies) {
  if (!user || movies.length === 0) {
    return {
      status: StatusCodes.BAD_REQUEST,
      message: "Invalid booking data"
    };
  }

  let totalPrice = 0;

  movies.forEach(movie => {
    totalPrice += movie.ticketPrice;
  });

  let discount = 0;

  if (user.userType === "STANDARD") {
    discount = totalPrice * 0.05;
  } else if (user.userType === "VIP") {
    discount = totalPrice * 0.12;
  }

  const finalAmount = totalPrice - discount;

  return {
    status: StatusCodes.OK,
    bill: {
      userName: user.name,
      userType: user.userType,
      totalPrice,
      discount,
      finalAmount
    }
  };
}

export default bookTickets;
