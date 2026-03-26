import { create } from 'zustand';

interface SidebarState {
  collapsed: boolean;
  activeItem: string;
  toggle: () => void;
  setCollapsed: (collapsed: boolean) => void;
  setActiveItem: (item: string) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  collapsed: false,
  activeItem: 'dashboard',
  toggle: () => set((state) => ({ collapsed: !state.collapsed })),
  setCollapsed: (collapsed) => set({ collapsed }),
  setActiveItem: (activeItem) => set({ activeItem }),
}));
