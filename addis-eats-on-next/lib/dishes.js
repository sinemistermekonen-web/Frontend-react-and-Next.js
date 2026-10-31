
export const dishes = [
  {
    id: 1,
    name: "Doro Wot",
    category: "Traditional",
    description: "Ethiopian chicken stew with berbere spices and egg.",
    price: 450,
    image: "/images/doro-wot.jpg",
    available: true,
  },
  {
    id: 2,
    name: "Beyaynet",
    category: "Vegetarian",
    description: "A selection of Ethiopian vegetarian stews served with injera.",
    price: 280,
    image: "/images/beyaynet.jpg",
    available: true,
  },
  {
    id: 3,
    name: "Kitfo",
    category: "Traditional",
    description: "A traditional Ethiopian minced beef dish.",
    price: 520,
    image: "/images/kitfo.jpg",
    available: true,
  },
  {
    id: 4,
    name: "Tibs",
    category: "Meat",
    description: "Sautéed meat prepared with onions, peppers, and spices.",
    price: 480,
    image: "/images/tibs.jpg",
    available: true,
  },
  {
    id: 5,
    name: "Shiro Wot",
    category: "Vegetarian",
    description: "A comforting Ethiopian stew made from ground chickpeas.",
    price: 220,
    image: "/images/shiro.jpg",
    available: true,
  },
  {
    id: 6,
    name: "Firfir",
    category: "Traditional",
    description: "Injera pieces mixed with a seasoned Ethiopian sauce.",
    price: 250,
    image: "/images/firfir.jpg",
    available: true,
  },
];

export function getDishById(id) {
  return dishes.find((dish) => String(dish.id) === String(id));
}
