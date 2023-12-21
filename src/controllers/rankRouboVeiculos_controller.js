import rankRouboVeiculos_service from "../services/rankRouboVeiculos_service.js";

class RankRouboVeiculosController {
    async getRankRouboVeiculos(req, res) {
        try {
            const data = await rankRouboVeiculos_service.getRankRouboVeiculos();
            return res.status(201).json(data);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' });
        }
    }
}


export default new RankRouboVeiculosController();