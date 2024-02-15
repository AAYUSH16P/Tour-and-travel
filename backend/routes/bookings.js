import express from "express";

import { verifyUser ,verifyAdmin} from "../utils/verifyToken.js";
import { createBooking ,getAllBooking,getBooking} from "../controllers/bookingController.js";



const router = express.Router();

router.post("/",createBooking);
router.get("/:id",verifyUser,getBooking);
router.post("/",verifyUser,getAllBooking);



export default router;

