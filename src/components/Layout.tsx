import React, { ReactNode } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { T, Footer } from '.';
import { prefix } from '../utils';
import { pages } from '../constants/pages';

type LayoutProps = {
  children: ReactNode;
  page: string;
};
const Layout = ({ children, page }: LayoutProps) => {
  return (
    <Main>
      <div className="content">
        <Header>
          <T translationKey="title"></T>
          <nav>
            <ul>
              {pages
                .filter((p) => p.showInNav)
                .map((pag, i) => {
                  return (
                    <li key={i}>
                      <NavLink active={page === pag.id} href={prefix + pag.url}>
                        <T translationKey={pag.id + 'Title'}></T>
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </Header>
        {children}
      </div>
      <Footer></Footer>
    </Main>
  );
};

const Main = styled.main`
  /* margin: auto;
  width: 90%;
  max-width: 900px; */
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: ${(props) => `1fr ${props.theme.maxWidth} 1fr`};
  .content {
    grid-column-start: 2;
    grid-column-end: 3;
  }
  footer {
    grid-row-start: 2;
    grid-row-end: 3;

    grid-column-start: 1;
    grid-column-end: 4;
  }
`;
const Header = styled.header`
  h1 {
    font-weight: 100;
  }
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;
  nav {
  }
  ul {
    flex-direction: row;
    display: flex;
    list-style: none;

    li {
      margin: 0 1rem;
    }
    li:last-child {
      margin-right: 0;
    }
  }
`;

const NavLink = styled.a<{ active: boolean }>`
  text-decoration: none;
  color: unset;
  position: relative;
  &:after {
    content: '';
    display: ${(props) => (props.active ? 'block' : 'none')};
    width: 100%;
    height: 3px;
    background: black;
  }
`;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  page: PropTypes.string.isRequired,
};

export default Layout;
