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
    { url: "./Sell", value: "팔때" },
    { url: "./Managed", value: "직영차" },
    { url: "./AboutAutohub", value: "단지안내" },
    { url: "./CCenter", value: "고객센터" },
  ];
  const RightMenus = [
    { url: "./Join", value: "회원가입" },
    { url: "./Login", value: "로그인" },
  ];


  
  

  const LeftMenuList = LeftMenus2.map((LeftMenus2) => (
    <HeaderLeftList url={LeftMenus2.url}>{LeftMenus2.value}</HeaderLeftList>
  ));
  {
    /* 윗 부분을 맵함수로 입력 */
  }
  
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
{LeftMenus2.map((el, key) => (
    <HeaderLeftList key={key} onClick={() => history.push(el.url)}>
    {el.value}
    </HeaderLeftList>
))}
          </HeaderLeftListUl>

          <HeaderRightListUl>
          {RightMenus.map((el, key) => (
            <HeaderRightList key={key} onCLick={() => history.push(el.url)}>
              {el.value}
            </HeaderRightList>
          ))}
            {/* <HeaderRightList onClick={JoinClick}>회원가입</HeaderRightList>
            <HeaderRightList onClick={LoginClick}>로그인</HeaderRightList> */}
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
const AutohubLogoPart = styled(Wrapper)`
padding-right: 40px;
`;
const AutohubLogo = styled.img`
  width: 7rem;
  height: 3rem;
  padding-top: 10px;
  padding-right: 100px;
  cursor: pointer;
  
`;

const HeaderLeftListUl = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px 500px 0px 0px; ;
`;
const HeaderLeftList = styled.li`
  padding: 13px 30px 0px 0px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  
  &:after {
  
  }
  &:hover {
  border-bottom: 3px solid white;
  margin: 0px 0px 0px 30px ;

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
