import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={ HeroListContainer }/>
          <Route exact path='/:id' component={ HeroDetailContainer }/>
          <Route exact path='/search-:name' component={ SearchListContainer }/>
        </Switch>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
