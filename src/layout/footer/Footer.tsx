import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SectionTitle} from "../../components/SectionTitle";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} aling={"center"}>
                <SectionTitle>#ARTEM</SectionTitle>

                <Sociallist>

                    <SocialItem>
                        <SocialLink>
                            <Icon  viewBox={"0 0 21px 21px"} iconId={"Telegram"}/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon  viewBox={"0 0 21px 21px"} iconId={"Twitter"}/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon  viewBox={"0 0 21px 21px"} iconId={"Discord"}/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon  viewBox={"0 0 21px 21px"} iconId={"Figma"}/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon  viewBox={"0 0 21px 21px"} iconId={"instagram-svg"}/>
                        </SocialLink>
                    </SocialItem>

                </Sociallist>

                <Copyright>@ 2023 Artem Petrov, Yaroslavl</Copyright>

            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: lime;
  min-height: 20vh;
`

const Name = styled.span`
`

const Sociallist = styled.ul`
    display: flex;
  gap: 30px;
`

const SocialLink = styled.a`
`
const Copyright = styled.small`
`
const SocialItem = styled.li`
`