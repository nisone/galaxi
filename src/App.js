import logo from './logo.svg';
import './App.css';

function App() {
  return ([
    Navbar(),
    Welcome()]
  );
}

export function Navbar() {
  return (
    <nav>
      
      <a href='http://localhost:3000' ><img src={logo} alt='logo' width='25'></img> Home</a>
    </nav>
  )
}

export function Welcome() {
  const element = <p>Welcome to reactjs</p>

  return (
  <div className="App">
  <header className="App-header">
    <div>
      {element}
    </div>
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>
)
}

export default App;
