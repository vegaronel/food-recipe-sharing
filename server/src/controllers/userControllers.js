import db from "../config/db.js"

async function getRecipe(req,res) {
    try {
        const response = await db.query('SELECT * FROM recipe');
        const result = response.rows;
        res.json(result);
        
    } catch (error) {
        console.error("Failed to get data.", error);
        res.status(500).json({ message: "Failed to get data." });
    }
}

export { getRecipe }