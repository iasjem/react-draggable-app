import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import {List} from './components/List'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const App = () => {
  return <DndProvider backend={HTML5Backend}>
  <List />
</DndProvider>
};

ReactDOM.render(<App />, document.getElementById("app"));