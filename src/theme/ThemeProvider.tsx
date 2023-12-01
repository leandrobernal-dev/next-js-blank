"use client";

import { ReactNode, createContext } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeContext = createContext({});

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
}
