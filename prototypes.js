
var Usuario = function(nome,id,cidade) {
    this.name = nome;
    this.idade = id;
    this.city = cidade;
    

};
 
Usuario.prototype = {
    cadastro: function (sexo) {
        var sexo = sexo;
        console.log(sexo);
    }
};
 

var pessoa1 = new Usuario('Gabriella',23,'pelotas');
var pessoa2 = new Usuario('joao',50,'porto');

// Chamando o método dizerOla em Pessoa .
pessoa1.cadastro('feminino'); // hello