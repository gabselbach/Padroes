var cadastro = (function () {
    var cad;
    function createCadastro() {
        var object = {nome: "Gabriella", idade: "24"};
        return object;
    };
    return {
        getCadastro: function () {
            if (!cad) {
                cad = createCadastro();
            }
            return cad;
        }
    };
})();
var usuario = cadastro.getCadastro();

console.log("nome "+usuario.nome);
console.log("idade "+usuario.idade);