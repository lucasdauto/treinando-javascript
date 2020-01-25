var pacientes = document.querySelectorAll('.paciente');

let tabela = document.querySelector('#tabela-pacientes');


tabela.addEventListener("dblclick", function (event) {
    let alvoEvento = event.target;
    let paiDoAlvo = alvoEvento.parentNode;

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(() => {
        //removi a linha inteira
        paiDoAlvo.remove();
    }, 490)

})

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove();
//     })
// });