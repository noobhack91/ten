import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

interface User {
  id: string;
  name: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthorized: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      try {
        const decoded = jwtDecode<User>(token);
        setUser(decoded);
      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('auth_token');
      }
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem('auth_token', token);
    const decoded = jwtDecode<User>(token);
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setUser(null);
  };

  const isAuthorized = user?.role === 'AUTHORIZED_USER';

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};