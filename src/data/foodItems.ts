export const foodItems = [
  {
    id: 1,
    name: "Puttu and Kadala Curry",
    image: "puttuandkadalacurry",
    category: "Breakfast",
    price: 120,
    restaurant: {
      name: "Nadan Feast",
      image: "nadanfeast",
    },
  },
  {
    id: 2,
    name: "Appam with Stew",
    image: "appamwithstew",
    category: "Breakfast",
    price: 150,
    restaurant: {
      name: "Tharavadu Kitchen",
      image: "tharavadukitchen",
    },
  },
  {
    id: 3,
    name: "Karimeen Pollichathu",
    image: "karimeenpollichathu",
    category: "Non-Vegetarian",
    price: 320,
    restaurant: {
      name: "Meen By Chef Pillai",
      image: "meenbychefpillai",
    },
  },
  {
    id: 4,
    name: "Malabar Parotta",
    image: "malabarparotta",
    category: "Bread",
    price: 80,
    restaurant: {
      name: "Rasoi Fort Kochi",
      image: "rasoifortkochi",
    },
  },
  {
    id: 5,
    name: "Kerala Prawn Curry",
    image: "keralaprawncurry",
    category: "Non-Vegetarian",
    price: 280,
    restaurant: {
      name: "Boche Toddy Pub",
      image: "bochetoddypub",
    },
  },
  {
    id: 6,
    name: "Nadan Kozhi Varuthathu",
    image: "nadankozhivaruthathu",
    category: "Non-Vegetarian",
    price: 200,
    restaurant: {
      name: "Cochin Trader Bar",
      image: "cochintraderbar",
    },
  },
  {
    id: 7,
    name: "Kerala Fish Molee",
    image: "keralafishmolee",
    category: "Non-Vegetarian",
    price: 260,
    restaurant: {
      name: "Lila's Kitchen",
      image: "lilaskitchen",
    },
  },
  {
    id: 8,
    name: "Thalassery Biryani",
    image: "thalasserybiryani",
    category: "Rice",
    price: 220,
    restaurant: {
      name: "Alif Biryani",
      image: "alifbiryani",
    },
  },
  {
    id: 9,
    name: "Onam Sadhya",
    image: "onamsadhya",
    category: "Vegetarian Feast",
    price: 499,
    restaurant: {
      name: "Grand Entree",
      image: "grandentree",
    },
  },
  {
    id: 10,
    name: "Erissery",
    image: "erissery",
    category: "Vegetarian",
    price: 110,
    restaurant: {
      name: "Gokul Oottupura",
      image: "gokuloottupura",
    },
  },
  {
    id: 11,
    name: "Idiyappam",
    image: "idiyappam",
    category: "Breakfast",
    price: 100,
    restaurant: {
      name: "Sree Krishna Inn",
      image: "sreekrishnainn",
    },
  },
  {
    id: 12,
    name: "Beef Fry",
    image: "beeffry",
    category: "Non-Vegetarian",
    price: 240,
    restaurant: {
      name: "Hotel Taj",
      image: "hoteltaj",
    },
  },
  {
    id: 13,
    name: "Kappa and Meen Curry",
    image: "kappaandmeencurry",
    category: "Non-Vegetarian",
    price: 180,
    restaurant: {
      name: "United Coconut Restaurant",
      image: "unitedcoconutrestaurant",
    },
  },
  {
    id: 14,
    name: "Avial",
    image: "avial",
    category: "Vegetarian",
    price: 95,
    restaurant: {
      name: "Gokul Oottupura",
      image: "gokuloottupura",
    },
  },
  {
    id: 15,
    name: "Palada Payasam",
    image: "paladapayasam",
    category: "Dessert",
    price: 60,
    restaurant: {
      name: "Nadan Feast",
      image: "nadanfeast",
    },
  },
  {
    id: 16,
    name: "Naadan Kozhi Curry",
    image: "naadankozhicurry",
    category: "Non-Vegetarian",
    price: 210,
    restaurant: {
      name: "Tharavadu Restaurant",
      image: "tharavadorestaurant",
    },
  },
  {
    id: 17,
    name: "Banana Fritters",
    image: "bananafritters",
    category: "Snack",
    price: 70,
    restaurant: {
      name: "Ente Thattukada",
      image: "entethattukada",
    },
  },
  {
    id: 18,
    name: "Olan",
    image: "olan",
    category: "Vegetarian",
    price: 90,
    restaurant: {
      name: "Sadhya Bhavan",
      image: "sadhyabhavan",
    },
  },
  {
    id: 19,
    name: "Thoran",
    image: "thoran",
    category: "Vegetarian",
    price: 85,
    restaurant: {
      name: "Sadhya Bhavan",
      image: "sadhyabhavan",
    },
  },
  {
    id: 20,
    name: "Kerala Beef Cutlet",
    image: "keralabeefcutlet",
    category: "Snack",
    price: 40,
    restaurant: {
      name: "Muthassi's Magic",
      image: "muthassismagic",
    },
  },
];

export type FoodItem = (typeof foodItems)[number];
export type Restaurant = FoodItem["restaurant"];