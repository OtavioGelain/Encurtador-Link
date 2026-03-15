import { Router } from "express";
import UrlRoutes from "../modules/url/routes/url-router";

const router = Router();

router.use("/url", UrlRoutes);

export default router;