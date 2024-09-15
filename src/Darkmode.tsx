import { createContext, PropsWithChildren, useContext, useState } from "react";

type DarkmodeContext = {
  isDarkmode: boolean;
  setIsDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
};
const DarkModeContext = createContext<DarkmodeContext | null>(null);

export function useDarkmode() {
  const context = useContext(DarkModeContext);

  // If the hook is used outside of a provider, throw an error
  if (!context) {
    throw new Error("useDarkmode must be used within a DarkModeProvider");
  }

  return context.isDarkmode; // This returns the context value (which could be a state or method)
}

export function useSetIsDarkmode() {
  const context = useContext(DarkModeContext);

  // If the hook is used outside of a provider, throw an error
  if (!context) {
    throw new Error("useSetIsDarkmode must be used within a DarkModeProvider");
  }

  return context.setIsDarkmode; // This returns the context value (which could be a state or method)
}

export default function DarkmodeProvider({ children }: PropsWithChildren) {
  const [isDarkmode, setIsDarkmode] = useState(false);
  return (
    <DarkModeContext.Provider
      value={{
        isDarkmode,
        setIsDarkmode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}
