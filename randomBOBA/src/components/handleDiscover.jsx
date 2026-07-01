


const handleDiscover = () => {
  if (!drinks.length) return;

  const randomDrink = drinks[Math.floor(Math.random() * drinks.length)];


  //saves previous drinks -> moves to history bar 
  setHistoryLog((prev) => [...prev, currentDrink]);
  setCurrentDrink(randomDrink);
};