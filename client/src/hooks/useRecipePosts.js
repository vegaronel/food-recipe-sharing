import { useState, useEffect } from 'react';
import axios from 'axios';

export const useRecipePosts = (limit = 6) => {
  const [recipePost, setRecipePost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  const fetchRecipePosts = async (currentPage = 1) => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/api/users/recipes", {
        params: { page: currentPage, limit }
      });
      
      console.log('Raw API Response:', response.data);
      
      // Detailed processing of posts
      const processedPosts = response.data.recipes.map(post => {
        // Prioritize different name sources
        let displayName = 'Anonymous';
        if (post.full_name && post.full_name !== 'Anonymous') {
          displayName = post.full_name;
        } else if (post.username && post.username !== 'Anonymous') {
          displayName = post.username;
        } else if (post.uploader_name && post.uploader_name !== 'Anonymous') {
          displayName = post.uploader_name;
        }

        const processedPost = {
          ...post,
          username: displayName,
          full_name: displayName,
          user_avatar: post.user_avatar || '/default-avatar.png'
        };

        return processedPost;
      });

      // If it's the first page, replace the recipes
      // If it's a subsequent page, append the recipes
      setRecipePost(prevPosts => 
        currentPage === 1 
          ? processedPosts 
          : [...prevPosts, ...processedPosts]
      );

      // Update pagination state
      setHasMore(response.data.hasMore);
      setTotalPages(response.data.totalPages);
      setPage(currentPage);

      setError(null);
    } catch (error) {
      console.error("Error fetching recipe posts:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreRecipes = () => {
    if (hasMore && !isLoading) {
      fetchRecipePosts(page + 1);
    }
  };

  useEffect(() => {
    fetchRecipePosts(1);
  }, []);

  return { 
    recipePost, 
    isLoading, 
    error, 
    hasMore, 
    totalPages, 
    loadMoreRecipes, 
    refetch: () => fetchRecipePosts(1) 
  };
};
