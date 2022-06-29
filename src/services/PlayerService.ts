import axios from 'axios'
import { Player } from '@/models/Player'

const apiClient = axios.create({
    baseURL: 'https://localhost:7225/api/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});
//get all players from json object in db
export default {
    getPlayers() {
        return apiClient.get('/Player');
    },
    //get 1 player from json object by id
    getPlayer(id: string) {
        return apiClient.get('/Player/' + id);
    },
    //post new player
    postPlayer(player: Player) {
        return apiClient.post('/Player', player);
    },
    //edit player
    editPlayer(player: Player) {
        return apiClient.put('/Player/' + player.id, player);
    },
    //delete player
    deletePlayer(id: string) {
        return apiClient.delete('/Player/' + id);
    }
};