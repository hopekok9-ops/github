



const DashStats = ({concerts}) => { 

    const cities = concerts.map((concert) => concert._embedded?.venues[0]?.city?.name);
    const genres = concerts.map((concert) => concert.classifications?.[0]?.genre?.name);


    return (
        <div className="dash-stats">
            <h2>Dashboard Statistics</h2>
            <p>Upcoming Shows: {concerts.length} </p>
            <p>Cities Covered: {new Set(cities).size} </p>
            <p>Top Genres: {new Set(genres).size} </p>
        </div>
    );
}

export default DashStats;
