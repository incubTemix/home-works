import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";






export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>#Testimony</SectionTitle>
            <FlexWrapper direction={"column"} aling={"center"}>
            <Icon iconId={"quote-alt-right-svg 1"} />
            <Slider/>
            </FlexWrapper>

        </StyledTestimony>
    );
};

 const StyledTestimony = styled.section`
   background-color: #e22b7d;
   min-height: 50vh;

 `

