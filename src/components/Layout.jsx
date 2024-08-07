import React from 'react';
import { Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <div className='px-3 py-5'>
    
    <Outlet />
    </div>
    </>
  );
};

export default Layout;
