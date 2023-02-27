class caixaRegistradora {
    constructor() {
      this.cliente = [];
      this.estoque = [];
      this.quantidade = [];
    }
    adicionarEstoque(codigo, nome, preço) {
      this.estoque.push(codigo);
      this.estoque.push(nome);
      this.estoque.push(preço);
      return this.estoque;
    }
    addNome(nome, dinheiro) {
      this.cliente.push(nome);
      this.cliente.push(dinheiro);
  
      return this.cliente;
    }
    iniciarAtendimento(nome) {
      if (nome == this.cliente[0]) {
        return console.log(`Bem vindo ${this.cliente[0]}`);
      } else {
        return console.log(`Nome do cliente está errado`);
      }
    }
    caixaRegistrador(codigo, quantidade) {
      if (codigo == this.estoque[0]) {
        console.log(`Você comprou ${this.quantidade[0]} de ${this.estoque[1]} `);
        return parseInt(this.quantidade.push(quantidade));
      } else {
        return console.log(`Seu codigo esta errado`);
      }
    }
    clienteDinheiro() {
      return this.cliente[1];
    }
    fecharConta() {
      return console.log(
        `Sua compra deu R$${
          this.estoque[2] * this.quantidade[0]
        }, seu troco é de R$${
          parseInt(this.cliente[1]) - this.estoque[2] * this.quantidade[0]
        }`
      );
    }
  }
  
  const ana = new caixaRegistradora();
  
  console.log(ana.adicionarEstoque(542613, "Bolacha", 3.50));
  console.log(ana.addNome("Laura", 100));
  console.log(ana.iniciarAtendimento("Laura"));
  console.log(ana.caixaRegistrador(542613, 3));
  console.log(ana.fecharConta());