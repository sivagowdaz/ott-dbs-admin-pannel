import React from 'react'
import './widgetLg.css'

export default function WidgetLg() {
    const Button = ({ type }) => {
        return (
            <button className={`widgetLgButton ${type}`}>{type}</button>
        )
    }
    return (
        <div className='widgetLg'>
            <span className="widgetLgTitle">Latest Transactions</span>
            <table className='widgetLgTable'>
                <tbody>
                    <tr className='widgetLgTr'>
                        <th className='widgetLgTh'>customer</th>
                        <th className='widgetLgTh'>date</th>
                        <th className='widgetLgTh'>amount</th>
                        <th className='widgetLgTh'>status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://tse2.mm.bing.net/th?id=OIP.fyl_kbazs9e4BDrBY2pIDQHaFj&pid=Api&P=0&w=236&h=177" alt="" className='widgetLgImage'/>
                            <span className="widgetLgName">sussan carol</span>
                        </td>
                        <td className="widgetLgDate">12-03-2021</td>
                        <td className="widgetLgAmount">$2035</td>
                        <td className="widgetLgStatus">
                            <Button type='Aproved'/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://tse2.mm.bing.net/th?id=OIP.fyl_kbazs9e4BDrBY2pIDQHaFj&pid=Api&P=0&w=236&h=177" alt="" className='widgetLgImage' />
                            <span className="widgetLgName">sussan carol</span>
                        </td>
                        <td className="widgetLgDate">12-03-2021</td>
                        <td className="widgetLgAmount">$2035</td>
                        <td className="widgetLgStatus">
                            <Button type='Declined'/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://tse2.mm.bing.net/th?id=OIP.fyl_kbazs9e4BDrBY2pIDQHaFj&pid=Api&P=0&w=236&h=177" alt="" className='widgetLgImage' />
                            <span className="widgetLgName">sussan carol</span>
                        </td>
                        <td className="widgetLgDate">12-03-2021</td>
                        <td className="widgetLgAmount">$2035</td>
                        <td className="widgetLgStatus">
                            <Button type='Pending'/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://tse2.mm.bing.net/th?id=OIP.fyl_kbazs9e4BDrBY2pIDQHaFj&pid=Api&P=0&w=236&h=177" alt="" className='widgetLgImage' />
                            <span className="widgetLgName">sussan carol</span>
                        </td>
                        <td className="widgetLgDate">12-03-2021</td>
                        <td className="widgetLgAmount">$2035</td>
                        <td className="widgetLgStatus">
                            <Button type='Declined'/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


