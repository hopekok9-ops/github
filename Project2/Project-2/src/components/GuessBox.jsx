 
 
 const GuessBox = ({userInput, setUserInput, onCheckAnswer, error, feedback}) => {
      return (
        <div>
          

          <form className="GuessBoxForm">
            <p>Try to guess the answer!</p>
            
            <input type='text' value={userInput} onChange={(e) => setUserInput(e.target.value)}/>

            <button type='button' onClick={onCheckAnswer}>Check Answer</button>
            
          </form>

          

          {/* validation */}
          {error ? 
            (<p className="error">{error}</p> ) 
          : feedback ? 
            (<p className="feedback">{feedback}</p> )
          : null 
          }


        </div>
      );

    };

    export default GuessBox; 