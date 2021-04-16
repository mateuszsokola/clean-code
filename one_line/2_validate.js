const products = [
  {
    type: "electronics",
    name: "Notebook for $599",
    price: 59900, // in cents
    description: "A notebook",
  },
  {
    type: "electronics",
    name: "Notebook for $999",
    price: 99900, // in cents
    description: "More expensive notebook",
  },
  {
    type: "electronics",
    name: "Notebook for $1599",
    price: 159900, // in cents
    description: "Yet another notebook",
  },
];

const validateProducts = (products) => {
  const requiredFields = ["type", "name", "price", "description"];

  let isValid = true;

  for (const product of products) {
    const validationResult = validateProduct(product, requiredFields);

    if (!validationResult) {
      isValid = false;
      break;
    }
  }

  return isValid;
};

const validateProduct = (product, requiredFields) => {
  let isValid = true;

  const fields = Object.keys(product);

  for (const requiredField of requiredFields) {
    if (!fields.includes(requiredField)) {
      isValid = false;
      break;
    }
  }

  return isValid;
};
