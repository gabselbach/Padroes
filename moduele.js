var cadastro = (function() {
    let name = '';
    let idade = 0;
    function setDados(nome,id){
        name=nome;
        idade=id;
    }
    function getDados(){
        console.log('nome:', name ,'e a idade é:', idade);
    }
    return {
        publicMethod: function(nome,id) {
                setDados(nome,id);
                getDados();
          }
    }
})();
cadastro.publicMethod('gabriella','14'); // is TypeError protected by the module closure