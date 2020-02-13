exports.handler = async (event, context) => {
    const link = event.queryStringParameters.link || "njace.us"
    try {
      return { 
         statusCode: 301,
         headers: {
             Location: `https://${link}`
         }
        } 
    } catch (err) {
      return { statusCode: 500, body: err.toString() };
    }
  };