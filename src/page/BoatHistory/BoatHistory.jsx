import React, { PureComponent } from 'react'
import { Form, Button, Dropdown, DropdownButton, Card, InputGroup, FormControl } from 'react-bootstrap'
// import Button2 from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import './Form_boat1.scss'
// import { ThemeProvider, StylesProvider, jssPreset, makeStyles, createStyles } from '@material-ui/core/styles'
import BoatHistoryTable from './BoatHistoryTable.jsx'


export default () => {
    return <Form id="Form_boat1" className="container">
        <div className="row justify-content-center col-12">
            {/* ======== card title ======= */}
            <div className="divCardTitle" >船隻入出港紀錄 (本案已查詢歷史紀錄)</div>
            <Card.Body className="col-12">
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">船隻編號</InputGroup.Text>
                    <select className="form-select" aria-label="Default select example" defaultValue="0">
                        <option value="0">請選擇</option>
                        {/* <option value="1">基隆漁港(1)</option>
                                    <option value="2">富基漁港(15)</option> */}
                        {/* <option value="3">Three</option> */}
                    </select>
                    <FormControl
                        placeholder="範例: CT 09512354"
                    // aria-label="Username"
                    // aria-describedby="basic-addon1"
                    />
                </InputGroup>

            </Card.Body>
        </div>
    </Form>
}

class Form_boat1 extends PureComponent {

    render() {
        return (
            <Form id="Form_boat1" className="container">
                <div className="row justify-content-center col-12">
                    <Card >
                        {/* ======== card title ======= */}
                        <div className="divCardTitle" >船隻入出港紀錄 (本案已查詢歷史紀錄)</div>
                        <Card.Body className="col-12">
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">船隻編號</InputGroup.Text>
                                <select className="form-select" aria-label="Default select example" defaultValue="0">
                                    <option value="0">請選擇</option>
                                    {/* <option value="1">基隆漁港(1)</option>
                                    <option value="2">富基漁港(15)</option> */}
                                    {/* <option value="3">Three</option> */}
                                </select>
                                <FormControl
                                    placeholder="範例: CT 09512354"
                                // aria-label="Username"
                                // aria-describedby="basic-addon1"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text >起迄日期</InputGroup.Text>
                                <input type="date" />
                                <div >~</div>
                                <input type="date" />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text >入出港</InputGroup.Text>
                                <select className="form-select" aria-label="Default select example" defaultValue="0">
                                    <option value="0">請選擇</option>
                                    <option value="1">入港</option>
                                    <option value="2">出港</option>
                                </select>

                                <InputGroup.Text >指定安檢所</InputGroup.Text>
                                <select className="form-select" aria-label="Default select example" defaultValue="0">
                                    <option value="0">請選擇</option>
                                    <option value="1">基隆漁港(1)</option>
                                    <option value="2">富基漁港(15)</option>

                                </select>

                                <Button variant="primary" type="submit" className="col-1">
                                    查詢
                                </Button>
                            </InputGroup>

                            {/* <div className="container">
                                <div className="row justify-content-start col-8">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text >入出港</InputGroup.Text>
                                        <select className="form-select" aria-label="Default select example" defaultValue="0">
                                            <option value="0">請選擇</option>
                                            <option value="1">入港</option>
                                            <option value="2">出港</option>
                                        </select>
                                    </InputGroup>
                                    <Button variant="primary" type="submit" className="col-auto">
                                        查詢
                                    </Button>
                                </div>

                            </div>

                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-8">
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text >入出港</InputGroup.Text>
                                            <select className="form-select" aria-label="Default select example" defaultValue="0">
                                                <option value="0">請選擇</option>
                                                <option value="1">入港</option>
                                                <option value="2">出港</option>
                                            </select>

                                            <InputGroup.Text >指定安檢所</InputGroup.Text>
                                            <select className="form-select" aria-label="Default select example" defaultValue="0">
                                                <option value="0">請選擇</option>
                                                <option value="1">基隆漁港(1)</option>
                                                <option value="2">富基漁港(15)</option>

                                            </select>
                                        </InputGroup>
                                    </div>
                                    <div className="col-2">
                                        <Button variant="primary" type="submit" className="col-auto">
                                            查詢
                                        </Button>
                                    </div>

                                </div>

                            </div> */}




                            <BoatHistoryTable></BoatHistoryTable>


                            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>船隻編號</Form.Label>
                                <Form.Control type="date" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group> */}
                            {/* <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>

                </div>


            </Form>
        )
    }
}
