import React, { useEffect, useState } from "react";
import { recipes } from "./data.js";
import { Separator } from "@/components/ui/separator";
import { ThumbsUp, Clock4 } from "lucide-react";
import { Link } from "react-router";
import { motion, useScroll } from "framer-motion";

function ExploreRecipe() {
  const [recipe, setRecipe] = useState([]);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const response = await fetch("http://localhost:3000/recipes");
        if(!response){
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setRecipe(result);
        
      } catch (error) {
        console.log("Failed to Fetch");
      }

    };
    getRecipe();
  }, []);

  return (
    <div className="pt-5 container max-w-screen-xl mx-auto">
      {/* Scroll Progress Bar */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#FF6F61",
          zIndex: 50,
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main Content */}
        <div className="md:col-span-2">
          <div className="bg-white">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {recipe.map((recipe, index) => (
                <div className="text-start" key={index}>
                  <Link className="pointer" to={"/sample"}>
                    <img
                      className="object-cover rounded h-[500px] w-full"
                      src={recipe.src}
                      alt={recipe.alt}
                    />
                  </Link>
                  <p className="text-heading mt-4">{recipe.type}</p>
                  <div>
                    <h1 className="font-serif text-2xl">{recipe.name}</h1>
                    <p>{recipe.description}</p>
                    <Separator className="my-4 border-muted border-t-2" />
                    <div className="gap-3 flex items-center">
                      <div className="flex items-center">
                        <Clock4 />
                        <p className="text-sm">{recipe.timeToCook} minutes</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <ThumbsUp />
                        <p className="text-sm">{recipe.difficulty}</p>
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
              <h2 className="text-xl font-semibold font-serif my-5">
                Latest Recipe
              </h2>
              {Array.from({ length: 3 }).map((_, index) => (
                <Link key={index} to="/" className="flex gap-4 mt-4">
                  <img
                    className="w-[120px] h-[140px] object-cover rounded"
                    src={recipes[index + 1].src}
                    alt=""
                  />
                  <div className="flex flex-col justify-center">
                    <h1 className="text-xl font-semibold font-serif">
                      {recipes[index + 1].name}
                    </h1>
                    <p className="text-muted text-sm">
                      {recipes[index + 1].dateUpload}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            {/* Categories */}

            <div className="">
              <h2 className="font-serif text-xl font-semibold my-5">
                Categories
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((item, index) => (
                  <a href="#" key={index} className="flex">
                    <ThumbsUp />
                    <p>{item}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const categories = [
  "Main Dish",
  "Dessert",
  "Meat",
  "Snacks",
  "Vegetable",
  "Side Dish",
];

export default ExploreRecipe;
