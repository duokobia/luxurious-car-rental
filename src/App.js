import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" exact element={<Vehicles />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/contacts" exact element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
