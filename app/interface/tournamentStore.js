import { create } from 'zustand'
import { persist } from "zustand/middleware"

export const useInterfaceStore = create((set) => ({
    interfaceState: ['firstPlace', 'secondPlace', 'top4'],
    exampleArray: [
        'firstPlace',
        'secondPlace',
        'top4',
        'top8',
        'top16',
        'top32',
        'top64'
    ],
    addTournamentRow: () => {
        set((state) => ({
            interfaceState: [...state.interfaceState, state.exampleArray[state.interfaceState.length]]
        }));
    },
    deleteLastItem: () => {
        set((state) => ({
            interfaceState: state.interfaceState.slice(0, -1)
        }));
    }
}));

export const useTournamentStore = create(
    (set) => ({
        tournamentType: 'national',
        location: '',
        totalParticipants: 0,
        date: '',
        firstPlace: [
            { name: '', deck: '', deckNote: '', deckLink: '' }
        ],
        secondPlace: [
            { name: '', deck: '', deckNote: '', deckLink: '' }
        ],
        top4: [
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
        ],
        top8: [
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
        ],
        top16: [
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
        ],
        top32: [
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
        ],
        top64: [
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
            { name: '', deck: '', deckNote: '', deckLink: '' },
        ],
        updateField: (arrayName, index, fieldName, value) => {
            set((state) => {
                const newArray = [...state[arrayName]];
                newArray[index][fieldName] = value;
                return { [arrayName]: newArray };
            });
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