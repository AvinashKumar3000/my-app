import MusicLibrary from "./components/MusicLibrary";
import './App.css';


function App() {
  return (
    <div className="App">
      <MusicLibrary></MusicLibrary>
      <div className="footer">
        <ul> 
          <li>
            <a href="/">
              <i class="fa fa-home"></i>
              <div className="link-name" >home</div>
            </a>
          </li>
          <li>
            <a href="/chat">
              <i class="fa fa-comments"></i>
              <div className="link-name" >chat</div>
            </a>
          </li>
          <li>
            <a href="/status">
              <i class="fa fa-circle-o-notch"></i>
              <div className="link-name" >status</div>
            </a>
          </li>
          <li>
            <a href="/manage">
              <i class="fa fa-cogs"></i>
              <div className="link-name" >manage</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    
  );
}

export default App;
