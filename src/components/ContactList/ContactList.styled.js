import styled from 'styled-components';

export const List = styled('ul')``;

export const Item = styled('li')`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardWrapper = styled('div')`
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 20px;
    align-items: center;
  }
`;

export const Meta = styled('p')`
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 5px;
    align-items: center;
  }
`;

export const Name = styled('span')`
  display: block;
  font-size: 16px;
  width: 150px;
`;

export const Tel = styled('span')`
  display: block;
  font-size: 16px;
  width: 150px;

  @media screen and (max-width: 767.98px) {
    margin-top: 5px;
  }
`;

export const Delete = styled('button')`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: rgba(0, 0, 0, 1);
  font-weight: 400;
  font-size: 12px;
  padding: 5px 10px;
  transition: background-color 300ms ease-in-out;

  @media screen and (max-width: 767.98px) {
    margin-top: 10px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
