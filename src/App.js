
import { useRoutes } from 'react-router-dom';
import './App.css';
import Routes from './Router/Router';
import NavBar from './Components/Navbar/Navbar';


function App() {
  const routes = useRoutes(Routes)


  return (
    <div className="App">
      <NavBar />
      {routes}
    </div>
  );
}

export default App;
