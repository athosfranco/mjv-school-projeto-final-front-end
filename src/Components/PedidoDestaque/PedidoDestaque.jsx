import React from "react";
import {
  Data,
  HeaderPic,
  PedidoBody,
  PedidoDesc,
  PedidoDestaqueContainer,
  PedidoHeader,
  UserInfoWrapper,
  UserName,
} from "./PedidoDestaque.styles";

const PedidoDestaque = ({ username, imgSrc, data, desc }) => {
  return (
    <PedidoDestaqueContainer>
      <PedidoHeader>
        <HeaderPic src={imgSrc} />
        <UserInfoWrapper>
          <UserName>{username}</UserName>
          <Data>{data}</Data>
        </UserInfoWrapper>
      </PedidoHeader>
      <PedidoBody>
        <PedidoDesc>{desc}</PedidoDesc>
      </PedidoBody>
    </PedidoDestaqueContainer>
  );
};

export default PedidoDestaque;
