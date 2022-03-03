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
  ValueSmall,
} from "./InfoCard.styles";

const onCancel = () => {};

const onConfirm = () => {};

const InfoCard = ({ title, value, img, onClick, withBtns, percentageChange }) => {
  return (
    <CardContainer onClick={onClick}>
      <FlexRow>
        {" "}
        <Desc>
          <Title>{title}</Title>
          <Value>{value}</Value>
          {percentageChange && (
            <ValueSmall value={percentageChange}>
              {percentageChange > 0 && "+"}
              {percentageChange}%
            </ValueSmall>
          )}
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
