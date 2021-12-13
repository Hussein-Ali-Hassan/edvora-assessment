export default async function getProducts(req, res) {
  try {
    const result = await fetch("https://assessment-edvora.herokuapp.com/");
    const products = await result.json();

    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "An error occured. Please try again." });
  }
}
