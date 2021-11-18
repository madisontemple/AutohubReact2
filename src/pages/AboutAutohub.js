import React, { useRef, useEffect, useState } from "react";

import styled from "styled-components";
import Map from "../shared/Map";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiBuildings } from "react-icons/bi";


function AboutAutohub() {
  
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

 

  const Menus = ["주요특장점","층별안내","오시는 길","프로모션"];
  const MenuLists = Menus.map((Menus) => <LI>{Menus}</LI>);

  

  function Tr({ title, value }) {
    return (
      <tr style={{}}>
        <td style={{ borderBottom: "1px solid #ddd", padding: "10px 30px", }}>
          {title}
        </td>
        <td style={{ borderBottom: "1px solid #ddd",paddingLeft:"80px" }}>{value}</td>
        <td style={{ borderBottom: "1px solid #ddd" }}></td>
        <td style={{ borderBottom: "1px solid #ddd" }}></td>
      </tr>
    );
  }
  function Tr2({ title, value, value2, percentage }) {
    return (
      <tr>
        <td style={{ borderBottom: "1px solid #ddd", padding: "10px 30px" }}>
          {title}
        </td>
        <td style={{ borderBottom: "1px solid #ddd", textAlign: "center",paddingRight:"100px" }}>
          {value}
        </td>
        <td style={{ borderBottom: "1px solid #ddd", textAlign: "center",paddingRight:"100px" }}>
          {value2}
        </td>
        <td style={{ borderBottom: "1px solid #ddd", textAlign: "center",paddingRight:"100px" }}>
          {percentage}
        </td>
      </tr>
    );
  }
  function Table({ table}) {

    return (
      <table  style={{
        width: "1200px",
        height: "400px",
        textAlign: "center",
        borderCollapse: "collapse",
        border: " solid 1px black",
      }}></table>

    );

  }
  // function Wrapper({ flex, children }) {
  //   return <div style={flex && { display: "flex" }}>{children}</div>;
  // }
  
  function Wrapper({ flex, w, children }) {
    return <_Wrapper flex={flex}>{children}</_Wrapper>;
  }


  return (
    
    <Body>
      

      
      <Header>
        <HeaderListPart>
         
        </HeaderListPart>
      </Header>

      <IntroWrappeer>
        <IntroPart>
          <div className="AHBanner" style={{}}>
            <img
              src="/images/오토허브 소개 배너.png"
              style={{ width: "100%" }}
              alt="오토허브소개 이미지 배너입니다."
            />
          </div>

          <div className="AHImagePart" style={{}}>
            {" "}
            {/* 이 페이지 윘부분에 있는 오토허브 건물 사진입니다. */}
            <img
              src="/images/오토허브 건물사진4.jpg"
              style={{ width: "1200px", height: "700px" }}
            />
          </div>

          <h2  className="TxtTitle" style={{}}>자동차 매매당지의 패러다임을 바꾼 오토허브 입니다.</h2>
          <p className="TxtContent" style={{ textAlign: "left" }}>
            61,000 여평 규모의 오토허브는 2018년부터 운영된 최초의 대형
            매매단지로서, 현재까지 허위매물 없이 안전하게 단지 운영을 하여
            고객들에게 사랑을 받아오고 있습니다.
            <br />
            <br />
            차량 판매 시설뿐만 아니라 상품화 시설부터 차량등록 사무소까지 단지에
            입점되어있어 상사 운영자와 고객 모두에게 최고의 서비스를 제공하고
            있습니다.
            <br />
            <br />
            또한 전문 식당, 카페,편의점 등이 있어 단지 방문 고객은 편리한 단지
            이용 경험을 할 수 있으며, 이 밖에도 병원, 볼링장, 스크린 골프장 등
            다양한 생활시설도 <br />
            입점해 있어 자동차 복합 문화 공간으로서 완벽한 모습을 갖추고
            있습니다.
          </p>
        </IntroPart>
      </IntroWrappeer>

      
  

      <DetailWrapper>
        <DetailPart>
          <Wrapper flex>hello</Wrapper>
          <h3 style={{ textAlign: "left" }}>세부 면적</h3>
          <p style={{ textAlign: "left" }}>
            최대8,000대의 실내 전시가 가능하며, 최대1,300대의 고객 주차가 가능한
            대형 복합 단지입니다.
          </p>
          <Button>건축 면적 정보</Button>

          <div className="TablePart" style={{ width: "1200px" }}>
            {" "}
            {/* 건축 면적정보 테이블 부분입니다. */}
            <table
              style={{
                width: "100%",
                // borderCollapse: "collapse",
                border: " solid 1px black",
              }}
            >
              <tr style={{}}>
                <th
                  style={{
                    fontWeight: "bold",
                    fontSize: "25px",
                    padding: "20px",
                    textAlign: "left",
                  }}
                >
                  건축 개요
                </th>
              </tr>

             
              <Tr title="토지면적" value="88,716 ㎡ (26,836,59평)" />
              <Tr title="건축연면적" value="175,676,72 ㎡ (53,142.21평)" />
              <Tr title="용도" value="자동차 관련 시설 및 부대시설" />
              <Tr title="층수" value="지하 4층, 지상 4층" />
              <Tr title="건폐율" value="16.81%" />
              <Tr title="용적률" value="55.15%" />

              <tr style={{}}>
                <th
                  style={{
                    fontWeight: "bold",
                    fontSize: "25px",
                    padding: "20px",
                    textAlign: "left",
                  }}
                >
                  용도별 면적
                </th>
              </tr>

              <Tr2
                title="구분"
                value="면적"
                value2="구성비"
                percentage="구분"
              />
              <Tr2
                title="전시장"
                value="139,520㎡ "
                value2="(42,205평)"
                percentage="79%"
              />
              <Tr2
                title="근린생활"
                value="20,631㎡ "
                value2="(6,241평)"
                percentage="12%"
              />
              <Tr2
                title="정비시설"
                value="15,526㎡ "
                value2="(4,697평)"
                percentage="9%"
              />
              <Tr2
                title="합계"
                value="175,677㎡ "
                value2="(53,142평)"
                percentage="100%"
              />
              <Tr2
                title="구분"
                value="면적"
                value2="구성비"
                percentage="구분"
              />
              <Tr title="*별도.고객 주차장:27,500㎡ (8,319평) 1,270대" />
            </table>
          </div>
        </DetailPart>
      </DetailWrapper>

      <FacilitiesWrapper>
        <div className="FacilitiesPart">
          <h2 style={{ textAlign: "left" }}>시설 안내</h2>
          <p style={{ textAlign: "left" }}>
            다양한 시설이 입점 되어 있는 자동차 복합 문화 공간
          </p>

          <table
            style={{
              width: "1200px",
              height: "400px",
              textAlign: "center",
              borderCollapse: "collapse",
              border: " solid 1px black",
            }}
          >
            <tr>
              <td>
                <img src="/images/자동차관련시설1.png" />
                <br />
                자동차 관련시설
              </td>
              <td>
                <img src="/images/차량정비1.png" style={{ width: "80px" }} />
                <br />
                상품화 관련 시설
              </td>
              <td>
                <img src="/images/근린생활1.png" style={{ width: "80px" }} />
                <br />
                근린 생활 시설
              </td>
            </tr>

            <tr>
              <td>
                매매상사 및 차량 전시장
                <br />
                자동차 경매장
                <br />
                차량 용품 전문점
                <br />
                금융사(캐피탈, 보험)
                <br />
                차량 등록 사무소
              </td>

              <td>
                1급 정비소
                <br />
                성능 점검장
                <br />
                세차 / 광택
                <br />
                포토존
                <br />
                기타 정비 및 휠 복원
              </td>

              <td>
                매매상사 및 차량 전시장
                <br />
                자동차 경매장
                <br />
                차량 용품 전문점
                <br />
                금융사(캐피탈, 보험)
                <br />
                차량 등록 사무소
              </td>
            </tr>
          </table>
        </div>
      </FacilitiesWrapper>

      <LocationWrapper>
        <div class="LocationPart" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "30px" }}>최적의 교통 환경과 입지</h2>
          <p style={{ fontSize: "20px" }}>
            {" "}
            <br />
            수원 신갈IC와 3분 거리에 위치하여 서울 강남권과 경기 암부 30분
            이내에 도착 가능합니다.
          </p>
          <div>
            <img style={{ width: "900px" }} src="/images/오토허브건물2.jpeg" />
          </div>
        </div>
      </LocationWrapper>
    </Body>
  );
}
const _Wrapper = styled.div`
  ${({ flex }) => flex && "display:flex;"}
`;

const Body = styled.body`
  /* box-sizing: border-box; */
  font-family: "Noto Sans KR", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
const Header = styled.div`
  padding: 50px 0;
`;
const HeaderListPart = styled.div`
  padding: 0 200px;
  cursor: pointer;
  font-weight: bold;
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
const ALI = styled.li`
  list-style: none;
  float: left;
  padding: 10px 10px;
  border-bottom: 3px solid red;
`;
const IntroWrappeer = styled.div``;
const IntroPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailWrapper = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
const DetailPart = styled.div``;
const Table = styled.table;
const Button = styled.button`
  float: left;
  width: 150px;
  height: 50px;
  font-size: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 3px #808080;
  &after {
      position: relative;
      top: 10px;
      
      left: 10px;
  }
`;

const FacilitiesWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const LocationWrapper = styled.div`
  padding: 0 200px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;


export default AboutAutohub;
