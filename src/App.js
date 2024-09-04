import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.js'; // Adjust the import path as necessary
import VerticalNavbar from './components/VerticalNavbar/index.js';
import Dropdownhover from './components/Dropdownhover/Dropdownhover.js';

const App = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <VerticalNavbar/>
      {/* <Dropdownhover/> */}
    </div>
  );
};

export default App;
// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Navbar/Sidebar.js';
// import Breadcrumb from './components/Navbar/Breadcrumb.js';
// import DefaultPage from './components/Navbar/DefaultPage.js';
// import AnalyticsPage from './components/Navbar/AnalyticsPage.js'; // Create this similarly
// import EcommercePage from './components/Navbar/EcommercePage.js'; // Create this similarly
// import ContentPage from './components/Navbar/ContentPage.js'; // Create this similarly

// const App = () => {
//     return (
//         <Router>
//             <div className="app">
//                 <Sidebar />
//                 <div className="main-content">
//                     <Breadcrumb/>
//                     <Routes>
//                         <Route path="/dashboard/default" element={<DefaultPage />} />
//                         <Route path="/dashboard/analytics" element={<AnalyticsPage />} />
//                         <Route path="/dashboard/ecommerce" element={<EcommercePage/>} />
//                         <Route path="/dashboard/content" element={<ContentPage />} />
//                         {/* Add routes for other pages */}
//                     </Routes>
//                 </div>
//             </div>
//         </Router>
//     );
// };

// export default App;
