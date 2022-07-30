import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { setUser } from './features/authSlice';
import { auth } from './helpers/firebase';

import AppRouter from './router/AppRouter';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch(setUser(user));
    });
    return unsubscribe; //! clean-up function
  }, [dispatch]);
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
