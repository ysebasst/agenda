import styled from "styled-components";

import { breakpoints, variables, colors } from "../../config";

import Wrapper from "../Wrapper";

// Navbar
export const NavbarStyled = styled.nav`
  z-index: 50;
  position: relative;
  padding: 0 1rem;
  background-color: ${colors.primary};
  user-select: none;
`;

// Wrapper
export const WrapperStyled = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: ${variables.navbar.height};
`;

// Button Show Menu
export const ButtonShowMenu = styled.span`
  display: none;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2rem;
  color: ${colors.white};
  cursor: pointer;
  @media screen and (max-width: ${breakpoints.toTablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
  }
`;

// Brand
export const Brand = styled.span`
  flex-grow: 1;
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.white};
  cursor: pointer;
`;

// Menu
export const Menu = styled.ul`
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  background-color: ${colors.primary};
  @media screen and (max-width: ${breakpoints.toTablet}) {
    position: absolute;
    top: ${variables.navbar.height};
    left: 0;
    width: 100%;
    max-height: calc(100vh - ${variables.navbar.height});
    overflow-y: auto;
    box-shadow: 0 0.5rem 0.5rem -0.5rem #00000080 inset;
    transform: ${(props) => (props.show ? "scale(1, 1)" : "scale(1, 0)")};
    transform-origin: top;
    transition: transform 0.3s;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: flex;
  }
`;

// Menu Item
export const MenuItem = styled.li`
  list-style: none;
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${variables.navbar.height};
    padding: 0.5rem;
    font-size: 1.25rem;
    font-weight: bold;
    text-decoration: none;
    color: ${colors.white};
    background-color: ${(props) =>
      props.selectedPage ? colors.secondary : "transparent"};
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: ${colors.dark};
    }
  }
`;
