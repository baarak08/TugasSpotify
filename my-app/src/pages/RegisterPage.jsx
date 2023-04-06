import "../css/login.css";
import {
  Box,
  Flex,
  Image,
  Icon,
  Center,
  Input,
  Checkbox,
  Button,
  InputRightElement,
  InputGroup,
  CircularProgress,
  Select,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import logo from "../assets/img/spotify-logo2.png";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { TbAlertCircleFilled } from "react-icons/tb";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth_types } from "../redux/types";

export default function RegisterPage() {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    console.log("ada ketikan baru");
  }, [account.password]);

  function inputHandler(event) {
    const { value, id } = event.target;
    const tempAccount = { ...account };
    tempAccount[id] = value;
    setAccount(tempAccount);
  }
  const [seePassword, setSeePassword] = useState(false);
  const month = [
    { name: "January", number: 1 },
    { name: "February", number: 2 },
    { name: "March", number: 3 },
    { name: "April", number: 4 },
    { name: "May", number: 5 },
    { name: "June", number: 6 },
    { name: "July", number: 7 },
    { name: "August", number: 8 },
    { name: "September", number: 9 },
    { name: "October", number: 10 },
    { name: "November", number: 11 },
    { name: "December", number: 12 },
  ];

  //   function login() {
  //     dispatch({
  //       type: auth_types.login,
  //       payload: { ...account },
  //     });
  //     localStorage.setItem("user", JSON.stringify(account));
  //     console.log(account);
  //     nav("/home");
  //   }

  return (
    <>
      <Center flexDir={"column"} w={"100vw"} gap={"10px"} paddingX={"24px"}>
        <Center
          w={"100%"}
          paddingTop={"25px"}
          paddingBottom={"22px"}
          //   borderBottom={"1px solid #d9dadc"}
        >
          <Image src={logo} w="88px" h={"27px"} />
        </Center>
        <Center
          fontSize={"28px"}
          fontWeight={"700"}
          pt={"25px"}
          color={"black"}
          _hover={{ color: "#6a6a6a" }}
        >
          Sign up for free to start listening.
        </Center>
        <Center
          w={"100%"}
          maxW={"312px"}
          fontSize={"14px"}
          color={"white"}
          flexDir={"column"}
          gap={"10px"}
        >
          <Center
            w={"100%"}
            bgColor="facebook.600"
            h={"48px"}
            borderRadius={"25px"}
            fontWeight={"700"}
            gap={"10px"}
            color={"white"}
            letterSpacing={"1.5px"}
            border={"1px solid #1877f2"}
            _hover={{ borderColor: "black" }}
          >
            <Icon w={"20px"} h={"20px"} as={BsFacebook}></Icon>
            Sign up with Facebook
          </Center>
          <Center
            w={"100%"}
            bgColor={"white"}
            h={"48px"}
            borderRadius={"25px"}
            fontWeight={"700"}
            gap={"10px"}
            color={"#535353"}
            border={"2px solid #A5a5a5"}
            letterSpacing={"1.5px"}
            _hover={{ borderColor: "black", color: "#6a6a6a" }}
          >
            <Icon w={"20px"} h={"20px"} as={FcGoogle}></Icon>
            Sign up with Google
          </Center>

          <Center
            w={"100%"}
            h={"48px"}
            color={"#7f7f7f"}
            gap={"20px"}
            fontWeight={"500"}
            paddingBottom={"12px"}
          >
            <Center w={"100%"}>
              <Box h={"1.6px"} w={"100%"} bgColor={"#d9dadc"}></Box>
            </Center>
            <Box
              height={"38px"}
              paddingTop={"13px"}
              color={"#6a6a6a"}
              _hover={{ color: "#6a6a6a" }}
            >
              or
            </Box>
            <Center w={"100%"}>
              <Box h={"1.6px"} w={"100%"} bgColor={"#d9dadc"}></Box>
            </Center>
          </Center>
        </Center>
        <Box maxW={"450px"} w={"100%"} color={"black"} alignItems={"left"}>
          <Box fontWeight={"700"}>
            <Box
              paddingBottom={"8px"}
              color={"#6a6a6a"}
              _hover={{ color: "#6a6a6a" }}
            >
              What's your email?
            </Box>

            <Input
              id="registemail"
              border={"1px solid #a5a5a5"}
              placeholder="Enter your email."
              height={"48px"}
              color={"#6a6a6a"}
              _hover={{ color: "#6a6a6a" }}
              onChange={inputHandler}
            ></Input>
            <Flex color={"#d41b2d"} fontWeight={"light"} gap={"5px"}>
              <Center>
                <Icon as={TbAlertCircleFilled} w={"16px"} h={"16px"} />
              </Center>
              You need to enter your email.
            </Flex>
            <Box color={"#117a37"} fontWeight={"light"} textDecor={"underline"}>
              Use phone number instead
            </Box>
          </Box>

          <Box fontWeight={"700"} paddingTop={"10px"}>
            <Box
              paddingBottom={"8px"}
              color={"#6a6a6a"}
              _hover={{ color: "#6a6a6a" }}
            >
              Confirm your email
            </Box>

            <Input
              id="confirmemail"
              border={"1px solid #a5a5a5"}
              placeholder="Ener your email again."
              height={"48px"}
              color={"#6a6a6a"}
              _hover={{ color: "#6a6a6a" }}
              onChange={inputHandler}
            ></Input>
            <Flex color={"#d41b2d"} fontWeight={"light"} gap={"5px"}>
              <Center>
                <Icon as={TbAlertCircleFilled} w={"16px"} h={"16px"} />
              </Center>
              You need to confirm your email.
            </Flex>
          </Box>

          <Box paddingTop={"16px"} fontWeight={"700"} paddingBottom={"16px"}>
            <Box
              paddingBottom={"8px"}
              color={"#6a6a6a"}
              _hover={{ color: "#6a6a6a" }}
            >
              Creat a password
            </Box>
            <InputGroup>
              <Input
                id="password"
                type={seePassword ? "text" : "password"}
                border={"1px solid #a5a5a5"}
                placeholder="Password"
                height={"48px"}
                _hover={{ borderColor: "black" }}
                onChange={inputHandler}
              ></Input>
              <InputRightElement>
                <Icon
                  color={"black"}
                  as={seePassword ? AiOutlineEye : AiOutlineEyeInvisible}
                  W="24px"
                  h="24px"
                  cursor={"pointer"}
                  _hover={{ color: "black" }}
                  onClick={() => setSeePassword(!seePassword)}
                ></Icon>
              </InputRightElement>
            </InputGroup>
            {account.password.length < 8 ? (
              <Flex color={"#d41b2d"} fontWeight={"light"} gap={"5px"}>
                <Center>
                  <Icon as={TbAlertCircleFilled} w={"16px"} h={"16px"} />
                </Center>
                You need to enter your password.
              </Flex>
            ) : null}
          </Box>

          <Box fontWeight={"700"} paddingTop={"10px"}>
            <Box
              paddingBottom={"8px"}
              color={"#6a6a6a"}
              _hover={{ color: "#6a6a6a" }}
            >
              What should we call you?
            </Box>
            <Input
              id="profile"
              border={"1px solid #a5a5a5"}
              placeholder="Enter a profile name."
              height={"48px"}
              color={"#6a6a6a"}
              _hover={{ color: "#6a6a6a" }}
              onChange={inputHandler}
            ></Input>
            <Flex color={"#d41b2d"} fontWeight={"light"} gap={"5px"}>
              <Center>
                <Icon as={TbAlertCircleFilled} w={"16px"} h={"16px"} />
              </Center>
              Enter name for your profile.
            </Flex>
          </Box>

          <Box fontWeight={"700"} paddingTop={"10px"}>
            <Box
              paddingBottom={"8px"}
              color={"#6a6a6a"}
              _hover={{ color: "#6a6a6a" }}
            >
              What's your date of birth?
            </Box>
            <Flex justifyContent={"space-between"} gap={"20px"}>
              <Input
                id="birthDay"
                maxWidth={"80px"}
                border={"1px solid #a5a5a5"}
                placeholder="DD"
                height={"48px"}
                color={"#6a6a6a"}
                _hover={{ color: "#6a6a6a" }}
                onChange={inputHandler}
              ></Input>
              <Select
                id="birthMonth"
                border={"1px solid #a5a5a5"}
                placeholder="Month"
                height={"48px"}
                color={"#6a6a6a"}
                _hover={{ color: "#6a6a6a" }}
                onChange={inputHandler}
              >
                {month.map((val) => (
                  <option value={val.number}>{val.name}</option>
                ))}
              </Select>
              <Input
                maxWidth={"80px"}
                id="birthYear"
                border={"1px solid #a5a5a5"}
                placeholder="YYYY"
                height={"48px"}
                color={"#6a6a6a"}
                _hover={{ color: "#6a6a6a" }}
                onChange={inputHandler}
              ></Input>
            </Flex>
            <Flex color={"#d41b2d"} fontWeight={"light"} gap={"5px"}>
              <Center>
                <Icon as={TbAlertCircleFilled} w={"16px"} h={"16px"} />
              </Center>
              Enter a valid day of the month.
            </Flex>
            <Flex color={"#d41b2d"} fontWeight={"light"} gap={"5px"}>
              <Center>
                <Icon as={TbAlertCircleFilled} w={"16px"} h={"16px"} />
              </Center>
              Enter a valid year.
            </Flex>
            <Flex color={"#d41b2d"} fontWeight={"light"} gap={"5px"}>
              <Center>
                <Icon as={TbAlertCircleFilled} w={"16px"} h={"16px"} />
              </Center>
              Select your birth month.
            </Flex>
          </Box>

          <Box>
            <Box
              fontWeight={"700"}
              paddingTop={"10px"}
              paddingBottom={"8px"}
              color={"#6a6a6a"}
              _hover={{ color: "#6a6a6a" }}
            >
              What's your gender?
            </Box>
            <RadioGroup defaultValue="Male">
              <Flex
                w={"100%"}
                flexWrap={"wrap"}
                rowGap={"10px"}
                columnGap={"20px"}
              >
                <Radio name="gender" colorScheme="green" value="Male">
                  {" "}
                  Male
                </Radio>
                <Radio name="gender" colorScheme="green" value="Female">
                  {" "}
                  Female
                </Radio>
                <Radio name="gender" colorScheme="green" value="Non-binary">
                  {" "}
                  Non-binary
                </Radio>
                <Radio name="gender" colorScheme="green" value="Other">
                  {" "}
                  Other
                </Radio>
                <Radio name="gender" colorScheme="green" value="nottosay">
                  {" "}
                  Prefer not to say
                </Radio>
              </Flex>
            </RadioGroup>
          </Box>
          <Box
            height={"48px"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box w={"100%"} height={"48px"} paddingTop={"20px"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                fontSize={"14px"}
                color={"#6a6a6a"}
                _hover={{ color: "#6a6a6a" }}
              >
                <Checkbox colorScheme="green" height={"16px"} width={"16px"} />I
                would prefer not to receive marketing messages from Spotify
              </Box>
            </Box>
          </Box>
          <Box>
            <Box w={"100%"} height={"48px"} paddingTop={"20px"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                fontSize={"14px"}
                color={"#6a6a6a"}
                _hover={{ color: "#6a6a6a" }}
              >
                <Checkbox colorScheme="green" height={"16px"} width={"16px"} />I
                Share my registration data with Spotify's content providers for
                marketing purposes.
              </Box>
            </Box>
          </Box>
          <Box
            w={"100%"}
            h={"120px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Flex
              w={"158px"}
              bgColor={"#1ed760"}
              h={"56px"}
              borderRadius={"25px"}
              fontWeight={"700"}
              gap={"10px"}
              color={"black"}
              fontSize={"18px"}
              border={"1px solid #A5a5a5"}
              justifyContent={"center"}
              alignItems={"center"}
              letterSpacing={"1.5px"}
              //   onClick={login}
            >
              Sign up
            </Flex>
            <Flex
              w={"158px"}
              bgColor={"#1fdf64"}
              h={"56px"}
              borderRadius={"25px"}
              fontWeight={"700"}
              gap={"10px"}
              color={"black"}
              fontSize={"19px"}
              border={"1px solid #A5a5a5"}
              justifyContent={"center"}
              alignItems={"center"}
              position={"absolute"}
              opacity={"0"}
              letterSpacing={"1.5px"}
              _hover={{ opacity: "1" }}
              // onClick={login}
            >
              Sign up
            </Flex>
          </Box>
        </Box>
        <Flex
          w={"100%"}
          flexWrap={"wrap"}
          rowGap={"10px"}
          columnGap={"20px"}
          justifyContent={"center"}
        >
          <Box
            fontSize={"13px"}
            paddingBottom={"20px"}
            fontWeight={"700"}
            // color={"#6a6a6a"}
            // _hover={{ color: "#6a6a6a" }}
          >
            Have an account?
          </Box>
          <Box
            fontSize={"13px"}
            paddingBottom={"20px"}
            fontWeight={"700"}
            color={"green"}
            textDecor={"underline"}
            // _hover={{ color: "#6a6a6a" }}
          >
            Log in
          </Box>
        </Flex>
      </Center>
    </>
  );
}
