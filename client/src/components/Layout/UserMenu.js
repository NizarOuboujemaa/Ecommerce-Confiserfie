import React from 'react'
import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
  return (
    <div>
    <div className='text-center'>
     <div className="list-group" >
         <h3 style={{ marginBottom: '20px' }}>Dashboard</h3>
         <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action" style={{ marginBottom: '10px' }} >Profile</NavLink>
         <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action"style={{ marginBottom: '10px' }}>Orders</NavLink>
        
     </div>
    </div>
    </div>
  );
};

export default UserMenu;
