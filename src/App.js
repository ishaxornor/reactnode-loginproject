//import logo from './logo.svg';
//import './App.css';

//pages
import Home from './pages/Home';
import Login from './pages/Login';

//styled components
import { StyledContainer } from './components/Styles';

import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom';

function App() {
  return (
    <Router>
    <StyledContainer>

      <Login></Login>

    </StyledContainer>
    </Router>
  );
}

export default App;
