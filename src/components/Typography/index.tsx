import { ReactNode } from 'react';
import styled, { css } from 'styled-components/macro';

enum TypographyVariantTag {
  'h1' = 'h1',
  'h2' = 'h2',
  'h4' = 'h4',
}

export type TypographyVariant = keyof typeof TypographyVariantTag;

export interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
  color?: string;
}

const TypographyElement = styled.span<Pick<TypographyProps, 'variant' | 'color'>>`
  display: block;

  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return css`
          font-size: 80px;
          line-height: 88px;
          font-weight: 600px;
        `;
      case 'h2':
        return css`
          font-size: 68px;
          line-height: 72px;
        `;
      case 'h4':
        return css`
          font-size: 30px;
          line-height: 34px;
        `;
    }
  }}
  color: ${({ color }) => color};
`;

export function Typography({ children, ...otherProps }: TypographyProps) {
  return <TypographyElement {...otherProps}>{children}</TypographyElement>;
}
