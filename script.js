function validarEntradaNombre(event) {
    const key = event.key;
    if (!/^[a-zA-Z\s]+$/.test(key)) {
        event.preventDefault();
    }
}

function validarEntradaEdad(event) {
    const key = event.key;
    if (!/^[0-9]+$/.test(key)) {
        event.preventDefault();
    }
}
