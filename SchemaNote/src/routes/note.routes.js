import Router from "express";
import { notes} from "../controller/note.controller.js";
import multer from "multer"

const upload = multer({ storage: multer.memoryStorage() });

const router = Router();

 router.post("/notes",upload.single("uploadfile"),notes)

 export default router;