import db from "../db/db.js";

class RankRouboVeiculos {
    async getRankRouboVeiculos() {
        const data = await db
            .select('municipios.municipio as Municipio', db.raw('SUM(ocorrencias.quantidade) as Total'))
            .from('municipios')
            .join('ocorrencias', 'ocorrencias.codIBGE', '=', 'municipios.codIBGE')
            .groupBy('municipios.municipio')
            .orderByRaw('SUM(ocorrencias.quantidade) DESC');
        return data
    }
}

export default new RankRouboVeiculos(); 