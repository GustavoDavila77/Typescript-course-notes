function construirUrl(dominio, ruta, params) {
    console.log("https://".concat(dominio).concat(ruta ? "".concat(ruta) : '').concat(params ? '?' + "".concat(params.page ? "page=".concat(params.page) : '').concat(params.limit ? "&limit=".concat(params.limit) : '').concat(params.search ? "&search=".concat(params.search) : '') : ''));
}
// Pruebas
//construirUrl("api.ejemplo.com");
construirUrl("api.ejemplo.com", "/usuarios", { limit: 10, page: 1, });
