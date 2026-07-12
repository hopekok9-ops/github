



const FilterBar = ({ selectedGenre, setSelectedGenre, selectedCity, setSelectedCity, genres, cities }) => { 
    return (
        <div className="filter-bar">
            <select value={selectedGenre} onChange={(event) => setSelectedGenre(event.target.value)}>
                <option value="">All Genres</option>
                {genres.map((genre) => (
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>
            <select value={selectedCity} onChange={(event) => setSelectedCity(event.target.value)}>
                <option value="">All Cities</option>
                {cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default FilterBar;
