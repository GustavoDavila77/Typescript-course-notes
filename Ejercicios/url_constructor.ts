interface QueryParams {
    page?: number;
    limit?: number;
    search?: string;
}

function construirUrl(dominio: string, ruta?: string, params?: QueryParams): void {
    console.log(`https://${dominio}${ruta ? `${ruta}` : ''}${params ? '?' + `${params.page? `page=${params.page}` : ''}${params.limit? `&limit=${params.limit}` : ''}${params.search? `&search=${params.search}` : ''}` : ''}`);
}

// Pruebas
//construirUrl("api.ejemplo.com");
construirUrl("api.ejemplo.com", "/usuarios", { limit: 10, page: 1, });

