import './App.css';
import { useEffect } from 'react';
import { Route,Routes} from 'react-router-dom';
import { SignIn } from './containers/SignIn';
import { SignUp } from './containers/SignUp';
import { Home } from './containers/Home';
import { Products } from './containers/Products';
import { Orders } from './containers/Orders';
import PrivateRoute from './components/HOC/PrivateRoute';
import { isUserLoggedIn,getAllCategory} from './actions';
import { useDispatch ,useSelector } from 'react-redux';
import { Category } from './containers/Category';


function App() {
  const dispatch = useDispatch()
  const auth=useSelector(state =>state.auth)


  useEffect(() => {
      if(!auth.authenticate){
          dispatch(isUserLoggedIn());
          dispatch(getAllCategory())
      }
  },[])

  return (
    <>
    <div className="App">
      
         <Routes>
           <Route path="/"      element={<PrivateRoute><Home/></PrivateRoute>}/>
           <Route path="/products" element={<PrivateRoute><Products/></PrivateRoute>}/>
           <Route path="/orders"   element={<PrivateRoute><Orders/></PrivateRoute>}/>
           <Route path="/category"   element={<PrivateRoute><Category/></PrivateRoute>}/>
           <Route path="/signin" element={<SignIn/>}/>
           <Route path="/signup" element={<SignUp/>}/>
          
         </Routes>
      
      
    </div>
    </>
  );
}

export default App;
