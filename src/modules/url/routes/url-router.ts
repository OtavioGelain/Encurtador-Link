import { Router } from "express";
import { UrlController } from "../controllers/url-controller";

const router = Router();
const urlController = new UrlController();

router.post("/shorten", urlController.shorten);
router.get("/:code", urlController.redirect);

export default router;