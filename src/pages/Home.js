import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import { SearchBox } from "react-instantsearch-dom";
import { useHistory } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import Wrapper from "../Components/Wrapper";

function Home() {
  const history = useHistory();
  const BuyClick = () => history.push("./Buy");
  const SellClick = () => history.push("./Sell");
  const ManagedClick = () => history.push("./Managed");
  const AboutAutohub = () => history.push("./AboutAutohub");
  const CCenterClick = () => history.push("./CCenter");
  const JoinClick = () => history.push("./Join");
  const LoginClick = () => history.push("./Login");

  const SearchClick = () => history.push("./SearchResult");
  const HyundaiClick = () => history.push("./Hyundai");
  const KiaClick = () => history.push("./Kia");
  const BenzClick = () => history.push("./Benz");
  const BmwClick = () => history.push("./Bmw");
  const GenesisClick = () => history.push("./Genesis");

  const Shop1Click = () => history.push("./Shop1");
  const Shop2Click = () => history.push("./Shop2");
  const Shop3Click = () => history.push("./Shop3");
  const Shop4Click = () => history.push("./Shop4");

  const StyledWrapper = styled.div`
    ${({ flex }) => flex && "display: flex;"}
  `;

  const Clicks = [{ url: "./Buy", label: "" }];

  const Buttons = [
    { url: "./Hyundai", manufacture: "현대" },
    { url: "./Kia", manufacture: "기아" },
    { url: "./Benz", manufacture: "벤츠" },
    { url: "./Bmw", manufacture: "Bmw" },
    { url: "./Genesis", manufacture: "제네시스" },
  ];

  const FAQLists = [
    {FAQ: "차량 구매시 필요서류는 무엇인가요?"},
    {FAQ: "차량 구매시 카드로 구매가 가능한가요?"},
    {FAQ: "대체구매(차량맞교환)가 가능한가요?"},
  ];

  

  const ButtonList = Buttons.map((Buttons) => (
    <HeaderButton>{Buttons}</HeaderButton>
  ));
  {
    /* 버튼하고 클릭시 다른 페이지로 이동할수 있게 모색중 */
  }

  // const Questions = [
  //   "차량 구매시 필요서류는 무엇인가요?",
  //   "차량 구매시 카드로 구매가 가능한가요?",
  //   "대체구매(차량맞교환)가 가능한가요?",
// ];

// {Buttons.map((el, key) => (
//   <HeaderButton key={key} onClick={() => history.push(el.url)}>
//     {el.manufacture}
//   </HeaderButton>
// ))}
  
  // const FAQList =   FAQLists.map((el,key) => <FAQList key={key}>{FAQLists(el.FAQ),FAQLists(el.value)} </FAQList>);
  
    
  return (
    <Body>
      <HeaderWrapper h={"350px"} pt={"50px"} flex jc={"center"}>
        <HeaderImagePart>
          <HeaderImage src="/images/Autohub.HeadersLeft.png" />
        </HeaderImagePart>

        <HeaderRightWrapper>
          <HeaderRightPart pt={"80px"} pr={"20px"} pl={"30px"} ml={"30px"}>
            <HeaderRightPartComment>
              지금 바로 키워드로 검색해보세요! 무엇이든 찾아드립니다.
            </HeaderRightPartComment>

            <HeaderRightSearchPart>
              <SearchInput></SearchInput>
              <BiSearch
                style={{
                  width: "50px",
                  height: "40px",
                  color: "#f11843",
                  position: "relative",
                  right: "80px",
                  top: "5px",
                  cursor: "pointer",
                }}
              />
            </HeaderRightSearchPart>

            <HeaderButtonPart mt={"20px"}>
              {Buttons.map((el, key) => (
                <HeaderButton key={key} onClick={() => history.push(el.url)}>
                  {el.manufacture}
                </HeaderButton>
              
              ))}
              {/* <HeaderButton onClick={HyundaiClick}>현대</HeaderButton>
<HeaderButton onClick={KiaClick}>기아</HeaderButton>
<HeaderButton onClick={BenzClick}>Bmw</HeaderButton>
<HeaderButton onClick={BmwClick}>벤츠</HeaderButton>
<HeaderButton onClick={GenesisClick}>제네시스</HeaderButton> */}
            </HeaderButtonPart>
          </HeaderRightPart>
        </HeaderRightWrapper>
      </HeaderWrapper>

      <MainWrapper flex jc={"center"} mt={"30px"}>
        <MainLeftPart>
          <MainComment>인기있는 4대의 자동차</MainComment>

          <MainImagePart>
            <MainImage src="/images/Autohub.Main1.png" />
          </MainImagePart>
        </MainLeftPart>

        <MainRightWrapper pt={"70px"}  >
          <MainRightPart pt={"10px"} pr={"40px"} mb={"20px"}>
            <MainRightImage src="/images/Autohub.Main2.png" />
            <MainRightImage src="/images/Autohub.Main3.png" />
          </MainRightPart>
          <MainRightPart pt={"10px"} pr={"40px"} pb={"20px"}>
            <MainRightImage src="/images/Autohub.Main4.png" />
            <MainRightImage src="/images/Autohub.Main5.png" />
          </MainRightPart>
        </MainRightWrapper>
      </MainWrapper>

      <FinsetNWrapper flex jc={"center"}>
        <FinsetNImagePart>
          <FinsetNImage src="/images/FinsetImage.png" />
        </FinsetNImagePart>
      </FinsetNWrapper>
      <FAQWrapper flex jc={"center"} mt={"60px"}>
        <FAQPart pr={"15px"}>
          <FAQ>FAQ</FAQ>
          {/* m  */}
{
  FAQLists.map((el, key) => (
    <>
    <FAQList key={key}>{el.FAQ}</FAQList>
   <HR />
   </>
  ))
}

          {/* <HR />
          <FAQList>차량 구매시 필요서류는 무엇인가요?</FAQList>
          <HR />
          <FAQList>차량 구매시 카드로 구매가 가능한가요?</FAQList>
          <HR />
          <FAQList>대체구매(차량맞교환)가 가능한가요?</FAQList>
          <HR /> */}
        </FAQPart>
        <CustomerCenterPart ml={"20px"}>
          <FAQTxtPart>
            <FAQ>고객센터</FAQ>
          </FAQTxtPart>
          <CustomerCenterSquare
            width={"300px"}
            height={"160px"}
            pt={"5px"}
            pb={"5px"}
            pl={"20px"}
          >
            <h1 style={{ color: "#f11843" }}>1811-9393</h1>
            <p>연중무휴</p>
            <p>09:00~18:00</p>
          </CustomerCenterSquare>
        </CustomerCenterPart>

        <CustomerCenterSquare2Part
          mt={"50px"}
          ml={"10px"}
          pt={"10px"}
          pb={"10px"}
        >
          <CustomerCenterSquare2
            width={"300px"}
            height={"70px"}
            mt={"10px"}
          ></CustomerCenterSquare2>

          <CustomerCenterSquare2
            width={"300px"}
            height={"70px"}
            mt={"10px"}
          ></CustomerCenterSquare2>
        </CustomerCenterSquare2Part>
      </FAQWrapper>
    </Body>
  );
}

const Body = styled.body`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
const HeaderWrapper = styled(Wrapper)`
  background-color: #f11843;
`;
const HeaderImagePart = styled(Wrapper)``;
const HeaderImage = styled.img`
  width: 35rem;
  height: 15rem;
  padding: 60px 0px;
`;
const HeaderRightWrapper = styled(Wrapper)``;
const HeaderRightPart = styled(Wrapper)``;
const HeaderRightCommentPart = styled(Wrapper)``;
const HeaderRightPartComment = styled.h2`
  color: #fff;
  font-size: 15px;
  padding-left: 10px;
`;
const HeaderRightSearchPart = styled(Wrapper)``;
const SearchInput = styled.input`
  border-radius: 40px;
  margin-top: 5px;
  padding: 5px 0px 0px 30px;
  width: 40rem;
  height: 70px;
  border-style: none;
  font-size: 30px;
  outline: none;
`;
const HeaderButtonPart = styled(Wrapper)``;
const HeaderButton = styled.button`
  /* background: ${(props) => (props.primary ? "#f11843" : "white")}; */
  background-color: #f11843;
  margin: 0px 17px 0px 0px;
  width: 7.5rem;
  height: 3rem;
  border-radius: 40px;
  border: 2px solid white;
  color: #fff;
  font-weight: bold;

  &:hover {
    background-color: #c13b2e;
  }
`;
const MainWrapper = styled(Wrapper)``;
const MainPart = styled(Wrapper)``;
const MainLeftPart = styled(Wrapper)``;
const MainComment = styled.h1``;
const MainImagePart = styled(Wrapper)``;
const MainImage = styled.img`
  width: 40rem;
  height: 40rem;
  border-radius: 10px;
`;
const MainRightWrapper = styled(Wrapper)``;
const MainRightPart = styled(Wrapper)``;

const MainRightImage = styled.img`
  width: 19rem;
  height: 19rem;
  border-radius: 10px;
  margin-left: 20px;
`;
const FinsetNWrapper = styled(Wrapper)``;
const FinsetNImagePart = styled(Wrapper)``;
const FinsetNImage = styled.img`
  margin-top: 60px;
  padding-right: 40px;
  width: 80.5rem;
`;

const FAQWrapper = styled(Wrapper)``;
const FAQPart = styled(Wrapper)``;
const FAQTxtPart = styled(Wrapper)``;
const FAQ = styled.h2``;
const HR = styled.hr`
  width: 40rem;
`;
const FAQList = styled.p`
  font-weight: bold;
  font-size: 17px;
`;
const CustomerCenterPart = styled(Wrapper)``;
const CustomerCenterSquare = styled(Wrapper)`
  border-radius: 10px;
  outline: 1px solid black;
`;
const CustomerCenterSquare2Part = styled(Wrapper)``;
const CustomerCenterSquare2 = styled(Wrapper)`
  border-radius: 10px;
  outline: 1px solid black;
`;

export default Home;
