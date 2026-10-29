document.getElementById("album").innerHTML = proyectos.map(p => `
  <a class="tarjeta" href="proyecto.html?p=${p.id}">
    <span class="tarjeta__foto">${escapar(p.icono)}</span>
    <span class="tarjeta__nombre">${p.nombre}</span>
    <span class="tarjeta__resumen">${p.resumen}</span>
    <span class="etiquetas">${p.etiquetas.map(e => `<span>${e}</span>`).join("")}</span>
  </a>`).join("");
