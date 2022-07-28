import React from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';


const Library = ({ isOpenSidebar, toggleSidebar }) => (
  <>
    <Sidebar isOpenSidebar={isOpenSidebar} toggleSidebar={toggleSidebar} />
    <div style={{
  color: 'white', textAlign: 'center', minHeight: '88vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem',
}}
    >
      library
    </div>
  </>
 );

export { Library };
