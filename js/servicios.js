document.getElementById("lista-servicios").innerHTML = servicios.map(([nombre, ideal, incluye]) => `
  <article class="panel servicio">
    <h2 class="panel__titulo">${nombre}</h2>
    <div class="panel__cuerpo"><p class="servicio__ideal">${ideal}</p><ul>${incluye.map(i => `<li>${i}</li>`).join("")}</ul></div>
  </article>`).join("");
