# template-google-sheets

1. Configure your [AWS cli](https://sst.dev/chapters/configure-the-aws-cli.html)

    ```
    aws configure
    ```
2. Run `npm install`

3. Configure your [.env](./.env)
    ``` 
    DOC_ID is the id from the google sheets url
    CLIENT_EMAIL is the service account email from google cloud platform
    PRIVATE_KEY is the generated key From the service account
    ```
    3.1. [Create a service account or get an existing one](https://cloud.google.com/iam/docs/creating-managing-service-account-keys)
    3.2. [Create or get an existing service account key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys)


4. Change the default names in [stacks/index.js](./src/stacks/index.js) and [stacks/SheetsStack.js](./src/stacks/SheetsStack.js)

5. Change the app name in [sst.json](./sst.json)

6. Run the app
    ```
    npm run local
        - To run the app using a local stage
    or 
    npm run start
        - To run the app using your default stage
    ```

## Deploying to AWS (CI/CD)

To deploy to aws you need to either manually create the serverless function using github actions,
or use [seed.run](https://seed.run/docs/)