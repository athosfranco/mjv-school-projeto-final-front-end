import React from "react";
import ReactLoading from "react-loading";
import { LoadingOverlayContainer } from "./LoadingOverlay.styles";

const LoadingOverlay = ({ loadingMsg }) => {
  return (
    <LoadingOverlayContainer>
      <ReactLoading type="spin" color="#A91A1C" height={150} width={150} />
      <span>{loadingMsg}</span>
    </LoadingOverlayContainer>
  );
};

export default LoadingOverlay;
