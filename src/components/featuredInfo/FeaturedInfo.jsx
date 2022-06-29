import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import './featuredinfo.css'

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenu</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$ 2,263</span>
                    <span className="featuredMoneyRate">-11.2 <ArrowDownward className='featuredIcon negative'/></span>
                </div>
                <span className="featuredSub">compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$ 2,263</span>
                    <span className="featuredMoneyRate">-15.2 <ArrowDownward className='featuredIcon negative'/></span>
                </div>
                <span className="featuredSub">compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$ 2,263</span>
                    <span className="featuredMoneyRate">+5.2 <ArrowUpward className='featuredIcon'/></span>
                </div>
                <span className="featuredSub">compared to last month</span>
            </div>
        </div>
    )
}
