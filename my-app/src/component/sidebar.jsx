import { Box, Flex, Icon } from "@chakra-ui/react";
import "../css/spotify.css";
import SpotifyLogo from "../assets/img/Spotify.png";
import { RiHomeFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

export default function Sidebar() {
  return (
    <Box bgColor={"black"} id="boxS">
      <Flex id="spotifyS">
        <img src={SpotifyLogo} className="logoS" alt="" />
      </Flex>

      <Box bgColor={"black"} id="homeS">
        <Flex bgColor={"black"} className="flexS">
          <Icon as={RiHomeFill} height="24px" width="24px"></Icon>Home
        </Flex>
        <Flex className="flexS">
          <Icon as={FiSearch} height="24px" width={"24px"}></Icon>
          Search
        </Flex>
        <Flex className="flexS">
          <Icon as={VscLibrary} height="24px" width={"24px"}></Icon>
          Your Library
        </Flex>
      </Box>

      <Box id="playlistS">
        <Flex className="flexS">
          <Icon as={AiOutlinePlusSquare} height="24px" width={"24px"}></Icon>
          Create Playlist
        </Flex>
        <Flex className="flexS">
          <Icon as={FcLike} height="24px" width={"24px"}></Icon>Liked Songs
        </Flex>
      </Box>
      <Box>
        <Box id="boxPlaylistS">
          <div className="divS">Playlist</div>
          <div className="divS">Playlist</div>
          <div className="divS">Playlist</div>
          <div className="divS">Playlist</div>
          <div className="divS">Playlist</div>
          <div className="divS">Playlist</div>
          <div className="divS">Playlist</div>
          <div className="divS">Playlist</div>
          <div className="divS">Playlist</div>
          <div className="divS">Playlist</div>
          <div className="divS">Playlist</div>
          <div className="divS">Playlist</div>
          <div className="divS">Playlist</div>
          <div className="divS">Playlist</div>
          <div className="divS">Playlist</div>
          <div className="divS">Playlist</div>
          <div className="divS">Playlist</div>
          <div className="divS">Playlist</div>
          <div className="divS">Playlist</div>
        </Box>
      </Box>
    </Box>
  );
}
