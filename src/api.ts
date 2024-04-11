
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

    AdiconarOperacao: async(sTipo:String, fValor:String, sIdusuario:String) => {
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
    }

    
}
