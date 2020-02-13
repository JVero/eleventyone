exports.handler = async (event, context) => {
  const link = event.queryStringParameters.link || "njace.us"
  try {
    return { statusCode: 200, body: `this should go to ${link}!` };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
