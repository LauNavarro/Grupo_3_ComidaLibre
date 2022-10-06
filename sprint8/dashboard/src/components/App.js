import React, {Fragment} from 'react';
import './app.css'
import SideBar from './nav-bar/side-bar/SideBar'
import TopBar from './nav-bar/top-bar/TopBar';
import Main from './body/Main'
// import SidebarRouter from '../router/SidebarRouter';

function App() {
  return (
    <Fragment>
      <div id="wrapper"className='wrapper'>
        <SideBar />
        <div id="content-wrapper" className="content-wrapper">
          <TopBar/> 
          <Main/>         
        </div>
      </div>
    </Fragment>
  );
}

export default App;