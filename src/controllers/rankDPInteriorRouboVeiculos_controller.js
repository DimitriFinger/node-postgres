import rankDPInteriorRouboVeiculos_service from "../services/rankDPInteriorRouboVeiculos_service.js";

class RankDPInteriorRouboVeiculos {
    async getRankDPInteriorRouboVeiculos(req, res) {
        try {
            const data = await rankDPInteriorRouboVeiculos_service.getrankDPInteriorRouboVeiculos();
            return res.status(201).json(data);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' });
        }
    }
}


export default new RankDPInteriorRouboVeiculos();