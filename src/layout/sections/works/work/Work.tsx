import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

 export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} />
            <Title>{props.title}</Title>
            <Description>{props.text}</Description>
            <Link href={"#"}>Demo</Link>
            <Link href={"#"}>Code</Link>
        </StyledWork>
    );
};


 const StyledWork = styled.div`
width: 40%;
background-color: cadetblue;
  margin: 10px;
   max-width: 540px;
   width: 100%;
   object-fit: cover;
`

const Image = styled.img`
    width: 100%;
  height: 260px;
`
const Link = styled.a`
`
const Title = styled.h3`
`
const Description = styled.h3`
`
