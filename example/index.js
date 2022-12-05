const meeticApi = require('../dist/cjs').default

const { login, members, interactions } = meeticApi;

async function meeticTest() {
    await login('aaa@gmx.fr', 'aaa');
    const criterias = {
        hasPicture: true,
        fromAge: 32,
        toAge: 42,
        city: 'Mitry-Mory',
        distance: 5,
    };
    const responseGetSearch = await members.getSearch(criterias);
    console.log(responseGetSearch)
}
meeticTest()