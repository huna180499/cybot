import React, { useState,  useEffect } from 'react';
import './TeamLine.css';
import Rate_blue from '../../components/Charts/row-chart/Rate_blue';
import ListChamp from '../../components/champ/list-all-champ/ListChamp';
import { allChamps } from '../../data/champion';
import { check } from '../../components/champ/list-all-champ/ListChamp';
import Couple from '../../components/champ/couples/Couple';
import { Couples } from '../../components/champ/couples/Couple';
import Polygo_stats from '../../components/Charts/polygon-chart/Polygo_stats';
export default function TeamLine() {
  const NoChamp = {name: "black", stats:[ 0 , 0 , 0 , 0 , 0 , 0   ],overview: [0, 0, 0],}
  const [PlayerTop , pickTop] = useState(NoChamp)
  const [PlayerJung , pickJung] = useState(NoChamp)
  const [PlayerMid , pickMid] = useState(NoChamp)
  const [PlayerBot , pickBot] = useState(NoChamp)
  const [PlayerSup , pickSup] = useState(NoChamp)
  const Players = [PlayerTop, PlayerJung, PlayerMid,PlayerBot,PlayerSup]
  const ds = [pickTop,pickJung,pickMid,pickBot,pickSup]; 
  let bonus_stats= [0,0,0,0,0,0]
  let bonus_coup = []
  for (let x=0;x<Couples.length;x++) {
    for(let i=0;i<4;i++) {
      for(let j=i+1;j<5;j++) {
        if(Players[i].name == Couples[x][0] && Players[j].name == Couples[x][1] || Players[i].name == Couples[x][1] && Players[j].name == Couples[x][0] ){
          bonus_coup.push(Couples[x]);
          console.log(bonus_coup)
        }
      }
    }
  }
  
  for(let a=0;a<bonus_coup.length;a++) {
    for(let i=0;i<6;i++) {
      bonus_stats[i] += bonus_coup[a][5][i]
    }
  }
  
  let team_stats = [
    PlayerTop.stats[0] + PlayerJung.stats[0] + PlayerMid.stats[0] + PlayerBot.stats[0]+ PlayerSup.stats[0] +bonus_stats[0],
    PlayerTop.stats[1] + PlayerJung.stats[1] + PlayerMid.stats[1] + PlayerBot.stats[1]+ PlayerSup.stats[1] +bonus_stats[1],
    PlayerTop.stats[2] + PlayerJung.stats[2] + PlayerMid.stats[2] + PlayerBot.stats[2]+ PlayerSup.stats[2]+ bonus_stats[2] ,
    PlayerTop.stats[3] + PlayerJung.stats[3] + PlayerMid.stats[3] + PlayerBot.stats[3]+ PlayerSup.stats[3]+ bonus_stats[3] ,
    PlayerTop.stats[4] + PlayerJung.stats[4] + PlayerMid.stats[4] + PlayerBot.stats[4]+ PlayerSup.stats[4]+ bonus_stats[4] ,
    PlayerTop.stats[5] + PlayerJung.stats[5] + PlayerMid.stats[5] + PlayerBot.stats[5]+ PlayerSup.stats[5] +bonus_stats[5]
  ]
  let team_ov = [
    PlayerTop.overview[0] + PlayerJung.overview[0] + PlayerMid.overview[0] + PlayerBot.overview[0]+ PlayerSup.overview[0],
    PlayerTop.overview[1] + PlayerJung.overview[1] + PlayerMid.overview[1] + PlayerBot.overview[1]+ PlayerSup.overview[1] ,
    PlayerTop.overview[2] + PlayerJung.overview[2] + PlayerMid.overview[2] + PlayerBot.overview[2]+ PlayerSup.overview[2] ,
  ]
 
  const [roleBeingPicked, changeNumberOfBeing] = useState(0)

  const changeRole =(event) => {
    if(document.querySelector(`.ok`)){document.querySelector(`.ok`).classList.remove('ok')}
    event.currentTarget.classList.add('ok')
    changeNumberOfBeing(event.currentTarget.id);
  }
  const setChamp = (event) => {
    let nameOfChamp = event.currentTarget.getAttribute("name");
    for(let i=0;i<allChamps.length;i++) {
      if(nameOfChamp == allChamps[i].name) {ds[roleBeingPicked](allChamps[i]);break;}
    }  
  }
  let bonus_list = [
    [<div>• DAM<span style={{color: "greenyellow"}}>&#11165;</span></div>, <div>• DAM<span style={{color: "red"}}>&#11167;</span></div>],
    [<div>• ASS<span style={{color: "greenyellow"}}>&#11165;</span></div>, <div>• ASS<span style={{color: "red"}}>&#11167;</span></div>],
    [<div>• DPS<span style={{color: "greenyellow"}}>&#11165;</span></div>, <div>• DPS<span style={{color: "red"}}>&#11167;</span></div>],
    [<div>• DEF<span style={{color: "greenyellow"}}>&#11165;</span></div>, <div>• DEF<span style={{color: "red"}}>&#11167;</span></div>],
    [<div>• C.C<span style={{color: "greenyellow"}}>&#11165;</span></div>, <div>• C.C<span style={{color: "red"}}>&#11167;</span></div>],
    [<div>• ACC<span style={{color: "greenyellow"}}>&#11165;</span></div>, <div>• ACC<span style={{color: "red"}}>&#11167;</span></div>],
  ]
  let extra = [];
  
  for(let i=0;i<6;i++) {
    if(team_stats[i] >=5) {extra.push(bonus_list[i][0])}
    if(team_stats[i] <0){extra.push(bonus_list[i][1])}
  }
  useEffect(() => {
    if(document.querySelector('.is-being')){
      let a=document.getElementsByClassName('is-being').length;
      for(let i=0; i<a;i++) {document.querySelector(`.is-being`).classList.remove(`is-being`)}
    }
    let thisChampName = document.getElementById(roleBeingPicked).getAttribute(`value`)
    if(thisChampName != "black"){
      let thisOV;
      for(let i=0;i<allChamps.length;i++) {
        if(thisChampName == allChamps[i].name) {thisOV = allChamps[i].overview;break}
      }
      if(thisOV[0]>0) {
        let a = document.getElementsByClassName('DMG')
        for(let i=1;i<=thisOV[0];i++) {a[a.length-i].classList.add(`is-being`)}
      }
      if(thisOV[1]>0) {
        let a = document.getElementsByClassName('AP')
        for(let i=1;i<=thisOV[1];i++) {a[a.length-i].classList.add(`is-being`)}
      }
      if(thisOV[2]>0) {
        let a = document.getElementsByClassName('DEF')
        for(let i=1;i<=thisOV[2];i++) {a[a.length-i].classList.add(`is-being`)}
      }
    }
    let thisCS = document.getElementsByClassName(`chiso`);
    for(let i=0;i<6;i++) {
      if(thisCS[i].innerHTML>=5) {thisCS[i].style.color = "greenyellow"}
      else if(thisCS[i].innerHTML>=2.5 && thisCS[i].innerHTML<5 ) {thisCS[i].style.color = 'rgb(242, 242, 242)'}
      else if(thisCS[i].innerHTML<0) {thisCS[i].style.color = 'red'}
      else {thisCS[i].style.color = "rgb(160, 153, 153)"}
    }
  });
  const changeSet = (event) => {
    let thisTit = event.currentTarget;
    if(document.querySelector(`.being`)) {document.querySelector(`.being`).classList.remove(`being`)}
    thisTit.classList.add(`being`);
    let theStat = document.getElementsByClassName(`title-stat`)
    let theDetail = document.getElementsByClassName(`team-rate`)
    if(document.querySelector(`.showing`)) {document.querySelector(`.showing`).classList.remove(`showing`)}
    if(thisTit == theStat[0]) {theDetail[0].classList.add('showing')}
    if(thisTit == theStat[1]) {theDetail[1].classList.add('showing')}
  }
  
  return (
    <div style={{backgroundColor: `rgba(0, 0, 0, 0.500)`}}>
        <div className='team-line'>
          <div className='line-lane'>
            <div className='lane'>TOP</div>
            <div className='lane'>JUNG</div>
            <div className='lane'>MID</div>
            <div className='lane'>BOT</div>
            <div className='lane'>SUP</div>
          </div>
          <div className='line'>
            <div className='role ok'onClick={changeRole} id='0' value={PlayerTop.name}><img  src={require('../../image/avatar/'+PlayerTop.name+'.webp')} /></div>
            <div className='role'   onClick={changeRole} id='1' value={PlayerJung.name}><img  src={require('../../image/avatar/'+PlayerJung.name+'.webp')} /></div>
            <div className='role'   onClick={changeRole} id='2' value={PlayerMid.name}><img src={require('../../image/avatar/'+PlayerMid.name+'.webp')} /></div>
            <div className='role'   onClick={changeRole} id='3' value={PlayerBot.name}><img src={require('../../image/avatar/'+PlayerBot.name+'.webp')} /></div>
            <div className='role'   onClick={changeRole} id='4' value={PlayerSup.name}><img src={require('../../image/avatar/'+PlayerSup.name+'.webp')} /></div>
          </div>
          <div className='team-index'>
            <div className='team-stat-title'>
              <div className='title-stat being' onClick={changeSet}>✪</div>
              <div className='title-stat' onClick={changeSet}>⛛</div>
            </div>
            <div className='team-rate showing'  >                
              <Rate_blue lenght="8" value={team_ov[0]} title="DMG" />
              <Rate_blue lenght="8" value={team_ov[1]} title="AP" />
              <Rate_blue lenght="8" value={team_ov[2]} title="DEF" />
            </div>
            <div className='team-rate'>
              <div className='chiso cs1'>{team_stats[0].toFixed(1)}</div>
              <div className='chiso cs5'>{team_stats[4].toFixed(1)}</div>
              <div className='chiso cs6'>{team_stats[5].toFixed(1)}</div>
              <Polygo_stats width="80" stats={team_stats}/>
              <div className='chiso cs2'>{team_stats[1].toFixed(1)}</div>
              <div className='chiso cs3'>{team_stats[2].toFixed(1)}</div>
              <div className='chiso cs4'>{team_stats[3].toFixed(1)}</div>
            </div>
            <div className='team-bonus'>
              <h3>- EXTRA -</h3>
              {bonus_coup.map((x) => {
                return (<Couple coup={x}/>)
              })}
              {extra.map((x) => {
                return (x)
              })}
              
            </div>
            
          </div>
        </div>
        <ListChamp After_Click_Champ={setChamp} columns="4" height="310" />
    </div>
  )
}
