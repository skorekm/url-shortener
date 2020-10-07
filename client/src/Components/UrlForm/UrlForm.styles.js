import styled from 'styled-components';
import { Form } from 'formik';
import { Button } from 'arwes';

export const FormContainer = styled(Form)`
  margin: 24px auto;
  padding: 12px;
  max-width: 320px;
  text-align: center;
  border: 1px solid;
  input {
    width: 100%;
    padding: 8px;
    margin: 8px auto;
  }
  @media (max-width: 576px) {
    border: 0;
    padding: auto;
  }
`;

export const SubmitButton = styled(Button)`
  margin: 16px auto;
  width: 100%;
`;