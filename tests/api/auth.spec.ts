import user from "../../framework/api/api_requests";
import config from "../../framework/helpers/config";
import randomString from "../../framework/helpers/fixtures";

const username: string | undefined = config.auth.credentials.username;
const password: string | undefined = config.auth.credentials.password;

describe('API Авторизация', () => {
    it('Успешная авторизация', async () => {
        const res = await user.login({
            username: username,
            password: password
        });

        expect(res.status).toBe(200);

        expect(res.body).toHaveProperty('token');
        expect(typeof res.body.token).toBe('string');

        expect(res.body).toHaveProperty('apps');
        expect(Array.isArray(res.body.apps)).toBe(true);

        expect(res.body).toHaveProperty('roles');
        expect(Array.isArray(res.body.roles)).toBe(true);
        expect(res.body.roles).not.toBe([])

        expect(res.body).toHaveProperty('id');
        expect(typeof res.body.id).toBe('number');

        expect(res.body).toHaveProperty('maskedName');
        expect(typeof res.body.maskedName).toBe('string');

        expect(res.body).toHaveProperty('maskedPhone');
        expect(typeof res.body.maskedPhone).toBe('string');

        expect(res.body).toHaveProperty('publicName');
        expect(typeof res.body.publicName).toBe('string');

        expect(res.body).toHaveProperty('publicEmail');
        expect(typeof res.body.publicEmail).toBe('string');

        expect(res.body).toHaveProperty('publicPhone');
        expect(typeof res.body.publicPhone).toBe('string');

        expect(res.body).toHaveProperty('active');

        expect(res.body).toHaveProperty('dispatchAgree');
        expect(typeof res.body.dispatchAgree).toBe('boolean');
    })
    it('Отображается соответствующий статус-код и текст ошибки при вводе неверного пароля', async () => {
        const wrongPassword = randomString.alpha();

        try {
            const res = await user.login({
                username: username,
                password: wrongPassword
            });
        } catch (err: any) {
            expect(err.response.status).toBe(401);

            expect(err.response.body).toHaveProperty('errors');
            expect(Array.isArray(err.response.body.errors)).toBe(true);

            expect(err.response.body.errors).toHaveLength(1);
            err.response.body.errors.forEach((item: any) => {
                expect(item).toHaveProperty('_error');
                expect(item._error).toBe('Неправильный логин или пароль');
            });
        }
    });
})
