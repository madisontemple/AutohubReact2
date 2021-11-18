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
  <HeaderSearchWrapper flex jcr>
    <HeaderSearch></HeaderSearch>
    <BiSearch />
  </HeaderSearchWrapper>
  <LoginStyledWrapper flex jcc aic  mt={"100px"}>
  <ImagePart mt={"50px"}>
    <LoginImage src="/images/Login-image1.png" />
  </ImagePart>
  <RightPart ml={"50px"}>
<AutohubLogoPart flex jcc mt={"50px"}>
    <AutohubLogo src="/images/Autohub2 Logo.png" />
</AutohubLogoPart>
<Comment>중고차 구매!<br/>
 오토허브에서는 전 차종 직영관리로<br/>
 믿고 구매하실 수 있습니다.</Comment>

<IDInputPart>
<IDInput placeholder="아이디"></IDInput>

</IDInputPart>
<PWInputPart mt={"20px"}>
<PWInput  input type="password" placeholder="비밀번호"></PWInput>
</PWInputPart>

<ButtonPart mt={"20px"}>
  <LoginButton>로그인</LoginButton>
</ButtonPart>

<CheckBoxPart>

</CheckBoxPart>

<CommentPart2 flex jcc mt={"50px"}>
  <Comment2>
    오토허브가 처음이신가요?
  </Comment2>
</CommentPart2>

<KakaoLogoPart>
<KakaoLogo src="/images/KakaoLogo.png" />
</KakaoLogoPart>

<KakaoButtonPart mt={"50px"}>

<KakaoButton>카카오톡으로 로그인하기</KakaoButton>
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

const StyledWrapper = styled.div`
${({flex}) => flex && 'display: flex;'}
${({jcc}) => jcc && 'justify-content: center;'}
${({jcr}) => jcr && 'justify-content: right;'}
${({aic}) => aic && 'align-items: center;'}
${({column}) => column && 'flex-direction:column;'}
${({center}) => center && 'text-align: center;'}
${({left}) => left && 'text-align: left;'}
${({right}) => right && 'text-align: right;'}
${({mt}) => mt && `margin-top: ${mt}`}
${({mr}) => mr && `margin-right: ${mr}`}
${({mb}) => mb && `margin-bottom: ${mb}`}
${({ml}) => ml && `margin-left: ${ml}`}
${({pt}) => pt && `padding-top: ${pt}`}
${({pr}) => pr && `padding-right: ${pr}`}
${({pl}) => pl && `padding-top: ${pl}`}
${({pt}) => pt && `padding-top: ${pt}`}
${({width}) => width && `width: ${width}`}
${({height}) => height && `height: ${height}`}
${({fs}) => fs && `font-size: ${fs}`}
${({fw}) => fw && `font-weight: ${fw}`}
`;

const LoginStyledWrapper = styled(StyledWrapper)`
`;

const HeaderSearchWrapper = styled(StyledWrapper)`
`;
const HeaderSearch = styled.input`
width: 25rem;
height: 3rem;
border-style: none;
border-radius: 20px;
margin-top: 15px;
margin-right: 240px;
z-index: 3;
position: fixed;
`;
const ImagePart = styled(StyledWrapper)`
`;
const LoginImage = styled.img`
height: 40rem;
width: 40rem;
`;
const RightPart = styled(StyledWrapper)`
`;
const AutohubLogoPart = styled(StyledWrapper)`
`;
const AutohubLogo = styled.img`
width: 200px;
height: 50px;
`;
const Comment = styled.h2`
text-align: center;
font-size: 25px;
`;
const IDInputPart = styled(StyledWrapper)`

`;
const IDInput = styled.input`
font-size: 17px;
padding: 10px 0px 10px 20px;
width: 390px;
height: 40px;
background-color:#E8E6E5   ;
border-style: none;
`;
const PWInputPart = styled(StyledWrapper)`
`;
const PWInput = styled.input`
font-size: 17px;
padding: 10px 0px 10px 20px;
width: 390px;
height: 40px;
background-color:#E8E6E5   ;
border-style: none;
`;
const ButtonPart = styled(StyledWrapper)`
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
const CheckBoxPart = styled(StyledWrapper)`
`;
const CommentPart2 = styled(StyledWrapper)`
`;
const Comment2 = styled.p`
border-style: 1px solid black;
`;
const KakaoButtonPart = styled(StyledWrapper)`
`;
const KakaoButton = styled.button`
width: 410px;
height: 60px;
font-size: 17px;
font-weight: bold;
border-radius: 10px;
border-style: none;
background-color: #FBE600 ;
color: #362B00;
cursor: pointer;
`;
const KakaoLogoPart = styled(StyledWrapper)`
position: relative;
top: 110px;
left: 130px;
`;
const KakaoLogo = styled.img`
width: 50px;
height: 40px;

cursor: pointer;
`;
const FooterWrapper = styled(StyledWrapper)`
`;
export default Login;