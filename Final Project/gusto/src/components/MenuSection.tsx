import { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

type MenuItem = {
  name: string;
  price: string;
  description: string;
};

type MenuCategory = 'Starters' | 'Main Course' | 'Desserts' | 'Drinks';

const menuCategories: MenuCategory[] = ['Starters', 'Main Course', 'Desserts', 'Drinks'];

const menuItems: Record<MenuCategory, MenuItem[]> = {
  Starters: [
    { name: 'Bruschetta', price: '8.99', description: 'Grilled bread with tomatoes, garlic, and olive oil' },
    { name: 'Caprese Salad', price: '10.99', description: 'Fresh mozzarella, tomatoes, and basil' },
    { name: 'Calamari', price: '12.99', description: 'Crispy fried squid with marinara sauce' },
  ],
  'Main Course': [
    { name: 'Spaghetti Carbonara', price: '16.99', description: 'Classic pasta with eggs, cheese, and pancetta' },
    { name: 'Margherita Pizza', price: '14.99', description: 'Fresh tomatoes, mozzarella, and basil' },
    { name: 'Osso Buco', price: '28.99', description: 'Braised veal shanks with gremolata' },
  ],
  Desserts: [
    { name: 'Tiramisu', price: '8.99', description: 'Coffee-flavored Italian dessert' },
    { name: 'Panna Cotta', price: '7.99', description: 'Italian cream dessert with berry compote' },
    { name: 'Cannoli', price: '6.99', description: 'Crispy pastry filled with sweet ricotta' },
  ],
  Drinks: [
    { name: 'Italian Wine', price: '9.99', description: 'Selection of red and white wines' },
    { name: 'Espresso', price: '3.99', description: 'Rich and aromatic coffee' },
    { name: 'Aperol Spritz', price: '8.99', description: 'Classic Italian aperitif' },
  ],
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Starters');

  return (
    <section id="menu" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Menu</h2>
        </ScrollAnimation>
        
        <ScrollAnimation>
          <div className="flex justify-center space-x-4 mb-12 overflow-x-auto pb-4">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-amber-600 text-white category-btn-active scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8">
          {menuItems[activeCategory].map((item, index) => (
            <ScrollAnimation key={index} threshold={0.2}>
              <div
                className="p-6 bg-white rounded-lg shadow-md menu-item"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-amber-600 font-semibold">${item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;