import React from "react";
import { CardContainer, Desc, Img, Title, Value, ButtonWrapper } from "./InfoCard.styles";
import Button from "../../UI/Button/Button";

const onCancel = () => {};

const onConfirm = () => {};

const InfoCard = ({ title, value, img, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <Desc>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Desc>
      <ButtonWrapper>
        {/* <Button type="danger" onClick={onCancel} width={"200px"}>
          Excel
        </Button>
        <Button type="success" onClick={onConfirm} width={"200px"}>
          Relatórios
        </Button> */}
      </ButtonWrapper>
      <Img src={img} />
    </CardContainer>
  );
};

export default InfoCard;
