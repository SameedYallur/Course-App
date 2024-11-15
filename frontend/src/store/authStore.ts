import { create } from 'zustand';
import api from '../lib/axios';
import { toast } from 'react-hot-toast';

interface User {
  _id: string;
  username: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  verifyAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      set({ user: response.data.user, isAuthenticated: true });
      toast.success('Login successful!');
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
      throw error;
    }
  },

  signup: async (username: string, email: string, password: string) => {
    try {
      await api.post('/auth/signup', { username, email, password });
      toast.success('Signup successful! Please login.');
    } catch (error) {
      toast.error('Signup failed. Please try again.');
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, isAuthenticated: false });
    toast.success('Logged out successfully');
  },

  verifyAuth: async () => {
    try {
      const response = await api.get('/auth/verify');
      set({ user: response.data.user, isAuthenticated: true });
    } catch (error) {
      set({ user: null, isAuthenticated: false });
    }
  },
}));