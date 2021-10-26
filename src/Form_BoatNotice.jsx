import React, { PureComponent, useState } from 'react'
import { Form, Button, Dropdown, DropdownButton, Card, InputGroup, FormControl, Modal } from 'react-bootstrap'
// import Button2 from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import './Form_boat1.scss'
// import { ThemeProvider, StylesProvider, jssPreset, makeStyles, createStyles } from '@material-ui/core/styles'
import Form_BoatNotice_Table from './Form_BoatNotice_Table.jsx'


export default function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [lgShow, setLgShow] = useState(false);

    return (
        <Form id="Form_boat1" className="container">
            <div className="row justify-content-center col-12">
                <Card >
                    {/* ======== card title ======= */}
                    <div className="divCardTitle" >漁船注偵設定</div>
                    <Card.Body className="col-12">
                        <div className="row justify-content-start">
                            <div className="col-12">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">船隻編號</InputGroup.Text>
                                    <FormControl placeholder="範例: CT 09512354" />
                                </InputGroup>
                            </div>
                        </div>

                        <div className="row justify-content-start">
                            <div className="row">
                                <div className="col-10">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text >有效起迄日期</InputGroup.Text>

                                        <FormControl type="date" />

                                        <InputGroup.Text >至</InputGroup.Text>
                                        <FormControl type="date" />

                                    </InputGroup>
                                </div>
                                <div className="col-2">
                                    <Button variant="primary" type="submit" className="col-auto">
                                        查詢
                                    </Button>
                                </div>
                            </div>
                        </div>


                        {/* <div className="row justify-content-start">
                        <div className="row">
                            <div className="col-10">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text >有效起迄日期</InputGroup.Text>
                                    <input type="date" />
                                    <div >~</div>
                                    <input type="date" />

                                </InputGroup>
                            </div>
                            <div className="col-2">
                                <Button variant="primary" type="submit" className="col-auto">
                                    查詢
                                </Button>
                            </div>

                        </div>

                    </div> */}

                        <div className="row mb-3 justify-content-start">
                            <div className="row">
                                <div className="col-10">

                                </div>
                                <div className="col-2">
                                    <Button variant="primary" type="button" className="col-auto" onClick={() => setLgShow(true)}>
                                        新增注偵漁船
                                    </Button>

                                </div>

                            </div>

                        </div>





                        {/* <InputGroup className="mb-3">
                        <InputGroup.Text >有效起迄日期</InputGroup.Text>
                        <input type="date" />
                        <div >~</div>
                        <input type="date" />
                        <Button variant="primary" type="submit" className="col-1">
                            查詢
                        </Button>
                    </InputGroup> */}



                        <Form_BoatNotice_Table></Form_BoatNotice_Table>


                    </Card.Body>
                </Card>

            </div>


            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose} size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>新增注偵漁船</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">船隻編號</InputGroup.Text>
                        <FormControl placeholder="範例: CT 09512354" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text >有效日期</InputGroup.Text>
                        <FormControl type="date" />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        取消
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        儲存
                    </Button>
                </Modal.Footer>
            </Modal>


        </Form>
    );
}
