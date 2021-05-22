import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import Home from '../Common-pages/Home/Home';
import ButtonList from '../Task1/ButtonList';
import GridList from '../Task2/GridList';
import './RouterPage.css';

function RouterPage() {
  return (
    <div className='container'>
      <Router >
				<Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/task1' component={ButtonList}></Route>
          <Route exact path='/task2' component={GridList}></Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default RouterPage;