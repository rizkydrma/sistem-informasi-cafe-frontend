import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSeedling,
  faCoffee,
  faWineGlass,
  faCookieBite,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

export default function Category() {
  const [active, setActive] = useState('All');
  const categories = [
    {
      id: 1,
      name: 'All',
      icon: faSeedling,
    },
    {
      id: 2,
      name: 'Coffe',
      icon: faCoffee,
    },
    {
      id: 3,
      name: 'Drinks',
      icon: faWineGlass,
    },
    {
      id: 4,
      name: 'Snack',
      icon: faCookieBite,
    },
    {
      id: 5,
      name: 'Main Course',
      icon: faUtensils,
    },
  ];

  const handleActiveItem = (category) => {
    setActive(category);
  };

  return (
    <div className="category mt-20">
      {categories.map((category) => (
        <div
          className={`category_item ${
            active === category.name ? 'active' : ''
          }`}
          key={category.id}
          onClick={() => handleActiveItem(category.name)}
        >
          <FontAwesomeIcon className="category_icon" icon={category.icon} />
          <span className="category_link">{category.name}</span>
          <div className="circle-indicator"></div>
        </div>
      ))}
    </div>
  );
}
