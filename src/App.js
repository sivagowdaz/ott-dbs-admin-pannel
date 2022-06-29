import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from "./context/authcontext/AuthContext";
import { useContext } from 'react'
import './app.css'
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import UserList from './pages/userlist/UserList';
import User from './pages/user/User';


function App() {
  let { user } = useContext(AuthContext)


  return (
    
      <Router>
        <Switch>
          <Route path='/login'>
            {user ? <Redirect to='/' /> : <Login />}
          </Route>
          {user ?
          <div>
            <Topbar/>
            <div className='container'>
              <Sidebar />
              <Route exact path='/' component={Home} />
              <Route path='/userlist' component={UserList} />
              <Route path='/user/:email' component={User} />
            </div>
          </div>
            :
            <Redirect to='/login' />}
        </Switch>
      </Router>
   
  );
}

export default App;
