import './App.css';
import foto from './foto.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={foto} id='myphoto' alt='My photo' width={'200px'}/>
        <p>
          This is my first React App deployed on AWS
        </p>
        <p>Visit me at <a href='https://www.dario-ospina.com' style={{color: 'yellow'}}>dario-ospina.com</a></p>

      </header>
    </div>
  );
}

export default App;
