function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');
    
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoDiv.innerHTML = 'Por favor, ingresa valores válidos';
        resultadoDiv.style.display = 'block';
        resultadoDiv.className = '';
        resultadoDiv.classList.add('resultado-bajopeso');
        return;
    }
    const alturaEnMetros = altura / 100;
    const imc = peso / (alturaEnMetros * alturaEnMetros);
    
    let categoria;
    let clase;
    
    if (imc < 18.5) {
        categoria = 'Bajo peso';
        clase = 'resultado-bajopeso';
    } else if (imc < 25) {
        categoria = 'Peso normal';
        clase = 'resultado-normal';
    } else if (imc < 30) {
        categoria = 'Sobrepeso';
        clase = 'resultado-sobrepeso';
    } else {
        categoria = 'Obesidad';
        clase = 'resultado-sobrepeso';
    }
    
    resultadoDiv.innerHTML = `
        <h3>Tu IMC: ${imc.toFixed(2)}</h3>
        <p>Categoría: ${categoria}</p>
    `;
    resultadoDiv.style.display = 'block';
    resultadoDiv.className = '';
    resultadoDiv.classList.add(clase);
} 