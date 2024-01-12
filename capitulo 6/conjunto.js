/*
Conjuntos
El entorno de JavaScript estándar proporciona otra estructura de datos llamada Set (“Conjunto”). Al igual que una instancia de Map, un conjunto contiene una colección de valores. Pero a diferencia de Map, este no asocia valores con otros—este solo rastrea qué valores son parte del conjunto. Un valor solo puede ser parte de un conjunto una vez—agregarlo de nuevo no tiene ningún efecto.

Escribe una clase llamada Conjunto. Como Set, debe tener los métodos add (“añadir”), delete (“eliminar”), y has (“tiene”). Su constructor crea un conjunto vacío, añadir agrega un valor al conjunto (pero solo si no es ya un miembro), eliminar elimina su argumento del conjunto (si era un miembro) y tiene retorna un valor booleano que indica si su argumento es un miembro del conjunto.

Usa el operador ===, o algo equivalente como indexOf, para determinar si dos valores son iguales.

Proporcionale a la clase un método estático desde que tome un objeto iterable como argumento y cree un grupo que contenga todos los valores producidos al iterar sobre el.

*/

class Conjunto {
    constructor(){
      this.conjunto = [];
    }

  static desde(elementos){
    let conjunto = new Conjunto();

    for(let elemento of elementos){
      conjunto.add(elemento);
    }

    return conjunto;
  }

  add(nuevoElemento){
    if(!this.has(nuevoElemento)){
      this.conjunto.push(nuevoElemento);
    }
  }

  delete(elemento){
    let indice = this.conjunto.indexOf(elemento);
    if(indice !== -1){
      this.conjunto.splice(indice,1);
    }
  }

  has(elemento){
    for(let elementoAux of this.conjunto){
      if(elementoAux === elemento){
        return true;
      }
    }
    return false;
  }

  }
  
  let conjunto = Conjunto.desde([10, 20]);
  console.log(conjunto.has(10));
  // → true
  console.log(conjunto.has(30));
  // → false
  conjunto.add(10);
  conjunto.delete(10);
  console.log(conjunto.has(10));
  // → false

console.log(conjunto);


  