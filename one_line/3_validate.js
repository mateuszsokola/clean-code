const validateProducts = (products) => {
  const validProducts = products.filter(isProductValid);

  return products.length === validProducts.length;
};

const isProductValid = (product) => {
  const requiredFields = ["type", "name", "price", "description"];

  const fields = Object.keys(product);
  const missingFields = requiredFields.filter(
    (requiredField) => !fields.includes(requiredField)
  );

  return missingFields.length === 0;
};
