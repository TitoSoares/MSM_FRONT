
export const api = {

    CriarConta: async (nome: string, email: string, cpf: string, cnpj: string, senha: string) => {
        const response = await fetch('https://msm-api.onrender.com/usuarios', {
            method: 'POST',
            body: JSON.stringify({
                NOME: nome,
                EMAIL: email,
                CPF: cpf,
                CNPJ: cnpj,
                SENHA: senha,
            }),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });

        let json = await response.json()
        return (json)
    },

    Logar: async(username:string, password:String) => {
        {            
           
            let response = await fetch('https://msm-api.onrender.com/usuarios/login',
            {              
                method: 'POST',
                body: JSON.stringify
                ({        
                   EMAIL:username, 
                   SENHA:password
                }),                  
                headers: {              
                    'Content-Type': 'application/json; charset=utf-8'
                    }                
               
             }  
             );
            let json = await response.json();        
   
            console.log(json);
            return json;
        }
    },

    Alterar: async(ID:string, NOME:string, SENHA:string, EMAIL:string) => {
        {     
            let req = {};


            if (NOME) {
                req = {NOME:NOME}
            }
            else if (SENHA) {
                req = {SENHA:SENHA}
            }
            else if (EMAIL) {
                req = {EMAIL:EMAIL}
            }

            else if (NOME && SENHA) {
                req = {NOME:NOME, 
                       SENHA:SENHA}
            }
            else if (NOME && EMAIL) {
                req = {NOME:NOME, 
                       EMAIL:EMAIL}
            }

            else if (SENHA && EMAIL) {
                req = {SENHA:SENHA, 
                       EMAIL:EMAIL}
            }

            else if (SENHA && EMAIL && NOME) {
                req = {NOME:NOME, 
                       EMAIL:EMAIL, 
                       SENHA:SENHA,}
            }
           
            

            let response = await fetch('https://msm-api.onrender.com/usuarios/' + ID,
            {              
                method: 'PUT',
                body: JSON.stringify
                (        
                    req
                ),                  
                headers: {              
                    'Content-Type': 'application/json; charset=utf-8'
                    }                
               
             }  
             );
            let json = await response.json();        
   
            console.log(json);
            return json;
        }
    },

    Excluir: async(ID:string) => {
        {            
           
            let response = await fetch('https://msm-api.onrender.com/usuarios/' + ID,
            {              
                method: 'DELETE',
                body: JSON.stringify
                ({}),                  
                headers: {              
                    'Content-Type': 'application/json; charset=utf-8'
                    }                
               
             }  
             );
            let json = await response.json();        
   
            console.log(json);
            return json;
        }
    },

    AdiconarOperacao: async(sTipo:Boolean, fValor:number, sIdusuario:String) => {
        {            
           
            let response = await fetch('https://msm-api.onrender.com/entrada_saida',
            {              
                method: 'POST',
                body: JSON.stringify
                ({        
                   tipo:sTipo, 
                   valor:fValor,
                   idusuario:sIdusuario 
                }),                  
                headers: {              
                    'Content-Type': 'application/json; charset=utf-8'
                    }                
               
             }  
             );    
            let json = await response.json();        
   
            console.log(json);
            return json;
        }
    },

    Lista: async (ID: string) => {

        let response = await fetch('https://msm-api.onrender.com/entrada_saida/' + ID)

        let json = await response.json()
            return (json)
    },

    ExcluirOperação: async(ID:string) => {
        {            
           
            let response = await fetch('https://msm-api.onrender.com/entrada_saida/' + ID,
            {              
                method: 'DELETE',
                body: JSON.stringify
                ({}),                  
                headers: {              
                    'Content-Type': 'application/json; charset=utf-8'
                    }                
               
             }  
             );
            let json = await response.json();        
   
            console.log(json);
            return json;
        }
    },
}
