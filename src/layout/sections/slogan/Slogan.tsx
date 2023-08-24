import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Slogan = () => {
    return (
        <StyledSloganIMP>
            <SectionTitle>#SLOGAN</SectionTitle>


            <StyledSlogan>
                With great power comes great electricity bill
            </StyledSlogan>
            <StyledSloganName>
                - Dr. Who
            </StyledSloganName>

            <Button>Hire me</Button>

        </StyledSloganIMP>
    );
};


const StyledSloganIMP = styled.section`
min-height: 30vh;
  background-color: rgba(250,88,160,0.78);
  max-width: 100%;
  
  

`

const StyledSlogan = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 400px;

`

const StyledSloganName = styled.section`
`