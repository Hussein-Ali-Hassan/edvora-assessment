export default async function getProducts(req, res) {
  const result = await fetch("https://assessment-edvora.herokuapp.com/");
  const products = await result.json();

  res.status(200).json({ products });
}
