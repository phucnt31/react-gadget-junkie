// .netlify/functions/create-payment-intent

exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, shipping_free, total_amount } = JSON.parse(event.body);

    console.log(cart);
    return {
      statusCode: 200,
      body: JSON.stringify(cart),
    };
  }
  return {
    statusCode: 200,
    body: "Create Payment Intent",
  };
};
