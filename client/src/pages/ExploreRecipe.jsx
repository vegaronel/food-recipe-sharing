import { useEffect, useState } from 'react';
import axios from 'axios';
import { Separator } from '@/components/ui/separator';
import { ThumbsUp, Clock4 } from 'lucide-react';
import { Link } from 'react-router';
import { motion, useScroll } from 'framer-motion';
import { useRecipePosts } from '@/hooks/useRecipePosts';

function ExploreRecipe() {
  const { landingPagePost } = useRecipePosts();
  const { scrollYProgress } = useScroll();


  const categories = ['Main Dish', 'Dessert', 'Meat', 'Snacks', 'Vegetable', 'Side Dish'];

  return (
    <div className="pt-5 container max-w-screen-xl mx-auto">
      {/* Scroll Progress Bar */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: '#FF6F61',
          zIndex: 50,
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         {/* Main Content */}
        <div className="md:col-span-2">
          <div className="bg-white">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {landingPagePost.map(recipeItem => (
                <div className="text-start" key={recipeItem.id}>
                  <Link className="pointer" to={`/recipe/${recipeItem.id}`}>
                    <img
                      className="object-cover rounded h-[500px] w-full"
                      src={recipeItem.img_url || 'default-recipe-image.jpg'}
                      alt={recipeItem.image_alt || 'Recipe Image'}
                    />
                  </Link>
                  <p className="text-heading mt-4">{recipeItem.recipe_type}</p>
                  <div>
                    <h1 className="font-serif text-2xl">{recipeItem.recipe_name}</h1>
                    <p>{recipeItem.recipe_description}</p>
                    <Separator className="my-4 border-muted border-t-2" />
                    <div className="gap-3 flex items-center">
                      <div className="flex items-center">
                        <Clock4 />
                        <p className="text-sm">{recipeItem.time_to_cook} minutes</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <ThumbsUp />
                        <p className="text-sm">{recipeItem.difficulty}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
         {/* Side Content */}
        <div className="md:col-span-1">
          <div className="bg-white p-2 space-y-8">
            {/* Latest Recipe */}
            <div>
              <h2 className="text-xl font-semibold font-serif my-5">Latest Recipe</h2>
              {landingPagePost.map((recipeItem, index) => (
                <Link key={index} to={`/recipe/${recipeItem.id}`} className="flex gap-4 mt-4">
                  <img
                    className="w-[120px] h-[140px] object-cover rounded"
                    src={recipeItem.img_url}
                    alt=""
                  />
                  <div className="flex flex-col justify-center">
                    <h1 className="text-xl font-semibold font-serif">{recipeItem.recipe_name}</h1>
                    <p className="text-muted text-sm">
                      {new Date(recipeItem.date_upload).toLocaleDateString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            {/* Categories */}
            <div className="">
              <h2 className="font-serif text-xl font-semibold my-5">Categories</h2>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((item, index) => (
                  <Link key={index} to="/" className="flex">
                    <ThumbsUp />
                    <p>{item}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreRecipe;
