import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header';
import DashStats from './components/dashStats';
import FilterBar from './components/filterBar';
import ConcertList from './components/concertList';
import SearchBar from './components/searchBar';
import ConcertCard from './components/concertCard';





function App() {


  const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;


  // states that will pull user input based on concert API 
  const [concerts, setConcerts] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');


  const genres = [...new Set(concerts.map((concert) => concert.classifications?.[0]?.genre?.name))];
  const cities = [...new Set(concerts.map((concert) => concert._embedded?.venues[0]?.city?.name))];


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
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&classificationName=Music&countryCode=US&size=10&sort=date,asc`);
      const data = await response.json();
      console.log(data);
      console.log(data._embedded?.events);
      console.log(data._embedded.events[0]);

      setConcerts(data._embedded?.events || []);
    };

    fetchConcerts();
  }, []);


  return (
    <div className="App">
        <div className="section1">
          
         

          <div className="concert-list">
            <ConcertList concerts={filteredConcerts} />
          </div>
        </div>

        <div className="section2">
          <div className="header">
            <div className="header-content">
            <Header />
            </div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <FilterBar 
              selectedGenre={selectedGenre} 
              setSelectedGenre={setSelectedGenre} 
              selectedCity={selectedCity} 
              setSelectedCity={setSelectedCity} 
              genres={genres}
              cities={cities}
            />
          </div>

          <div className="dash-stats">
            <DashStats concerts={filteredConcerts} />
          </div>
            
        </div>
    </div>

  );
}

export default App;
