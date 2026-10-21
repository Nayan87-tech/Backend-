import Router from "express";
import { getNotes, notes } from "../controller/auth.controller.js";

const router = Router();

router.post("/notes",notes)
router.get("/notes",getNotes)

export default router;