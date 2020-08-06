import React from 'react';
import Header from './Header';
import UserInfo from './UserInfo';
import Content from './Content';

import './css/Main.css';

class Main extends React.Component{
  render(){
    return(
      <div className="main bg-dark">
        <div className="main-header">
          <Header/>
        </div>
        <div className="main-content">
          <UserInfo/>
          <Content/>
        </div>
      </div>
    )
  }
}

export default Main;
