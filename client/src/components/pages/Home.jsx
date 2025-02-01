import { features, trendRecipe } from "./data";
import { Separator } from "@/components/ui/separator";
import { ThumbsUp, Clock4 } from "lucide-react";
import { Link } from "react-router";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

function Home() {
  const [backend, setBackend] = useState("");
  const { scrollYProgress } = useScroll();

  useEffect(()=> {
    const fetchBackend = async() => {
      try{
        const response = await fetch("https://food-recipe-sharing-y7rl.vercel.app/");
        console.log(response.json());
      }catch(error) {
        setBackend("Error fetching", error);
        console.log(error)
      }
    }
    
    fetchBackend();
  })

  return (
    <div>
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
          backgroundColor: "#FF6F61 ",
          zIndex: 50,
        }}
      />

      <div className="parallax bg-cover bg-fixed h-[450px] text-center gap-4 flex-col bg-center flex justify-center items-center">
        <h1 className="font-serif text-5xl text-slate-200">
          Discover Delicious Recipes to Cook at Home!
        </h1>
        <button className="bg-accent text-white hover:bg-accent-hover px-4 py-2 rounded-lg font-semibold">
          Explore Recipes
        </button>
      </div>

      <div className="bg-primary">
        {/* Features */}
        <div className="max-w-screen-xl sm:p-3 lg:p-0 w-full m-auto text-center">
          <div className="grid grid-cols-3 justify-between p-6">
            {features.map((item, index) => (
              <div key={index} className={`${item.border}`}>
                <div>
                  <div className={`feature-icon ${item.image}`}></div>
                </div>
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Popular Recipe */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {trendRecipe.map((recipe, index) => (
              <div className="text-start" key={index}>
                <Link className="pointer" to={"/sample"}>
                  <img
                    className="object-cover rounded h-[700px] w-full"
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
    </div>
  );
}

export default Home;