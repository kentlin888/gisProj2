import React, { Component, useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { Button, Modal } from 'react-bootstrap'
import { forwardRef } from 'react';
import MaterialTable from 'material-table'
// import NavBarHeader from './NavBarHeader.jsx'
// import { makeStyles } from '@material-ui/styles';

const headerStyle = { backgroundColor: "red", color: 'white' };

function Editable() {
    const { useState } = React;
    const [selectedRow, setSelectedRow] = useState(null);

    let sampleData = {
        FisherName:"王大明",
        FisherId:"S120556825",
        Nationality:"菲律賓",
        Position:"大副",
        Capacity:"輪機一等長",
        OrgId:"長興實業",
        ShipId:"256345",
        FVID:"CT 25648",
        BoatName:"遠航一號",
        EmploySDate:"101/05/22",
        EmployEDate:"103/03/12",
        FireDate:"",
        SendBackDate:"",
        TempStayFVID:"",
        TempStayPlace:"",
        DoubtfulType:"",

    }
    const [columns, setColumns] = useState([
        { title: '人員統一編號', field: 'FisherId' },
        { title: '人員姓名', field: 'FisherName' },
        { title: '國籍', field: 'Nationality' },
        { title: '船員職務', field: 'Position' },
        { title: '幹部職級', field: 'Capacity' },

        { title: '機關單位代碼', field: 'OrgId' },
        { title: '船舶資料主鍵', field: 'ShipId' },
        { title: '漁船統一編號', field: 'FVID' },
        { title: '中文船名', field: 'BoatName' },

        { title: '僱用期間起日', field: 'EmploySDate' },
        { title: '僱用期間迄日', field: 'EmployEDate' },
        { title: '解雇日期', field: 'FireDate' },
        { title: '送返日期', field: 'SendBackDate' },
        { title: '暫置漁船統一編號', field: 'TempStayFVID' },
        { title: '暫置位置', field: 'TempStayPlace' },
        { title: '是否可疑', field: 'DoubtfulType' },

    ]);
    const newDataSet = []
    for (let i = 0; i < 16; i++) {
        let newData = { ...sampleData };
        newDataSet.push(newData)
    }
    const [data, setData] = useState(newDataSet);

    return (
        <MaterialTable
            title="Editable Preview"
            title={null}

            columns={columns}
            data={data}
            onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
            // options={{
            //     headerStyle: { headerStyle },

            //     rowStyle: rowData => ({
            //         backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
            //     })
            // }}
            options={{
                headerStyle: {
                    backgroundColor: '#337ab7',
                    color: '#FFF'
                },
                search: true,
                editable: false,
                toolbar: false,
                actionsColumnIndex: -1,

            }}
            // editable={false}
            // actions={false}

            //headerStyle={headerStyle}
            // actions={[
            //     {
            //         icon: "save",
            //         iconProps: { style: { fontSize: "14px", color: "green" } },
            //         tooltip: "Save User",
            //         onClick: (event, rowData) => alert("You saved " + rowData.name)
            //     },
            //     {
            //         icon:"edit",
            //         hidden:true
            //     }
            // ]}

            editable={{
                // onRowAdd: newData =>
                //     new Promise((resolve, reject) => {
                //         setTimeout(() => {
                //             setData([...data, newData]);

                //             resolve();
                //         }, 1000)
                //     }),
                // onRowUpdate: (newData, oldData) =>
                //     new Promise((resolve, reject) => {
                //         setTimeout(() => {
                //             const dataUpdate = [...data];
                //             const index = oldData.tableData.id;
                //             dataUpdate[index] = newData;
                //             setData([...dataUpdate]);

                //             resolve();
                //         }, 1000)
                //     }),
                // onRowDelete: oldData =>
                //     new Promise((resolve, reject) => {
                //         setTimeout(() => {
                //             const dataDelete = [...data];
                //             const index = oldData.tableData.id;
                //             dataDelete.splice(index, 1);
                //             setData([...dataDelete]);

                //             resolve()
                //         }, 1000)
                //     }),
            }}
        />
    )
}



function DemoModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default class Table1 extends Component {
    render() {
        return (
            <div>
                {/* <DemoModal></DemoModal> */}
                <Editable />
            </div>
        )
    }
}
