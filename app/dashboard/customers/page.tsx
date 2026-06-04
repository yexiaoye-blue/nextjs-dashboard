export default async function Customers() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <p>Customers Page</p>;
}
