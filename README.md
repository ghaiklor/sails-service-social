# sails-service-social

![Build Status](https://img.shields.io/travis/ghaiklor/sails-service-social.svg)
![Coverage](https://img.shields.io/coveralls/ghaiklor/sails-service-social.svg)

![Downloads](https://img.shields.io/npm/dm/sails-service-social.svg)
![Downloads](https://img.shields.io/npm/dt/sails-service-social.svg)
![npm version](https://img.shields.io/npm/v/sails-service-social.svg)
![License](https://img.shields.io/npm/l/sails-service-social.svg)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![dependencies](https://img.shields.io/david/ghaiklor/sails-service-social.svg)
![dev dependencies](https://img.shields.io/david/dev/ghaiklor/sails-service-social.svg)

Service for Sails framework with social features.

## List of supported social networks

- Facebook

## Getting Started

Install this module.

```shell
npm install sails-service-social
```

Then require it in your service and create social instance.

```javascript
// api/services/SocialService.js
import SocialService from 'sails-service-social';

export default SocialService('facebook');

// api/controllers/SocialController.js
export default {
  friends: function(req, res) {
    SocialService
      .getFriends('<FB_ACCESS_TOKEN>')
      .then(res.ok)
      .catch(res.negotiate);
  }
};
```

## Configuration

You can store access token in config (but really, why you need that?):

`config.accessToken` - This access token will be used if you don't specify access token in methods arguments;

## API

Each of social instances has following methods:

### getProfile([accessToken], [config])

Get profile from social network. Returns Promise.

`accessToken` - {String} Access token received from social network

`config` - {Object} Configuration object with additional options to social API

### getFriends([accessToken], [config])

Get friends from social network. Returns Promise.

`accessToken` - {String} Access token received from social network

`config` - {Object} Configuration object with additional options to social API

### getPhotos([accessToken], [config])

Get photos from social network. Returns Promise.

`accessToken` - {String} Access token received from social network

`config` - {Object} Configuration object with additional options to social API

### getPosts([accessToken], [config])

Get posts from social network. Returns Promise.

`accessToken` - {String} Access token received from social network

`config` - {Object} Configuration object with additional options to social API

## Examples

### FacebookSocial

```javascript
let facebook = SocialService('facebook');

facebook
  .getProfile('<FB_ACCESS_TOKEN>', {fields: ['id', 'name', 'email', 'photos']})
  .then(console.log.bind(console))
  .catch(console.error.bind(console));
```

## License

The MIT License (MIT)

Copyright (c) 2015 Eugene Obrezkov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
