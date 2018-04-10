const civicSip = require('civic-sip-api');

// Step 4: Initialize instance passing your appId and secret.
const civicClient = civicSip.newClient({
  appId: 'CO-ABCDEFG1230934545',
  prvKey: PRIVATE_KEY,
  appSecret: APP_SECRET,
});
civicClient.exchangeCode(jwtToken)
    .then((userData) => {
        // store user data and userId as appropriate
        console.log('userData = ', JSON.stringify(userData, null, 4));
    }).catch((error) => {
        console.log(error);
    });
