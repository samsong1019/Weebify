import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const LinkContainer = styled.div`
  display: flex;
`;

const LinkItem = styled.h4`
  color: black;
  margin-left: 20px;

  :hover {
    font-weight: bold;
    color: purple;
    text-decoration: underline;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Weebify</Logo>
        <Description>Follow us for first dibs on amazing deals!</Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Logo>Useful Links</Logo>
        <LinkContainer>
          <Link to="/" style={{ textDecoration: "none" }}>
            <LinkItem>Home</LinkItem>
          </Link>
          <Link to="/privacy" style={{ textDecoration: "none" }}>
            <LinkItem>Privacy Policy</LinkItem>
          </Link>
        </LinkContainer>
      </Center>
      <Right>
        <Title>Contact Information</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />6 South Weeb Court, Denver,CO,
          80219 United States
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +1 222 345 6789
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@weebifycommerce.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}
