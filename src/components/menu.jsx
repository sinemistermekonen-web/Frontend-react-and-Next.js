import MenuItem from "./MenuItem";

const menuItems = [
  {
    id: 1,
    name: "Buna",
    description: "Traditional Ethiopian coffee served fresh.",
    price: 80,
    category: "Coffee",
  },
  {
    id: 2,
    name: "Macchiato",
    description: "Espresso with steamed milk.",
    price: 100,
    category: "Coffee",
  },
  {
    id: 3,
    name: "Shiro",
    description: "Traditional Ethiopian chickpea stew with injera.",
    price: 150,
    category: "Food",
  },
  {
    id: 4,
    name: "Tibs",
    description: "Tender seasoned beef with vegetables.",
    price: 250,
    category: "Food",
  },
  {
    id: 5,
    name: "Chechebsa",
    description: "Ethiopian flatbread with butter and spices.",
    price: 120,
    category: "Breakfast",
  },
  {
    id: 6,
    name: "Firfir",
    description: "Injera pieces mixed with spicy sauce.",
    price: 130,
    category: "Breakfast",
  },
];

function Menu() {
  return (
    <section className="menu-section" id="menu">
      <p className="section-label">OUR MENU</p>

      <h2>Popular Choices</h2>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            category={item.category}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;