import express from "express";
import {
  createSlotController,
  deleteSlotController,
  getAvailableSlots,
  updateSlotController,
} from "./slot.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.post("/",
  auth(USER_ROLE.admin),
   createSlotController);
router.get("/availability", getAvailableSlots);

router.put("/:id", updateSlotController);
router.delete("/:id", deleteSlotController);

export const SlotRoutes = router;
