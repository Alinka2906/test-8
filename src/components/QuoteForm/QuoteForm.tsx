import React, {useState} from 'react';
import './QuoteForm.css';
import {QuoteApi, QuoteType} from "../../type";

interface Props {
  onSubmit: (quote: QuoteApi) => void;
  existingQuote?: QuoteApi;
}

const QuoteForm: React.FC<Props> = ({onSubmit, existingQuote}) => {
  const initialState = existingQuote ? {
    ...existingQuote,
    } : {
    category: '',
    author: '',
    text: '',
  }

  const [quote, setQuote] = useState<QuoteApi>(initialState);

  const onQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;

    setQuote(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...quote,
    })
  };


  return (
    <>
      <form onSubmit={onFormSubmit}>
        <select
          className="Input"
          name="category"
          required={true}
          value={quote.category}
          onChange={onQuoteChange}
        >
          <option value="">Select a category...</option>
          <option value="star-wars">Star Wars</option>
          <option value="famous-people">Famous people</option>
          <option value="saying">Saying</option>
          <option value="humour">Humour</option>
          <option value="motivational">Motivational</option>

        </select>
        <input
          className="Input"
          placeholder="Quote author"
          type="text"
          name="author"
          value={quote.author}
          onChange={onQuoteChange}
        />
        <textarea
          className="Input textarea"
          placeholder="Quote text..."
          typeof="text"
          name="text"
          value={quote.text}
          onChange={onQuoteChange}
        />
        <button type="submit" className="btn-form">{existingQuote ? 'Update' : 'Create'}</button>
      </form>
    </>
  );
};

export default QuoteForm;