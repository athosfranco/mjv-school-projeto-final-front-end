import React from "react";
import { Image, LogoContainer, LogoName1, LogoName2 } from "./ClinicLogo.styles";
import logo from "../../Assets/logo_clinic.png";

const ClinicLogo = () => {
  return (
    <LogoContainer>
      <Image src={logo} />
      <>
        {" "}
        <LogoName1>MJV</LogoName1>
        <LogoName2>Clinic</LogoName2>
      </>
    </LogoContainer>
  );
};

export default ClinicLogo;
