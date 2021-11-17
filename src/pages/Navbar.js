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

  

  
const LeftMenus2 = [
      { url:"./Buy", value:"살때" },{url:"./Sell", value:"살때" },{url:"./Managed", value:"직영차" },{url:"./AboutAutohub", value:"단지안내" },{url:"./CCenter", value:"고객센터" }

] 
{/*  버튼과 클릭시 이동할수 있게 하는 방법 모색중 */}

  const LeftMenus  = [["./Buy","실떼"],["./Sell","팔때"],["./Managed","직영차"],["./AboutAutohub","단지안내"],["./CCenter","고객센터"]];

  const LeftMenuList = LeftMenus2.map((LeftMenus2) =>  <HeaderLeftList url={LeftMenus2.url}>{LeftMenus2.value}</HeaderLeftList>); {/* 윗 부분을 맵함수로 입력 */}
  const RightMenus = ["회원가입","로그인"];
  const RightMenuList = RightMenus.map((RightMenus) => <HeaderRightList>{RightMenus}</HeaderRightList>); {/* 이 부분도 맵함수로 처리 했음 */}
  
 
 


  return (
    <Body>
      <Header>
        <AutohubLogoPart>
          <AutohubLogo button type="button" onClick={HomeClick} src="/images/AUTOHUB Logo.png" />
        </AutohubLogoPart>
        <HeaderLeftListPart>
<HeaderLeftList onClick={BuyClick}>살때</HeaderLeftList>
<HeaderLeftList onClick={SellClick}>팔때</HeaderLeftList>
<HeaderLeftList onClick={ManagedClick}>직영차</HeaderLeftList>
<HeaderLeftList onClick={AboutAutohub}>단지안내</HeaderLeftList>
<HeaderLeftList onClick={CCenterClick}>고객센터</HeaderLeftList>
<HeaderLeftList onClick={BuyClick}>프로모션</HeaderLeftList>

        </HeaderLeftListPart>
        <HeaderRightListPart>
        <HeaderRightList onClick={JoinClick}>회원가입</HeaderRightList>
        <HeaderRightList onClick={LoginClick}>로그인</HeaderRightList>

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

  padding: 13px 10px;
  
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
