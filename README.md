# serverless-demo
Serverless-demo is a nodejs based, prototype, API boilerplate that will be used to create
serverless, AWS lambda-based, APIs in the future. The central API resource theme is 'items'.
When building a new API based on this prototype, replace the 'items' resource with the
resource name of your choice. This boilerplate will contain basic, example functionality
for all CRUD operations, and any supporting logic such as serialization, and MongoDB
integration, schema validation, CI/CD using Codehsip CI, unit testing with mocha and chai,
api endpoint testing using dredd and this API blueprint document, as well as documentation
using the apiary platform.

This service uses [JSON:API](https://jsonapi.org/) specifications for requests and responses.
[JSON Schema](https://json-schema.org/) is used to validate requests, and describe requests and responses in the API Blueprint. See apiary.apib file.

For full API resource reference, see the [Apiary documentation here](https://serverlessdemo.docs.apiary.io/).

Supports Nodejs v6.x and up.

Notes for creating a new serverless service:
- npm init # Create new package.json
- npm i serverless --save-dev # Install the serverless framework as a development dependency 
- sls create -t aws-nodejs # Create a new serverless function using the node.js runtime. (See docs for other supported runtimes.)

For local invocation of local serverless install: 
`node ./node_modules/serverless/bin/serverless deploy`

When using .aws/credentials, serverless will use the default one, (the first one listed), or you may specify in the serverless.yml, and/or you may use the cli option --profile:
serverless deploy --aws-profile qa
Best practice should be to always specify the qa profile in the serverless.yml and override with prod when deploying to the prod account. 

# To use:
- clone repo
- `npm start` - Local, hot reloading service
- `npm run unit` - Unit tests only
- `npm run dredd` - api endpoint tests
- `npm test` - Unit and api endpoint tests combined

# CI
This service is setup to run in codeship pro. 
