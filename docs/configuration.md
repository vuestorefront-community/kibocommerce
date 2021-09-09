# Configuration

Kibo Commerce configuration is located in two places:

- nuxt.config.js is a place where you're configuring properties related only to the frontend part of your application.

- middleware.config.js is a place where you're configuring the Kibo Commerce SDK, Apollo and extensions. You will put there API keys, integration configurations, custom GraphQL queries and new API endpoints.

## Nuxt Kibo Commerce configuration

```js
// nuxt.config.js
['@vue-storefront/kibo/nuxt', {
  i18n: {
    useNuxtI18nConfig: true
  }
}]
```

- `useNuxtI18nConfig` - when this property is set to true, `@vue-storefront/kibo/nuxt` package will use `i18n` config object provided in `nuxt.config.js`. When set to false, `i18n` config should be declared directly inside this package configuration. You can read more about `i18n` config in Vue Storefront [here](../advanced/internationalization.md)

## Middleware kibo configuration

You can read more about middleware configuration in Vue Storefront [here](../advanced/server-middleware.md#configuration)

```js
// middleware.config.js
module.exports = {
  integrations: {
    kibo: {
      location: '@vue-storefront/kibo-api/server',
      configuration: {
        api: {
            accessTokenUrl:  "https://home.mozu.com/api/platform/applications/authtickets/oauth",
            clientId:  "KIBO.APP.1.0.0.Release",
            sharedSecret:  "1d16d7d35b8542cba2f99216f20dca32",
            apiHost: "https://{{KIBO_STOREFRONT_URL}}.com"
        }
      }
    }
  }
};
```

### `api`

- `apiHost` - link to your Kibo Commerce GraphQL API instance.
- `accessTokenUrl` - link to Kibo Commerce Authentication Server. It is used to request an access token from Kibo Commerce OAuth 2.0 service.
- `clientId` - Unique Application (Client) ID of your Application
- `sharedSecret` - Secret API key used to authenticate application. Viewable from your [Kibo eCommerce Dev Center](https://mozu.com/login)

Visit [Kibo documentation](https://apidocs.kibong-perf.com/?spec=graphql#auth) for more details on API authentication


By default, the internationalization settings, such as `currency`, `locale`, and `country` are loaded from cookies. To override this behavior you can set those properties inside the `configuration` section.

```js
// middleware.config.js
module.exports = {
  integrations: {
    kibo: {
      location: '@vue-storefront/kibo-api/server',
      configuration: {
        api: { /* ... */}
        currency: 'EUR',
        locale: 'en',
        country: 'US'
      }
    }
  }
};


### `acceptLanguage`


```js
acceptLanguage: ['en-gb', 'en-us']
```

### `languageMap`

If you supply a `languageMap` during setup this will be used to map a locale to the accepted languages.

```js
languageMap: {
  'en-gb': ['en-gb', 'en-us'],
  'en-us': ['en-us', 'en-gb'],
}
```
