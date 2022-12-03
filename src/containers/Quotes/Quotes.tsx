import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import './Quotes.css';
import Header from "../../components/Header/Header";
import Category from "../../components/Category/Category";
import Spinner from "../../components/UI/Spinner/Spinner";
import Quote from "../../components/Qwote/Qwote";
import axiosApi from "../../axiosApi";
import {QuoteApi, QuoteType} from "../../type";

const Quotes = () => {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const [loading, setLoading] = useState(false);
  const category = useParams();

  console.log(category)

  useEffect(() => {
    const getQuotes = async () => {
      try {
        const quotesResponse = await axiosApi
          .get(`${category ?  `quotes.json?orderBy="category"&equalTo="${category}"` : '/quotes.json'}`);
        const QuotesCopy = Object.keys(quotesResponse.data)
          .map(quote => ({
            ...quotesResponse.data[quote],
            id: quote
          }));
        setQuotes(QuotesCopy);
      } finally {
        setLoading(false);
      }
    }
    getQuotes().catch(console.error);
  }, [category]);

  let quotesList = (
    <div className="quotesList">
      {quotes.map(quote => (
        <Quote
          category={quote.category}
          author={quote.author}
          text={quote.text}
          key={quote.id}
          id={quote.id}
        />
      ))}
    </div>
  );

  if (loading) {
    quotesList = <Spinner/>
  }

  return (
    <>
      <Header/>
      <Category/>
      <div className="quotes">
        {quotesList}
      </div>
    </>
  );
};

export default Quotes;