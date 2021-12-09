import { Route, Switch, Redirect } from 'react-router-dom';
import Article from './components/Article';
import Header from './components/Header';
import { Home } from './pages/Home';
import About from './pages/About';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProtectedRoute({ children, path }) {
  const token = window.localStorage.getItem('token');

  return (
    <Route
      path={path}
      render={() => {
        if (token) {
          return children;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}

export default function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/post/:id" exact>
          <Article />
        </Route>

        <ProtectedRoute path="/profile">
          <h2>Это защищеная страница</h2>
        </ProtectedRoute>

        <Route>
          <h1 style={{ textAlign: 'center' }}>Cтраница не найдена</h1>
        </Route>
      </Switch>
    </div>
  );
}
