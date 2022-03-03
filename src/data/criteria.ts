enum attribute {
  COST,
  BENEFIT,
}

const criteriaWP = [
  {
    criteria: "tempature",
    attribute: attribute.BENEFIT,
    weight: 2,
  },
  {
    criteria: "turbidity",
    attribute: attribute.BENEFIT,
    weight: 3,
  },
  {
    criteria: "solid",
    attribute: attribute.BENEFIT,
    weight: 4,
  },
  {
    criteria: "distance",
    attribute: attribute.COST,
    weight: 3,
  },
];

const criteriaSAW = {};

export { criteriaWP, criteriaSAW, attribute };
