import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Rout from './components/routing/Routes';
import './App.css';
import Login from './components/auth/Login';
import About from './components/layout/About'
import Register from './components/auth/Register';

import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/layout/Profile';
import BookBus from './components/layout/BookBus';
import SeatSelection from './components/layout/SeatSelection/SeatSelection';
import PaymentTab from './components/layout/PaymentTab/PaymentTab';
import TicketPage from './components/layout/TicketPage/TicketPage';
import NotFound from './components/layout/NotFound';


// Check if there's a token stored in localStorage and set it in the request headers
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    // Dispatch the loadUser action to check if user is authenticated
    store.dispatch(loadUser());
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/book" element={<BookBus />} />
          <Route path="/book/menu1" element={<SeatSelection />} />
          <Route path="/book/menu2" element={<PaymentTab />} />
          <Route path="/book/ticket" element={<TicketPage />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<Rout />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
