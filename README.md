# sails-service-social

![Build Status](https://img.shields.io/travis/ghaiklor/sails-service-social.svg) ![Coverage](https://img.shields.io/coveralls/ghaiklor/sails-service-social.svg) ![Downloads](https://img.shields.io/npm/dm/sails-service-social.svg) ![npm version](https://img.shields.io/npm/v/sails-service-social.svg) ![dependencies](https://img.shields.io/david/ghaiklor/sails-service-social.svg) ![dev dependencies](https://img.shields.io/david/dev/ghaiklor/sails-service-social.svg) ![License](https://img.shields.io/npm/l/sails-service-social.svg)

Service for Sails framework with social features.

## List of supported social networks

- Facebook

## Getting Started

Install this module.

```shell
npm install sails-service-social
```

Then require it in your service.

```javascript
// api/services/SocialService.js
module.exports = require('sails-service-social');
```

That's it, you can create social instances for your needs in your project.

```javascript
// api/controllers/SocialController.js
var facebook = SocialService.create('facebook');

module.exports = {
  friends: function(req, res) {
    facebook
      .getFriends('<FB_ACCESS_TOKEN>')
      .then(res.ok)
      .catch(res.serverError);
  }
};
```

## Configuration

You can save any value what you want in your configuration object.

## API

Each of social instances has following methods:

### getFriends([config])

Get friends from social networks:

`config` - Configuration object:

  - `config.accessToken` - access token received from social network

### getPhotos([config])

Get photos from social networks:

`config` - Configuration object:

  - `config.accessToken` - access token received from social network

## Examples

### FacebookSocial

```javascript
var facebook = SocialService.create('facebook');

facebook
  .getFriends('<FB_ACCESS_TOKEN>')
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
