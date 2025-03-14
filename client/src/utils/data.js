import Sinigang from '.././assets/sinigang.jpg';
import Adobo from '.././assets/adobo.jpg';
import Lecheflan from '.././assets/lecheflan.jpg';
import Lumpia from '.././assets/lumpia.jpg';

const features = [
  {
    image: 'share',
    text: 'Share Your Recipes',
  },
  {
    border: 'border-r-2 border-l-2',
    image: 'discover',
    text: 'Discover New Flavors',
  },
  {
    image: 'share',
    text: 'Save Favorites for Later.',
  },
];

const trendRecipe = [
  {
    type: 'Main Course',
    difficulty: 'easy',
    timeToCook: '120',
    name: 'Sinigang',
    src: Sinigang,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do eiusmod tempor inci didunt ut labore e dolore magnna ad aliquam. Ut enim ad mini',
    alt: 'Sinigang Recipe',
  },
  {
    type: 'Dessert',
    src: Adobo,
    difficulty: 'easy',
    timeToCook: '120',
    name: 'Adobo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do eiusmod tempor inci didunt ut labore e dolore magnna ad aliquam. Ut enim ad mini',
    alt: 'Sinigang Recipe',
  },
];

const recipes = [
  {
    type: 'Main Course',
    difficulty: 'easy',
    timeToCook: '120',
    dateUpload: 'January, 17 2025',
    name: 'Sinigang',
    src: Sinigang,
    description:
      'A tangy and savory Filipino soup with a rich broth, vegetables, and your choice of meat.',
    alt: 'Sinigang Recipe',
  },
  {
    type: 'Main Course',
    difficulty: 'medium',
    timeToCook: '90',
    name: 'Adobo',
    src: Adobo,
    description:
      'A classic Filipino dish made with marinated meat in vinegar, soy sauce, garlic, and spices.',
    alt: 'Adobo Recipe',
    dateUpload: 'January, 17 2025',
  },
  {
    type: 'Dessert',
    difficulty: 'easy',
    timeToCook: '30',
    name: 'Leche Flan',
    src: Lecheflan,
    description: "A creamy caramel custard dessert that's a staple in Filipino celebrations.",
    alt: 'Leche Flan Recipe',
    dateUpload: 'January, 17 2025',
  },
  {
    type: 'Appetizer',
    difficulty: 'easy',
    timeToCook: '20',
    name: 'Lumpia',
    src: Lumpia,
    description:
      'Crispy spring rolls filled with a savory mix of vegetables and meat, perfect for any occasion.',
    alt: 'Lumpia Recipe',
    dateUpload: 'January, 17 2025',
  },
  {
    type: 'Snack',
    difficulty: 'easy',
    timeToCook: '15',
    name: 'Banana Cue',
    src: 'https://img.buzzfeed.com/video-api-prod/assets/ec634ac6e42f40c887149ca10b6624a1/BananaCue.jpg?resize=1200:*',
    description: 'Caramelized bananas on skewers, coated with brown sugar and fried to perfection.',
    alt: 'Banana Cue Recipe',
    dateUpload: 'January, 17 2025',
  },
  {
    type: 'Dessert',
    difficulty: 'medium',
    timeToCook: '60',
    name: 'Halo-Halo',
    src: 'https://www.thelittleepicurean.com/wp-content/uploads/2017/06/Halo-halo-1.jpg',
    description:
      'A colorful and refreshing dessert made with shaved ice, milk, fruits, and sweet toppings.',
    alt: 'Halo-Halo Recipe',
    dateUpload: 'January, 17 2025',
  },
  {
    type: 'Main Course',
    difficulty: 'hard',
    timeToCook: '180',
    name: 'Kare-Kare',
    src: 'https://browngirlveganeats.com/wp-content/uploads/2023/10/photo1696939990-1.jpeg',
    description:
      'A hearty stew with peanut sauce, oxtail, and assorted vegetables, served with shrimp paste.',
    alt: 'Kare-Kare Recipe',
    dateUpload: 'January, 17 2025',
  },
  {
    type: 'Appetizer',
    difficulty: 'easy',
    timeToCook: '25',
    name: 'Kinilaw',
    src: 'https://yummykitchentv.com/wp-content/uploads/2023/01/kinilaw-na-dilis-recipe.jpg',
    description: 'A Filipino ceviche dish with fresh fish marinated in vinegar, lime, and spices.',
    alt: 'Kinilaw Recipe',
    dateUpload: 'January, 17 2025',
  },
  {
    type: 'Snack',
    difficulty: 'easy',
    timeToCook: '10',
    name: 'Taho',
    src: 'https://images.ctfassets.net/lz7g6u6kccw7/3Bt1rrSPVgcfL9L05exzIW/8eee76d7cd7622d1c3702a3468732883/taho3.jpg?w=1200&h=1800&q=50',
    description: 'A warm and sweet snack made of silken tofu, arnibal (syrup), and sago pearls.',
    alt: 'Taho Recipe',
    dateUpload: 'January, 17 2025',
  },
  {
    type: 'Main Course',
    difficulty: 'medium',
    timeToCook: '120',
    name: 'Bulalo',
    src: 'https://www.foxyfolksy.com/wp-content/uploads/2022/03/bulalo-soup-recipe.jpg',
    description: 'A comforting beef marrow stew with vegetables, perfect for cold weather.',
    alt: 'Bulalo Recipe',
    dateUpload: 'January, 17 2025',
  },
  {
    type: 'Dessert',
    difficulty: 'easy',
    timeToCook: '45',
    name: 'Cassava Cake',
    src: 'https://pilipinasrecipes.com/wp-content/uploads/2019/02/IMG_3502-1024x683.jpg',
    description:
      'A rich and chewy cake made from grated cassava, coconut milk, and a creamy topping.',
    alt: 'Cassava Cake Recipe',
    dateUpload: 'January, 17 2025',
  },
];

export { features, trendRecipe, recipes };
