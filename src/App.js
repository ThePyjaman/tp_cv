import {Avatar, Box, Button, Grommet, grommet, Nav, Sidebar} from 'grommet';
import React from "react";
import Tabs from './components/Tabs'
import { BrowserRouter, Route } from 'react-router-dom'

const theme = {
  global:{
    font:{
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={grommet}>
      <BrowserRouter>
        <Tabs/>
      </BrowserRouter>

    </Grommet>
  );
}

export default App;
