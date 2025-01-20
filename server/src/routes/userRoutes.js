import express from "express";
import { getRecipe } from "../controllers/userControllers.js"

const router = express.Router();

router.get("/recipes", getRecipe);


export default router;