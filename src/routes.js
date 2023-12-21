import express from 'express';
import rankDP_controller from './controllers/rankDP_controller.js';
import rankRouboVeiculos_controller from './controllers/rankRouboVeiculos_controller.js';
import rankDPInteriorRouboVeiculos_controller from './controllers/rankDPInteriorRouboVeiculos_controller.js';

const routes = new express.Router();


routes.get('/rank_dps', rankDP_controller.getRankByOcurrence)
routes.get('/rank_veiculos', rankRouboVeiculos_controller.getRankRouboVeiculos)
routes.get('/rank_interior', rankDPInteriorRouboVeiculos_controller.getRankDPInteriorRouboVeiculos)



export default routes;