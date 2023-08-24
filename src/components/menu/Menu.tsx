import React from 'react';
import styled from "styled-components";



 export const Menu = (props:{menuItems:Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item:string,index)=>{
                   return  <li key={index}>
                       <a href="">{item}</a></li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul{
  display: flex;
    gap: 200px;
  color: #C778DD;
    justify-content: center;
}
`