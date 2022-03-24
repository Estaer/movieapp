import React, { useState } from "react";
import styled, { css } from 'styled-components';
import { NavLink as Link } from "react-router-dom";
import {devices} from "../../devices";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";
import HamburgerIcon from "../../images/hamburger-menu.png"

export default function SideNavBar () {
  const [isOpen, setIsOpen] = useState(false);
  /* TODO: Write the necessary functions to open and close the sidebar */
    return (
        <div className="sideNavBar">
            <Hamburger onClick = {()=>{ setIsOpen(!isOpen)}} >
                <img src={HamburgerIcon}/>
            </Hamburger>
            {/*{ isOpen &&*/}
            <SideNavBarCont isOpen={isOpen} className={isOpen ? 'visible' : ''} >
                {/* TODO: Implement a hamburger icon that controls the open state of the sidebar. This control should only be visible on mobile devices via CSS media queries */}
                {/* The sidebar should slide in from left */}

                <SideNavHeader isOpen={isOpen}>
                    Wesley
                    <img src={Arrow} alt="Arrow pointing down" />
                </SideNavHeader>
                <SideNavMainLink to="/discover" exact>
                    Discover
                    <img src={SearchWhite} alt="Magnifying glass" />
                </SideNavMainLink>
                <SideNavSectionTitle><HeaderText>Watched</HeaderText></SideNavSectionTitle>
                <NavLink to="/watched/movies">Movies</NavLink>
                <NavLink to="/watched/tv-shows">Tv Shows</NavLink>
                <SideNavSectionTitle><HeaderText>Saved</HeaderText></SideNavSectionTitle>
                <NavLink to="/saved/movies">Movies</NavLink>
                <NavLink to="/saved/tv-shows">Tv Shows</NavLink>
            </SideNavBarCont>
            {/*}*/}
        </div>
  );
}
const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  color: white;

  // @media ${devices.mobileL}{
  //   display:none;
  //   &.visible {
  //     display:unset;
  //   }
  }

`

const SectionsStyles = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const SideNavMainLink = styled(Link)`
  ${SectionsStyles}

  &:hover, &:focus-visible {
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
  }
`;

const SideNavHeader = styled.div`
  ${SectionsStyles}
`;

const SideNavSectionTitle = styled.div`
  font-size: 1.6em;
  font-weight: 700;
  padding: 25px 0 15px 35px;
`

const HeaderText = styled.div`
  padding: 0 35px 10px 0;
  border-bottom: 1px solid ${colors.lightBackground};
`

const NavLink = styled(Link)`
  display: block;
  color: white;
  opacity: .8;
  font-size: 1.2em;
  padding: 10px 35px;

  &:hover, &:focus-visible {
    opacity: 1;
    background: ${colors.sideNavBarHover};
  }

  &.active { 
    background: ${colors.primaryColor};
    opacity: 1;
  }
`
const Hamburger = styled.div`
  position: fixed;
  z-index: 10;
  top: ${props => props.isOpen ? '5px' : '32px'};
  left: ${props => props.isOpen ? '5px' : '30px'};
  padding: 0;
  display: none;
  // @media ${devices.mobileM}{
  //   display: unset;
  // }
`
