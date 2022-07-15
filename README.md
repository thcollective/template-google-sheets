# template-google-sheets

1. Configure your AWS cli

    ```
    aws configure
    ```
2. Run `npm install`

3. Configure your `.env`

4. Change the default names in `stacks/index.js` and `stacks/SheetsStack.js`\

5. Change the app name in `sst.json`

5. Run the app
    ```
    npm run local
    - To run the app using a local stage
    or 
    npm run start
        - To run the app using your default stage
    ```

## Deploying to AWS (CI/CD)

Check the docs in this link https://seed.run/docs/