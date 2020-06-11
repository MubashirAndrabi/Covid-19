import React,{useEffect} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from './components/Home';
// import CoronaCard from './components/CoronaCard';
import CoronaChart from './components/CoronaChart';
import CountryPicker from './components/CountryPicker';

function App() {

  return (
    <Router>
    <Layout className="layout">
    <Layout.Header>
      <Header/>
    </Layout.Header>

    <Layout.Content style={{ padding: '0 50px' }}>

      <Route path="/" exact render={(props)=>{

        return <Home {...props}/>

      }}/>

      {/* <Route path="/cards" render={(props)=>{

        return <CoronaCard />

      }}/> */}

       <Route path="/charts" render={(props)=>{

        return <CoronaChart {...props}/>

      }}/>

      <Route path="/countrypicker" render={(props)=>{

        return <CountryPicker {...props}/>

      }}/>
      
    </Layout.Content>


    <Layout.Footer style={{ textAlign: 'center' }}> Covid-19 App ©2020 Created by Mubashir</Layout.Footer>


  </Layout>
  </Router>
  );
}

export default App;
