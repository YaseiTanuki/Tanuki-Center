import { createContext, useState, FunctionComponent, ReactNode } from "react"

type BackgoundContextType = {
    BackgroundColor: string | undefined,
    setBackgroundColor: React.Dispatch<React.SetStateAction<string>>
}

const iBackgroundContextState = {
    BackgroundColor: undefined,
    setBackgroundColor: () => {}
}

const BackgroundContext = createContext<BackgoundContextType>(iBackgroundContextState);

interface BackgoundContextProps {
    children: ReactNode
}

export const BackgroundContextProvider: FunctionComponent<BackgoundContextProps> = (Props) => {
    const [BackgroundColor, setBackgroundColor] = useState('BrightBackground');
    return (
        <BackgroundContext.Provider value={{BackgroundColor, setBackgroundColor}}>
            {Props.children}
        </BackgroundContext.Provider>
    )
}

export default BackgroundContext;