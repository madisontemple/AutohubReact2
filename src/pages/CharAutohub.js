import React, { useRef, useEffect, useState } from "react";

import styled from "styled-components";
import Map from "../shared/Map";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiBuildings } from "react-icons/bi";


import CountUp from "react-countup";

import Home from "./Home";

function CharAutohub() {
  

  const history = useHistory();
  const HomeClick = () => history.push("./");
  const BuyClick = () => history.push("./Buy");
  const SellClick = () => history.push("./Sell");
  const ManagedClick = () => history.push("./Managed.js");
  const AboutClick = () => history.push("./AboutAutohub");
  const CCenterClick = () => history.push("./CCenter");
  const JoinClick = () => history.push("./Join");
  const LoginClick = () => history.push("./Login");

  const HyundaiClick = () => history.push("./Hyundai");
  const KiaClick = () => history.push("./Kia");
  const BenzClick = () => history.push("./Benz");
  const BmwClick = () => history.push("./Bmw");
  const GenesisClick = () => history.push("./Genesis");


  const CharClick = () => history.push("./CharAutohub")
  const FloorClick = () => history.push("./Floor");
  const ContactClick = () => history.push("./Contact");

  

  function Tr({ title, value }) {
    return (
      <tr>
        <td style={{ borderBottom: "1px solid #ddd", padding: "10px 25px" }}>
          {title}
        </td>
        <td style={{ borderBottom: "1px solid #ddd" }}>{value}</td>
        <td style={{ borderBottom: "1px solid #ddd" }}></td>
      </tr>
    );
  }
  function Tr2({ title, value, value2, percentage }) {
    return (
      <tr>
        <td style={{ borderBottom: "1px solid #ddd", padding: "10px 25px" }}>
          {title}
        </td>
        <td style={{ borderBottom: "1px solid #ddd", textAlign: "center" }}>
          {value}
        </td>
        <td style={{ borderBottom: "1px solid #ddd", textAlign: "center" }}>
          {value2}
        </td>
        <td style={{ borderBottom: "1px solid #ddd", textAlign: "center" }}>
          {percentage}
        </td>
      </tr>
    );
  }

  return (
    <Body>
      <Header>
        <HeaderListPart>
          <ul>
            <LI button type="button" onClick={AboutClick}>
              단지안내
            </LI>
            <ALI button type="button" onClick={CharClick}>
              주요특장점
            </ALI>
            <LI button type="button" onClick={FloorClick}>
              층별안내
            </LI>
            <LI button type="button" onClick={ContactClick}>
              오시는 길
            </LI>
            <LI button type="button" onClick={SellClick}>
              프로모션
            </LI>
          </ul>
        </HeaderListPart>
      </Header>

<div className="CharWrapper">



</div>


      
    </Body>
  );
}

const Body = styled.body`
  /* box-sizing: border-box; */
  font-family: "Noto Sans KR", sans-serif;
`;
const Header = styled.div`
  padding: 50px 0;
`;
const HeaderListPart = styled.div`
  padding: 0 200px;
  cursor: pointer;
  font-weight: bold;
`;
const ALI = styled.li`
list-style: none;
  float: left;
  padding: 10px 10px;
  border-bottom: 3px solid red;
  

`;

const LI = styled.li`
  
  list-style: none;
  float: left;
  padding: 10px 10px;
  border-bottom: 3px solid transparent;
  &:hover {
      border-bottom: 3px solid red;
  }
  
`;




export default CharAutohub;
