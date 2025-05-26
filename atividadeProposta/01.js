function ehBissexto(ano) {
    return (ano % 4 === 0) && (ano % 100 !== 0 || ano % 400 === 0);
}

function ehDataValida(dia, mes, ano) {
    // Verifica se o ano, mês e dia são números inteiros
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
        return false;
    } else if (mes === 2) { // Fevereiro
        if (ehBissexto(ano)) { // Ano bissexto
            if (dia > 29) { // Verifica se o dia é maior que 29
                return false;
            }
        } else {
            if (dia > 28) { // Verifica se o dia é maior que 28
                return false;
            }
        }
    } else if (
        (mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30
    ) {
        return false;
    } else if (dia > 31) {
        return false;
    } else {
        return true;
    }
}