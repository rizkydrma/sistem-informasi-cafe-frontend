import React, { useState } from 'react';
import { useEffect } from 'react';
import { getCategories } from 'api/categories';

export default function Category({ onChange }) {
  const [active, setActive] = useState('All');
  const [categories, setCategories] = useState([]);
  // const categories = [
  //   {
  //     id: 1,
  //     name: 'All',
  //     icon: faSeedling,
  //     slug: 'all',
  //   },
  //   {
  //     id: 2,
  //     name: 'Coffe',
  //     slug: 'coffe',
  //     icon: faCoffee,
  //   },
  //   {
  //     id: 3,
  //     name: 'Drink',
  //     slug: 'drink',
  //     icon: faWineGlass,
  //   },
  //   {
  //     id: 4,
  //     name: 'Snack',
  //     slug: 'snack',
  //     icon: faCookieBite,
  //   },
  //   {
  //     id: 5,
  //     name: 'Main Course',
  //     slug: 'main-course',
  //     icon: faUtensils,
  //   },
  // ];

  const fetchCategories = async () => {
    let { data } = await getCategories();
    if (data.error) {
      console.log(data.message);
      return;
    }
    let categoriesData = data.data;
    setCategories([{ _id: 'all', name: 'all' }, ...categoriesData]);
  };

  useEffect(() => {
    setActive('all');
    fetchCategories();
  }, []);

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
          key={category._id}
          onClick={() => {
            handleActiveItem(category.name);
            onChange(category.name);
          }}
        >
          <span className="category_link">{category.name}</span>
          <div className="circle-indicator"></div>
        </div>
      ))}
    </div>
  );
}
