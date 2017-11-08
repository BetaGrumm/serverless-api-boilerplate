# serverless-dmeo
A demo prototype for a AWS Lambda workflow using the Serverless framework.

Notes for creating a new serverless service:
npm init # Create new package.json
npm i serverless --save-dev # Install the serverless framework as a development dependency 
sls create -t aws-nodejs # Create a new serverless function using the node.js runtime. (See docs for other supported runtimes.)

For local invocation of local serverless install: 
node ./node_modules/serverless/bin/serverless deploy

When using .aws/credentials, serverless will use the default one, (the first one listed), or you may specify in the serverless.yml, and/or you may use the cli option --profile:
serverless deploy --aws-profile qa
Best practice should be to always specify the qa profile in the serverless.yml and override with prod when deploying to the prod account. 


