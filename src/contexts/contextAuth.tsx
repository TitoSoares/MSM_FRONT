import { ReactNode, createContext, useEffect, useState } from "react";

type ContextType = {
    idusuario: string;
    setidusuario: (n:string) => void;
}

export const UsuarioLogadoContext = createContext<ContextType | null>(null);


export const UsuarioLogadoProvider = ({ children }: { children: ReactNode }) => {
    
      const [idusuario, setidusuario] = useState(() => {
        const storedName = sessionStorage.getItem("ContextName");
        return storedName ? storedName : "";

    });     

    useEffect(() => {        
        if (idusuario !== '') {
            sessionStorage.setItem('ContextName', idusuario);
        }   
    } ,[idusuario])


    return (
        <UsuarioLogadoContext.Provider value={{idusuario, setidusuario}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )

}
