import db from "../config/db.js"

async function getRecipe(req,res) {
    try {
        console.log('Attempting to fetch recipes from database');
        
        // Try to order by created_at, fallback to date_upload if created_at doesn't exist
        const response = await db.query(`
            SELECT * FROM recipe 
            ORDER BY 
                COALESCE(created_at, date_upload) DESC
        `);
        
        const result = response.rows;
        
        console.log('Recipes fetched successfully:', result);
        console.log('Number of recipes:', result.length);
        
        res.json(result);
        
    } catch (error) {
        console.error("Failed to get recipes:", error);
        res.status(500).json({ 
            message: "Failed to get recipes", 
            error: error.message,
            errorStack: error.stack
        });
    }
}

export { getRecipe }