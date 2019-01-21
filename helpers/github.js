const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // Use the request module to request repos for a specific
  // user from the github API

  let options = {
    //GET /users/:username/repos
    url: `https://api.github.com/users/${username}/repos`,
    //Accept: application/vnd.github.v3+json,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    },
    sort: 'created',
    direction: 'desc'
  };

  request(options, (err, res, body) => {
    if (err) {
      console.log('GH API call error: ' + err);
    } else {
      console.log('GH API call success! number of repos is ' + JSON.parse(body).length);
      console.log('body from GH is');
      console.log(JSON.parse(body));
      callback(JSON.parse(body))
    }
  })

}

module.exports.getReposByUsername = getReposByUsername;