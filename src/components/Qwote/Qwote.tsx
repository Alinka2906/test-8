import React from 'react';
import {NavLink} from "react-router-dom";
import {QuoteType} from "../../type";
import './Quote.css';

interface Props {
  quote: QuoteType;
}

const Quote:React.FC<Props> = ({quote}) => {
  return (
    <div>
      <>
        <div className="quote">
          <div className="category">Category: {quote.category}</div>
          <div className="author">Author: {quote.author}</div>
          <div className="text">{quote.text}</div>
          <NavLink to={`/quote/${quote.category}/edit`} className="more left">Delete</NavLink>
        </div>
      </>
    </div>
  );
};

export default Quote;