exports.main = async () => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `This is a template sheets serverless function. You can use this URL to access google sheets as a database.`,
  };
}
