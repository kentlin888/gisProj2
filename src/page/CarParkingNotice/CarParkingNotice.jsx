import React, { PureComponent, useState } from 'react'
import { Form, Button, Badge, DropdownButton, Card, InputGroup, FormControl, Modal } from 'react-bootstrap'
// import Button2 from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import './Form_boat1.scss'
// import { ThemeProvider, StylesProvider, jssPreset, makeStyles, createStyles } from '@material-ui/core/styles'
import CarParkingNotice_Table from './CarParkingNotice_Table.jsx'
import Form_BoatNotice_Table2 from './CarParkingNotice_Table2.jsx'
import ReqiuredFieldIcon from '../../component/ReqiuredFieldIcon'

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
                    <div className="divCardTitle" >停車注偵設定</div>
                    <Card.Body className="col-12">
                        <div className="row justify-content-start">
                            <div className="col-12">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">
                                        車牌
                                    </InputGroup.Text>
                                    <select className="form-select" aria-label="Default select example" defaultValue="0">
                                        <option value="0">請選擇</option>
                                        <option value="1">ABC-1234</option>
                                        <option value="2">CGF-8754</option>

                                    </select>
                                    <FormControl placeholder="範例: ABC-1234" />
                                    <InputGroup.Text id="basic-addon1">所屬縣市</InputGroup.Text>
                                    <select className="form-select" aria-label="Default select example" defaultValue="0">
                                        <option value="0">不指定</option>
                                        <option value="1">臺北市</option>
                                        <option value="2">新北市</option>
                                        <option value="2">高雄市</option>
                                    </select>
                                    {/* <FormControl placeholder="範例: SX25847897" /> */}
                                </InputGroup>
                            </div>
                        </div>

                        {/* <div className="row justify-content-start">
                            <div className="col-12">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text >通行方向</InputGroup.Text>
                                    <select className="form-select" aria-label="Default select example" defaultValue="0">
                                        <option value="0">請選擇</option>
                                        <option value="1">北上</option>
                                        <option value="2">南下</option>
                                    </select>

                                    <InputGroup.Text >指定門架</InputGroup.Text>
                                    <select className="form-select" aria-label="Default select example" defaultValue="0">
                                        <option value="0">請選擇</option>
                                        <option value="1">01JHDS543</option>
                                        <option value="2">03KJSU430</option>

                                    </select>

                                    <Button variant="primary" type="submit" className="col-1">
                                        查詢
                                    </Button>
                                </InputGroup>
                            </div>
                        </div> */}

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
                                        新增注偵車輛
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



                        <CarParkingNotice_Table></CarParkingNotice_Table>


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
                    <Modal.Title>新增注偵車輛</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            <ReqiuredFieldIcon/>
                            車牌
                        </InputGroup.Text>
                        <select className="form-select" aria-label="Default select example" defaultValue="0">
                            <option value="0">請選擇</option>
                            <option value="1">ABC-1234</option>
                            <option value="2">CGF-8754</option>

                        </select>
                        <FormControl placeholder="範例: ABC-1234" />

                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text >所屬縣市</InputGroup.Text>
                        <select className="form-select" aria-label="Default select example" defaultValue="0">
                            <option value="0">不指定</option>
                            <option value="1">臺北市</option>
                            <option value="2">新北市</option>
                            <option value="2">高雄市</option>
                        </select>

                        {/* <InputGroup.Text >指定門架</InputGroup.Text>
                        <select className="form-select" aria-label="Default select example" defaultValue="0">
                            <option value="0">請選擇</option>
                            <option value="1">01JHDS543</option>
                            <option value="2">03KJSU430</option>

                        </select> */}
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text ><ReqiuredFieldIcon/>有效日期</InputGroup.Text>
                        <FormControl type="date" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text>新增推播對象</InputGroup.Text>
                        <FormControl placeholder="請輸入人事五碼" />

                        <Button variant="primary" type="button" >
                            新增推播對象
                        </Button>
                    </InputGroup>

                    <Form_BoatNotice_Table2></Form_BoatNotice_Table2>
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
