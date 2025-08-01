

// import React from 'react';
// import Sidebar from './Sidebar';
// import { Outlet } from 'react-router-dom';

// const Layout = () => {
//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
      
//       {/* Sidebar */}
//       <div style={{ width: '20%', height: '100vh', overflowY: 'auto', backgroundColor: '#1f2937', color: 'white' }}>
//         <Sidebar />
//       </div>
      
//       {/* Main Content */}
//       <div style={{ width: '80%', height: '100vh', overflowY: 'auto', padding: '1rem', backgroundColor: '#f3f4f6' }}>
//         <Outlet />
//       </div>

//     </div>
//   );
// };

// export default Layout;







import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
// import './Layout.css'; // import the CSS file

const Layout = () => {
  return (
    <div className="layout-container">

      {/* Sidebar */}
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Outlet />
      </div>

    </div>
  );
};

export default Layout;