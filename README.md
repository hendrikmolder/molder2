[![Netlify Status](https://api.netlify.com/api/v1/badges/82f7a776-c7ae-4f72-947a-dff52411330e/deploy-status)](https://app.netlify.com/sites/molder2/deploys)
# Molder v2

_This documentation is being updated._

## Running in development
To start both, Gatsby site and lambda functions, run `npm run develop` which starts both processes.

## Configuring dotenv

Dotenv is recommended for working in the development environment.

1. Use `npm i dotenv` to install dotenv.
2. Create a new file in the root directory of the project called `.env` (please *do not* commit this file).
3. Add the following lines to the `.env` file replacing _[KEY]_ with the actualy key.

```
CONTENTFUL_SPACE_ID=[KEY]
CONTENTFUL_ACCESS_TOKEN=[KEY]
```

