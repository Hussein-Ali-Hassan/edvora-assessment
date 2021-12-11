export default function getUniqueValues(items, property1, property2) {
  if (property1 && property2)
    return items
      .map((product) => product[property1][property2])
      .filter((product, index, self) => self.indexOf(product) === index);

  return items
    .map((product) => product[property1])
    .filter((product, index, self) => self.indexOf(product) === index);
}
