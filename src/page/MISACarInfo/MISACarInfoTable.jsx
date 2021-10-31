import React from 'react'
import '../fixedTable.scss'
export default function MISACarInfoTable() {
    return (
        <div>
            <table className="fixedTable" style={{ width: "100%" }}>
                
                <thead>
                    <tr>
                        <td>姓名</td>
                        <td>生日</td>
                        <td>汽(機)駕戶籍地址</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>王小明</td>
                        <td>69/02/25</td>
                        <td>臺北市北投區中正路12號</td>
                    </tr>
                </tbody>

                <thead>
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
                </tbody>



            </table>

        </div>
    )
}
