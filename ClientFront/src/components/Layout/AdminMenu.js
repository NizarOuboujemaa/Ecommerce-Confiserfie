import React from 'react';
import {NavLink} from 'react-router-dom'; 

const AdminMenu = () => {
  return (
   <>
   <div className='text-center'>
    <div className="list-group" >
        <h3 style={{ marginBottom: '20px' }}>Admin Console</h3>
        <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action" style={{ marginBottom: '10px' }} >Create Category</NavLink>
        <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action"style={{ marginBottom: '10px' }}>Create Products</NavLink>
        <NavLink to="/dashboard/admin/products" className="list-group-item list-group-item-action"style={{ marginBottom: '10px' }}>Products</NavLink>
        <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action"style={{ marginBottom: '10px' }}>Users</NavLink>
    </div>
   </div>
   </>
  );
};

export default AdminMenu; 