import { createContext, useState, useContext, useLayoutEffect } from "react";

type MobileContextProps = {
  children: JSX.Element;
};

export const MobileData = createContext(false);

export default function MobileContext({ children }: MobileContextProps) {
  const [ismobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      window.innerWidth < 1000 ? setIsMobile(true) : setIsMobile(false);
    }

    window.addEventListener("resize", updateSize);

    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <MobileData.Provider value={ismobile}>
      {children}
    </MobileData.Provider>
  );
}

export function useMobile() {
  const context = useContext(MobileData);
  return context;
}
