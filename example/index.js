const meeticApi = require('../dist/cjs').default;
const creds = require('./credentials.json');

const { login, members, interactions } = meeticApi;

async function meeticTest() {
    const isLoggedIn = await login(creds.email, creds.password);
    console.log(isLoggedIn);
    const criterias = {
        hasPicture: true,
        fromAge: 32,
        toAge: 42,
        city: 'Mitry-Mory',
        distance: 5,
    };
    const responseGetSearch = await members.getSearch(criterias);
    console.log(responseGetSearch);
    const specificMember = await members.getProfile(692386849);
    console.log(specificMember)
}
meeticTest();