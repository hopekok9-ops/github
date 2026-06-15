

const FlashCard = ({ front, back, isFlipped, onToggle}) => {
  return (
    <div className="FlashCard" onClick={onToggle} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onToggle()}>
      <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="flip-card-front">
          <img src={front.image} alt={front.alt} />
        </div>
        <div className="flip-card-back">
          <h3>{back.text}</h3>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
 