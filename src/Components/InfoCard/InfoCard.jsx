import React from "react";
import { CardContainer, Desc, Img, Title, Value } from "./InfoCard.styles";

const InfoCard = ({ title, value, img }) => {
  return (
    <CardContainer>
      <Desc>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Desc>
      <Img src={img} />
    </CardContainer>
  );
};

export default InfoCard;
