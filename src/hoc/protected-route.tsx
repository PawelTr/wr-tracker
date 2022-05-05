import React, { FC } from 'react';
import { ProtectedRouteProps } from '../types/ProtectedRoute';
import { Navigate } from 'react-router-dom'

const ProtectedRoute: FC<ProtectedRouteProps> = (props: ProtectedRouteProps) => {
  return ( props.isAuth ? props.component : <Navigate to='/login' /> );
};

export default ProtectedRoute;