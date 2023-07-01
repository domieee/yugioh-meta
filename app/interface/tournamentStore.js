import { create } from 'zustand'
import { persist } from "zustand/middleware"

export const useTournamentStore = create(
    (set) => ({
        tournamentType: 'national',
        location: '',
        totalParticipants: 0,
        date: '',
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
        top32FirstItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top32SecondItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top32ThirdItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top32FourthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top32FifthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top32SixthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top32SeventhItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top32EighthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top32NinthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top32TenthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top32EleventhItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top32TwelfthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top32ThirteenthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top32FourteenthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top32FifteenthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top32SixteenthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64FirstItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64SecondItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64ThirdItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64FourthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64FifthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64SixthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64SeventhItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64EighthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64NinthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64TenthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64EleventhItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64TwelfthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64ThirteenthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64FourteenthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64FifteenthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64SixteenthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64SeventeenthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64EighteenthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64NineteenthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64TwentiethItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64TwentyFirstItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64TwentySecondItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64TwentyThirdItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64TwentyFourthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64TwentyFifthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64TwentySixthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64TwentySeventhItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64TwentyEighthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64TwentyNinthItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64ThirtiethItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64ThirtyFirstItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        top64ThirtySecondItem: {
            playerName: '',
            playedDeck: '',
            deckNotes: '',
            deckLink: '',
        },
        setItem: (key, value) => {
            set((state) => ({
                [key]: { ...state[key], ...value }
            }));
        },
        setTournamentType: (tournamentType) => {
            set({ tournamentType });
        },
        setLocation: (location) => {
            set({ location });
        },
        setTotalParticipants: (totalParticipants) => {
            set({ totalParticipants });
        },
        setDate: (date) => {
            set({ date });
        }
    })
)   