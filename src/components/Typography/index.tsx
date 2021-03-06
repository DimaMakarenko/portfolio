import { HTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components/macro';

enum TypographyVariantTag {
  'h1' = 'h1',
  'h2' = 'h2',
  'sub-title' = 'sub-title',
}

export type TypographyVariant = keyof typeof TypographyVariantTag;

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: TypographyVariant;
  color?: string;
}

export const TypographyElement = styled.span<Pick<TypographyProps, 'variant' | 'color'>>`
  display: block;

  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return css`
          font-size: 80px;
          line-height: 88px;
          font-weight: 600;

          @media ${({ theme }) => theme.devices.laptop} {
            font-size: 60px;
            line-height: 66px;
          }
          @media ${({ theme }) => theme.devices.tablet} {
            font-size: 48px;
            line-height: 52px;
          }
        `;
      case 'h2':
        return css`
          font-size: 55px;
          line-height: 59px;

          @media ${({ theme }) => theme.devices.laptop} {
            font-size: 45px;
            line-height: 50px;
          }
          @media ${({ theme }) => theme.devices.tablet} {
            font-size: 38px;
            line-height: 42px;
          }
        `;
      case 'sub-title':
        return css`
          font-size: 20px;
          line-height: 24px;
          position: relative;
          padding-bottom: 10px;
          margin: 20px 0 25px;

          &:before {
            content: '';
            width: 100px;
            height: 2px;
            position: absolute;
            background-color: ${({ theme }) => theme.colors.main};
            left: 0px;
            bottom: 0px;
          }
        `;
    }
  }}
  color: ${({ color }) => color};
`;

export function Typography({ children, ...otherProps }: TypographyProps) {
  return <TypographyElement {...otherProps}>{children}</TypographyElement>;
}
