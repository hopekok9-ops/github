import './App.css';  // Importing the CSS file for styling the App component

const LangWeb = () => {    // Defining the App component as a functional component
  return (
    <div className="LangWeb">  {/* Adding a div with className "LangWeb" for styling */}
      <div className="Header">
        <h1>The Language FlashCard Center</h1>
        <h2>Worked on the project and added all the files for both projects. Also added a background color to the index.css file.
Ready to practice your language skills?</h2>
        <h3>Card Count: 0</h3>
      </div>

      {/* placing the cards here */}
      <div className="FlashCard">
        <div className="Card">

        </div>
      </div>
    </div>
  );
}

export default LangWeb;  // Exporting the App component as the default export of this module

