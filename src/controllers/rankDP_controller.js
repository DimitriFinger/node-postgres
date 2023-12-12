import rankDP_service from "../services/rankDP_service.js";

class RankDPController {
    async getRankByOcurrence(req, res) {
        console.log('entrou aqui no controller')
        try {
            const data = await rankDP_service.getRankByOcurrence();
            return res.status(201).json(data);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' });
        }
    }
}


export default new RankDPController();