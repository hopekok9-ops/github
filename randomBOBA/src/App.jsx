import { useEffect, useState } from 'react';
import './App.css';




function Boba() {

  
const [drinks, setDrinks] = useState([]);
const [currentDrink, setCurrentDrink] = useState(null);
const [historyLog, setHistoryLog] = useState([]);
const [banList, setBanList] = useState([]);



useEffect(() => {
    const fetchBoba = async () => {
      const response = await fetch("/api/boba.json");
      const data = await response.json(); 

      setDrinks(data);
    }

    fetchBoba();

  }, []);


const handleDiscover = () => {
  if (!drinks.length) return;

  const filteredDrinks = drinks.filter((drink) => {
    return (
      !banList.includes(drink.milkType) &&
      !banList.includes(drink.teaType) &&
      !banList.includes(drink.bobaType)
    );
  });

  if (filteredDrinks.length === 0) {
    setCurrentDrink(null);
    return;
  }

  const randomDrink =
    filteredDrinks[Math.floor(Math.random() * filteredDrinks.length)];

  setHistoryLog((prev) =>
    currentDrink ? [...prev, currentDrink] : prev
  );

  setCurrentDrink(randomDrink);   }
  


  const handleBan = (ingredient) => {
      setBanList((prev) =>
      prev.includes(ingredient) ? 
      prev.filter((item) => item !== ingredient) : [...prev, ingredient]
      );
    } 

    
  

  return (
    <div className='BobaShake'>

         {/*may put at the top -- horizontally*/}      
    <div className='section-1'>  
          <h3>History</h3>
      <div className='historyBar'>
        {/* wanted the user to see the name and the img they last saw*/}
        {historyLog.map((drink, index) => (
          <div key={index}>
            <img className="historyBar" src={drink.imageURL} alt={drink.name} width="80" />
            <p>{drink.name}</p>
          </div>
         ))}
      </div>
    </div>   


      <div className='intro'>
        <h1>Random Boba Tea Flavor</h1>
        <h2>Learn some flavors to order next time you're craving a new sweet treat!</h2>
        <h3>Click here to see a new boba flavor!</h3>
        <button className='discover' onClick={handleDiscover}>Discover</button>
      </div>


      {/*Current Drink*/}
      {currentDrink && (
        <div className='bobaCard'>
          <h2>{currentDrink.name}</h2>
          <img src={currentDrink.imageURL} alt={currentDrink.name} />
          {/*Attributes Here -- will show up once API is called*/}      
          <div className='cardButtons'>
            <button className='banButton' onClick={() => handleBan(currentDrink.milkType)}>{currentDrink.milkType}</button>
            <button className='banButton' onClick={() => handleBan(currentDrink.teaType)}>{currentDrink.teaType}</button>
            <button className='banButton' onClick={() => handleBan(currentDrink.bobaType)}>{currentDrink.bobaType}</button>
          </div>
        </div>
      )}

   
         {/*may put at the bottom -- horizontally*/}  
      <div className='BannedList'>
        <h3>The "Ban" List</h3>
        <p>Add the ingredients you don't like here!</p>
        {banList.map((ingredient, index) => (
          <button className='banButton' key={index}
            onClick={() => handleBan(ingredient)}>{ingredient}</button>
         ))}
      </div>
    </div>

  )
};

export default Boba;



