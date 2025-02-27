import { useState, useEffect } from 'react';

export const useRecipePosts = () => {
  const [landingPagePost, setLandingPagePost] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const fetchRecipePosts = async () => {
      try {
        console.log(API_URL)
        const response = await fetch(`${API_URL}/api/users/recipes`, {
         method: "GET",
        headers: {
          "Content-Type" : "application/json"
        }
        });
        const result = await response.json();
        setLandingPagePost(result.result);
      } catch (error) {
        console.log('Error fetching post', error);
      }
    };

    fetchRecipePosts();
    console.log(landingPagePost);

  },[]);

  return {
    landingPagePost
  };
};
