import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from "react";

import { routes } from "../../config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {
  NavbarStyled,
  WrapperStyled,
  ButtonShowMenu,
  Brand,
} from "./Navbar.styles";
import { Menu, MenuItem } from "./Navbar.styles";

export const Navbar = () => {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);

  const handleClickBrand = () => {
    router.push("/");
    setShowMenu(false);
  };

  const handleClickLink = () => {
    setShowMenu(false);
  };

  return (
    <NavbarStyled>
      <WrapperStyled>
        <ButtonShowMenu
          role="button"
          aria-label="Boton para mostrar menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FontAwesomeIcon icon={faBars} />
        </ButtonShowMenu>
        <Brand
          role="button"
          aria-label="Nombre de la marca"
          onClick={handleClickBrand}
        >
          Agenda
        </Brand>
        <Menu show={showMenu}>
          {routes.menu.map((route, i) => (
            <MenuItem key={i} selectedPage={route.path === router.asPath}>
              <Link href={process.env.baseUrl + route.path}>
                <a onClick={handleClickLink}>{route.title}</a>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </WrapperStyled>
    </NavbarStyled>
  );
};
