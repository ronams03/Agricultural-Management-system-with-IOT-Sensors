import { create } from 'zustand';

export type NavigationModule = 
  | 'dashboard'
  | 'crops'
  | 'livestock'
  | 'inventory'
  | 'weather'
  | 'financial'
  | 'reports'
  | 'marketplace'
  | 'iot'
  | 'users'
  | 'settings';

interface NavigationState {
  currentModule: NavigationModule;
  previousModule: NavigationModule | null;
  setModule: (module: NavigationModule) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  currentModule: 'dashboard',
  previousModule: null,
  setModule: (module) => set((state) => ({ 
    previousModule: state.currentModule,
    currentModule: module 
  })),
}));
