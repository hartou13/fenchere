import React, { Component } from 'react'
class IntervalBadge extends Component {
    render() {
    const {years,months,days,hours,minutes,wholeSeconds,microSeconds} = this.props.interval;
    let style={"margin":"5px"};
    console.log(years);
return (
 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge bg-warning text-light">
    {years !== 0 && (years!==null && years!==undefined) && (<span style={style}>{years} Years</span>)}
    {months !== 0 && months!==null && months!==undefined && (<span style={style}>{months} Months</span>)}
    {days !== 0 && days!==null && days!==undefined && (<span style={style}>{days} Days</span>)}
    {hours !== 0 && hours!== null && hours!==undefined && (<span style={style}>{hours} Hours</span>)}
    {minutes !== 0 && minutes!==null && minutes!==undefined && (<span style={style}>{minutes} Minutes</span>)}
    {wholeSeconds !== 0 && wholeSeconds!==null && wholeSeconds!==undefined && (<span style={style}>{wholeSeconds} Seconds</span>)}
    {microSeconds !== 0 && microSeconds!==null && microSeconds!==undefined && (<span style={style}>{microSeconds} Microseconds</span>)}
</span>
)
}
}

export default IntervalBadge
