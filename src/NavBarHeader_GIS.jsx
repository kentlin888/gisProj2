import React, { Component } from 'react'
import { Button, Modal, Nav, Navbar, NavDropdown, Container, Dropdown, DropdownButton } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faUser } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faCheckSquare, faCoffee, fas, faUser)
// import moduleName from '@fortawesome/fontawesome-svg-core'
export default class NavBarHeader extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid={true}>
                    <Navbar.Brand href="#home">GIS系統擴增維護-需求訪談</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/Form_boat1">船隻出入港紀錄</Nav.Link>
                            <Nav.Link href="/Form_BoatNotice">漁船注偵設定</Nav.Link>
                            <Nav.Link href="/Form_SuspectQuery">嫌疑人查詢</Nav.Link>

                            
                        </Nav>
                        <Nav>
                            {/* <Nav.Link href="#deets"><FontAwesomeIcon icon="check-square" />技術審查</Nav.Link> */}
                            {/* <Nav.Link href="#deets"><FontAwesomeIcon icon={faUser} size="1x" /></Nav.Link> */}
                            {/* <NavDropdown title="麗臺 科員你好">
                                <NavDropdown.Item href="#action/3.1">系統設定</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">登出</NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" variant="primary">
                                        <FontAwesomeIcon icon={faUser} size="1x" />
                                        麗臺 科員你好
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu >
                                        <Dropdown.Item as="button">系統設定</Dropdown.Item>
                                        <Dropdown.Item as="button">登出</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Link>

                            

                            {/* <NavDropdown title="麗臺 科員你好" variant="dark">
                                <NavDropdown.Item href="#action/3.1">系統設定</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">登出</NavDropdown.Item>
                            </NavDropdown>
                            <FontAwesomeIcon icon={['fas', 'faUser']} /> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
