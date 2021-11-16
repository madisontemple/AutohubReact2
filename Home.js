import React from "react";
import styled from "styled-components";
import Search from "../icon/search-solid.svg";
// import Navbar from "./Navbar";
import { SearchBox } from "react-instantsearch-dom";
import { useHistory } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";


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
  ${({flex}) => flex && 'display: flex;'}

  

  `;

  return (
    <Body>
    <HeaderWrapper>
    <HeaderImagePart>
    <HeaderImage src="/images/Autohub.HeadersLeft.png" />

    </HeaderImagePart>
    
<HeaderRightWrapper>

<HeaderRightPart>

<HeaderRightPartComment>지금 바로 키워드로 검색해보세요! 무엇이든 찾아드립니다.</HeaderRightPartComment>

<HeaderRightSearchPart>
<SearchInput></SearchInput>
<BiSearch style={{width:"50px",height:"40px",color:"#f11843",position:"relative",right:"80px",top:"5px",cursor:"pointer"}} />
</HeaderRightSearchPart>


<HeaderButtonPart>

<HeaderButton primary>현대</HeaderButton>
<HeaderButton primary>기아</HeaderButton>
<HeaderButton primary>Bmw</HeaderButton>
<HeaderButton primary>벤츠</HeaderButton>
<HeaderButton primary>제네시스</HeaderButton>
</HeaderButtonPart>

</HeaderRightPart>
</HeaderRightWrapper>

    </HeaderWrapper>
<MainWrapper>
<MainLeftPart>
<MainComment>인기있는 4대의 자동차</MainComment>
<MainImagePart>
<MainImage src="/images/Autohub.Main1.png" />

</MainImagePart>

</MainLeftPart>

<MainRightWrapper>

<MainRightPart>
<MainRightImage src="/images/Autohub.Main2.png" />
<MainRightImage src="/images/Autohub.Main3.png" />


</MainRightPart>
<MainRightPart>
<MainRightImage src="/images/Autohub.Main4.png" />
<MainRightImage src="/images/Autohub.Main5.png" />

</MainRightPart>
</MainRightWrapper>
</MainWrapper>
    
    <FinsetNWrapper>
      <FinsetNImagePart>
        <FinsetNImage src="/images/FinsetImage.png" />
      </FinsetNImagePart>
    </FinsetNWrapper>
    <FAQWrapper>
      <FAQPart>
      
        <FAQ>FAQ</FAQ>
        <HR />
        <FAQList>차량 구매시 필요서류는 무엇인가요?</FAQList>
        <HR />
        <FAQList>차량 구매시 카드로 구매가 가능한가요?</FAQList>
        <HR />
        <FAQList>대체구매(차량맞교환)가 가능한가요?</FAQList>
        <HR />
      </FAQPart>
      <CustomerCenterPart>
      <FAQTxtPart>
      <FAQ>고객센터</FAQ>

      </FAQTxtPart>
      <CustomerCenterSquare> <h1 style={{color:"#f11843"}}>1811-9393</h1>
      <p>연중무휴</p>
      <p>09:00~18:00</p>
      </CustomerCenterSquare>
      </CustomerCenterPart>

      <CustomerCenterSquare2Part >


      <CustomerCenterSquare2>

      </CustomerCenterSquare2>

      <CustomerCenterSquare2>

      </CustomerCenterSquare2>
      
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
const HeaderWrapper = styled.div`
height: 350px;
padding-top: 50px;
background-color:#f11843 ;
display: flex;
justify-content: center;

`;
const HeaderImagePart = styled.div`

`;
const HeaderImage = styled.img`
width: 35rem;
height: 15rem;
padding: 60px 0px;

`;
const HeaderRightWrapper = styled.div`

`;
const HeaderRightPart = styled.div`

padding: 80px 20px 0px 30px;
margin-left: 30px;


`;
const HeaderRightCommentPart = styled.div`

`;
const HeaderRightPartComment = styled.h2`
color: #fff;
font-size: 15px;

padding-left: 10px;


`;
const HeaderRightSearchPart = styled.div`

`;
const SearchInput = styled.input`
border-radius: 40px;
margin-top: 10px;

padding: 10px 0 0 30px;
width: 40rem;
height: 70px;
border-style: none;
font-size: 30px;
outline: none;

`;
const HeaderButtonPart = styled.div`
margin: 10px 0px;

`;
const HeaderButton = styled.button`
  background: ${props => props.primary ? "#f11843" : "white"};
  margin: 0px 17px 0px 0px;
  width: 7.5rem;
  height: 3rem;
  border-radius: 40px;
  border: 2px solid white;
  color: #fff;
  font-weight: bold;

  &:hover {
    background-color: #C13B2E;
  }
`;
const MainWrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
`;
const MainPart = styled.div`

`;
const MainLeftPart = styled.div`

`;
const MainComment = styled.h1`

`;
const MainImagePart = styled.div`

`;
const MainImage = styled.img`
width: 40rem;
height: 40rem;
border-radius: 10px;
`;
const MainRightWrapper = styled.div`
padding-top: 70px;
`;
const MainRightPart = styled.div`
padding: 10px 40px 20px 0px;

`;

const MainRightImage = styled.img`
width: 19rem;
height: 19rem;
border-radius: 10px;
margin-left: 20px;
`;
const FinsetNWrapper = styled.div`
display: flex;
justify-content: center;
`;
const FinsetNImagePart = styled.div`

`;
const FinsetNImage = styled.img`
margin-top: 60px;
padding-right: 40px;
width: 80.5rem;
`;

const FAQWrapper = styled.div`
display: flex;
justify-content: center;

margin-top: 60px;
`;
const FAQPart = styled.div`
padding-right: 15px;

`;
const FAQTxtPart = styled.div`

`;
const FAQ = styled.h2`

`;
const HR = styled.hr`
width: 40rem;
`;
const FAQList = styled.p`
font-weight: bold;
font-size: 17px;
`;
const CustomerCenterPart = styled.div`
margin-left: 20px;

`;
const CustomerCenterSquare = styled.div`
  width: 300px;
  height: 160px;
  border-radius: 10px;
  outline: 1px solid black;
  padding: 5px 0px 5px 30px;
  
`;
const CustomerCenterSquare2Part = styled.div`
margin-top: 50px;
padding: 10px 0px 10px 10px;
`;
const CustomerCenterSquare2 = styled.div`
  width: 300px;
  height: 70px;
  border-radius: 10px;
  outline: 1px solid black;
  margin: 10px 0px 0px 0px;
  padding: 7px 0px 0px 10px;
  
`;









export default Home;
