import React from 'react'
import AdminGuards from '../guards/AdminGuards';
import AdminLayout from './AdminLayout';
import AppLayout from './AppLayout';

type IProps = {
	children: React.ReactNode;
	variant: "user" | "admin";
	requiredLevel:"user" | "admin";
	checkRequiredLevel?: boolean;
};



const Layout = ({children, variant, requiredLevel, checkRequiredLevel}:IProps) => {

  if(variant === 'user') {
    return(
      <AppLayout>
        {children}
      </AppLayout>
    )
  }

  if(variant === 'admin') {
    return(
      <AdminGuards>
        <AdminLayout>
        {children}
        </AdminLayout>
      </AdminGuards>
    )
  }

  return (
    <div>{children}</div>
  )
}

export default Layout