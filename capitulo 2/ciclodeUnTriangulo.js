/*
Ciclo de un triángulo
Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:

#
##
###
####
#####
######
#######
*/

let triangulo = '';

for(let i=0; i<8 ; i++){
    triangulo += '#';
    console.log(triangulo);
}