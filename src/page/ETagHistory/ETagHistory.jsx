import React, { PureComponent, useState } from 'react'
import { Form, Button, Dropdown, DropdownButton, Card, InputGroup, FormControl, Modal } from 'react-bootstrap'
// import Button2 from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import './Form_boat1.scss'
// import { ThemeProvider, StylesProvider, jssPreset, makeStyles, createStyles } from '@material-ui/core/styles'
import Form_BoatNotice_Table from './ETagHistory_Table.jsx'
import Form_BoatNotice_Table2 from './ETagHistory_Table2.jsx'


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
                    <div className="divCardTitle" >平面ETag行車紀錄(本案已查詢歷史紀錄)</div>
                    <Card.Body className="col-12">
                        <div className="row justify-content-start">
                            <div className="col-12">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">車牌</InputGroup.Text>
                                    <select className="form-select" aria-label="Default select example" defaultValue="0">
                                        <option value="0">請選擇</option>
                                        <option value="1">ABC-1234</option>
                                        <option value="2">CGF-8754</option>

                                    </select>
                                    <FormControl placeholder="範例: ABC-1234" />
                                    {/* <InputGroup.Text id="basic-addon1">所屬縣市</InputGroup.Text>
                                    <select className="form-select" aria-label="Default select example" defaultValue="0">
                                        <option value="0">不指定</option>
                                        <option value="1">臺北市</option>
                                        <option value="2">新北市</option>
                                        <option value="2">高雄市</option>
                                    </select> */}

                                    <InputGroup.Text >所屬縣市</InputGroup.Text>
                                    <select className="form-select" aria-label="Default select example" defaultValue="0">
                                        <option value="0">不指定</option>
                                        <option value="1">臺北市</option>
                                        <option value="2">新北市</option>
                                        <option value="2">高雄市</option>
                                    </select>
                                </InputGroup>

                            </div>
                        </div>

                        {/* <div className="row justify-content-start">
                            <div className="col-12">
                                <InputGroup className="mb-3">
                                    

                                    <InputGroup.Text >行經ETag Reader</InputGroup.Text>
                                    <select className="form-select" aria-label="Default select example" defaultValue="0">
                                        <option value="0">請選擇</option>
                                        <option value="1">01JHDS543</option>
                                        <option value="2">03KJSU430</option>

                                    </select>

                                    
                                </InputGroup>
                            </div>
                        </div> */}

                        <div className="row justify-content-start">
                            <div className="row">
                                <div className="col-10">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text >行經時間</InputGroup.Text>

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
                    <Modal.Title>新增注偵車輛</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">船隻編號</InputGroup.Text>
                        <select className="form-select" aria-label="Default select example" defaultValue="0">
                            <option value="0">請選擇</option>
                            {/* <option value="1">基隆漁港(1)</option>
                                    <option value="2">富基漁港(15)</option> */}
                            {/* <option value="3">Three</option> */}
                        </select>
                        <FormControl placeholder="範例: CT 09512354" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text >指定安檢所(進港)</InputGroup.Text>
                        <select className="form-select" aria-label="Default select example" defaultValue="0">
                            <option value="0">請選擇</option>
                            <option value="1">基隆漁港(1)</option>
                            <option value="2">富基漁港(15)</option>
                        </select>
                        <InputGroup.Text >指定安檢所(出港)</InputGroup.Text>
                        <select className="form-select" aria-label="Default select example" defaultValue="0">
                            <option value="0">請選擇</option>
                            <option value="1">基隆漁港(1)</option>
                            <option value="2">富基漁港(15)</option>
                        </select>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text >有效日期</InputGroup.Text>
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
