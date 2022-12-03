import React from 'react';
import Header from "../../components/Header/Header";
import {useNavigate} from 'react-router-dom';
import axiosApi from "../../axiosApi";
import './NewQwote.css'
import {QuoteApi} from "../../type";
import QuoteForm from "../../components/QuoteForm/QuoteForm";

const NewQuote: React.FC = () => {
  const navigate = useNavigate();
  const createQuote = async (quote: QuoteApi) => {
    try {
      await axiosApi.post('/quotes.json', quote);
      navigate('/')
    } finally {

    }
  }
  return (
    <>
      <Header/>
      <div className="add">
          <QuoteForm onSubmit={createQuote}/>
      </div>
    </>
  );
};

export default NewQuote;