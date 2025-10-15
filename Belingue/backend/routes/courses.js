import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const courses = await db.all("SELECT * FROM courses");
  res.json(courses);
});

export default router;
