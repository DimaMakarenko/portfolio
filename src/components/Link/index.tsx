import { AnchorHTMLAttributes, HTMLProps, ReactNode } from 'react';
import styled, { css } from 'styled-components/macro';

enum LinkVariantTag {
  'link' = 'link',
  'button' = 'button',
}

export type LinkVariant = keyof typeof LinkVariantTag;

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  children: ReactNode;
}

const LinkElement = styled.a``;

const LinkW = styled.span<Pick<LinkProps, 'variant'>>`
  cursor: pointer;
  position: relative;

  ${LinkElement} {
    color: ${({ theme }) => theme.colors.green};
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
  }

  ${({ variant }) => {
    switch (variant) {
      case 'link':
        return css`
          ${LinkElement} {
            &:after {
              content: '';
              display: block;
              width: 0px;
              height: 2px;
              position: absolute;
              bottom: 0px;
              left: 0px;
              background-color: ${({ theme }) => theme.colors.green};
              transition: ${({ theme }) => theme.transactions};
              opacity: 0.5;
            }
            &:hover {
              &:after {
                width: 100%;
              }
            }
          }
        `;
      case 'button':
        return css`
          padding: 1rem 1.25rem;
          border: 1px solid ${({ theme }) => theme.colors.green};
          border-radius: ${({ theme }) => theme.borderRadius};

          &:hover {
            background-color: ${({ theme }) => theme.colors.greenTint};
          }
        `;
    }
  }};
`;

export function Link({ variant = 'link', children, ...otherProps }: LinkProps) {
  return (
    <LinkW variant={variant}>
      <LinkElement {...otherProps}>{children}</LinkElement>
    </LinkW>
  );
}
