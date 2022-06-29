import React from 'react'
import './home.css'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import { FeaturedInfo} from "../../components/featuredInfo/FeaturedInfo"


const Home = () => {
    return (
        <div className='home'>
            {/* <FeaturedInfo /> */}
            <div className="homeWidgets">
                <WidgetSm />
                {/* <WidgetLg /> */}
            </div>
        </div>
    )
}

export default Home