import React from 'react';
import {Route, Routes} from "react-router-dom";
import Quotes from "./containers/Quotes/Quotes";
import EditQuote from "./containers/EditQuote/EditQuote";
import NewQuote from "./containers/NewQuote/NewQuote";
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="container">
        <Routes>
        <Route path="/" element={<Quotes/>}/>
        <Route path="/submit-quote" element={<NewQuote/>}/>
        <Route path="/quotes/:category" element={<Quotes/>}/>
        <Route path="/quote/:id/edit" element={<EditQuote/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
