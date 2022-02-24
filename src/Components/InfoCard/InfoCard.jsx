import React from "react";
import {
  CardContainer,
  FlexRow,
  Desc,
  Img,
  Title,
  Value,
  ButtonWrapper,
  CardButton,
  BtnIconExcel,
  BtnTxt,
  CardButtonExcel,
  CardButtonRelatorios,
  BtnIconRelatorios,
} from "./InfoCard.styles";

const onCancel = () => {};

const onConfirm = () => {};

const InfoCard = ({ title, value, img, onClick, withBtns }) => {
  return (
    <CardContainer onClick={onClick}>
      <FlexRow>
        {" "}
        <Desc>
          <Title>{title}</Title>
          <Value>{value}</Value>
        </Desc>
        <Img src={img} />
      </FlexRow>

      {withBtns && (
        <ButtonWrapper>
          <CardButtonExcel onClick={onCancel}>
            <BtnIconExcel />
            <BtnTxt>Excel</BtnTxt>
          </CardButtonExcel>
          <CardButtonRelatorios onClick={onConfirm}>
            {" "}
            <BtnIconRelatorios />
            <BtnTxt>Relatórios</BtnTxt>
          </CardButtonRelatorios>
        </ButtonWrapper>
      )}
    </CardContainer>
  );
};

export default InfoCard;
