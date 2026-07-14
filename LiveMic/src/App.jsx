import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import Sidebar from './components/Sidebar';
import './App.css';



function App() {

  const [concerts, setConcerts] = useState([]);
  const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;


  
  // states that will pull user input based on concert API 
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');


  const genres = [...new Set(concerts.map((concert) => concert.classifications?.[0]?.genre?.name).filter(
    genre => genre && !["other", "undefined"].includes(genre.toLowerCase())
  ))];
  const cities = [...new Set(concerts.map((concert) => concert._embedded?.venues?.[0].city?.name).filter(Boolean))];


  const filteredConcerts = concerts.filter((concert) => {
    const nameMatches =
      searchTerm === '' || concert.name?.trim().toLowerCase().includes(searchTerm.toLowerCase());

    const genreMatches =
      selectedGenre === '' ||
      concert.classifications?.[0]?.genre?.name.toLowerCase().includes(selectedGenre.toLowerCase());

    const cityMatches =
      selectedCity === '' ||
      concert._embedded?.venues[0]?.city?.name.toLowerCase().includes(selectedCity.toLowerCase());


    return nameMatches && genreMatches && cityMatches;
  });

  
  useEffect(() => {
    const fetchConcerts = async () => {
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&classificationName=Music&countryCode=US&size=50&sort=date,asc`);
      const data = await response.json();
      
      const events = data._embedded?.events || [];     
      
      

      const cleanedEvents = events.filter((concert) => {
            const genre = concert.classifications?.[0]?.genre?.name;
            const city = concert._embedded?.venues?.[0]?.city?.name;

          return (
            genre && 
            city &&
            !["other", "undefined"].includes(genre.toLowerCase())
          );
    });

    
      setConcerts(cleanedEvents);

    };

    fetchConcerts();

  }, []);


  return (
    <div className="App">
      <div className='main-content'>
        <Routes>
          <Route path="/" element={<Dashboard concerts={filteredConcerts} />} />
          <Route path="/concert/:id" element={<Details concerts={concerts} />} />
        </Routes>


      </div>
      <Sidebar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        genres={genres}
        cities={cities}
        concerts={filteredConcerts}
      />
    </div>
  );
}

export default App;
