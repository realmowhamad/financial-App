
import { useRoutes } from 'react-router-dom';
import './App.css';
import Routes from './Router/Router';
import NavBar from './Components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAsyncUsersData } from './Features/UserSlice/UserSlice';


function App() {
  const routes = useRoutes(Routes)

  const usersData = useSelector(state => state.users)
  const dispatch = useDispatch()
  const { loading, error, users } = usersData


  useEffect(() => {
    dispatch(getAsyncUsersData())
  }, [])

  if (loading) return <p>Loading .....</p>
  if (error) return <p>{error}</p>


  return (
    <div className="App">
      <NavBar {...users[0]} />
      {routes}
    </div>
  );
}

export default App;
