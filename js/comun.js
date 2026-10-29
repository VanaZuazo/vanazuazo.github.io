const sinMovimiento = matchMedia("(prefers-reduced-motion: reduce)").matches;
const azar = arr => arr[Math.floor(Math.random() * arr.length)];
const rosados = ["--fucsia", "--rosa", "--rosa-claro", "--rosa-oscuro"];
const escapar = t => t.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---------- Enlaces ---------- */
document.querySelectorAll("[data-enlace]").forEach(a => {
  const url = ENLACES[a.dataset.enlace];
  if (url) a.href = url;
});

/* ---------- Comentarios ---------- */
document.querySelectorAll("[data-comentarios]").forEach(caja => {
  caja.innerHTML = comentarios.map(([ini, autor, fecha, texto]) =>
    `<div class="comentario"><span class="comentario__foto">${ini}</span><div><div class="comentario__cab"><b>${autor}</b> · ${fecha}</div><p>${texto}</p></div></div>`).join("");
});

/* ---------- Abrir y cerrar el chat ---------- */
const chat = document.getElementById("chat");
const aviso = document.getElementById("aviso-msn");
const burbuja = document.getElementById("burbuja-msn");
function abrirChat(e) {
  if (e) e.preventDefault();
  chat.hidden = false; aviso.hidden = true; burbuja.hidden = true;
  document.getElementById("mensaje-chat").focus();
}
document.querySelectorAll("[data-abrir-chat]").forEach(el => el.addEventListener("click", abrirChat));
document.getElementById("cerrar-chat").addEventListener("click", () => { chat.hidden = true; burbuja.hidden = false; });
document.getElementById("cerrar-aviso").addEventListener("click", () => { aviso.hidden = true; burbuja.hidden = false; });
document.getElementById("buscador").addEventListener("submit", e => e.preventDefault());

/* ---------- contacto ----------*/
const CONTACTO = {
  telegram: "vanazuazo",
  correo: "vanacode@outlook.com"
};

const historial = document.getElementById("historial");
let ultimoMensaje = "";

function agregarMensaje(quien, texto, clase) {
  const div = document.createElement("div");
  div.className = "mensaje " + clase;
  const cab = document.createElement("div"); cab.className = "mensaje__quien"; cab.textContent = `${quien} dice:`;
  const p = document.createElement("p"); p.className = "mensaje__texto"; p.textContent = texto;
  div.append(cab, p); historial.append(div); historial.scrollTop = historial.scrollHeight;
  return div;
}
function agregarSistema(texto) {
  const p = document.createElement("p"); p.className = "mensaje--sistema"; p.textContent = texto;
  historial.append(p); historial.scrollTop = historial.scrollHeight;
}
function enlaceGmail(cuerpo) {
  const asunto = "Hola Silvana, te escribo desde tu portafolio";
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACTO.correo)}&su=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}
function ofrecerContacto(texto) {
  const div = agregarMensaje("Silvana", texto, "mensaje--silvana");
  const botones = document.createElement("div"); botones.className = "contacto-botones";

  const tg = document.createElement("a");
  tg.className = "contacto-boton contacto-boton--telegram";
  tg.href = `https://t.me/${CONTACTO.telegram}`; tg.target = "_blank"; tg.rel = "noopener";
  tg.textContent = "Telegram";
  tg.addEventListener("click", () => {
    if (!ultimoMensaje) return;
    navigator.clipboard.writeText(ultimoMensaje)
      .then(() => agregarSistema("Copié tu mensaje: pégalo en Telegram."))
      .catch(() => {});
  });

  const gm = document.createElement("a");
  gm.className = "contacto-boton contacto-boton--gmail";
  gm.href = enlaceGmail(ultimoMensaje); gm.target = "_blank"; gm.rel = "noopener";
  gm.textContent = "Gmail";

  const correo = document.createElement("p");
  correo.className = "contacto-correo";
  correo.textContent = `o escríbeme a ${CONTACTO.correo}`;

  botones.append(tg, gm);
  div.append(botones, correo);
  historial.scrollTop = historial.scrollHeight;
}

/* Al abrir la página, el chat ya ofrece los dos caminos */
ofrecerContacto("me puedes contactar por:");

const RESPUESTAS_CHAT = [
  "uy eso suena a proyecto ☆",
  "jajaja ok, me interesa",
  "estoy en modo Ausente (programando), pero esto lo quiero leer xD"
];
document.getElementById("formulario-chat").addEventListener("submit", e => {
  e.preventDefault();
  const campo = document.getElementById("mensaje-chat");
  const texto = campo.value.trim();
  if (!texto) return;
  ultimoMensaje = texto;
  agregarMensaje("Tú", texto, "mensaje--visita");
  campo.value = "";
  const escribiendo = document.getElementById("escribiendo");
  escribiendo.textContent = "Silvana está escribiendo un mensaje...";
  setTimeout(() => {
    escribiendo.textContent = "";
    agregarMensaje("Silvana", azar(RESPUESTAS_CHAT), "mensaje--silvana");
    ofrecerContacto("este chat no me llega de verdad, mándamelo por aquí y te respondo:");
  }, 1200);
});
document.getElementById("mensaje-chat").addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); document.getElementById("formulario-chat").requestSubmit(); }
});

/* ---------- Zumbido y guiños ---------- */
let audio;
function sonarZumbido() {
  try {
    audio = audio || new AudioContext();
    const osc = audio.createOscillator(), vol = audio.createGain();
    osc.type = "square"; osc.frequency.value = 140;
    vol.gain.setValueAtTime(0.08, audio.currentTime);
    vol.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.6);
    osc.connect(vol).connect(audio.destination); osc.start(); osc.stop(audio.currentTime + 0.6);
  } catch (e) { /* sin sonido */ }
}
function crearEscena(duracion, oscura) {
  const escena = document.createElement("div");
  escena.className = "escena" + (oscura ? " escena--oscura" : "");
  document.body.append(escena);
  setTimeout(() => escena.remove(), duracion);
  return escena;
}
const guinos = {
  zumbido() {
    chat.classList.remove("is-temblando"); void chat.offsetWidth;
    if (!sinMovimiento) chat.classList.add("is-temblando");
    sonarZumbido();
    agregarSistema("Has enviado un zumbido.");
  },
  beso() { crearEscena(1900, true).innerHTML = `<div class="guino-texto beso">XOXO</div>`; },
  corazones() {
    const escena = crearEscena(3600);
    for (let i = 0; i < 26; i++) {
      const c = document.createElement("span");
      c.className = "corazon";
      c.style.cssText = `left:${Math.random() * 100}%;--t:${14 + Math.random() * 26}px;--c:var(${azar(rosados)});--d:${2 + Math.random() * 1.5}s;animation-delay:${Math.random() * 0.8}s`;
      escena.append(c);
    }
  },
  risa() {
    const letras = [..."JAJAJA"].map((l, i) => `<span style="animation-delay:${i * 0.08}s">${l}</span>`).join("");
    crearEscena(2200, true).innerHTML = `<div class="guino-texto risa">${letras}</div>`;
  },
  globo() {
    const escena = crearEscena(3000);
    const globo = document.createElement("div"); globo.className = "globo"; escena.append(globo);
    setTimeout(() => {
      const r = globo.getBoundingClientRect();
      globo.classList.add("is-explota");
      for (let i = 0; i < 40; i++) {
        const p = document.createElement("span"); p.className = "confeti";
        const ang = Math.random() * Math.PI * 2, dist = 120 + Math.random() * 280;
        p.style.cssText = `left:${r.left + r.width / 2}px;top:${r.top + r.height / 2}px;--c:var(${azar(rosados)});--x:${Math.cos(ang) * dist}px;--y:${Math.sin(ang) * dist + 120}px;--d:${0.9 + Math.random() * 0.6}s`;
        escena.append(p);
      }
    }, 1650);
  },
  guino() { crearEscena(2300).innerHTML = `<div class="guino-avatar"><span class="guino-avatar__globo">;) holi</span><img src="img/avatar.png" alt=""></div>`; }
};
/* ---------- Guiños animados ----------*/
const GUINOS_ANIMADOS = [
  { id: "alien", nombre: "Alien", segundos: 10 },
  { id: "enojo", nombre: "Enojo", segundos: 9 },
  { id: "globo", nombre: "Globo", segundos: 8.5, provisional: true }
];
function reproducirGuinoAnimado({ id, segundos }) {
  if (sinMovimiento) return;
  const escena = crearEscena(segundos * 1000, true);
  const img = document.createElement("img");
  img.className = "guino-imagen";
  img.alt = "";
  img.src = `img/guinos/${id}.webp`;
  escena.append(img);
  const sonido = new Audio(`img/guinos/${id}.m4a`);
  sonido.volume = 0.6;
  sonido.play().catch(() => {});
  setTimeout(() => sonido.pause(), segundos * 1000);
}

const grupoGuinos = document.querySelector(".guinos");
if (grupoGuinos) {
  const quedan = ["zumbido", "corazones"];
  grupoGuinos.querySelectorAll("[data-guino]").forEach(b => { if (!quedan.includes(b.dataset.guino)) b.remove(); });

  GUINOS_ANIMADOS.forEach(guino => {
    const b = document.createElement("button");
    b.type = "button"; b.dataset.guino = guino.id; b.textContent = guino.nombre;
    b.hidden = true;
    grupoGuinos.append(b);

    const prueba = new Image();
    prueba.onload = () => { guinos[guino.id] = () => reproducirGuinoAnimado(guino); b.hidden = false; };
    prueba.onerror = () => { if (guino.provisional) b.hidden = false; };
    prueba.src = `img/guinos/${guino.id}.webp`;
  });

  grupoGuinos.addEventListener("click", e => {
    const b = e.target.closest("[data-guino]");
    if (!b || !guinos[b.dataset.guino]) return;
    guinos[b.dataset.guino]();
    if (b.dataset.guino !== "zumbido") agregarSistema(`Has enviado un guiño: ${b.textContent}.`);
  });
}

/* ---------- Cursor ---------- */
if (!sinMovimiento && matchMedia("(pointer: fine)").matches) {
  let ultimo = 0;
  document.addEventListener("mousemove", e => {
    const ahora = performance.now();
    if (ahora - ultimo < 45) return;
    ultimo = ahora;
    const b = document.createElement("span");
    b.className = "brillito";
    b.textContent = azar(["✦", "★", "✧", "·"]);
    b.style.cssText = `left:${e.clientX + 6}px;top:${e.clientY + 4}px;color:var(${azar(rosados)})`;
    document.body.append(b);
    setTimeout(() => b.remove(), 800);
  });
}