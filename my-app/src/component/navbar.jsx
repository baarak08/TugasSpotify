import { Box, Stack } from "@chakra-ui/react";
import "../css/spotify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@chakra-ui/react";

import gambar1 from "../asset/foto1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth_types } from "../redux/types";

export default function Navbar() {
  const userSelector = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const nav = useNavigate();

  function logout() {
    dispatch({ type: auth_types.logout });
    localStorage.removeItem("user");
    nav("/login");
  }

  return (
    <div className="Container1_Mikhael">
      <div className="Container2_Mikhael">
        <div className="Container3_Mikhael">
          <div className="RightLeft_Mikhael">
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ color: "#ffffff" }}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: "#ffffff" }}
            />
          </div>
        </div>
        <div className="garis_Mikhael"></div>
        {/* ujung kanan bungkus */}
        <div className="UpgradeProfil_Mikhael">
          <div className="Upgrade1_Mikhael">
            <Button
              colorScheme="black"
              variant="outline"
              borderRadius={20}
              h="8"
            >
              Upgrade
            </Button>
          </div>
          <div className="Profil_Mikhael">
            <div className="Gambar2_Mikhael">
              <img src={gambar1} alt="" />
            </div>
            <div onClick={logout} style={{ cursor: "pointer" }}>
              {" "}
              {userSelector?.email}{" "}
            </div>
            <FontAwesomeIcon icon={faCaretDown} style={{ color: "#ffffff" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Mikhael
