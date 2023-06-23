import { create } from 'zustand'
import { persist } from "zustand/middleware"

export const useStore = create(
    persist(
        (set) => ({
            username: null,
            id: null,
            role: null,
            setUserName: (username) => set((state) => ({ username: username })),
            setUserID: (id) => set((state) => ({ id: id })),
            setUserRole: (role) => set((state) => ({ role: role })),
            setUsernameNull: () => set((state) => ({ username: false })),
            setIDNull: () => set((state) => ({ id: false })),
            setRoleNull: () => set((state) => ({ role: false }))
        }),
        { name: 'asdasdasdasdasdasds' }
    )
);

export const useTournamentStore = create(
    (set) => ({
        firstPlace: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: ''
        },
        secondPlace: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: ''
        },
        top4FirstItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: ''
        },
        top4SecondItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: ''
        },
        top8FirstItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: ''
        },
        top8SecondItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: ''
        },
        top8ThridItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: ''
        },
        top8FourthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: ''
        }
    })
)