import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { NavLink as Link } from "react-router-dom";
import Home from "../pages/Home";
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


 

  return (
    <Body>
      <Header>
        <AutohubLogoPart>
          <AutohubLogo button type="button" onClick={HomeClick} src="/images/AUTOHUB Logo.png" />
        </AutohubLogoPart>

        <HeaderLeftListPart>

        
          <HeaderLeftList>살때는as</HeaderLeftList>
          <HeaderLeftList>팔때</HeaderLeftList>
          <HeaderLeftList>직영차</HeaderLeftList>
          <HeaderLeftList button type="button" onClick={AboutAutohub}>단지안내</HeaderLeftList>
          <HeaderLeftList>고객센터</HeaderLeftList>
        </HeaderLeftListPart>

        <HeaderRightListPart>
          <HeaderRightList>회원가입</HeaderRightList>
          <HeaderRightList>로그인</HeaderRightList>
        </HeaderRightListPart>
      </Header>
    </Body>
  );
}

const Body = styled.body`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const Header = styled.header`
  height: 80px;
  width: 100%;
  background-color: #f11843;
  color: #fff;
  position: fixed;
  margin: 0;
  
`;
const AutohubLogoPart = styled.div``;
const AutohubLogo = styled.img`
  float: left;
  width: 7rem;
  height: 3rem;

  padding-top: 10px;
  margin-left: 50px;
  cursor: pointer;
`;

const HeaderLeftListPart = styled.ul`
  list-style: none;
`;
const HeaderLeftList = styled.li`
  float: left;

  padding: 13px 13px;
  
  margin-left: 30px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid white;
  }
`;
const HeaderRightListPart = styled.ul``;
const HeaderRightList = styled.li`
  list-style: none;
  float: right;
  text-decoration: none;
  padding: 13px 30px;
  margin-right: 30px;
  margin-left: -40px;
  
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid white;
  }
`;

export default Navbar;
