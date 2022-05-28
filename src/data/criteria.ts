enum attribute {
  COST,
  BENEFIT,
}

const criteriaWP = [
  {
    criteria: "temprature",
    attribute: attribute.COST,
    weight: 2,
  },
  {
    criteria: "turbidity",
    attribute: attribute.COST,
    weight: 3,
  },
  {
    criteria: "solid",
    attribute: attribute.COST,
    weight: 4,
  },
  {
    criteria: "distance",
    attribute: attribute.COST,
    weight: 3,
  },
  {
    criteria: "terrain",
    attribute: attribute.COST,
    weight: 3,
  },
  {
    criteria: "debit",
    attribute: attribute.BENEFIT,
    weight: 2,
  },
];

const criteriaSAW = {};

export { criteriaWP, criteriaSAW, attribute };
