document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('contact-form');
    const table = document.getElementById('contact-table');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
    

    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("numero").value;


    var novaLinha = table.insertRow();   
    var celular1 = novaLinha.insertCell(0);
    var celular2 = novaLinha.insertCell(1);
    celular1.innerHTML = nome;
    celular2.innerHTML = telefone;

    form.reset()
    })
}) 















