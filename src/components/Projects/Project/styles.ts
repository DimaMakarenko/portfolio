import styled from 'styled-components/macro';

import { CodeW } from 'components/Code';

export const Content = styled.div`
  position: relative;
  grid-column: 7 / -1;
  grid-area: 1 / 1 / -1 / 9;
  z-index: 2;

  @media ${({ theme }) => theme.devices.tablet} {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    padding: 30px 25px 20px;
    z-index: 5;
    grid-column: 1 / -1;
  }
`;

export const Image = styled.a`
  grid-area: 1 / 8 / -1 / -1;
  position: relative;
  z-index: 1;
  cursor: pointer;

  img {
    max-width: 100%;
    display: block;
    position: static;
  }

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #eff2f4;
    opacity: 0.3;
    transition: ${({ theme }) => theme.transition};
  }

  &:hover {
    z-index: 2;

    &:before {
      opacity: 0;
    }
  }
  @media ${({ theme }) => theme.devices.tablet} {
    grid-column: 1 / -1;
    height: 100%;
    opacity: 0.1;

    img {
      object-fit: cover;
      width: auto;
      height: 100%;
    }
    &:hover {
      z-index: auto;

      &:before {
        opacity: 0.1;
      }
    }
  }
`;

export const Technologies = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  font-size: 16px;

  ${CodeW} {
    margin-right: 15px;
    margin-bottom: 10px;
    background-color: transparent;

    &:last-of-type {
      margin-right: 0;
    }
  }
  @media ${({ theme }) => theme.devices.tablet} {
    ${CodeW} {
      padding: 0;
    }
  }
`;

export const ProjectW = styled.li`
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-align: center;
  align-items: center;

  &:nth-of-type(2n + 1) {
    ${Content} {
      grid-column: 5 / -1;
      text-align: right;
    }
    ${Image} {
      grid-column: 1 / 6;
    }
    ${Technologies} {
      -webkit-box-pack: end;
      justify-content: flex-end;
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;
  }

  @media ${({ theme }) => theme.devices.tablet} {
    &:nth-of-type(2n + 1) {
      ${Content} {
        grid-column: 1 / -1;
        text-align: left;
      }
      ${Image} {
        grid-column: 1 / -1;
      }
      ${Technologies} {
        -webkit-box-pack: start;
        justify-content: flex-start;
      }
    }
    &:not(:last-of-type) {
      margin-bottom: 40px;
    }
  }
`;

export const Title = styled.h4`
  font-weight: 600;
  margin-bottom: 5px;

  @media ${({ theme }) => theme.devices.tablet} {
    a:before {
      content: '';
      display: block;
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
    }
  }
`;

export const Description = styled.p`
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  position: relative;
  z-index: 2;
  padding: 25px;
  background-color: ${({ theme }) => theme.colors.lightBg};

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 20px 0px;
    background-color: transparent;
    box-shadow: none;
  }
`;
export const Links = styled.div`
  @media ${({ theme }) => theme.devices.tablet} {
    z-index: 6;
  }
`;
