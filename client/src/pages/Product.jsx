import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid crimson;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.div`
  padding: 15px;
  border: 2px solid crimson;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: lightblue;
  }
`;

export default function Product() {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Title Here</Title>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
            ducimus dolorum, esse error quod neque rerum sed illum voluptas
            consequatur eveniet ipsam maxime doloribus sequi ratione sunt
            aperiam fugiat blanditiis?
          </Description>
          <Price>$ 1,000</Price>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button> Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
}
