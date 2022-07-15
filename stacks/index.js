import SheetsStack from "./SheetsStack";

export default function main(app) {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x",
    environment: {
      DOC_ID: process.env.DOC_ID,
      CLIENT_EMAIL: process.env.CLIENT_EMAIL,
      PRIVATE_KEY: process.env.PRIVATE_KEY
    },
  });

  new SheetsStack(app, "template-google-sheets");
}
