import { create } from 'zustand'
import { persist } from "zustand/middleware"

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
        top8ThirdItem: {
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
        },
        top16FirstItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: ''
        },
        top16SecondItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: ''
        },
        top16ThirdItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: ''
        },
        top16FourthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: ''
        },
        top16FifthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: ''
        },
        top16SixthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: ''
        },
        top16SeventhItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: ''
        },
        top16EighthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: ''
        },
        setItem: (key, value) => {
            set((state) => ({
                [key]: { ...state[key], ...value }
            }));
        }
    })
)   