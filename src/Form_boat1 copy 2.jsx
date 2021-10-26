import React, { PureComponent } from 'react'
import { Form, Button, Dropdown, DropdownButton, Card, InputGroup, FormControl } from 'react-bootstrap'
// import Button2 from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import './Form_boat1.scss'
// import { ThemeProvider, StylesProvider, jssPreset, makeStyles, createStyles } from '@material-ui/core/styles'
import 'datatables.net'

export default class Form_boat1 extends PureComponent {
    componentDidMount() {
        let dataSet = [
            ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
            ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
            ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
        ]
        dataSet = [
            {
                a:1,
                b:2,
                c:3,
                d:4,
                e:5,
                g:6
            },
            {
                a:1,
                b:2,
                c:3,
                d:4,
                e:5,
                g:6
            }
        ]
        $(".example").DataTable({
            // 在初始表格的左上有個可選擇的每頁列數的選單設定
            lengthChange: true,   // 呈現選單
            lengthMenu: [5, 10, 25, 50],   // 選單值設定
            pageLength: 25,   // 不用選單設定也可改用固定每頁列數

            searching: true,   // 顯示搜索功能
            ordering: true,   // 開啟排序

            // 下列 2 個一起用，就可以設定列出全部資料、可滑動又固定尺寸的表格
            paging: true,   // 是否建立分頁
            scrollY: 400,   // 固定可以上下滑動的高度

            // [指定的列 , 排序方向] 。
            // 預設 [[0, 'asc']] ，asc 升冪排列、desc 降冪排列。
            order: [[1, 'asc'], [2, 'asc']],

            // 鎖定行
            columnDefs: [{
                targets: [3],
                // 禁止排序
                orderable: false,
            }],


            // 參數設定[註1]
            bPaginate: true, // 顯示換頁
            
            info: true, // 顯示資訊
            fixedHeader: true, // 標題置頂
            data: dataSet,
            // columnDefs: [{
            //     targets: [3],
            //     orderable: false,
            // }]
            columns: [
                { title: "Name", data:"a" },
                { title: "Position", data:"a" },
                { title: "Office", data:"a" },
                { title: "Extn.", data:"a" },
                { title: "Start date", data:"a" },
                { title: "Salary", }
            ],

            language: {
                lengthMenu: "顯示 _MENU_ 項結果",
                zeroRecords: "沒有符合的結果",
                info:"顯示第 _START_ 至 _END_ 項結果，共 _TOTAL_ 項",
                infoEmpty:"顯示第 0 至 0 項結果，共 0 項",
                search:"搜尋"
                // "url": "dataTables.german.lang"
            },
            
        });
    }
    render() {
        return (
            <Form id="Form_boat1" className="container">
                <div className="row justify-content-center col-12">
                    <Card >
                        {/* ======== card title ======= */}
                        <div className="divCardTitle" >船隻入出港紀錄 (本案已查詢歷史紀錄)</div>
                        <Card.Body>
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
                                {/* <Form.Control type="date" placeholder="Enter email" />
                                <div >~</div>
                                <Form.Control type="date" placeholder="Enter email" /> */}

                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text >入出港</InputGroup.Text>
                                <select className="form-select" aria-label="Default select example" defaultValue="0">
                                    <option value="0">請選擇</option>
                                    <option value="1">入港</option>
                                    <option value="2">出港</option>
                                    {/* <option value="3">Three</option> */}
                                </select>

                                <InputGroup.Text >指定安檢所</InputGroup.Text>
                                <select className="form-select" aria-label="Default select example" defaultValue="0">
                                    <option value="0">請選擇</option>
                                    <option value="1">基隆漁港(1)</option>
                                    <option value="2">富基漁港(15)</option>
                                    {/* <option value="3">Three</option> */}
                                </select>
                            </InputGroup>

                            <table id="example">
                                <thead>
                                    {/* <tr>
                                        <th rowSpan="2">Name</th>
                                        <th colSpan="2">HR Information</th>
                                        <th colSpan="3">Contact</th>
                                    </tr> */}
                                    <tr>
                                        <th>Position</th>
                                        <th>Salary</th>
                                        <th>Office</th>
                                        <th>Extn.</th>
                                        <th>E-mail</th>
                                        <th>E-mail</th>
                                    </tr>
                                </thead>
                            </table>
                            {/* <table className="example">
                                <thead>
                                    <tr>
                                        <td>thead</td>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>tbody</td>

                                    </tr>
                                </tbody>
                            </table> */}
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
                </div>


            </Form>
        )
    }
}
