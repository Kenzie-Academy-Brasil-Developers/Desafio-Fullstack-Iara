import { ToastContainer } from "react-toastify"
import { RoutesMain } from "./routes"
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { Loading } from "./components/Loading";
import "./styles/index.scss";


function App({ toggleTheme, isDarkMode }) {
    const { loading } = useContext(UserContext);
  return (
    <>
      {loading ? <Loading/> : <RoutesMain/>}
      <ToastContainer position="bottom-right" autoClose={2000}/>
    </>
  )
}

export default App
