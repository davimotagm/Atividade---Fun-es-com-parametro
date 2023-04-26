// ATIVIDADE 1
function funcaoPositiva(x) {
    if (x > 0) {
        return "P";
    } else {
        return "N";
    }
}
console.log(funcaoPositiva(5))
console.log(funcaoPositiva(0))

// ATIVIDADE 2
function quantidade(digitos) {
    return digitos.toString().length;
}
console.log(quantidade(12));

// ATIVIDADE 3
function facaSoma(a, b) {
    if (a > b) {
        let soma = a + b
        return soma
    } else {
        return "O primeiro número não é maior que o segundo."
    }
}
console.log(facaSoma(3, 2));
console.log(facaSoma(2, 3));

// ATIVIDADE 4
function vOuF(palavra, letra) {
    if (palavra.charAt(0).toLowerCase() === letra.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
console.log(vOuF("Davi", "d"));
console.log(vOuF("Casa", "F"));

// ATIVIDADE 5
function horarioFuncionamento(inicio, termino) {
    if (inicio >= 11 && termino <= 19) {
        return "O /pergunta está em horário de funcionamento.";
    } else {
        return "O /pergunta não está em horário de funcionamento."
    }
}
console.log(horarioFuncionamento(12, 14));
console.log(horarioFuncionamento(10, 19));
console.log(horarioFuncionamento(11, 20));