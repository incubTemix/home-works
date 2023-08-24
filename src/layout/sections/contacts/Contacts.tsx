import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>#Contats</SectionTitle>
            <StyledForm>
                <Field placeholder={"NAME"}/>
                <Field placeholder={"SUBJECT"}/>
                <Field placeholder={"E-MAIL"}/>
                <Field placeholder={"MASSAGE"} as={"textarea"}/>
                <Button type={"submit"}>Send messege</Button>

            </StyledForm>


        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: darkolivegreen;
`
const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`
const Field = styled.input`
`

