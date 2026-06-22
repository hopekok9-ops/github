import './LangWeb.css';  // Importing the CSS file for styling the App component
import './GuessBox.css';
import GuessBox from './components/GuessBox'; 
import FlashCard from './components/FlashCard';  // Importing the FlashCard component to be used within the App component
import { useState, useEffect } from 'react';  // Importing the useState and useEffect hooks from React
import smiling from './assets/CardImages/smiling.jpeg';
import tired from './assets/CardImages/tired.jpg';
import bored from './assets/CardImages/bored.jpg';
import surprised from './assets/CardImages/surprised.png';
import sad from './assets/CardImages/sad.jpg';
import busy from './assets/CardImages/busy.jpg';
import sick from './assets/CardImages/sick.jpg';
import excited from './assets/CardImages/excited.jpg';
import worried from './assets/CardImages/worried.jpg';

const cardData = [
  { front: { image: smiling, alt: 'I feel happy' }, back: { text: 'Me siento contento/a' } },
  { front: { image: tired, alt: 'To feel tired' }, back: { text: 'cansado/a' } },
  { front: { image: bored, alt: 'To feel bored' }, back: { text: 'aburrido/a' } },
  { front: { image: surprised, alt: 'To feel surprised' }, back: { text: 'sorprendido/a' } },
  { front: { image: sad, alt: 'To feel sad' }, back: { text: 'triste' } },
  { front: { image: busy, alt: 'To be busy' }, back: { text: 'ocupado/a' } },
  { front: { image: sick, alt: 'To feel sick' } , back: { text: 'enfermo/a' } },
  { front: { image: excited, alt: 'To feel excited' }, back: { text: 'emocionado/a' } },
  { front: { image: worried, alt: 'To feel worried' }, back: { text: 'preocupado/a' } },
];

const shuffleArray = (array) => {
  const copy = [...array];

  for(let i = copy.length - 1; i > 0; i-= 1) {
    const j = Math.floor(Math.random() * (i + 1));
  [copy[i], copy[j]] = [copy[j], copy[i]]; 

  }
  return copy;

};



const LangWeb = () => {    // Defining the App component as a functional component
  const [shuffledCards, setShuffledCards] = useState(() => shuffleArray(cardData));  // randomizes the cards and provides setter for reshuffle
  const [cardCount, setCardCount] = useState(0);  // Initializing the card count state
  const [isFlipped, setIsFlipped] = useState(false);  // State to track whether the card is flipped or not

  useEffect(() => {
    console.log('shuffled order:', shuffledCards.map((c) => c.front.alt || c.back.text));
  }, [shuffledCards]);

  const NextCard = () => {
    {/*const newDeck = shuffleArray(cardData);*/} 
    setShuffledCards(newDeck);
    setCardCount(0);
    setIsFlipped(false);
  };


  {/*const PreviousCard = () => {
    const newDeck = shuffleArray(cardData);
    setShuffledCards(newDeck);
    setCardCount(0);
    setIsFlipped(false);  
  }; */}

  const toggleFlip = () => {  // Function to toggle the flipped state of the card
    setIsFlipped((s) => !s);
  };

  const currentCard = shuffledCards[cardCount];  // Getting the current card data once shuffled
  const [userInput, setUserInput] =useState(""); 
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState(""); 

  const onCheckAnswer = () => {
    const normalizedAns = currentCard.back.text.trim().toLowerCase();
      if (userInput.trim() === ''){ 
        setError("You didn't guess...");
        setFeedback("");

      } else if (userInput.trim().toLowerCase() === normalizedAns) {
        setError("");
        setFeedback("YES, YOU GOT IT!");

      } else {
          setError("You got it wrong! Try again.");
          setFeedback(""); 
      }
  }; 

 
    
    const handleNextCard = () => {
      setCardCount((prev) => Math.min(prev + 1, shuffledCards.length - 1)); {/* the current card moves to the next card, and stops at the last card*/}
      setUserInput("");
      setError("");
      setFeedback("");
      setIsFlipped(false);
    }
    
    const handlePreviousCard = () => {
      setCardCount((prev) => Math.max(prev - 1, 0)); {/*the current card moves backwards once, and stops at the first card ... will need to grey out */}
      setUserInput("");
      setError("");
      setFeedback("");
      setIsFlipped(false);
    }

    const handleShuffle = () => {
      setShuffledCards(shuffleArray(cardData)); {/*makes a new random card order & starts at the 1st card */}
      setCardCount(0);
      setUserInput("");
      setError("");
      setFeedback("");
      setIsFlipped(false);
    }



  return (
    <div className="LangWeb">  {/* Adding a div with className "LangWeb" for styling */}
      <div className="Header">
        <h1>The Language FlashCard Set: <br />Feelings in Español</h1>
        <h2>Ready to practice your language skills?</h2>
        <h3>Total Cards: {shuffledCards.length}</h3>
      </div>


  <div className='CardArea'>


      {/* placing the 10 cards here */}
      <FlashCard className="FlashCard"
        front={currentCard.front}
        back={currentCard.back}
        isFlipped={isFlipped}
        onToggle={toggleFlip}
       />

      <div className="Footer">
      <button type='button' onClick={handlePreviousCard} disabled={cardCount === 0}>Previous</button>
      <button type="button" onClick={handleNextCard} disabled={cardCount === shuffledCards.length - 1}>Next</button>
      <button type='button'onClick={handleShuffle}>Shuffle</button> 
      </div>

      
  </div>

    
    {/* small form insert here */}
      <GuessBox className="GuessBoxForm"
        userInput={userInput}
        setUserInput={setUserInput}
        onCheckAnswer={onCheckAnswer}
        error={error}
        feedback={feedback}
        /> 
  

      
  </div>
  );
}

export default LangWeb;  // Exporting the App component as the default export of this module

