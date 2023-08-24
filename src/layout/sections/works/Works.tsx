import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './/../../../assets/images/ProtectXBanner_1.webp'
import timerImg from './../../../assets/images/KahootBanner_1.webp'

const worksItems =["#All", "#landing page", "#React", "#spa"];

 export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>#Projects </SectionTitle>
            <Menu menuItems={worksItems}/>
               <FlexWrapper justify={"space-around"}>
                <Work title={"ProtectX"}
                      src={socialImg}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>

                <Work title={"Kahoot Answers Viewer"}
                      src={timerImg}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
              </FlexWrapper>
        </StyledWorks>
    );
};

 const StyledWorks = styled.section`
   min-height: 100vh;
   background-color: #b68c56;
   
 `
