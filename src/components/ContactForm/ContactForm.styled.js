import styled from 'styled-components';

export const Form = styled('form')`
  border: 1px solid gray;
  width: 100%;
  max-width: 300px;
  padding: 30px;
  border-radius: 8px;
`;

export const FieldWrapper = styled('div')`
  //...
`;

export const Label = styled('label')`
  display: block;
  &:first-child {
    margin-bottom: 20px;
  }
`;

export const LabelValue = styled('span')`
  display: block;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 2px;
`;

export const Field = styled('input')`
  display: block;
  font-size: 16px;
  width: 100%;
  padding: 6px;
  padding-left: 12px;
`;

export const Submit = styled('button')`
  margin-top: 30px;
  padding: 8px 20px;
  border: 2px solid gray;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: gray;
    color: white;
  }
`;
