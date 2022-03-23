import React from "react";
import ReactLoading from "react-loading";
import { LoadingOverlayContainer } from "./LoadingOverlay.styles";

const LoadingOverlay = ({ loadingMsg }) => {
  return (
    <LoadingOverlayContainer>
      <ReactLoading type="spin" color="#2196f3" height={150} width={150} />
      <span>{loadingMsg}</span>
    </LoadingOverlayContainer>
  );
};

export default LoadingOverlay;
