import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const items =["#home", "#about-me", "#works", "#contacts"];

 export const Header = () => {
    return (
        <StyledHeader>
           <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

 const StyledHeader = styled.header`
   background-color: rgba(40, 44, 51, 0.27);
   display: flex;
   justify-content: space-between;
 `

