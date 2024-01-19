import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const AuthGuard = ({
  allowedRoles,
  children,
}: {
  allowedRoles: string[];
  children: React.ReactNode;
}) => {
  const { roles } = useAuth();

  const isRoleAllowed = roles.some((role) => allowedRoles.includes(role));

  if (!isRoleAllowed) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
