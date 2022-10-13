import React from "react";
import { Container, Row } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import Body from "./pages/Body";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Header from "./pages/Header";
import NotFound from "./pages/NotFound";


export default function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Header />
        </Row>

       
      </Container>

      <Routes>
    <Route path='/' element= { <Body />} />
    <Route path='/product' element= { <Product /> }/>
    <Route path='/order' element= { <Order /> }/>
    <Route path='/login' element= { <Login /> }/>
    <Route path='/register' element= { <Register /> }/>
    <Route path='*' element= { <Navigate to="/" /> }/>
    </Routes>

    </>
  );
}
