
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Details = ({ concerts }) => {

  const { id } = useParams();
  const concert = concerts.find((concert) => concert.id === id); 

  if(!concert) {
    return (
      <p>Loading concert details...</p>
    );
  }

  const formattedTime = new Date(`1970-01-01T${concert.dates.start.localTime}`)
  .toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
  .toLowerCase();

  console.log(concert);

  return (
    <div className='details-page'>
      <div className="exclusive-card">
        <Link className="back-button" to="/">  ← Back to Dashboard </Link>
        <h1>Exclusive Details</h1>
        <h2>{concert.name}</h2>
        <img src={concert.images?.[0]?.url} alt={concert.name} />
        <p>🎤 Genre: {concert.classifications?.[0]?.genre?.name}</p>
        <p>📆 Date: {concert.dates?.start?.localDate}</p>
        <p>🕘 Time: {formattedTime}</p>
        <p>📍 Location: {" "} {concert._embedded?.venues[0]?.name}, {" "} {concert._embedded?.venues[0]?.city?.name},{" "} {concert._embedded?.venues[0]?.state?.name},{" "} {concert._embedded?.venues[0]?.country?.name}</p>
        <a href={concert.url} target="_blank" rel="noopener noreferrer">      
          Buy Tickets
        </a>
      </div>
    </div>
  );
};

export default Details;