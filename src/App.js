import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//Components
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

import logo from "./logo.png";

function App() {
  return (
    <Router>
      <div className="container">

      <Navbar bg="light">
        <Navbar.Brand href="https://codingthesmartway.com">
          <img
          src={logo}
          width="30"
          height="30"
          alt="CodingTheSmartWay"
        />
        MERN-Stack Todo App
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="/">Todos</Nav.Link>
          <Nav.Link href="/create">Create Todos</Nav.Link>
        </Nav>
      </Navbar>

      <Route path="/" exact component={TodosList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />

      </div>

    </Router>
  );
}

export default App;
