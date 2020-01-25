let botaoBuscar = document.querySelector('#buscar-pacientes');

botaoBuscar.addEventListener("click",() =>{
    console.log('Buscando pacientes. . . .');
    
    let xhr = new XMLHttpRequest();

    xhr.open("GET","https://api-pacientes.herokuapp.com/paciente");

    xhr.addEventListener("load",() =>{
        let mensagem = document.querySelector('#erro-ajax');

        if(xhr.status == 200){
            mensagem.classList.add('invisivel');
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);
    
            pacientes.forEach((paciente) =>{
                adicionaPacienteNaTabela(paciente);
            })
        }
        else{
            mensagem.classList.remove('invisivel');
            console.error(xhr.status);
            console.error(xhr.responseText);
        }
    })

    xhr.send();
});