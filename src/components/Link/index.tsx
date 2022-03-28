import { AnchorHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components/macro';

import { icons, Icons } from 'assets/icons';

enum LinkVariantTag {
  'link' = 'link',
  'button' = 'button',
  'icon' = 'icon',
  'basic' = 'basic',
}

export type LinkVariant = keyof typeof LinkVariantTag;

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  children?: ReactNode;
  iconName?: Icons;
}

export const LinkElement = styled.a<{ variant?: LinkVariant }>`
  cursor: pointer;
  position: relative;

  color: ${({ theme }) => theme.colors.main};
  display: inline-block;

  ${({ variant }) => {
    switch (variant) {
      case 'link':
        return css`
          &:after {
            content: '';
            display: block;
            width: 0px;
            height: 2px;
            position: absolute;
            bottom: 0px;
            left: 0px;
            background-color: ${({ theme }) => theme.colors.main};
            transition: ${({ theme }) => theme.transition};
            opacity: 0.5;
          }
          &:hover {
            &:after {
              width: 100%;
            }
          }
        `;
      case 'button':
        return css`
          padding: 1rem 1.25rem;
          border: 1px solid ${({ theme }) => theme.colors.main};
          border-radius: 4px;
          transition: ${({ theme }) => theme.transition};

          &:hover {
            background-color: ${({ theme }) => theme.colors.lightMain};
          }

          @media ${({ theme }) => theme.devices.laptop} {
            padding: 0.75rem 1rem;
          }
        `;
      case 'icon':
        return css`
          display: inline-block;
          line-height: 0px;

          padding: 10px;
          transition: ${({ theme }) => theme.transition};

          svg {
            stroke: ${({ theme }) => theme.colors.text};
            width: 20px;
            height: 20px;
            display: block;
          }
          &:hover,
          &:focus {
            transform: translateY(-3px);
            svg {
              stroke: ${({ theme }) => theme.colors.main};
            }
          }
        `;
      case 'basic':
        return css``;
    }
  }};
`;

export function Link({ variant = 'link', iconName, children, ...otherProps }: LinkProps) {
  return (
    <LinkElement {...otherProps} variant={iconName ? 'icon' : variant}>
      {children}
      {iconName && icons[iconName]}
    </LinkElement>
  );
}
