import db from "../config/db.js";

export async function updateRecipeUserIds() {
    try {
        // First, find the first user to use as a default
        const userQuery = await db.query(`
            SELECT id, username, full_name 
            FROM users 
            ORDER BY id 
            LIMIT 1
        `);

        if (userQuery.rows.length === 0) {
            console.log('No users found to update recipe user_id');
            return;
        }

        const defaultUser = userQuery.rows[0];

        // Update recipes with null user_id
        const updateQuery = await db.query(`
            UPDATE recipe 
            SET 
                user_id = $1, 
                uploader_name = $2 
            WHERE user_id IS NULL
            RETURNING *
        `, [defaultUser.id, defaultUser.full_name || defaultUser.username]);

        console.log('Updated recipes:', updateQuery.rows.length);
        console.log('Updated with user:', defaultUser);

        return updateQuery.rows;
    } catch (error) {
        console.error('Error updating recipe user IDs:', error);
        throw error;
    }
}

// Uncomment and run this if you want to manually trigger the update
// updateRecipeUserIds();
