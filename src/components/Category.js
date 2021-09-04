import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSeedling,
  faCoffee,
  faWineGlass,
  faCookieBite,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

export default function Category({ onChange }) {
  const [active, setActive] = useState('All');
  const categories = [
    {
      id: 1,
      name: 'All',
      icon: faSeedling,
      slug: 'all',
    },
    {
      id: 2,
      name: 'Coffe',
      slug: 'coffe',
      icon: faCoffee,
    },
    {
      id: 3,
      name: 'Drink',
      slug: 'drink',
      icon: faWineGlass,
    },
    {
      id: 4,
      name: 'Snack',
      slug: 'snack',
      icon: faCookieBite,
    },
    {
      id: 5,
      name: 'Main Course',
      slug: 'main-course',
      icon: faUtensils,
    },
  ];

  useEffect(() => {
    setActive('all');
  }, []);

  const handleActiveItem = (category) => {
    setActive(category);
  };

  return (
    <div className="category mt-20">
      {categories.map((category) => (
        <div
          className={`category_item ${
            active === category.slug ? 'active' : ''
          }`}
          key={category.id}
          onClick={() => {
            handleActiveItem(category.slug);
            onChange(category.slug);
          }}
        >
          <FontAwesomeIcon className="category_icon" icon={category.icon} />
          <span className="category_link">{category.name}</span>
          <div className="circle-indicator"></div>
        </div>
      ))}
    </div>
  );
}
