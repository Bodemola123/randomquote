import React, { useState } from 'react'
import './RandomQuote.css';
import reload from '../Assets/reload.png';
import twitter from '../Assets/images.jpg';
const RandomQuote = () => {
    
    let quotes =[];

    const loadQuotes = async () =>{
        try {
            const response = await fetch ('https://type.fit/api/quotes');
            quotes = await response.json();
        }
        catch(error){
      
            console.error(error)
        }
    }
    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select)
    }

    const [quote,setQuote] = useState({
        text: 'Difficulties increase the nearer we get to the goal.',
        author: 'Johann Wolfgang von Goethe',
    });

    

    loadQuotes()
  return (

    <div className='container'>
        <div className="quote">{quote.text}</div>
        <div>
            <div className="line"></div>
            <div className="bottom">
                <div className="author">- {quote.author.split(',')[0]}</div>
                <div className="icons">
                    <button onClick={() =>{random()}}><img src={reload} alt="" /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RandomQuote