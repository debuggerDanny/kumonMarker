import logo from './logo.svg';
import './App.css';
import CameraScene from './CameraScene';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          A website to make marking maths sheets quicker. Please allow the use of your camera to start.
        </p>
      </header>
      <body>
        <CameraScene>

        </CameraScene>

      </body>
    
    
    </div>
  );
}

/*
TODO: need to implement the camera vision logic here
*/
function Scene(){

}

export default App;
