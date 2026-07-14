
import '../App.css'
import ConcertList from '../components/concertList';



function Dashboard({concerts}) {




  return (
    <div className="Dashboard">
          <div className="concert-list">
            <ConcertList concerts={concerts} />
          </div>
    </div>

  );
}

export default Dashboard;
