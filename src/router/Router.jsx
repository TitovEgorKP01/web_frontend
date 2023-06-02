import React from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route, 
  Navigate,
} from 'react-router-dom';

import { Layout, Button } from "antd";

import Header from "../comonents/common/header/Header";
import Footer from "../comonents/common/footer/Footer";
import Slider from "../comonents/common/slider/Slider";

import { createBrowserHistory} from 'history';

import Login from '../comonents/login/Login';
import Reviews from '../comonents/reviews/view/Reviews';
import EditReview from '../comonents/reviews/edit/EditReview';
import Users from '../comonents/users/Users';

const {Content} = Layout;


function Router() {
  const history = createBrowserHistory();

  const token = localStorage.getItem('token');

  return (
      <BrowserRouter history={history}>
       {token ? (
         <Layout style={{minHeight: '100vh'}}>
          <Slider/>
          <Layout className="site-layout">
            <Header/>
            <Content> 
              <Routes>
                <Route exact path="/" element={<Navigate to="/reviews"/>}/>
                <Route exact path="/reviews/review/:id?" name="EditReview" element={<EditReview/>}/>
                <Route exact path="/reviews/*/review/:id?" name="EditReview" element={<EditReview/>}/>
                <Route exact path="/reviews" name="Reviews" element={<Reviews/>}/>             
              </Routes>
              <Routes>
                <Route exact path="/" element={<Navigate to="/users"/>}/>
                <Route exact path="/users" name="Users" element={<Users/>}/>             
              </Routes>
            </Content>
            <Footer/>
          </Layout>
        </Layout>
       ) : (
        <Routes>  
          <Route exact path="/login" name="Login" element={<Login/>}/>
          <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
       )}
      </BrowserRouter>
  );
}

export default Router;
