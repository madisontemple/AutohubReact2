import React, { useRef, useEffect, useState } from "react";

import styled from "styled-components";
import Map from "../shared/Map";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiBuildings } from "react-icons/bi";
import Wrapper from "../Components/Wrapper";

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
  
  function Wrapper1({ flex, w, children }) {
    return <_Wrapper flex={flex}>{children}</_Wrapper>;
  }

  return (    
    <Body>
      <HeadWrapper  flex jc={"center"} pt={"50px"} pb={"50px"}>
      <HeaderNav>

        <HeaderListUl>
         <LI>단지안내</LI>
         <LI>층별안내</LI>
         <LI>고객센터</LI>
         <LI>FAQ</LI>
         <LI>오시는 길</LI>
        </HeaderListUl>
      </HeaderNav>
      </HeadWrapper>

      <IntroWrappeer >
        <IntroImagePart flex jc={"center"}>
            <img
              src="/images/오토허브 건물사진4.jpg"
              style={{ width: "1000px", height: "500px" }}
            /> 
        </IntroImagePart>
        <IntroPart flex jc={"center"} mr={"620px"}>
          <h4 style={{marginRight:"100px",paddingTop:"15px"}}>About Us</h4>
          <h1 style={{fontSize:"40px"}}>안녕하세요.<br/>
          국내 최대 자동차 매매단지<br/>
          오토허브입니다.</h1>

        </IntroPart>

        <OurBuisinessPart flex jc={"center"} mr={"480px"} mt={"100px"}>
        <h4 style={{marginRight:"70px"}}>Our Business</h4>
          <h1 >단일규모 세계 최대 자동차 복합단지입니다.</h1>
        </OurBuisinessPart>

        <OurBuisinessPart flex jc={"center"} mr={"230px"}>
        <p>오토허브는 단일규모 세계 최대 자동차 복합단지로 현재 약 8,000 여대의 실내 전시가 가능하며,<br/>
          향후 2차 증축사업과 야외 전시장 확장을 통해 18,000대까지 전시가 가능한 대규모 복합단지입니다.</p>
        </OurBuisinessPart>
        <OurBuisinessPart flex jc={"center"} mr={"230px"}>
        <Button><ButtonLabel>건축 면적 정보보기</ButtonLabel></Button>
        </OurBuisinessPart>

        <OurBuisinessPart flex jc={"center"} mr={"20px"} mt={"100px"}>
        <h1>대규모 정비단지 및 성능점검장을 통해 판매를 진행하고 있습니다.</h1>
        </OurBuisinessPart>
        <OurBuisinessPart flex jc={"center"} mr={"450px"}>
        <p>또한 대규모 정비단지 및 성능점검장을 통해<br/>
          <span style={{}}>-</span> 직영 성능점검장<br/>
          - 1급 종합정보운영<br/>
          - 연장보증보험(Extended Warranty)판매를 진행하고 있습니다.</p>
        </OurBuisinessPart>

        <OurBuisinessPart flex jc={"center"} mr={"300px"} mt={"100px"}>
        <h1>전시장 관제, 실매물 광고 관리하고 있습니다.</h1>
        </OurBuisinessPart>
        <OurBuisinessPart flex jc={"center"} mr={"320px"}>
        <p>전시장 관제, 실매물 광고 관리를 통해 내부 자체적인 전시차량 입출과 전산 시스템으로<br/>
            온라인과 오프라인이 100% 연동되어 허위매물없이 실매물을 관리하고 있습니다.</p>
        </OurBuisinessPart>

        <OurBuisinessPart flex jc={"center"} mr={"230px"} mt={"100px"}>
        <h1>원스톱 자동차 복합 문화공간이 준비되어 있습니다.</h1>
        </OurBuisinessPart>
        <OurBuisinessPart flex jc={"center"} mr={"250px"}>
        <p>원스톱 자동차 복합 문화공간은 자동차 뿐만 아니라,<br/>
쇼핑, 스포츠, 문화생활, 외식 등 온 가족이 즐길 수 있는 다양한 편의 시설까지 준비되어 있습니다.</p>
        </OurBuisinessPart>
      </IntroWrappeer>

      <PointWrapper  flex jc={"center"} ai={"center"} height={"500px"} width={"100%"} backgroundColor={"#FAFAFA"} mt={"100px"}>
<LeftPart>
<p>주요 특장점 첫번째</p>
<h2>업계 최고 브랜드와<br/>
제휴를 통한 최고 서비스 제공</h2><br/>

<p> -SK엔카 단지제휴를 통한 실매물 인증과 사진 촬영 제공<br/>
-AJ카리안서비스와 합자법인 설립하여 정확한 성능상태 점검 및 정비 서비스 제공<br/>
-AJ파크 LPR 시스템으로 실시간 전시장 관리 및 고객주차장 운영<br/>
-현대캐피탈, 메리츠캐피탈, JB우리캐피탈 업체 입점</p>

</LeftPart>
<RightPart>
<ImagePart1 flex jc={"center"}>
<Image src="/images/AboutAutohubImages/SKencar.com.png" />
<Image src="/images/AboutAutohubImages/AJ카리안서비스.png" />
<Image src="/images/AboutAutohubImages/AJPark.png" />
</ImagePart1>

<ImagePart2 flex jc={"center"}>
<Image src="/images/AboutAutohubImages/HyundaiCapital.png" />
<Image src="/images/AboutAutohubImages/MeritzCapital.png" />
<Image src="/images/AboutAutohubImages/JBCapital.png" />
</ImagePart2>

</RightPart>

      </PointWrapper>

<PointWrapper  flex jc={"center"} ai={"center"} height={"500px"} width={"100%"} backgroundColor={"white"}>
<LeftPart mr={"70px"}>
<p>주요 특장점 두번째</p>
<h2>입점회사 대상<br/>
특별 금융혜택까지!</h2><br/>

<p>오토허브 입전회사 대상 그룹 게열사 금융상품을 통하여 최대 보증금 80% 대출 가능</p>

</LeftPart>
<RightPart pr={"80px"}>
<ImagePart1 flex jc={"center"}>
<Image src="/images/AboutAutohubImages/신동해그룹로고.png" />
<Image src="/images/AboutAutohubImages/동양저축은행로고.png" />
</ImagePart1>
</RightPart>
      </PointWrapper>


      <PointWrapper  flex jc={"center"} ai={"center"} height={"500px"} width={"100%"} backgroundColor={"#FAFAFA"} >
<LeftPart3  mr={"100px"} mt={"30px"}>
<p>주요 특장점 세번째</p>
<h2>최적의 교통 환경<br/>
최고의 입지</h2><br/>

 <p> - 빠른 교통환경 : 수원 IC(경부/영동), 수원신갈IC(경부/용서) 인접<br/>
- 대규모 배후세대 : 강남권 30분 이내 및 주변 490만 배후세대의 집객효과(흥덕, 구성, 동백, 광교 등)<br/>
- 인접지역 매매단지 연계 : 인접 매매단지(수원, 성남, 용인) 및 타 매매단지(인천 1시간)와 유통 가능
</p>
<Button><ButtonLabel>오시는 길 보기</ButtonLabel></Button>

</LeftPart3>
<RightPart3 flex  mt={"60px"} >
<ImagePart1 >
<Image2 src="/images/AboutAutohubImages/오시는길지도.png"/>
</ImagePart1>
</RightPart3>
      </PointWrapper>



  <FootWrapper1    width={"100%"} height={"400px"} backgroundColor={"#F7F7F7"} >
 <FootListPart flex  jc={"center"} ai={"center"} mr={"830px"} pt={"70px"}>
    <FootList>회사소개</FootList>
    <FootList>이용약관</FootList>
    <FootList>개인정보처리방침</FootList>
    <FootList>마케팅</FootList>
 </FootListPart>


<FootInfoWrapper flex  jc={"center"} ai={"center"} mr={"680px"} mt={"30px"}>

<p style={{fontSize:"15px",color:"#81858A"}}><b style={{marginRight:"10px"}}>사업자등록번호 </b> 454-88-00618<b style={{marginLeft:"10px"}} >개인정보책임자</b>이동녕<br/>
<b style={{marginRight:"10px"}}>주소</b>경기도 용인시 기흥구 중부대로 242(영덕동 21-1)<br/>
<b style={{marginRight:"10px"}}>Tel</b>031) 5182-5000Fax031) 5182-5009 <b style={{marginLeft:"10px",marginRight:"5px"}}>Email</b> admin@nsautohub.com<br/>
Copyrights © AUTOHUB. All rights reserved.</p>

</FootInfoWrapper>

<FootLogoWrapper flex  jc={"center"}>
<FootLogo src="/images/AboutAutohubImages/매물공유로고.png" />

</FootLogoWrapper>
  </FootWrapper1>
  

  
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

const HeadWrapper = styled(Wrapper) `

`;
const HeaderNav = styled.nav`
width: 1200px;
`;
const HeaderListUl = styled.ul`

 display: flex;
 margin-left: 45px;
 margin-top: 50px;
  cursor: pointer;
  font-weight: bold;
`;

const LI = styled.li`
  list-style: none;
  padding: 0px 10px;
  font-size: 15px;
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
const IntroWrappeer = styled(Wrapper)``;
const IntroImagePart = styled(Wrapper)`
 
`;
const IntroPart = styled(Wrapper)`

`;
const OurBuisinessPart = styled(Wrapper)`

`;
const Button = styled.div`
width: 180px;
height: 50px;
border-radius: 30px;

font-weight:bold;
background-color: white;
border: solid 1px black;
margin-right: 470px;
cursor: pointer;

`;
 const ButtonLabel = styled.p`
 text-align: center;
 padding-top: 2px;
 font-size: 13px;
 `;
 const PointWrapper = styled(Wrapper)`
 
 `;
const LeftPart = styled(Wrapper)`
padding-right: 50px;
padding-top: 50px;
`;
const RightPart = styled(Wrapper)`
margin-left: 100px;
padding-top: 50px;
`;
const ImagePart1 = styled(Wrapper)`
margin-top: 50px;



`;
const ImagePart2 = styled(Wrapper)`

`;
const LeftPart3 = styled(Wrapper)`

`;
const RightPart3 = styled(Wrapper)`
`;
const Image = styled.img`
width: 120px;
padding: 10px 30px;

`;
const Image2 = styled.img`
width: 400px; 
padding-right: 30px;


`;

const FootWrapper1 = styled(Wrapper)`

`;
const FootListPart= styled(Wrapper)`

`;
const FootList = styled.p`
 font-size: 13px;
 font-weight: bold;
 color: #81858A;
margin-right: 30px ;

`;
const FootInfoWrapper = styled(Wrapper)`
line-height: 2rem;
`;
const FootInfoPart = styled(Wrapper)`
`;
const FootLogoWrapper = styled(Wrapper)`

`;
const FootLogo = styled.img`
margin-right: 1010px;
border-radius: 10px;
cursor: pointer;
width: 170px;
height: 50px;
`;


export default AboutAutohub;
