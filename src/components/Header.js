import React from 'react';
import {Menu} from 'antd';
import './Header.css';
import {
    Link
  } from "react-router-dom";
  

function Header(){

    return(

        <>
        {/* <div className="logo"> <img className="homeLogo" src="/Corona-4.png" height="50px" width="50px"/> </div> */}
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/"> Home </Link></Menu.Item>
        {/* <Menu.Item key="2"><Link to="/cards"> Cards </Link></Menu.Item> */}
        <Menu.Item key="3"><Link to="/charts"> Charts </Link></Menu.Item>
        <Menu.Item key="4"><Link to="/countrypicker"> Country Picker </Link></Menu.Item>
      </Menu> 
      
      </>
    )


}


export default Header;

