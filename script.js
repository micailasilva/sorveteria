paulo.addEventListener('click', function () {

    var nomeCliente = nome.value;
    var quantiaSorvetes = quantidades.value;
    var saborSorvete = sabores.value;

    //alert(" Nome: " + nomeCliente + " Qnt: " + quantiaSorvetes +  " Sabor: " + saborSorvete);

    pedidoNome.innerHTML = " Nome: " + nomeCliente;
    pedidoQuantia.innerHTML = " Quantia: " + quantiaSorvetes;
    pedidoSabor.innerHTML = " Sabor: " + saborSorvete;
});

