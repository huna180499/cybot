import React from 'react'
import './Rate.css'

export default function Rate_blue(props) {
  const title = props.title;
  const value = props.value;
  const lenght = props.lenght;
  let Width_Of_Rating = lenght*15;
  let point = [];
  for(let i=0;i<value;i++) {point.push(<div className={'point-1'+' '+title} ></div>)}
  return (
      <div className='stat-rating'>
        <div className='stat-title'>{title}</div>
        <div className='rate' style={{width: Width_Of_Rating+"px"}}>
          {point.map((x) => {return x})}
        </div> 
        
      </div>
  ) 
}
