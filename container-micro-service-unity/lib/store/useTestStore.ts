import { create } from 'zustand';

interface BEARS {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;

  updateBears: (newBears: number) => void;
}

export const useTestStore = create<BEARS>((set) => ({
  bears: 0,
  increasePopulation: () => set((state: { bears: number }) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
