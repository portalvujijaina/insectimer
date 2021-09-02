import logo from './logo.svg';
import YtBg from './components/YtBg.js';
import YtBox from './components/YtBox.js';
import './App.css';
import YoutubeBackground from 'react-youtube-background';
import Youtube from 'react-youtube';
import Timer from './components/Timer.js';
import * as js_func from "./js_func/js_fuctions.js";




function App() {

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  
  return (
    <div className="App">
      {}

      <Timer></Timer>
      <YtBox></YtBox>
      
    </div>
    
  );
}









export default App;
