import superagent from 'superagent';
import config from "../helpers/config";

const { baseUrlAPI } = config.auth;
const baseAuthURL: string | undefined = baseUrlAPI;

if (!baseAuthURL) {
    throw new Error('baseAuthURL не определен в конфигурации');
}

const user = {
    login: (payload: any) => {
        return superagent
            .post(`${baseAuthURL}/v1/login`)
            .set('Accept', 'application/json, text/plain, */*')
            .set('Content-Type', 'application/json;charset=UTF-8')
            .set('Origin', 'https://mpd.dasreda.ru')
            .send(payload);
    }
};

export default user;


