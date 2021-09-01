import Login from './components/Login';
import NavBar from './components/NavBar';
import HeroListContainer from './components/home_list/HeroListContainer';
import HeroDetailContainer from './components/detail/HeroDetailContainer';
import SearchListContainer from './components/search/SearchListContainer';
import Footer from './components/Footer';
import { useHeroesContext } from './context/HeroesContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContextProvider from './context/HeroesContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const { logged } = useHeroesContext();

  return (
    <ContextProvider>
      { !logged ?
        <Login />
        :
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/' component={ HeroListContainer }/>
            <Route exact path='/detail/:idHero' component={ HeroDetailContainer }/>
            <Route exact path='/search/:name' component={ SearchListContainer }/>
          </Switch>
          <Footer />
        </BrowserRouter>
      }
    </ContextProvider>
  );
}

export default App;
