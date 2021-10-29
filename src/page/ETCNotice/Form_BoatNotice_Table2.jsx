import React, { Component, useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { Button, Modal } from 'react-bootstrap'
import { forwardRef } from 'react';
import MaterialTable from 'material-table'
// import NavBarHeader from './NavBarHeader.jsx'
// import { makeStyles } from '@material-ui/styles';

const headerStyle = { backgroundColor: 'black', color: 'white' };

function Editable() {
    const { useState } = React;
    const [selectedRow, setSelectedRow] = useState(null);

    let sampleData={userId:"51040", positionTitle:"調查官",name:"許飛燕",   }
    const [columns, setColumns] = useState([
        { title: '人事五碼', field: 'userId' },
        { title: '職稱', field: 'positionTitle'},
        { title: '姓名', field: 'name'},
        // { title: '簽證出港時間', field: 'StationDateOut'},
        // { title: '進港安檢所', field: 'StationNameIn'},
        // { title: '簽證進港時間', field: 'StationDateIn'},
        // { title: '有效日期', field: 'EffectiveDate'},
        { title: '操作', field: 'doAction', render: rowData => <Button variant="danger" type="submit" className="col-auto">
        刪除
    </Button> },
    ]);
    const newDataSet = []
    for(let i=0;i<16;i++){
        let newData = {...sampleData};
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
                    backgroundColor: 'black',
                    color: '#FFF'
                },
                search:true,
                editable:false,
                toolbar:false,
                actionsColumnIndex: -1,
                
            }}
            // editable={false}
            // actions={false}

            headerStyle={headerStyle}
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
            //     },
            //     {
            //         icon:"delete",
            //         hidden:false
            //     }
            // ]}

            // editable={{
            //     onRowAdd: newData =>
            //         new Promise((resolve, reject) => {
            //             setTimeout(() => {
            //                 setData([...data, newData]);

            //                 resolve();
            //             }, 1000)
            //         }),
            //     onRowUpdate: (newData, oldData) =>
            //         new Promise((resolve, reject) => {
            //             setTimeout(() => {
            //                 const dataUpdate = [...data];
            //                 const index = oldData.tableData.id;
            //                 dataUpdate[index] = newData;
            //                 setData([...dataUpdate]);

            //                 resolve();
            //             }, 1000)
            //         }),
            //     onRowDelete: oldData =>
            //         new Promise((resolve, reject) => {
            //             setTimeout(() => {
            //                 const dataDelete = [...data];
            //                 const index = oldData.tableData.id;
            //                 dataDelete.splice(index, 1);
            //                 setData([...dataDelete]);

            //                 resolve()
            //             }, 1000)
            //         }),
            // }}
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