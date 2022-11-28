import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components/macro';

const ButtonStyled = styled.button`
  padding: 1rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.main};
  border-radius: 4px;
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.colors.main};
  font-size: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightMain};
    color: ${({ theme }) => theme.colors.lightBg};
  }

  @media ${({ theme }) => theme.devices.laptop} {
    padding: 0.75rem 1rem;
  }
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};
