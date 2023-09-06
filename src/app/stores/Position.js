import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const usePosition = create(
  persist(
    (set, get) => ({
      kota: "Jombang",
      kabupaten: "Jawa Timur",
    }),
    {
      name: "Position",
      storage: createJSONStorage(() => localStorage),
      version: 1,
    }
  )
);
