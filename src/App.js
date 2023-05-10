import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RegistrationForm from "./pages/Registration/RegistrationForm";

function App() {
  return (
    <>
      <ToastContainer />

      <Header />
      <RegistrationForm />
      <Footer />
    </>
  );
}

export default App;
