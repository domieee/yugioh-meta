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
    titles: [
        'First Place',
        'Second Place',
        'Top 4',
        'Top 8',
        'Top 16',
        'Top 32',
        'Top 64'
    ],
    addTournamentRow: () => {
        set((state) => ({
            interfaceState: [...state.interfaceState, state.exampleArray[state.interfaceState.length]]
        }));
    },
    deleteLastItem: () => {
        set((state) => {
            if (state.interfaceState.length > 0) {
                const newInterfaceState = state.interfaceState.slice(0, -1);
                return {
                    interfaceState: newInterfaceState
                };
            }
            return state; // No items left to remove, return the unchanged state
        });
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
        },
        fetchObjectsFromInterfaceState: async (useTournamentStore) => {
            const interfaceState = useInterfaceStore.getState().interfaceState;
            const objects = [];

            interfaceState.forEach((state) => {
                const objectArray = useTournamentStore[state];

                if (objectArray) {
                    objects.push(objectArray);
                }
            });
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}fetch-new-tournament`,
                {
                    method: 'POST',
                    headers: {
                        "Access-Control-Allow-Origin": '*',
                        "Content-Type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({
                        "tournamentType": useTournamentStore.tournamentType,
                        "location": useTournamentStore.location,
                        "totalParticipants": useTournamentStore.totalParticipants,
                        "date": useTournamentStore.date,
                        "players": objects
                    })
                },
            )

            if (res.ok) {
                console.log('first')
            } else {
                console.log('nop')
            }
            return objects;
        },
    })
)   