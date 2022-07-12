import "./App.css";
import { Footer, Header, Main } from "./frontend/layouts";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPosts, getAllUsers } from "./frontend/features";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

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
