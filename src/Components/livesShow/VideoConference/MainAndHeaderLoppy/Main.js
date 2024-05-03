import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.main`
  background-color: #1a1a1a;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  width: 90%;
  max-width: 600px;
  border-radius: 10px;
  background-color: #262625;
  padding: 2em;
`;

const FormHeader = styled.div`
  border-radius: 10px 10px 0 0;
  ${"" /* padding: 10px; */}
  text-align: center;
  background-color: #363739;
  margin: 0;
  font-size: 18px;
  font-size: 300;
  line-height: 0;
`;

const Form = styled.form`
  padding: 2em;
`;

const FormFieldWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  line-height: 1.7em;
  margin-bottom: 10px;
  display: block;
`;

const Input = styled.input`
  box-sizing: border-box;
  color: #fff;
  width: 100%;
  margin: 0;
  border: none;
  border-radius: 5px;
  padding: 16px 20px;
  font-size: 15px;
  background-color: #3f434a;
`;

const SubmitButton = styled.button`
  margin-top: 32px;
  cursor: pointer;
  background-color: #845695;
  border: none;
  color: #fff;
  font-size: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 5px;
  gap: 10px;
`;

const Main = () => {
  return (
    <MainContainer>
      <FormContainer>
        <FormHeader>
          <p>👋 Create or Join Room</p>
        </FormHeader>
        <Form>
          <FormFieldWrapper>
            <Label style={{ color: "#fff" }}>Your Name</Label>
            <Input
              type="text"
              name="name"
              required
              placeholder="Enter your display name..."
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label style={{ color: "#fff" }}>Room Name</Label>
            <Input type="text" name="room" placeholder="Enter room name..." />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Link to={"/VideoConfernce"} style={{ textDecoration: "none" }}>
              <SubmitButton type="submit">
                Go to Room{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                </svg>
              </SubmitButton>
            </Link>
          </FormFieldWrapper>
        </Form>
      </FormContainer>
    </MainContainer>
  );
};

export default Main;
