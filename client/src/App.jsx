import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Layout from './Layout';
import './App.css'
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout />
      </Router>
    </AuthProvider>
  );
};

export default App;
