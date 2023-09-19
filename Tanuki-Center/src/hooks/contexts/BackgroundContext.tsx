import { createContext, useState, FunctionComponent, ReactNode } from "react"

type BackgoundContextType = {
    BackgroundColor: boolean | null,
    setBackgroundColor: React.Dispatch<React.SetStateAction<boolean>>
}

const iUserContextState = {
    BackgroundColor: null,
    setBackgroundColor: () => {}
}

const BackgroundContext = createContext<BackgoundContextType>(iUserContextState);

interface BackgoundContextProps {
    children: ReactNode
}

export const BackgroundContextProvider: FunctionComponent<BackgoundContextProps> = (Props) => {
    const [BackgroundColor, setBackgroundColor] = useState(true);
    return (
        <BackgroundContext.Provider value={{BackgroundColor, setBackgroundColor}}>
            {Props.children}
        </BackgroundContext.Provider>
    )
}

export default BackgroundContext;