import db from "../db/db.js";

class RankDPService {
    async getRankByOcurrence() {
        const data = await db
            .select('delegacias.nome as DP', db.raw('SUM(ocorrencias.quantidade) as Total'))
            .from('delegacias')
            .join('ocorrencias', 'ocorrencias.codDP', '=', 'delegacias.codDP')
            .join('municipios', 'ocorrencias.codIBGE', '=', 'municipios.codIBGE')
            .groupBy('delegacias.nome')
            .orderByRaw('SUM(ocorrencias.quantidade) DESC');



        return data
    }
}

export default new RankDPService(); 