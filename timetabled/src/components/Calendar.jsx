import Event from "./Event";



const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8am</td>
            <Event event="Kung Fu Tea 🧋" color="green"/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Breakfast 🍳" color="green"/>
            <td></td>
          </tr>
          <tr>
            <td className="time">9am</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Go for a drive 🚗" color="pink"/>
            <td></td>
            <td></td>
            <Event event="Starbucks 🍵" color="blue"/>
          </tr>
          <tr>
            <td className="time">10am</td>
            <td></td>
            <td></td>
            <Event event="Night Swim 👙" color="blue"/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">11am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12pm</td>
            <td></td>
            <td></td>
            <Event event="Shopping 🛍️" color="pink"/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Concert 🎤" color="green"/>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">5pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;