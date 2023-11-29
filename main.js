function tocaSomPom(){
document.querySelector('#som_tecla_pom').play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
//enquanto
while(contador<listaDeTeclas.length){
const instrumento = listasdeteclas[contador].classlist[1];

    console.log(instrumento);
   
    listaDeTeclas[0].onclick = tocaSomPom;
    contador = contador + 1;


    console.log(contador);

}