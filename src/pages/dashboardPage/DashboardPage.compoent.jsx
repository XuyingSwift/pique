import React from 'react'
import SubHeader from '../../components/subHeader/SubHeader.component'
import * as s from './DashboardPage.styles'
import CardGroup from '../../components/cardGroup/CardGroup.compoent'
import { DarkRed, Red, Yellow, Green } from '../../components/colors/colors'
import {IoSkullOutline} from 'react-icons/io5'
import {ImWarning} from 'react-icons/im';
import {RiAlarmWarningLine} from 'react-icons/ri'
import {RiSecurePaymentLine} from 'react-icons/ri'

import Chart from '../../components/chart/Chart.component';
import * as CerlData from '../../components/piqueTree/CerlData'
import * as BinData from '../../components/piqueTree/BinData';
import * as CalenderData from '../../components/piqueTree/CalenderData';

const DashBoardPage = () => {

    const cardList = [
        {
            title: 'Tqi',
            bcolor: DarkRed,
            score: 0.3,
            icon: <IoSkullOutline/>
            
        },
        {
            title: 'Security',
            bcolor: Red,
            score: 0.4,
            icon: <RiAlarmWarningLine/>
        },
        {
            title: 'securty',
            bcolor: Yellow,
            score: 0.6,
            icon:  <ImWarning/>
        },
        {
            title: 'securty',
            bcolor: Green,
            score: 0.8,
            icon: <RiSecurePaymentLine/>
        }
    ]

    console.log(cardList)
   
    return(
        <s.DashboardGrid>
            <SubHeader 
                width={CalenderData.width} 
                height={CalenderData.height} 
                data ={CalenderData.data} 
                chartType={CalenderData.chartType} 
                options={CalenderData.options} 
                showButton={CalenderData.showButton}
            />
            <CardGroup cardList={cardList}/>
            <s.ChartGroupWrapper>
                <s.Group>
                    <Chart 
                        width={BinData.width}
                        height={BinData.height}
                        data={BinData.data}
                        chartType={BinData.chartType}
                        options={BinData.options}
                        showButton={BinData.showButton}
                    />
                </s.Group>
                <s.Group>
                    <Chart 
                        width={CerlData.width}
                        height={CerlData.height}
                        data={CerlData.data}
                        chartType={CerlData.chartType}
                        options={CerlData.options}
                        showButton={CerlData.showButton}
                    />
            </s.Group>
            </s.ChartGroupWrapper>
        </s.DashboardGrid>
    )
}

export default DashBoardPage;