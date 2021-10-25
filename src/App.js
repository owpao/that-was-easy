/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import useSound from 'use-sound'

function App() {

  const CLICK_URL = "/clicksoundeffect.mp3"
  const EASY_URL = "/that_was_easy.mp3"

  let [playEasy] = useSound(EASY_URL)
  let [playClick] = useSound(CLICK_URL)

  let play_audio = function () {
      playClick()
      setTimeout(playEasy,150)
  }

  return (
    <div className="App">
      <img className="that-was-easy-img" 
           src="/easy2.png" 
           onClick={play_audio}
      />
      test
    </div>
  );
}

export default App;
