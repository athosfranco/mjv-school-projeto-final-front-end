import React, { useState } from "react";
import styled from "styled-components";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const Section = ({ sectionTitle, children }) => {
  //Styles
  const PageContainer = styled.div`
    width: 75vw;
    margin-bottom: 20px;
  `;

  const SectionTitle = styled.span`
    font-family: "Poppins", sans-serif;
    font-size: 22px;
    //media query
    @media only screen and (max-width: 980px) {
      font-size: 18px;
    }
  `;

  const Divider = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    border: 1px solid ${({ theme }) => theme.primary};
    width: 100%;
  `;

  const SectionWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;

    //media query
    @media only screen and (max-width: 980px) {
      flex-direction: column;
    }
  `;

  const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    vertical-align: center;
  `;

  const ToggleSectionBtn = styled.div`
    font-size: 24px;
    transition: 0.2s ease all;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover {
      transform: scale(1.2);
      color: ${({ theme }) => theme.primary};
    }
  `;

  ///////
  const [sectionIsExpanded, setSectionIsExpanded] = useState(true);
  return (
    <PageContainer>
      <>
        <TitleWrapper>
          <SectionTitle>{sectionTitle}</SectionTitle>
          <ToggleSectionBtn
            onClick={() => {
              setSectionIsExpanded(!sectionIsExpanded);
            }}
          >
            {sectionIsExpanded ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
          </ToggleSectionBtn>
        </TitleWrapper>

        <Divider />
        {sectionIsExpanded && children}
      </>
    </PageContainer>
  );
};

export default Section;
