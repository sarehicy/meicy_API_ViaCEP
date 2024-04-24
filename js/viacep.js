function limpa_formulario_cep(){
    document.getElementById('i_rua').value=("");
    document.getElementById('i_bairro').value=("");
    document.getElementById('i_cidade').value=("");
    document.getElementById('i_uf').value=("");
}

function meu_callback(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById('i_rua').value=(conteudo.logradouro);
        document.getElementById('i_bairro').value=(conteudo.bairro);
        document.getElementById('i_cidade').value=(conteudo.localidade);
        document.getElementById('i_uf').value=(conteudo.uf);
    }else{
        limpa_formulario_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisa_cep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    if(cep != ""){

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)){

            document.getElementById('i_rua').value="...";
            document.getElementById('i_bairro').value="...";
            document.getElementById('i_cidade').value="...";
            document.getElementById('i_uf').value="...";

            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);

        }else{
            limpa_formulario_cep();
            alert("Formato de CEP inválido.");
        }
    }else{
        limpa_formulario_cep();
    }
};