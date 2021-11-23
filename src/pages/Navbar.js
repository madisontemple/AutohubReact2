import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { NavLink as Link } from "react-router-dom";

import Wrapper from '../Components/Wrapper';

function Navbar() {
  const history = useHistory();
  const HomeClick = () => history.push("./");
  const BuyClick = () => history.push("./Buy");
  const SellClick = () => history.push("./Sell");
  const ManagedClick = () => history.push("./Managed");
  const AboutAutohub = () => history.push("./AboutAutohub");
  const CCenterClick = () => history.push("./CCenter");
  const JoinClick = () => history.push("./Join");
  const LoginClick = () => history.push("./Login");

  const LeftMenus2 = [
    { url: "./Buy", value: "살때" },
    { url: "./Sell", value: "살때" },
    { url: "./Managed", value: "직영차" },
    { url: "./AboutAutohub", value: "단지안내" },
    { url: "./CCenter", value: "고객센터" },
  ];
  {
    /*  버튼과 클릭시 이동할수 있게 하는 방법 모색중 */
  }

  const LeftMenus = [
    ["./Buy", "실떼"],
    ["./Sell", "팔때"],
    ["./Managed", "직영차"],
    ["./AboutAutohub", "단지안내"],
    ["./CCenter", "고객센터"],
  ];

  const LeftMenuList = LeftMenus2.map((LeftMenus2) => (
    <HeaderLeftList url={LeftMenus2.url}>{LeftMenus2.value}</HeaderLeftList>
  ));
  {
    /* 윗 부분을 맵함수로 입력 */
  }
  const RightMenus = ["회원가입", "로그인"];
  const RightMenuList = RightMenus.map((RightMenus) => (
    <HeaderRightList>{RightMenus}</HeaderRightList>
  ));
  {
    /* 이 부분도 맵함수로 처리 했음 */
  }

  return (
    <Body>
   
      <Header  flex jc={"center"} height={"80px"} width={"100%"}>
        <HeaderPart flex jc={"center"} width={"100%"}>
          <AutohubLogoPart flex>
            <AutohubLogo
              button
              type="button"
              onClick={HomeClick}
              src="/images/AUTOHUB Logo.png"
            />
          </AutohubLogoPart>

          <HeaderLeftListUl>
            <HeaderLeftList onClick={BuyClick}>살때</HeaderLeftList>
            <HeaderLeftList onClick={SellClick}>팔때</HeaderLeftList>
            <HeaderLeftList onClick={ManagedClick}>직영차</HeaderLeftList>
            <HeaderLeftList onClick={AboutAutohub}>단지안내</HeaderLeftList>
            <HeaderLeftList onClick={BuyClick}>프로모션</HeaderLeftList>
          </HeaderLeftListUl>

          <HeaderRightListUl>
            <HeaderRightList onClick={JoinClick}>회원가입</HeaderRightList>
            <HeaderRightList onClick={LoginClick}>로그인</HeaderRightList>
          </HeaderRightListUl>
        </HeaderPart>
      </Header>
    </Body>
  );
}

const Body = styled.body`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  
`;

const Header = styled(Wrapper)`
  background-color: #f11843;
  color: #fff;
  position: fixed;
  margin: 0;
`;
const HeaderPart = styled(Wrapper)`
  flex-wrap: wrap;
`;
const AutohubLogoPart = styled(Wrapper)``;
const AutohubLogo = styled.img`
  width: 7rem;
  height: 3rem;
  padding-top: 10px;
  padding-right: 50px;
  cursor: pointer;
`;

const HeaderLeftListUl = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px 450px 0px 0px; ;
`;
const HeaderLeftList = styled.li`
  padding: 13px 40px 0px 0px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  
  &:after {
  
  }
  &:hover {
  border-bottom: 3px solid white;

  }
`;

const HeaderRightListUl = styled.ul`
  padding: 0px 30px 0px 0px;
`;
const HeaderRightList = styled.li`
  list-style: none;
  float: right;
  text-decoration: none;
  padding: 13px 30px;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid white;
  }
`;
export default Navbar;
