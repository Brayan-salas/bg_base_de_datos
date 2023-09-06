import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">
        Hello world <span aria-label="emoji" role="img">🔥</span>
      </h1>
      <h2 className='subtitle'>Aqui estara una bonita app para registro de ordenes.</h2>
      <h3 className='advise'>Estamos trabajando en ello.</h3>
      <input type="text" className="new-task"/>
    </div>
  );
}

export default App;
