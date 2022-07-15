import * as sst from "@serverless-stack/resources";
import getRoutes from "../src/models/routes";

export default class SheetsStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);
    
  
    // Create a HTTP API
    this.api = new sst.Api(this, "Api", {
      defaultFunctionProps: {
        timeout: 60,
        description: "Template Google Sheet Serverless Function",
      },
      routes: {
        ...getRoutes(scope),
      },
    });

    // Show the endpoint in the output
    this.addOutputs({
      ApiEndpoint: this.api.url,
    });
  }
}
