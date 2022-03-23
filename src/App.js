import "./App.css";
import Footer from "./Footer";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="Sydney" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
