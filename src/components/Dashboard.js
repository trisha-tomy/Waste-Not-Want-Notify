import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Topbar from './Topbar';
import FoodWasteTracker from './FoodWasteTracker';
import MainContent from './MainContent';

function Dashboard() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header />
          {<div>
  {/* Page Wrapper */}
  <div id="wrapper">

    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
    <MainContent />
      
    </div>
    {/* End of Content Wrapper */}
  </div>
  {/* End of Page Wrapper */}
  {/* Scroll to Top Button*/}
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" />
  </a>
  
  {/* Bootstrap core JavaScript*/}
  {/* Core plugin JavaScript*/}
  {/* Custom scripts for all pages*/}
  {/* Page level plugins */}
  {/* Page level custom scripts */}
</div>
}
<div className="container-fluid">
            <FoodWasteTracker />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
