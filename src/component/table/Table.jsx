import React from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import { tableIcons } from "./tableIcons.js";
export default () => {
  return (
    <MaterialTable
      icons={tableIcons}
      title="Multiple Actions Preview"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ]}
      data={[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      ]}
      options={{
        rowStyle: {
          backgroundColor: 'pink',
        }
      }}
      //   actions={[
      //     {
      //       icon: ()=> <SaveIcon>,
      //       tooltip: 'Save User',
      //       onClick: (event, rowData) => alert("You saved " + rowData.name)
      //     },
      //     {
      //       icon: ()=> <DeleteOutline/>,
      //       tooltip: 'Delete User',
      //       onClick: (event, rowData) => confirm("You want to delete " + rowData.name)
      //     }
      //   ]}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve()
            }, 1000)
          }),
      }}
    />
  )
}