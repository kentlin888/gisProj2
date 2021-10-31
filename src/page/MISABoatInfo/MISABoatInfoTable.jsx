import React from 'react'
import '../fixedTable.scss'
export default function MISACarInfoTable() {
    return (
        <div>
            <table className="fixedTable" style={{ width: "100%" }}>
                
                <thead>
                    <tr>
                        <td>漁船統一編號</td>
                        <td>中文船名</td>
                        <td>機關單位名稱</td>
                        <td>船舶呼叫</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CT 52156</td>
                        <td>長春一號</td>
                        <td>長興實業</td>
                        <td>FD256</td>
                    </tr>
                </tbody>

                <thead>
                    <tr>
                        <td>漁業人身分證字號</td>
                        <td>漁業人中文名稱</td>
                        <td>漁業人電話</td>
                        <td>漁業人地址</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A120885396</td>
                        <td>王曉明</td>
                        <td>(02)25638541</td>
                        <td>臺北市北投區中正路12號</td>
                    </tr>
                </tbody>


            </table>

        </div>
    )
}
