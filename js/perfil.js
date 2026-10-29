/* ---------- Estado ---------- */
const estados = ["Ausente (programando)", "En línea", "No disponible", "Escuchando: "];
let estadoActual = 0;
document.getElementById("cambiar-estado").addEventListener("click", () => {
  estadoActual = (estadoActual + 1) % estados.length;
  const texto = estados[estadoActual] + (estadoActual === 3 ? temaActual() : "");
  document.getElementById("estado-texto").textContent = texto;
  document.getElementById("nick-estado").textContent = `(${texto})`;
});

/* ---------- Reproductor ----------*/
const PLAYLIST_URL = "https://open.spotify.com/playlist/4udgNkjK0KvOATW0ZVzxaI";
const CANCIONES = [
  { titulo: "Perfect Symmetry", artista: "Keane", url: "" },
  { titulo: "Aunque Tú No Lo Sepas", artista: "", url: "" },
  { titulo: "Mr. Brightside", artista: "The Killers", url: "" },
  { titulo: "Read My Mind", artista: "The Killers", url: "" }
];

let indice = 0;
const cancion = () => CANCIONES[indice];
const temaActual = () => cancion().artista ? `${cancion().titulo} - ${cancion().artista}` : cancion().titulo;
function pintarTema() {
  document.getElementById("tema").textContent = cancion().titulo;
  document.getElementById("nombre-lista").textContent = cancion().artista || "Mi playlist";
  document.getElementById("tiempo").textContent = "en Spotify ↗";
}
document.getElementById("play").setAttribute("aria-label", "Escuchar en Spotify");
document.getElementById("play").addEventListener("click", () => {
  window.open(cancion().url || PLAYLIST_URL, "_blank", "noopener");
});
document.getElementById("anterior").addEventListener("click", () => { indice = (indice + CANCIONES.length - 1) % CANCIONES.length; pintarTema(); });
document.getElementById("siguiente").addEventListener("click", () => { indice = (indice + 1) % CANCIONES.length; pintarTema(); });
pintarTema();

/* ---------- Top 8 ---------- */
document.getElementById("top8").innerHTML = proyectos.slice(0, 8).map(p =>
  `<a class="amigo" href="proyecto.html?p=${p.id}"><span class="amigo__foto">${escapar(p.icono)}</span><span class="amigo__nombre">${p.nombre}</span></a>`).join("");

/* ---------- enlace del perfil ---------- */
document.getElementById("copiar-url").addEventListener("click", () => {
  const aviso = document.getElementById("copiado");
  navigator.clipboard.writeText(location.origin + location.pathname)
    .then(() => { aviso.hidden = false; setTimeout(() => { aviso.hidden = true; }, 1800); })
    .catch(() => {});
});