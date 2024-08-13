import express from "express";
import { Login, logOut, Me } from "../controllers/Auth.js";

const router = express.Router();

router.get("/me", Me);
router.post("/Login", Login);
router.delete("/logOut", logOut);

export default router;
