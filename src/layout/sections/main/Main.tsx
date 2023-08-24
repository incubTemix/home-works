import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/Foto.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

 export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper aling={"center"} justify={"space-around"}>
                <div>
                <h2>Elias is a web designer and front-end developer</h2>
                <OneString> He crafts responsive websites where technologies meet creativity</OneString>
                 </div>
                 <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain= styled.div`
    min-height: 100vh;
background-color: #282C33;
`
const Photo = styled.img`
 width: 457px;
 height: 386px;  
   object-fit: cover;
`
const OneString = styled.div`
    color: #C778DD

`