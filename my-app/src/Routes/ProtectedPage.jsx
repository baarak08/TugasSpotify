import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProtectedPage({ children, guestOnly, needLogin }) {
  const nav = useNavigate();
  // const user = JSON.parse(localStorage.getItem("user"));
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    if (guestOnly && user?.email) {
      return nav("/home");
    } else if (needLogin && !user?.email) {
      return nav("/login");
    }
  });

  return children;
}
