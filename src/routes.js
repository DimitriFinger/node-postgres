import express from 'express';
import rankDP_controller from './controllers/rankDP_controller.js';


const routes = new express.Router();


routes.get('/rank_dps', rankDP_controller.getRankByOcurrence)



export default routes;