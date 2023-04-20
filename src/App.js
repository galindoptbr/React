import './App.css';

function App() {

    const name = 'Galindo'
    const newName = name.toLocaleUpperCase()

    function sum(a, b) {
      return a + b
    }


  return (
    <div className="App">
      <h1>Alterando JSX</h1>
      <p>Ola, {newName}.</p>
      <p>Soma: {sum(2, 3)} </p>
      
    </div>
  );
}

export default App;
