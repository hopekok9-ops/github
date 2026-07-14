
import Header from './Header';
import DashStats from './DashStats';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import CityChart from './charts/CityChart';
import GenreChart from './charts/GenreChart';

const Sidebar = ({searchTerm, setSearchTerm, selectedGenre, setSelectedGenre, selectedCity, setSelectedCity, genres, cities, concerts}) => {
    return (
        <div className="Sidebar">
            
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

          <div className="analytics">
            <DashStats concerts={concerts} />
            <CityChart concerts={concerts} />
            <GenreChart concerts={concerts} /> 
          </div>
        </div>
    );
};

export default Sidebar;