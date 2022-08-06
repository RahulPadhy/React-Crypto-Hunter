import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Alert from './components/Alert';
import Header from './components/Header';
import Coinpage from './Pages/Coinpage';
import Homepage from './Pages/Homepage';

function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    }
  }));

  const classes = useStyles()

  return (
    <>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<Coinpage />} />

        </Routes>
        <Alert/>
      </div>
    </>
  );
}

export default App;
