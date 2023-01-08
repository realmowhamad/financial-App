
import { useRoutes } from 'react-router-dom';
import './App.css';
import Routes from './Router/Router';
import NavBar from './Components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAsyncUsersData } from './Features/UserSlice/UserSlice';
import { userContext } from './Context/usersContext';
import { createContext } from 'react';

const App = () => {

  useEffect(() => {
    const asyncData = async () => {
      const data = await dispatch(getAsyncUsersData())
      return data
    }

    asyncData()


  }, [])


  const routes = useRoutes(Routes)
  const usersData = useSelector(state => state.users)
  const dispatch = useDispatch()
  const { loading, error, users } = usersData

  if (loading) return <p>Loading .....</p>
  if (error) return <p>{error}</p>

  return (
    <>
      {users.length > 0 && <userContext.Provider value={users} >
        <div className=" w-screen h-screen overflow-hidden">
          <NavBar />
          {routes}
        </div>
      </userContext.Provider>}
    </>
  )
}

export default App;
