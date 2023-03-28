import { generateRandomText } from '../../utils/generateRamdomText';
import './randomWords.css';

const RandomTextBackground = () => {
  const words = generateRandomText();

  return (
    <div className="random-text-background">
      {words.map((word, index) => (
        <span key={index} className="word">
          {word}
        </span>
      ))}
    </div>
  );
};


export default RandomTextBackground;