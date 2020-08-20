import React  from 'react';
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => open ? "translateY(30%)" : "translateY(-100%)"};
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 22rem;
    width: 100%;
    background-color: ${({ open }) => (open ? "transparent" : "white")};
    transition: transform 0.3s ease-in-out;
    box-shadow: 0px 3px 6px #00000029;
    li {
      width: 30%;
    }
  }
`;

const HeaderList = ({ open }) => {

  return (
    <Ul open={open} className="nav__menu">
      <li className="nav__menu__list">
        <a href="#sales" className="list--link">
          why us
        </a>
      </li>
      <li className="nav__menu__list">
        
          <Link className="list--link"
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            benefits
          </Link>
        
      </li>
      <li className="nav__menu__list">
        <Link className="list--link"
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            prices
          </Link>
         
      </li>
      <li className="nav__menu__list">
        <a href="/" className="list--link">
          contact
        </a>
      </li>
    </Ul>
  );
}


export default HeaderList

    