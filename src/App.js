import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const MainPage = () => (
  <div>
    <header>
      <h1>BG Datos y Cuentas</h1>
    </header>
    <main>
      <section>
        <h2>Venta de Datos</h2>
        <p>Aquí puedes comprar datos de alta calidad para tus necesidades.</p>
        <Link to="/datos">Ver Datos</Link>
      </section>
      <section>
        <h2>Comprar Cuentas</h2>
        <p>Accede a cuentas premium y servicios exclusivos.</p>
        <Link to="/cuentas">Ver Cuentas</Link>
      </section>
    </main>
  </div>
);

const DataPage = () => (
  <div>
    <h2>Página de Datos</h2>
    {/* Contenido de la página de datos */}
    <Link to="/">Volver a la página principal</Link>
  </div>
);

const AccountsPage = () => (
  <div>
    <h2>Página de Cuentas</h2>
    {/* Contenido de la página de cuentas */}
    <Link to="/">Volver a la página principal</Link>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/datos" component={DataPage} />
          <Route path="/cuentas" component={AccountsPage} />
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
