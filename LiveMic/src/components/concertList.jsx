

import ConcertCard from "./concertCard";

const ConcertList = ({concerts}) => { 
    return (
        <div className="concert-list">
            
            {concerts.length > 0 ? (
                concerts.map((concert) => (
                    <ConcertCard key={concert.id} concert={concert}/>
                ))
            ) : (
                <div className="no-concerts-wrapper">
                    <div className="no-concerts">
                        <p>No concerts found. Try another search!</p>
                    </div>
                </div>
            )}


        </div>
    );
}

export default ConcertList;