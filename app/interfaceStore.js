import { create } from "zustand";

export const useInterfaceStore = create((set) => ({
    currentRoute: undefined,
    progress: 0,
    alert: { visibility: false, msg: '' },
    success: { visibility: false, msg: '' },
    updateAlert: (value) => {
        set((state) => ({
            alert: {
                ...state.alert,
                msg: value
            }
        }));
    },
    updateSuccess: (value) => {
        set((state) => ({
            success: {
                ...state.success,
                msg: value,
                visibility: true
            }
        }));

    },
    updateAlertVisibility: (value) => {
        set((state) => ({
            alert: {
                ...state.alert,
                visibility: value
            }
        }));
        if (value) {
            setTimeout(() => {
                set((state) => ({
                    alert: {
                        ...state.alert,
                        visibility: false
                    }
                }));
            }, 5000); // Hide alert after 7 seconds (7000 milliseconds)
        }
    },
    updateSuccessVisibility: (value) => {
        set((state) => ({
            success: {
                ...state.success,
                visibility: value
            }
        }));
        if (value) {
            setTimeout(() => {
                set((state) => ({
                    success: {
                        ...state.success,
                        visibility: false
                    }
                }));
            }, 5000); // Hide alert after 7 seconds (7000 milliseconds)
        }
    },
    setCurrentRoute: (route) => {
        set((state) => ({
            currentRoute: route
        }));
    }

}));

export const updateProgress = (value) => {
    useInterfaceStore.setState((state) => ({
        progress: value
    }));
};