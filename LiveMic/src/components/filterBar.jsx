



const FilterBar = () => { 
    return (
        <div className="filter-bar">
            <select>
                <option>All Genres</option>
                <option>RnB</option>
                <option>Amapiano</option>
                <option>House</option>
            </select>
            <select>
                <option>All Cities</option>
                <option>D.C.</option>
                <option>Los Angeles</option>
                <option>New York</option>
            </select>
        </div>
    );
}

export default FilterBar;