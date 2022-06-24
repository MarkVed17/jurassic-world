import "./App.css";
import { Footer, Header, Main } from "./frontend/layouts";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster position="bottom-center" reverseOrder={true} />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
