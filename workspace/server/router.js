import express from "express";
import { login, register } from "./UserController.js";
import { write } from "./ReviewController.js";

const router = express.Router();
console.log("접근");
router.post("/register", register);
router.post("/login", login);
router.post("/write", write);

export default router;
