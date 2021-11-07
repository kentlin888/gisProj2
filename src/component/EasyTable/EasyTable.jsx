import React, { useState } from 'react'
// import renderToStaticMarkup from 'react-dom'
// ES modules
import ReactDOMServer from 'react-dom/server';
// CommonJS
// var ReactDOMServer = require('react-dom/server');

// let sampleData = {
//     UID: "CT S006650", BoatName: "王泰隆", StationNameOut: "永新漁港安檢所"
//     , StationDateOut: "2020/10/01", StationNameIn: "永新漁港安檢所", StationDateIn: "2020/10/01",
//     StationDateIn2: "2020/10/01"
// }
let defaultColumns = [
    { title: '商船統一編號', field: 'UID', value:"XXX"},
    { title: '中文船名', field: 'BoatName', value:"XXX"},
    { title: '出港安檢所', field: 'StationNameOut', value:"XXX"},
    { title: '簽證出港時間', field: 'StationDateOut', value:"XXX"},
    { title: '進港安檢所', field: 'StationNameIn', value:"XXX"},
    { title: '簽證進港時間', field: 'StationDateIn', value:"XXX"},
    { title: '簽證進港時間2', field: 'StationDateIn2', value:"XXX"},
]

// function setValueToDefaultColumns() {
//     return defaultColumns.map((item) => {
//         // console.log(item.field)
//         item.value = sampleData[item.field]
//         return item
//     })
// }
// defaultColumns = setValueToDefaultColumns();

//console.log(renderToStaticMarkup)
function getGroupedColumns(defaultColumns, columnCountEachLine) {
    let arrayRTN = []
    let arrayGroup = []
    for (let i = 0; i < defaultColumns.length; i++) {
        // console.log(i % columnCountEachLine)
        if (i % columnCountEachLine === 0) {
            if (arrayGroup.length > 0)
                arrayRTN.push(arrayGroup)
            arrayGroup = [] // use new group
        }
        arrayGroup.push(defaultColumns[i])
        // console.log(defaultColumns[i].title)
    }
    if (arrayGroup.length > 0)
        arrayRTN.push(arrayGroup) //last
    return arrayRTN
}

// console.log(JSON.stringify(newArray, null, 4))

function getTR(trData, displayProp) {
    // trData.map((item, index) => {
    //     console.log(item, index)
    // })
    // console.log(displayProp)
    return <tr>
        {trData.map((item, index) => {
            return <td key={index}>
                {item[displayProp]}
            </td>
        })}
    </tr>
}

//let tr = getTR(newColumnArray[0],'title')
// console.log(newArray[0])
// console.log(ReactDOMServer.renderToString(tr))


// ReactDOMServer.renderToStaticMarkup()
// ReactDOMServer.renderToString(element)

// console.table(ad)


export default function EasyTable(props) {
    const [columns, setColumns] = useState(defaultColumns);
    //const propsColumnCountEachLine = 4
    //props.defaultColumns
    //props.countEachColumn = 4
    let newColumnArray = getGroupedColumns(props.defaultColumns, props.countEachColumn)
    return (
        <div>
            <table className="fixedTable" style={{ width: "100%" }}>
                {newColumnArray.map((item, index) => {
                    // console.log(item)
                    return <React.Fragment key={index}>
                        <thead>
                            {(getTR(item, 'title'))}

                        </thead>
                        <tbody>
                            {(getTR(item, 'value'))}

                        </tbody>
                    </React.Fragment>

                })}




                {/* <thead>
                    <tr>
                        <td>汽(機)駕戶籍區號</td>
                        <td>汽(機)有效日</td>
                        <td>汽(機)車駕照狀態</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>251</td>
                        <td>69/02/25</td>
                        <td>吊銷</td>
                    </tr>
                </tbody>

                <thead>
                    <tr>
                        <td>汽(機)駕照類</td>
                        <td>汽(機)所屬站名稱</td>
                        <td>汽(機)管轄編號</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>汽車</td>
                        <td>士林監理所</td>
                        <td>FG255135</td>
                    </tr>
                </tbody>

                <thead>
                    <tr>
                        <td>駕照吊扣吊註銷起日</td>
                        <td>駕照吊扣吊註銷迄日</td>
                        <td>汽(機)持照限制</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>身心障礙</td>
                    </tr>
                </tbody> */}



            </table>

        </div>
    )
}
