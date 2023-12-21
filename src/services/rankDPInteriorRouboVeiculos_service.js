import db from "../db/db.js";

class rankDPInteriorRouboVeiculos {
    async getrankDPInteriorRouboVeiculos() {
        const data = await db
            .select('delegacias.nome as DP', db.raw('SUM(ocorrencias.quantidade) as Total'))
            .from('delegacias')
            .join('ocorrencias', 'ocorrencias.codDP', '=', 'delegacias.codDP')
            .join('municipios', 'ocorrencias.codIBGE', '=', 'municipios.codIBGE')
            .orWhere('ocorrencias.ocorrencia', '=', 'furto_veiculos', 'ocorrencias.ocorrencia', '=', 'roubo_veiculo')
            .groupBy('delegacias.nome')
            .orderByRaw('SUM(ocorrencias.quantidade) DESC');
        return data
    }
}

export default new rankDPInteriorRouboVeiculos(); 