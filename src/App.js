
import { useRoutes } from 'react-router-dom';
import './App.css';
import Routes from './Router/Router';


function App() {
  const routes = useRoutes(Routes)


  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
