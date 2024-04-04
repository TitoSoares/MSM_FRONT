import { ReactNode, createContext, useEffect, useState } from "react";

type ContextType = {
    idusuario: string;
    setidusuario: (n:string) => void;
}

export const UsuarioLogadoContext = createContext<ContextType | null>(null);


export const UsuarioLogadoProvider = ({ children }: { children: ReactNode }) => {
    
      const [idusuario, setidusuario] = useState(() => {
        const storedName = localStorage.getItem("ContextName");
        return storedName ? storedName : "";

    });     

    useEffect(() => {        
        if (idusuario !== '') {
           localStorage.setItem('ContextName', idusuario);
           //alert('usuario ' + name)
        }   
    } ,[idusuario])


    return (
        <UsuarioLogadoContext.Provider value={{idusuario, setidusuario}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )

}
