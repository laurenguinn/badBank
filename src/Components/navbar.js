import React, { useContext } from "react";
import {
  Container,
  Navbar,
  Nav,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import { UserContextName } from "./context";

export default function NavBar() {
  const { username, disabled } = useContext(UserContextName);

  return (
    <Navbar
      username={username}
      className="nav"
      collapseOnSelect
      expand="lg"
      bg=""
      variant="dark"
    >
      <Container className="nav">
      <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip className="tooltip-info">Welcome to Bad Bank!</Tooltip>
              }
            >
        <Navbar.Brand href="#">Bad Bank</Navbar.Brand>
        </OverlayTrigger>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" defaultActiveKey="/home">
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip className="tooltip-info">Join the bank by creating an account!</Tooltip>
              }
            >
              <Nav.Link className="nav-links" href="#createaccount">
                Create Account
              </Nav.Link>
            </OverlayTrigger>
            {disabled ? (
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip className="tooltip-info">
                    Please log in to deposit!
                  </Tooltip>
                }
              >
                <span>
                  <Nav.Link
                    href="#deposit"
                    disabled={disabled}
                    style={{ pointerEvents: "none" }}
                  >
                    Deposit
                  </Nav.Link>
                </span>
              </OverlayTrigger>
            ) : (
              <Nav.Link className="nav-links" href="#deposit">
                Deposit
              </Nav.Link>
            )}
            {disabled ? (
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip className="tooltip-info">
                    Please log in to withdraw!
                  </Tooltip>
                }
              >
                <span>
                  <Nav.Link
                    href="#withdraw"
                    disabled={disabled}
                    style={{ pointerEvents: "none" }}
                  >
                    Withdraw
                  </Nav.Link>
                </span>
              </OverlayTrigger>
            ) : (
              <Nav.Link className="nav-links" href="#withdraw">
                Withdraw
              </Nav.Link>
            )}
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip className="tooltip-info">Check out all the current bank members!</Tooltip>
              }
            >
            <Nav.Link className="nav-links" href="#alldata">
              All Data
            </Nav.Link>
            </OverlayTrigger>
          </Nav>
          <Nav>
            <Navbar.Text>
              {username ? (
                <Nav.Link className="nav-links" href="#logout">
                  Welcome {username}{" "}
                </Nav.Link>
              ) : (
                <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip className="tooltip-info">Login to access account activities!</Tooltip>
              }
            >
                <Nav.Link className="nav-links" href="#login">
                  Log In
                </Nav.Link>
                </OverlayTrigger>
              )}
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
