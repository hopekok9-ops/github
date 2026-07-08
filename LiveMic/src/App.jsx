import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header';
import DashStats from './components/dashStats';
import FilterBar from './components/filterBar';
import ConcertList from './components/concertList';
import SearchBar from './components/searchBar';





function App() {


   const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;
   console.log('API Key:', apiKey); // Log the API key to verify it's being accessed correctly

  // states that will pull user input based on concert API 
  const [concerts, setConcerts] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  
  useEffect(() => {
  const fetchConcerts = async () => {
   const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&keyword=${searchTerm}&city=${selectedCity}&classificationName=${selectedGenre}`);
   const data = await response.json();
    console.log(data); // Log the fetched data to verify it's being retrieved correctly


   setConcerts(data._embedded?.events || []);

  }

  fetchConcerts();
  }, []);



  return (
    <div className="App">
        <Header />
        <DashStats concerts={concerts} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterBar 
            selectedGenre={selectedGenre} 
            setSelectedGenre={setSelectedGenre} 
            selectedCity={selectedCity} 
            setSelectedCity={setSelectedCity} 
        />
        <ConcertList concerts={concerts} />
    </div>

  );
}

export default App;
