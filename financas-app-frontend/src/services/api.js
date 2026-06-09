import axios from "axios";

const api = axios.create({
    baseURL:'http://"SEU-IP-LOCAL":3333' //INSERIR AQUI SEU IP 'http://*{SEU IP}*:3333

})

export default api 