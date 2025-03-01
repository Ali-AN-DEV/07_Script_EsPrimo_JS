function verificarPrimo() {
    const input = document.getElementById('numeroInput');
    const resultado = document.getElementById('resultado');
    const n = parseInt(input.value);

    resultado.classList.remove('show', 'primo', 'no-primo');
    
    if (isNaN(n) || n < 2) {
        showResult("⚠️ Número inválido", 'no-primo');
        return;
    }

    let esPrimo = true;
    if (n === 2) esPrimo = true;
    else if (n % 2 === 0) esPrimo = false;
    else {
        const limite = Math.sqrt(n);
        for(let i = 3; i <= limite; i += 2) {
            if(n % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    if(esPrimo) {
        showResult(`✨ ¡${n} es un número primo!`, 'primo');
    } else {
        showResult(`❌ ${n} no es primo`, 'no-primo');
    }
}

function showResult(text, className) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = text;
    resultado.className = className + ' show';
}

// Event listeners
document.getElementById('numeroInput').addEventListener('keypress', function(e) {
    if(e.key === 'Enter') verificarPrimo();
});