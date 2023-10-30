import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryBar.css';
import { Button } from '@material-ui/core';
import Btn from './Btn'
const categories = ["dance", "language", "food", "UNESCO", "Other", "Category1", "Category2"];

const CategoryBar = () => {



    return (
      <div className="category-bar">
        {categories.map((category, index) => (
          <Btn key = {index} category={category} />
        ))}
      </div>
    );
  };

  export default CategoryBar;