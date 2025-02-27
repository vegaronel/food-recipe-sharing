import db from "../config/db.js"

async function getRecipe(req,res) {
    try {
    const response = await db.query("SELECT * FROM recipe");
    const result = response.rows;
    res.json({result});

    }catch(error) {
        console.log(error);
    }
}

export { getRecipe }