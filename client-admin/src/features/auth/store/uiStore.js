import { create } from "zustand";

export const useUIStore = create((set) => ({
    modal: null,
    confirm: null,

    openModal: (title, messsage, onClose) => 
        set({
            modal: {title, message, onClose}
        }),

        closeModal: () => set({model: null}),

        openConfirm: ({title, message, onCorfirm, onCancel}) =>
            set({
                confirm: {title, message, onCorfirm, onCancel}
            }),

        closeConfirm: () => set({confirm: null})
}));