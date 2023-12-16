import create from 'zustand';
import { Monster } from '../App';

type StoreState = {
    data: Monster[];
    activeDetail: any | null;
    setDetail: (detail: Monster) => void;
    modalOpen: boolean;
    handleOpen: () => void;
};

const useStore = create<StoreState>((set) => ({
    data: [],
    activeDetail: null,
    setDetail: (detail: Monster) => set((state) => ({ ...state, activeDetail: detail })),
    modalOpen: false,
    handleOpen: () => set((state) => ({ ...state, modalOpen: !state.modalOpen })),
}));
  

export default useStore;
