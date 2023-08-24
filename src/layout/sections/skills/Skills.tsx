import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

 export const Skills = () => {
     return (
         <StyledSkills>

             <SectionTitle>#Skills</SectionTitle>
             <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                 <Skill iconId={"code-svg"}
                        title={"HTML5"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim "}/>

                 <Skill iconId={"ic:outline-web"}
                        title={"Frontend"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim "}/>

                 <Skill iconId={"Discord"}
                        title={"Discord"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim "}/>

                 <Skill iconId={"react"}
                        title={"React"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim "}/>

                 <Skill iconId={"Figma"}
                        title={"Web Design"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim "}/>

                 <Skill iconId={"styled-components-icon"}
                        title={"Styled Components"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim "}/>
             </FlexWrapper>

         </StyledSkills>
     );
 };
const StyledSkills = styled.section`
  background-color: rgba(14, 14, 14, 0.49);
  min-height: 100vh;
`