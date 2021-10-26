import React, { PureComponent, useState } from 'react'
import { Form, Button, Dropdown, DropdownButton, Card, InputGroup, FormControl, ButtonGroup, ToggleButton } from 'react-bootstrap'
// import Button2 from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import './Form_SuspectQuery.scss'
// import { ThemeProvider, StylesProvider, jssPreset, makeStyles, createStyles } from '@material-ui/core/styles'
import Form_SuspectQuery_Table from './Form_SuspectQuery_Table.jsx'
import NumberPicker from "react-widgets/NumberPicker";

export default function ToggleButtonExample() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');


    const radios = [
        // { name: 'Active', value: '1' },
        { name: '男', value: '1' },
        { name: '女', value: '2' },
    ];

    return (
        <Form id="Form_boat1" className="container">
            <div className="row justify-content-center col-12">
                <Card >
                    {/* ======== card title ======= */}
                    <div className="divCardTitle" >嫌疑人篩選</div>
                    <Card.Body className="col-12">
                        <div className="row justify-content-start">
                            <div className="col-3">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text >性別</InputGroup.Text>
                                    <ButtonGroup>
                                        {radios.map((radio, idx) => (
                                            <ToggleButton
                                                key={idx}
                                                id={`radio-${idx}`}
                                                type="radio"
                                                variant={idx % 2 ? 'outline-danger' : 'outline-primary'}
                                                name="radio"
                                                value={radio.value}
                                                checked={radioValue === radio.value}
                                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                                            >
                                                {radio.name}
                                            </ToggleButton>
                                        ))}
                                    </ButtonGroup>
                                </InputGroup>
                            </div>

                            <div className="col-4">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text >年齡</InputGroup.Text>
                                    <NumberPicker defaultValue={20} />
                                    <InputGroup.Text >至</InputGroup.Text>
                                    <NumberPicker defaultValue={40} />
                                </InputGroup>
                            </div>

                            <div className="col-5">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text >角色</InputGroup.Text>
                                    <select className="form-select" aria-label="Default select example" defaultValue="0">
                                        <option value="0">跑腿</option>
                                        <option value="1">首腦</option>
                                        <option value="2">車手</option>
                                    </select>
                                </InputGroup>
                            </div>
                        </div>

                        <div className="row justify-content-start">
                            <div className="col-3">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text >地緣</InputGroup.Text>
                                    <FormControl placeholder="範例: " />
                                </InputGroup>
                            </div>

                            <div className="col-9">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text >前科</InputGroup.Text>
                                    <select className="form-select" aria-label="Default select example" defaultValue="0">
                                        <option value="0">槍砲彈藥管制條例-4</option>
                                        {/* <option value="1">首腦</option>
                                        <option value="2">車手</option> */}
                                    </select>
                                </InputGroup>
                            </div>
                        </div>

                        <div className="row justify-content-start">
                            <div className="col-8">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text >人脈</InputGroup.Text>
                                    <FormControl placeholder="範例: " />
                                </InputGroup>
                            </div>

                            <Button variant="primary" type="button" className="col-1 mb-3">
                                篩選
                            </Button>

                        </div>



                        <Form_SuspectQuery_Table></Form_SuspectQuery_Table>


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




    );
}
