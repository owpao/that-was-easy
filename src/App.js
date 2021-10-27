/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import useSound from 'use-sound'
import EASY_SOUND from "./assets/that_was_easy.mp3"
import CLICK_SOUND from "./assets/clicksoundeffect.mp3"
import BUTTON_IMG from "./assets/easy2.png"

function App() {

  let [playEasy] = useSound(EASY_SOUND)
  let [playClick] = useSound(CLICK_SOUND)

  let play_audio = function () {
      playClick()
      setTimeout(playEasy,150)
  }

  return (
    <div className="App">
      <img className="that-was-easy-img" 
           src={BUTTON_IMG} 
           onMouseDown={play_audio}
      />
    </div>
  );
}

export default App;
