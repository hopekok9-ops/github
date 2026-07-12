const SearchBar = ({ searchTerm, setSearchTerm }) => { 
    return (
        <div class="search-bar">
            <input
                type="text"
                placeholder="Search for concerts..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
        </div>
    );
}

export default SearchBar;
