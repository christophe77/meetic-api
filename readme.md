# meetic-api

Meetic API provides you the basis to create your own meetic bot or to automatize your researches / likes / dislikes.

## How to use

Install using your favorite package manager :

    yarn add meetic-api
    or
    npm install meetic-api

Then, in your main js file import the package and login to meetic with your credentials

    import meeticApi from 'meetic-api';
    or
    const meeticApi = require('meetic-api').default;
    const { login, members, interactions } = meeticApi;
    async function  meeticTest() {
     await  login('email@gmail.com', 'password');
     const  criterias = {
      hasPicture:  true,
      fromAge:  32,
      toAge:  42,
      city:  'Paris',
      distance:  5,
     };
     const  responseGetSearch = await  members.getSearch(criterias);
     console.log(responseGetSearch);
    }
    meeticTest();

## Current available API

### Login

This is the first thing to do before calling any other function.

    const { login } = meeticApi;
    await  login('email@gmail.com', 'password');

### Members

    const { members } = meeticApi;
    // Get your profile
    const me = await members.getMe();
    // Get meetic members selection
    const members = await members.getMembers();
    // Get a specific profile
    const aboid = 123456789;
    const specificMember = await members.getProfile(aboid);
    // Perform a search
    const criterias = {
     hasPicture:  true,
     fromAge:  32,
     toAge:  42,
     city:  'Paris',
     distance:  5,
    };
    const responseGetSearch = await members.getSearch(criterias);

### Interactions

    const { interactions } = meeticApi;
    // Get profile visits
    const visits = await interactions.getVisits();
    // Like a user
    const aboid = 123456789;
    await interactions.postSwipeYes(aboid);
    // Dislike a user
    const aboid = 123456789;
    await interactions.postSwipeNo(aboid);

### Inbox

    const { inbox } = meeticApi;
    // Get messages
    const messages = await inbox.getMessages();
    // Post message
    const messageResponse = await inbox.postMessage(123456789, "hey salut toi!");
    console.log(messageResponse);
    // List invitations sent
    const sentInvitations = await inbox.sentInvitations();
    console.log(messageResponse);
    // Delete messages by aboid
    const messageResponse = await inbox.deleteMessage(123456789);
    console.log(messageResponse);

## Work in progress

- Documentation of all criterias id in order to perform better search
- New API routes

## Types

All types can be found on meetic-api folder / types

## Know issue

Sometimes the app is stuck on the login part because of reCaptcha.
