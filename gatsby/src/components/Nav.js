import React from 'react';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  .logo {
    transform: translateY(-25%);
  }
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    text-align: center;
    list-style: none;
    margin-top: -6rem;
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(1) {
      --rotate: 1deg;
    }
    &:nth-child(2) {
      --rotate: -2.5deg;
    }
    &:nth-child(4) {
      --rotate: 2.5deg;
    }
    &:hover {
      --rotate: 3deg;
    }
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: var(--red);
    }
    /* &[aria-current="page"] {
        color: var(--red);
    } */
  }
  //using the css variable allows us to just update the variable for that rule, and doens't require restating the whole transform.
`;

// function goToSlicemasters() {
//   // 1 wait for 2 seconds
//   setTimeout(() => {
//     navigate('/slicemasters', { replace: true }); // replace true enables the back button to function
//   }, 2000);
//   // change page
// }

// not needed for this course but good fyi of another gatsby tool

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/slicemasters">SliceMasters</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead!</Link>
        </li>
        {/* <li>
          <button type="button" onClick={goToSlicemasters}>
            Click to go to slicey in a couple seconds!
          </button>
        </li> */}
      </ul>
    </NavStyles>
  );
}
