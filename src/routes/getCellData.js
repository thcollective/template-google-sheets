import { GoogleSpreadsheet } from "google-spreadsheet";
exports.main = async (event) => {
  const doc = new GoogleSpreadsheet(process.env.DOC_ID);
  // Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
  const query = event.queryStringParameters;
  const cells = JSON.parse(query.cells);
  console.log(cells);
  const range = query.range;
  console.log(range);

  await doc.useServiceAccountAuth({
    // env var values are copied from service account credentials generated by google
    // see "Authentication" section in docs for more info
    client_email: process.env.CLIENT_EMAIL,
private_key: process.env.PRIVATE_KEY
});
  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  await sheet.loadCells(range);

  var cellData = [];
  console.log("before for each");
  await cells.forEach(async (cell) => {
    var data = await sheet.getCellByA1(cell);
    cellData.push(data.value);
  });

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(cellData),
  };
};