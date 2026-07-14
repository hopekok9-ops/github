
import { Link } from "react-router-dom";

const ConcertCard = ({ concert }) => {

const formattedTime = new Date(`1970-01-01T${concert.dates.start.localTime}`)
  .toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
  .toLowerCase();

    return (
        <Link to={`/concert/${concert.id}`} className="concert-link">
            <div className="concert-card">
                    <img src={concert.images?.[0]?.url} alt={concert.name} />
                    <h2>{concert.name}</h2>
                    <p>{concert.dates?.start?.localDate}</p>
                    <p>{concert._embedded?.venues[0]?.city?.name}</p>
                    <p>{concert.classifications?.[0]?.genre?.name}</p>
                
                {/*<button onClick={() => window.open(concert.url, '_blank')}>Buy Tickets</button>*/}
            </div>
        </Link>
    );

}

export default ConcertCard;