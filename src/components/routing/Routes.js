import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../../App.css';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import Profile from '../layout/Profile';
import NotFound from '../layout/NotFound';
import About from '../layout/About';
import PrivateRoute from './PrivateRoute';
import BookBus from '../layout/BookBus';
import PaymentTab from '../layout/PaymentTab/PaymentTab';
import SeatSelection from '../layout/SeatSelection/SeatSelection';
import TicketPage from '../layout/TicketPage/TicketPage';

const Rout = () => {
  return (
    <section className="container">
      <Alert />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <PrivateRoute path="/dashboard" element={<Dashboard />} />
        <PrivateRoute path="/profile" element={<Profile />} />
        <PrivateRoute path="/book" element={<BookBus />} />
        <PrivateRoute path="/book/menu1" element={<SeatSelection />} />
        <PrivateRoute path="/book/menu2" element={<PaymentTab />} />
        <PrivateRoute path="/book/ticket" element={<TicketPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default Rout;
