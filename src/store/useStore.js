import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

function generateTicketId() {
  return uuidv4().replace(/[^A-Z0-9]/gi, '').substring(0, 5).toUpperCase();
}

function getRandomSection() {
  const sections = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return sections.charAt(Math.floor(Math.random() * sections.length));
}

export const useStore = create((set) => ({
  events: [],
  cart: [],
  tickets: [],

  fetchEvents: async () => {
    const res = await fetch('https://santosnr6.github.io/Data/events.json');
    const data = await res.json();
    set({ events: data.events });
  },

  addToCart: (event, quantity) =>
    set((state) => {
      const existing = state.cart.find((item) => item.event.id === event.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.event.id === event.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        return {
          cart: [...state.cart, { event, quantity }],
        };
      }
    }),

  removeFromCart: (eventId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.event.id !== eventId),
    })),

  clearCart: () => set({ cart: [] }),

  generateTickets: () =>
    set((state) => {
      const tickets = [];

      state.cart.forEach(({ event, quantity }) => {
        const section = getRandomSection();
        const startSeat = Math.floor(Math.random() * 200) + 100;

        for (let i = 0; i < quantity; i++) {
          tickets.push({
            id: generateTicketId(),
            event,
            section,
            seat: startSeat + i,
          });
        }
      });

      return { tickets };
    }),
}));
