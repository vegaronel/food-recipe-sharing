import db from "../config/db.js"

async function getRecipe(req,res) {
    try {
        // Extract pagination parameters
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 6;
        const offset = (page - 1) * limit;

        console.log('Fetching recipes with pagination:', { page, limit, offset });
        
        // First, get total count of recipes
        const countQuery = await db.query(`
            SELECT COUNT(*) AS total_recipes 
            FROM recipe
        `);
        const totalRecipes = parseInt(countQuery.rows[0].total_recipes);

        // Then fetch paginated recipes
        const response = await db.query(`
            SELECT 
                r.*,
                COALESCE(r.uploader_name, u.full_name, u.username, 'Anonymous') AS uploader_name,
                COALESCE(u.username, 'Anonymous') AS username,
                COALESCE(u.full_name, u.username, 'Anonymous') AS full_name,
                COALESCE(u.profile_picture, '/default-avatar.png') AS user_avatar
            FROM recipe r
            LEFT JOIN users u ON r.user_id = u.id
            ORDER BY r.id DESC
            LIMIT $1 OFFSET $2
        `, [limit, offset]);
        
        const result = response.rows;
        
        console.log('Paginated Recipe Fetch Results:');
        result.forEach(recipe => {
            console.log({
                recipe_id: recipe.id,
                recipe_name: recipe.recipe_name,
                uploader_name: recipe.uploader_name,
                username: recipe.username,
                full_name: recipe.full_name
            });
        });
        
        res.json({
            recipes: result,
            currentPage: page,
            totalRecipes: totalRecipes,
            totalPages: Math.ceil(totalRecipes / limit),
            hasMore: page * limit < totalRecipes
        });
        
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