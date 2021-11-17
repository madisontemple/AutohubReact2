import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import AboutAutohub from "./AboutAutohub";
import "../index.css";


function Login() {
  const history = useHistory();
  const HomeClick = () => history.push("./");

  const BuyClick = () => history.push("./Buy");
  const SellClick = () => history.push("./Sell");
  const ManagedClick = () => history.push("./Managed");
  const AboutClick = () => history.push("./AboutAutohub");
  const CCenterClick = () => history.push("./CCenter");
  const JoinClick = () => history.push("./Join");
  const LoginClick = () => history.push("./Login");

  const HyundaiClick = () => history.push("./Hyundai");
  const KiaClick = () => history.push("./Kia");
  const BenzClick = () => history.push("./Benz");
  const BmwClick = () => history.push("./Bmw");
  const GenesisClick = () => history.push("./Genesis");

  return (
    <Body>
  <HeaderSearchWrapper>
    <HeaderSearch></HeaderSearch>
    <BiSearch />
  </HeaderSearchWrapper>

  <LoginStyledWrapper flex w >
  <ImagePart>

    <LoginImage src="/images/Login-image1.png" />
  </ImagePart>

  <RightPart>
<AutohubLogoPart>
    <AutohubLogo src="/images/Autohub2 Logo.png" />

</AutohubLogoPart>
<Comment>중고차 구매!<br/>
 오토허브에서는 전 차종 직영관리로<br/>
 믿고 구매하실 수 있습니다.</Comment>

<IDInputPart>
<IDInput placeholder="아이디"></IDInput>

</IDInputPart>
<PWInputPart>
<PWInput  input type="password" placeholder="비밀번호"></PWInput>

</PWInputPart>

<ButtonPart>
  <LoginButton>로그인</LoginButton>
</ButtonPart>

<CheckBoxPart>

 


</CheckBoxPart>


<CommentPart2>
  <Comment2>
    오토허브가 처음이신가요?
  </Comment2>
</CommentPart2>

<KakaoLogoPart>
<KakaoLogo src="/images/KakaoLogo.png" />

</KakaoLogoPart>

<KakaoButtonPart>
<KakaoButton>

카카오톡으로 로그인하기</KakaoButton>

</KakaoButtonPart>
  </RightPart>



  </LoginStyledWrapper>
      

      
    </Body>
  );
}

const Body = styled.body`
margin: 0;
padding: 0;
box-sizing: border-box;
`;

const LoginStyledWrapper = styled.div`
${({flex}) => flex && 'display: flex;'}
${({w}) => w && 'justify-content: center;'}
${({h}) => h && 'align-items: center;'}
${({column}) => column && 'flex-direction:column;'}
${({center}) => center && 'text-align: center;'}
${({left}) => left && 'text-align: left;'}
${({right}) => right && 'text-align: right;'}


`;
const Box = styled.div`
width: 300px;
height: 300px;
background-color: blue;
`;
const HeaderSearchWrapper = styled.div`

`;

const HeaderSearch = styled.input`
width: 25rem;
height: 3rem;
border-radius: 20px;
margin-top: 100px;

`;
const ImagePart = styled.div`
margin-top: 50px;
`;
const LoginImage = styled.img`
height: 45rem;
width: 45rem;
`;
const RightPart = styled.div`
width: 50vh;


`;
const AutohubLogoPart = styled.div`
display: flex;
justify-content: center;
margin-top: 50px;
`;
const AutohubLogo = styled.img`
width: 200px;
height: 50px;
`;
const Comment = styled.h2`
text-align: center;
font-size: 25px;

`;

const IDInputPart = styled.div`
display: flex;
justify-content: center;

`;
const IDInput = styled.input`
font-size: 17px;
padding: 10px 0px 10px 20px;
width: 390px;
height: 40px;
background-color:#E8E6E5   ;
border-style: none;
`;
const PWInputPart = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;

`;
const PWInput = styled.input`
font-size: 17px;
padding: 10px 0px 10px 20px;
width: 390px;
height: 40px;
background-color:#E8E6E5   ;
border-style: none;
`;
const ButtonPart = styled.div`
  display: flex;
justify-content: center;
margin-top: 20px;
`;
const LoginButton = styled.button`
width: 410px;
height: 60px;
font-size: 17px;
font-weight: bold;
border-radius: 10px;
border-style: none;
background-color: #f11843;
color: white;
cursor: pointer;
`;
const CheckBoxPart = styled.div`

`;
const CommentPart2 = styled.div`
       display: flex;
justify-content: center;
margin-top: 60px;
`;
const Comment2 = styled.p`
border-style: 1px solid black;
`;
const KakaoButtonPart = styled.div`
  display: flex;
justify-content: center;
margin-top: 60px;
`;
const KakaoButton = styled.button`
width: 410px;
height: 60px;
font-size: 17px;
font-weight: bold;
border-radius: 10px;
border-style: none;
background-color: #FFEC01 ;
color: #362B00;
font-weight: bold;
cursor: pointer;
`;
const KakaoLogoPart = styled.div`
display: flex;
justify-content: centeer;
position: relative;
top: 110px;
left: 130px;
`;
const KakaoLogo = styled.img`
width: 50px;
height: 40px;

cursor: pointer;
`;
const FooterWrapper = styled.div`

`;



export default Login;
