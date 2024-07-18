export default function MealSinglePage({ params }) {
  return (
    <>
      <h1>Meal Single Page</h1>
      <p>{params.slug}</p>
    </>
  );
}
