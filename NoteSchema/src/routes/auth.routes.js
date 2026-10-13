import Router from "express";
import { notes } from "../controller/auth.controller.js";

const router = Router();

router.post("/notes",notes)

export default router;