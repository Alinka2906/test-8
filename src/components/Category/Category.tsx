import React from 'react';
import {NavLink} from "react-router-dom";
import {CATEGORY} from "../../Categories";

const Category = () => {
  return (
    <div className='category-block'>
      <ul className="category-ul">
        <li className="category-links">
          <NavLink to="/">All</NavLink>
        </li>
        {CATEGORY.map((quote, i) => (
          <li key={i} className="category-links">
            <NavLink to={`/quotes/${quote.category}`}> {quote.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;