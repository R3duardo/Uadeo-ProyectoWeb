document.getElementById('cotizacionForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const numeroCotizacion = document.getElementById('numeroCotizacion').value;
  const descripcion = document.getElementById('descripcion').value;
  const precio = parseFloat(document.getElementById('precio').value);
  const porcentajeInicial = parseFloat(document.getElementById('porcentajeInicial').value);
  const plazo = parseInt(document.getElementById('plazo').value);

  const pagoInicial = precio * (porcentajeInicial / 100);
  const totalFinanciar = precio - pagoInicial;
  const pagoMensual = totalFinanciar / plazo;

  document.getElementById('resNumeroCotizacion').textContent = numeroCotizacion;
  document.getElementById('resDescripcion').textContent = descripcion;
  document.getElementById('resPrecio').textContent = precio.toFixed(2);
  document.getElementById('resPorcentajeInicial').textContent = porcentajeInicial;
  document.getElementById('resPlazo').textContent = `${plazo} meses`;
  document.getElementById('resPagoInicial').textContent = pagoInicial.toFixed(2);
  document.getElementById('resTotalFinanciar').textContent = totalFinanciar.toFixed(2);
  document.getElementById('resPagoMensual').textContent = pagoMensual.toFixed(2);

  document.getElementById('resultado').style.display = 'block';
}); 