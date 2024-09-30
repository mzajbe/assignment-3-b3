import express from "express";
import { bookingController } from "./bookings.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.get("/", auth(USER_ROLE.admin), bookingController.getUserBookings);
// router.get("/user/:userId", bookingController.getBookingsByUser);

// // PUT request to update booking
// router.put("/:id", auth(USER_ROLE.admin), bookingController.updateBooking);
// router.put("/bookings/reject/:id", bookingController.rejectBooking);

// router.delete("/bookings/:id", bookingController.deleteBooking);

export const MyBookingsRoutes = router;
