async function getData() {
  const res = await fetch("https://api.quran.gading.dev/surah");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export default function Surah() {
  const data = getData();
  return (
    <div>
      <h1>Surah Page</h1>
    </div>
  );
}
