import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Main />
    </main>
  );
}
