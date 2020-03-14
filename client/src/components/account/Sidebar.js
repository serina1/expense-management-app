import React from "react";
import styled from "styled-components";
import {
  Link,
  withRouter
} from "react-router-dom";

const StyledSideNav = styled.div`
  position: fixed; /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 200px; /* Set the width of the sidebar */
  z-index: 0; /* Stay on top of everything */
  top: 4em; /* Stay at the top */
  background-color: #2b2b2b;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 40px;
`;

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: props.location.pathname,
      items: [
        {
          path:
            "/account" /* path is used as id to check which NavItem is active basically */,
          name: "Account",
          css: "fas fa-user",
          key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
        },
        {
          path: "/allclaims",
          name: "All Claims",
          css: "fas fa-briefcase",
          key: 2
        },
        {
          path: "/createclaim",
          name: "Create Claim",
          css: "fas fa-envelope-open-text",
          key: 3
        },
        {
          path: "/charts",
          name: "Charts",
          css: "fas fa-chart-bar",
          key: 4
        }
      ]
    };
  }

  onItemClick = path => {
    this.setState({ activePath: path });
  };

  render() {
    const { items, activePath } = this.state;
    return (
      <StyledSideNav>
        {items.map(item => {
          return (
            <NavItem
              path={item.path}
              name={item.name}
              css={item.css}
              onItemClick={this.onItemClick}
              active={item.path === activePath}
              key={item.key}
            />
          );
        })}
      </StyledSideNav>
    );
  }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
  height: 70px;
  width: 200px; /* width must be same size as NavBar to center */
  text-align: right; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0; /* Puts space between NavItems */
  padding: 20px 20px 0px 0px;
  z-index: -1;
  color: #bbb;
  a {
    font-family: 'Roboto', sans-serif;
    font-size: 0.9em;
    color: ${props => (props.active ? "white" : "#996ab8")};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }
  }
`;

class NavItem extends React.Component {
  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  };

  render() {
    const { active } = this.props;
    return (
      <StyledNavItem active={active}
      className={this.props.css}>

        <Link
          to={this.props.path}
          onClick={this.handleClick}
        > {this.props.name}
          <NavIcon />
        </Link>
      </StyledNavItem>
    );
  }
}

const NavIcon = styled.div``;

export default class Sidebar extends React.Component {
  render() {
    return <RouterSideNav></RouterSideNav>;
  }
}
