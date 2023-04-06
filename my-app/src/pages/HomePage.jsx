import Content from "../component/content";
import Navbar from "../component/navbar";
import Playbar from "../component/playbar";
import Sidebar from "../component/sidebar";
import Bg from "../component/bg";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Center, Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Homepage(props) {
  const [loading, setLoading] = useState(true);
  let nav = useNavigate();
  const userSelector = useSelector((state) => state.auth);

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
        <>
          <Bg />
          <Content />
          <Navbar />
          <Playbar />
          <Sidebar />
        </>
      )}
    </>
  );
}
