import { create } from "zustand";

export interface SidebarState {
  isOpen: boolean;
  isMinimal: boolean;
  handleOpenOrClose: () => void;
  handleClose: () => void;
  handleChangeSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  isMinimal: false,
  handleClose: () => set((state) => ({ ...state, isOpen: false })),
  handleOpenOrClose() {
    return set((state) => ({ ...state, isOpen: !state.isOpen }));
  },
  handleChangeSidebar() {
    return set((state) => ({ ...state, isMinimal: !state.isMinimal }));
  },
}));
