import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import { UserProvider } from './context/UserContext';
import './App.css'


const App = () => {
  return (
    <div>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </div>
  );
};

export default App;

