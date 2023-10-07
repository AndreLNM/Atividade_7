// André Martinho

class Cliente {
    constructor(nome, telefone, renda, email) {
      this.nome = nome;
      this.telefone = telefone;
      this.renda = renda;
      this.email = email;
    }
  
    verificarCredito() {
      return new Promise((resolve, reject) => {
        if (this.renda > 2000) {
          resolve(" Crédito aprovado");
        } else {
          reject(" Crédito recusado");
        }
      });
    }
  }
  
  const cliente=new Cliente("André", "19 99433-0577", 2320, "andre.martinho@fatec.gov.sp.br");
  
  cliente.verificarCredito()
  .then((resultado)=>{
    console.log(`${cliente.nome}:${resultado}`);
  })
  .catch((erro)=>{
    console.log(`${cliente.nome}:${erro}`);
  });
