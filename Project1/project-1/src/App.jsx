import './App.css';
import MovieCard from './components/MovieCard';
import poster1 from './assets/posters/10TIHAY.png';
import poster2 from './assets/posters/Interstellar.png';
import poster3 from './assets/posters/TalkToMe.png';
import poster4 from './assets/posters/KnivesOut.png';
import poster5 from './assets/posters/MMFR.png';
import poster6 from './assets/posters/Lilo&Stitch.png';
import poster7 from './assets/posters/Shrek.png';
import poster8 from './assets/posters/GOTF.png';
import poster9 from './assets/posters/KDS.png';
import poster10 from './assets/posters/TheTrumanShow.png';

const App = () => {

  return (
    <div className="App">
      
      <div className="header">
         <h1 className="gallery-title">CouchPop Weekly Gallery 🍿</h1>
         <h2>Movies selected and voted by members for this week's watch party.</h2>
         <h2>Browse the current picks and discover what the community is watching next!</h2>
      </div>


      <div className="movie-card-gallery">
        <MovieCard
          poster={poster1}
          theme="Rom-Com Night 💕"
          featuredPick="10 Things I Hate About You"
          genre="Romance"
          vibe="Charming"
          bestFor="Girls' Night In"
          snackPairing="Choco Strawberries"
        />
        <MovieCard
          poster={poster2}
          theme="Thought-Provoking Night 🌌"
          featuredPick="Interstellar"
          genre="Science Fiction"
          vibe="Epic"
          bestFor="Guys' Night In"
          snackPairing="Popcorn and Soda"
        />
        <MovieCard
          poster={poster3}
          theme="Spooky Night 👻"
          featuredPick="Talk to Me"
          genre="Supernatural Horror"
          vibe="Chilling"
          bestFor="Halloween Watch"
          snackPairing="Candy Corn & Pumpkin Latte"
        />
        <MovieCard
          poster={poster4}
          theme="Mystery Night 🕵️"
          featuredPick="Knives Out"
          genre="Whodunit"
          vibe="Intriguing"
          bestFor="Group Discussions"
          snackPairing="Cheese Platter and Wine"
        />
        <MovieCard
          poster={poster5}
          theme="Action-Packed Night 🔥"
          featuredPick="Mad Max: Fury Road"
          genre="Action"
          vibe="Filled with adrenaline"
          bestFor="Movie Marathons"
          snackPairing="Spicy Nachos and Craft Beer"
        />
        <MovieCard
          poster={poster6}
          theme="Family Movie Night 👨‍👩‍👧‍👦"
          featuredPick="Lilo & Stitch"
          genre="Animated Family"
          vibe="Heartwarming"
          bestFor="Feel-Good Evenings"
          snackPairing="Sweet Rolls & Pineapple Juice"
        />
        <MovieCard
          poster={poster7}
          theme="Nostalgic Night 🏰"
          featuredPick="Shrek"
          genre="Animated Comedy"
          vibe="Whimsical"
          bestFor="Quote-Along Fun"
          snackPairing="Onion Rings and Swamp Juice"
        />
        <MovieCard
          poster={poster8}
          theme="Sad Movie Night 😢"
          featuredPick="Grave of the Fireflies"
          genre="War Drama"
          vibe="Devastatingly Beautiful"
          bestFor="Serious Discussions"
          snackPairing="Tissues and Comfort Food"
        />
        <MovieCard
          poster={poster9}
          theme="Cozy International Night 🌏"
          featuredPick="Kiki's Delivery Service"
          genre="Animated Fantasy"
          vibe="Warm and Whimsical"
          bestFor="Relaxing Evenings"
          snackPairing="Pastries & Herbal Tea"
        />
        <MovieCard
          poster={poster10}
          theme="Wild Card Night 🎰"
          featuredPick="The Truman Show"
          genre="Satirical Drama"
          vibe="Thought-Provoking"
          bestFor="Open-Minded Viewers"
          snackPairing="Caramel Popcorn and Lemonade"
        />
      </div>
    </div>
  )
}

export default App;
