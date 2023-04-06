import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
// import { ChakraProvider } from "@chakra-ui/react";

import Homepage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import routes from "./Routes/Routes";
import { useEffect, useState } from "react";
import { Center, Spinner } from "@chakra-ui/react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //   //masuk pada saat load page
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Center w="100vw" h="100vh">
          <Spinner size="xl" />
        </Center>
      ) : (
        <Routes>
          {routes.map((val) => val)}
          {/* <Route path="/home" element={<Homepage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route> */}
        </Routes>
      )}
    </>
  );
}

export default App;
