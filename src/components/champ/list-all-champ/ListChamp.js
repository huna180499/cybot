import React, { useState, useEffect } from 'react';
import './ListChamp.css'
import { allChamps } from '../../../data/champion';
import dps from '../../../image/icon/stats/dps.webp'
import cc from '../../../image/icon/stats/cc.webp'
import chinhxac from '../../../image/icon/stats/chinhxac.webp'
import dmg from '../../../image/icon/stats/dmg.webp'
import damage from '../../../image/icon/stats/damage.webp'
import thu from '../../../image/icon/stats/thu.webp'
import Rate_blue from '../../Charts/row-chart/Rate_blue'
const MiniStat = (props) => {
    let ds=[];
    let imgIcon = [damage,dmg,dps,thu,cc,chinhxac]
    const stats = props.array;
    for(let i=0;i<6;i++){
        if(stats[i] !=0) {
            ds.push(<div><img className='imgIcon' src={imgIcon[i]} /> {stats[i]}</div>)
        }
    }
    return (
        <div className='item-bot' style={props.style}>
            <div className='mini-stat'>
                {ds.map((x) => x)}
            </div>
            
        </div>
    )
}
export const check = () => {
    let x = 0;
    if(document.querySelector(`.picked`)){
        for(let i=0;i< document.getElementsByClassName(`picked`).length;i++){
            x+= 1;
        }
    }
    for(let i=0;i<x;i++) {
        document.querySelector(`.picked`).classList.remove(`picked`)
    }
    for(let i=0;i<5;i++) {
        let a = document.getElementsByClassName('role')[i].getAttribute("value");
        if(a != "black" && document.getElementsByName(a)) {
            document.getElementsByName(a)[0].classList.add(`picked`)
        }
    }
}
export default function ListChamp(props){
    let height;
    if(!props.height) {height = "unset"}else {height = props.height+"px"}
    
    let templateCol = "";
    for(let i=1;i<=props.columns;i++) {templateCol += "auto "}

    const sizOfGrid = 310/props.columns;
    let showStat;
    if(sizOfGrid <75 ){showStat = {display: "none"}} else {showStat = {display: "flex"}}
    const styleOfContain ={ height: height,gridTemplateColumns: templateCol}
    const styleOfGrid={ width: sizOfGrid, height: sizOfGrid }
    const [lane, sortLane] = useState("all");
    let listChamp = [];
    if(lane == "all") {for(let i=0; i<allChamps.length; i++) {listChamp.push(allChamps[i])}}
    else {
      for(let i=0;i<allChamps.length;i++) {
        if(allChamps[i].lane.includes(lane)) {listChamp.push(allChamps[i])}
      }
    }
    const sortByLane = (event) => {
      document.querySelector(`.sorting`).classList.remove(`sorting`)
      event.target.classList.add(`sorting`)
      sortLane(event.currentTarget.id)
    }

    
    return (
      <div>
            <div className='sort-btn'>
                <div className='sort-title' >

                </div>
                <div className='sort-by-lane'>
                    <div className='lane sorting' id="all" onClick={sortByLane}>ALL</div>
                    <div className='lane' id="top" onClick={sortByLane}>TOP</div>
                    <div className='lane' id="jung"onClick={sortByLane}>JG</div>
                    <div className='lane' id="mid" onClick={sortByLane}>MID</div>
                    <div className='lane' id="adc" onClick={sortByLane}>BOT</div>
                    <div className='lane' id="sup" onClick={sortByLane}>SUP</div>
                </div>
            </div>
            <div className='list-champ'style={styleOfContain}>
            {listChamp.map((x) => {
              return (
                <div name={x.name} className='grid-item' onClick={props.After_Click_Champ} style={styleOfGrid}>
                  <img src={require('../../../image/avatar/'+x.name+'.webp')} />
                  <div className='picked-text'> ĐÃ CHỌN</div>
                  <MiniStat array={x.stats} style={showStat}/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }