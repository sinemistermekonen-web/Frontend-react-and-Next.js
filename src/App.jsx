import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <section className="hero">
          <p className="welcome">WELCOME TO</p>
          <h2>Addis Café</h2>
          <p>Fresh Ethiopian coffee and delicious food.</p>
        </section>

        <Menu />
      </main>

      <Footer />
    </div>
  );
}

export default App;