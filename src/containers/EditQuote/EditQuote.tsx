import React, {useCallback, useEffect, useState} from 'react';
import './EditQuote.css'
import {useNavigate, useParams} from 'react-router-dom';
import {QuoteApi} from "../../type";
import axiosApi from "../../axiosApi";
import QuoteForm from "../../components/QuoteForm/QuoteForm";

const EditQuote = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [quote, setQuote] = useState<QuoteApi | null>(null);

  const fetchOneQuote = useCallback(async () => {
    try {
      const quoteResponse = await axiosApi.get<QuoteApi>('/quotes/' + id + '.json');
      setQuote(quoteResponse.data);
    } finally {
      // setLoading(false)
    }
  }, [id]);

  useEffect(() => {
    fetchOneQuote().catch(console.error);
  }, [fetchOneQuote]);

  const updateQuote = async (dish:QuoteApi) => {
    try {
      await axiosApi.put('/quotes/' + id + '.json', quote);
      navigate('/');
    } finally {

    }
  };

  return (
    <div>
      <div className='edit-quote'>
        {quote &&(
        <QuoteForm onSubmit={updateQuote} existingQuote={quote}/>
        )}
      </div>

    </div>
  );
};

export default EditQuote;