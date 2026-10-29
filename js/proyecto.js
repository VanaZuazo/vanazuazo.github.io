function pintarProyecto(p) {
  const pos = proyectos.indexOf(p);
  document.title = `Silvana Guardia :: ${p.nombre}`;
  document.getElementById("caso-titulo").textContent = p.nombre;
  document.getElementById("caso-tipo").textContent = `(${p.tipo})`;
  document.getElementById("caso-foto").textContent = p.icono;
  document.getElementById("caso-resumen").textContent = p.resumen;
  document.getElementById("caso-etiquetas").innerHTML = p.etiquetas.map(e => `<span>${e}</span>`).join("");
  document.getElementById("caso-enlaces").innerHTML = p.enlaces.length
    ? p.enlaces.map(([texto, url]) => `<a class="boton-rosa" href="${url}" target="_blank" rel="noopener">${texto}</a>`).join("")
    : `<span class="pendiente">Enlaces en camino.</span>`;
  const conTexto = p.bloques.filter(([, parrafos]) => parrafos.length);
  const bloques = conTexto.map(([titulo, parrafos]) => {
    const cuerpo = parrafos.length > 1
      ? `<ul>${parrafos.map(x => `<li>${escapar(x)}</li>`).join("")}</ul>`
      : `<p>${escapar(parrafos[0])}</p>`;
    return `<section class="bloque"><h3>${titulo}</h3>${cuerpo}</section>`;
  });
  const faltan = p.bloques.filter(([, parrafos]) => !parrafos.length).map(([t]) => t.toLowerCase());
  if (faltan.length) bloques.push(`<p class="pendiente">Caso en construcción. Pronto subo: ${faltan.join(", ")}.</p>`);
  if (!p.bloques.length) bloques.push(`<p class="pendiente">Caso en construcción. Pronto subo el proceso completo.</p>`);
  document.getElementById("caso-bloques").innerHTML = bloques.join("");
  const ant = proyectos[(pos + proyectos.length - 1) % proyectos.length], sig = proyectos[(pos + 1) % proyectos.length];
  const a = document.getElementById("caso-anterior"), s = document.getElementById("caso-siguiente");
  a.href = `proyecto.html?p=${ant.id}`; a.textContent = `◀ ${ant.nombre}`;
  s.href = `proyecto.html?p=${sig.id}`; s.textContent = `${sig.nombre} ▶`;
}

const id = new URLSearchParams(location.search).get("p");
const elegido = proyectos.find(p => p.id === id);
if (elegido) pintarProyecto(elegido);
else location.replace("proyectos.html");
