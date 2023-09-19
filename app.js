/* function queEs() {
    return 'Las funciones sirven para simplificar los procesos al código.';
}

console.log(queEs()); */

/* Tipos de funciones */

/* 1. Declarativas */

/* function declarativas() {
    console.log('Las declarativas son funciones nomales ---function() {}---.');
}

declarativas(); */

/* 2. Expresion */

/* function expresion() {
    console.log('Las expresión son con una variable y con flecha al parametro. Por ejemplo: ---const x = () =>');
}

expresion(); */

const sueldo = 200;

function verificarSueldo(number) {
    switch (number) {
        case 500:
            console.log('Sueldo normal.');
            break;
        case 400:
            console.log('Sueldo bueno.');
            break;
        case 300:
            console.log('Sueldo medio.');
            break;
        case 200:
            console.log('Sueldo bajo.');
            break;
        case 100:
            console.log('Sueldo crítico.');
            break;
        default:
            console.log('Corrupción.');
            break;
    }
}

verificarSueldo(sueldo);