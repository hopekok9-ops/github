

const ConcertCard = ({ concert }) => {


    return (

        <div className="concert-card">
            <h2>{concert.name}</h2>
            <img src={concert.images?.[0]?.url} alt={concert.name} />
            <p>{concert._embedded?.venues[0]?.name}</p>
            <p>{concert._embedded?.venues[0]?.city?.name}</p>
            <p>{concert.dates.start.localDate}</p>
            <p>{concert.classifications?.[0]?.genre?.name}</p>
            <button onClick={() => window.open(concert.url, '_blank')}>Buy Tickets</button>
        </div>
    );

}

export default ConcertCard;