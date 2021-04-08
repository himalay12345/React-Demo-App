import '../ShowSeason.css'
import React from 'react';

const seasonConfig = {
    Summer:{
        text:'Lets Hit The Beach !',
        iconName:'sun'
    },
    Winter:{
        text:'Burr Its Snow Outside !',
        iconName:'snowflake outline'
    }
}


const getSeason = (lat, month) =>
{
    console.log(month,lat)
    if(month>3 && month<10) {
        return lat>0 ? 'Summer' : 'Winter';
    }
    else{
        return lat>0 ? 'Winter' : 'Summer';
    }
}

const ShowSeason = (props) => {
    const season = getSeason(props.lat,new Date().getMonth()+1);
    const {text, iconName} = seasonConfig[season];
    return (
        <div className={`text-center ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1 className='color-white'>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    )
}

export default ShowSeason;