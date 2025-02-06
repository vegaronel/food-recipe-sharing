import { useState, useEffect, useCallback } from "react";
import MyButton from "../MyButton";
import MyInput from "../MyInput";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useRecipePosts } from "@/hooks/useRecipePosts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MySkeleton from "../MySkeleton";

function Dashboard() {
  const { 
    recipePost, 
    isLoading, 
    error, 
    hasMore, 
    loadMoreRecipes 
  } = useRecipePosts();
  const [searchTerm, setSearchTerm] = useState("");

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop 
      >= document.documentElement.offsetHeight - 100 // 100px from bottom
    ) {
      if (hasMore && !isLoading) {
        loadMoreRecipes();
      }
    }
  }, [hasMore, isLoading, loadMoreRecipes]);

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (error) return <div>Error fetching recipes</div>;

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center max-w-2xl mx-auto text-xl py-5">
        <MyInput 
          className="rounded-l-lg" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search recipes..."
        />
        <MyButton className="rounded-r-lg">Search</MyButton>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {recipePost.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center space-x-4">
              <Avatar>
                <AvatarImage 
                  src={post.user_avatar || "/default-avatar.png"} 
                  alt={post.username || "User"}
                />
                <AvatarFallback>
                  {post.full_name ? post.full_name.charAt(0).toUpperCase() : 'U'}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{post.recipe_name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  by {post.username || 'Anonymous'}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-2 text-ellipsis overflow-hidden mb-2">
                {post.recipe_description}
              </p>
              <div className="w-full h-48 overflow-hidden rounded-md">
                <img 
                  src={post.img_url} 
                  alt={post.recipe_name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
            <CardFooter>
              <MyButton className="w-full">View Recipe</MyButton>
            </CardFooter>
          </Card>
        ))}

        {isLoading && (
          <>
            <MySkeleton />
            <MySkeleton />
          </>
        )}
      </div>

      {!hasMore && (
        <div className="text-center py-4">
          <p>No more recipes to load</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;