import { ReactNode, createContext, useEffect, useState } from "react";

type ContextType = {
    idusuario: string;
    setidusuario: (n:string) => void;
    nome: string;
    setnome: (n:string) => void;
    email: string;
    setemail: (n:string) => void;
    cpf: string;
    setcpf: (n:string) => void;
    cnpj: string;
    setcnpj: (n:string) => void;
}

export const UsuarioLogadoContext = createContext<ContextType | null>(null);


export const UsuarioLogadoProvider = ({ children }: { children: ReactNode }) => {
    
      const [idusuario, setidusuario] = useState(() => {
        const storedidusuario = sessionStorage.getItem("ContextIdusuario");
        return storedidusuario ? storedidusuario : "";

    });     

    const [nome, setnome] = useState(() => {
        const storednome = sessionStorage.getItem("ContextNome");
        return storednome ? storednome : "";

    });     

    const [email, setemail] = useState(() => {
        const storedemail = sessionStorage.getItem("ContextEmail");
        return storedemail ? storedemail : "";

    }); 
    
    const [cpf, setcpf] = useState(() => {
        const storedcpf = sessionStorage.getItem("ContextCpf");
        return storedcpf ? storedcpf : "";

    }); 

    const [cnpj, setcnpj] = useState(() => {
        const storedcnpj = sessionStorage.getItem("ContextCnpj");
        return storedcnpj ? storedcnpj : "";

    }); 

    useEffect(() => {        
        if (idusuario !== '') {
            sessionStorage.setItem('ContextIdusuario', idusuario);
        }   
        if (nome !== '') {
            sessionStorage.setItem('ContextNome', nome);
        }   
        if (email !== '') {
            sessionStorage.setItem('ContextEmail', email);
        } 
        if (cpf !== '') {
            sessionStorage.setItem('ContextCpf', cpf);
        } 
        if (cnpj !== '') {
            sessionStorage.setItem('ContextCnpj', cnpj);
        }      
    } ,[idusuario, nome, email])


    return (
        <UsuarioLogadoContext.Provider value={{idusuario, setidusuario, nome, setnome, email, setemail, cpf, setcpf, cnpj, setcnpj}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )

}
