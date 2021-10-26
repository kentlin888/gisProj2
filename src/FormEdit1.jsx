import React, { Component } from 'react'
import { Form, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import Button2 from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { ThemeProvider, StylesProvider, jssPreset, makeStyles, createStyles } from '@material-ui/core/styles'

export default function FormEdit1(props) {
    const theme = {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    };
    // 一个样式内联表
    const useStyles = makeStyles({
        root: {}, // 一个样式规则
        label: {}, // 一个嵌套的样式规则
    });
    const classes = useStyles();
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <DropdownButton
                    id="dropdown-button-dark-example2"
                    variant="success"
                    title="Dropdown button"
                    className="mt-2"
                >
                    <Dropdown.Item href="#/action-1" active>
                        Action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                </DropdownButton>
                <Button2 variant="contained" color="primary">
                    你好，世界
                </Button2>
                {/* <form className={classes.root} noValidate autoComplete="off">
                
            </form> */}

                {/* <ThemeProvider theme={theme}>
                <DeepChild />
            </ThemeProvider> */}
            </Form>

            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" placeholder="AAA"/>
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>
        </div>

    )
}


