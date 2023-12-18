import { create } from 'zustand';
import { devtools, persist } from "zustand/middleware"



const Store = (set) => ({
    Cart: [],
    AddCart: (item) => {
        set((state) => ({
            Cart: [...state.Cart, item]
        }));
    }
});


const useStore = create(
    devtools(
        persist(Store, {
            name: "Cart"
        })
    )
)

export default useStore