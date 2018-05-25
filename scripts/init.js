$(document).ready(function () {
    
    buscarEstadosCidades();

});

function buscarEstadosCidades() {
   var estados;
   var cidades;
   var requisicaoEstados = new XMLHttpRequest();
   var requisicaoCidades = new XMLHttpRequest();

   var tipo = 'GET';
   var assincrona = true;

   requisicaoEstados.open(tipo, 'https://servicodados.ibge.gov.br/api/v1/localidades/estados', assincrona);
   requisicaoEstados.send()

        requisicaoEstados.onreadystatechange = function () {

            if(requisicaoEstados.readyState === XMLHttpRequest.DONE && requisicaoEstados.status === 200) {

                var obj = JSON.parse(requisicaoEstados.responseText);
                console.log(obj);

                // document.getElementById('estados').innerHTML = '<option ></option>';
            } else {
               // document.getElementById('resultado').innerHTML = "erro!"
            }
        };
    }

