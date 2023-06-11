import { create } from 'zustand'
import { persist } from "zustand/middleware"

const useStore = create(
    persist(
        (set) => ({
            username: undefined,
            id: undefined,
            role: undefined,
            setUserName: (username) => set((state) => ({ username: username })),
            setUserID: (id) => set((state) => ({ id: id })),
            setUserRole: (role) => set((state) => ({ role: role }))
        }),
        { name: 'asdasdasdasdasdasds' }
    )
);

export default useStore;
