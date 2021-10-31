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
        OwnerName:"王大明",
        OwnerId:"S120556825",
        CarOwnerAddress:"新北市金山區中正路52號",
        CardNo:"HBJ-5236",
        Label:"豐田",
        FactoryYM:"101/09",
        NumberCylinders:"4",
        ExhaustVolume:"125cc",
        EngineNumber:"FSD22548S",
        LicenseStatus:"正常",
        JurisdictionStation:"士林監理站",
        TrafficViolations:7,
        ViolationBusinessHours:25,
        

    }
    const [columns, setColumns] = useState([
        { title: '車主姓名', field: 'OwnerName' },
        { title: '車主證號', field: 'OwnerId' },
        { title: '車主地址', field: 'CarOwnerAddress' },
        { title: '車號', field: 'CardNo' },
        { title: '廠牌', field: 'Label' },
        { title: '出廠年月', field: 'FactoryYM' },
        // { title: '汽缸數', field: 'NumberCylinders' },
        { title: '排氣量', field: 'ExhaustVolume' },
        { title: '引擎號碼', field: 'EngineNumber' },
        // { title: '牌照狀態', field: 'LicenseStatus' },
        { title: '目前管轄監理單位', field: 'JurisdictionStation' },
        { title: '交通違規未結次數', field: 'TrafficViolations' },
        { title: '違規營業次數', field: 'ViolationBusinessHours' },

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
