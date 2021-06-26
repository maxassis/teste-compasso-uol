import create from "zustand";

const useStore = create((set) => ({
    selectedUser : [],
    setSelectedUser: (user) => set((state) => (state.selectedUser = user)),
}));
export default useStore;