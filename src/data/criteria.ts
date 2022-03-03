enum attribute {
  COST,
  BENEFIT,
}

const criteriaWP = {
  tempature: {
    attribute: attribute.BENEFIT,
    weight: 2,
  },
  turbidity: {
    attribute: attribute.BENEFIT,
    weight: 3,
  },
  solid: {
    attribute: attribute.BENEFIT,
    weight: 4,
  },
  distance: {
    attribute: attribute.COST,
    weight: 3,
  },
};

const criteriaSAW = {};

export { criteriaWP, criteriaSAW };
