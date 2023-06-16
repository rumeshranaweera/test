import { create } from "zustand";

type Product = {
  title: string;
  price: number;
  place: string;
};

type Store = {
  orderList: Product[];
  addOrder: (item: Product) => void;
  clearCart: () => void;
};

export const useStore = create<Store>((set) => ({
  orderList: [],
  addOrder: (item: Product) =>
    set((state) => ({ orderList: [...state.orderList, item] })),
  clearCart: () => set((state) => ({ orderList: [] })),
}));

// export const addToList = (newList: number[]) =>
//   useStore.setState({ orderList: newList });
