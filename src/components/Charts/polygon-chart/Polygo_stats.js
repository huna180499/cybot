import React, { useState,  useEffect , useRef} from 'react';
import dps from '../../../image/icon/stats/dps.webp'
import cc from '../../../image/icon/stats/cc.webp'
import chinhxac from '../../../image/icon/stats/chinhxac.webp'
import dmg from '../../../image/icon/stats/dmg.webp'
import damage from '../../../image/icon/stats/damage.webp'
import thu from '../../../image/icon/stats/thu.webp'
import './polygo.css'
export default function Polygo_stats(props) {
    const ref = useRef();
    
    const wid = props.width
    const hei = 0.9*wid
    const wid_point = wid/20
    const hei_point = hei/20
    const team_st = props.stats
    let Points =[ 
        [-  wid_point-0.5*wid_point*team_st[0]  ,- 2*hei_point -hei_point*team_st[0]],
        [   wid_point + 0.5*wid_point*team_st[1], - 2*hei_point - hei_point*team_st[1]],
        [ 2*wid_point +     wid_point*team_st[2], 0],
        [   wid_point + 0.5*wid_point*team_st[3], 2*hei_point + hei_point*team_st[3]],
        [-  wid_point - 0.5*wid_point*team_st[4], 2*hei_point + hei_point*team_st[4]],
        [-2*wid_point - wid_point*team_st[5],0]
    ]
    
    let Stats = [[,],[,],[,],[,],[,],[,]]
    for(let i=0;i<6;i++) {
        Stats[i][0] = wid/2 + Points[i][0]
        Stats[i][1] = hei/2 + Points[i][1]
    } 
  
    useEffect(() => {
        veCanvas();
        const x = ref.current.getContext('2d')
        x.lineWidth = 1;
        x.strokeStyle = `rgb(76, 227, 76)`;
        x.beginPath();
        x.moveTo(Stats[0][0],Stats[0][1]);
        x.lineTo(Stats[1][0],Stats[1][1]);
        x.lineTo(Stats[2][0],Stats[2][1]);
        x.lineTo(Stats[3][0],Stats[3][1]);
        x.lineTo(Stats[4][0],Stats[4][1]);
        x.lineTo(Stats[5][0],Stats[5][1]);
        x.lineTo(Stats[0][0],Stats[0][1]);
        x.stroke();
        })

    const veCanvas = () => {
        const x = ref.current.getContext('2d')
        x.clearRect(0,0,100,100);
        x.strokeStyle = `rgba(150, 150, 150, 0.647)`;
        x.lineWidth = 1
        x.beginPath();
            x.moveTo(wid/4,0);
            x.lineTo(3*wid/4,0);
            x.lineTo(wid,hei/2);
            x.lineTo(3*wid/4,hei);
            x.lineTo(wid/4,hei);
            x.lineTo(0,hei/2);
            x.lineTo(wid/4,0);
            x.lineTo(3*wid/4,hei);

            x.moveTo(0,hei/2);
            x.lineTo(wid,hei/2);

            x.moveTo(3*wid/4,0);
            x.lineTo(wid/4,hei);
      
            x.moveTo(wid/2 -  wid_point, hei/2 - 2*hei_point);
            x.lineTo(wid/2 +  wid_point, hei/2 - 2*hei_point);
            x.lineTo(wid/2 +2*wid_point, hei/2 );
            x.lineTo(wid/2 +  wid_point, hei/2 + 2*hei_point);
            x.lineTo(wid/2 -  wid_point, hei/2 + 2*hei_point);
            x.lineTo(wid/2 -2*wid_point, hei/2);
            x.lineTo(wid/2 -  wid_point, hei/2 - 2*hei_point);
        x.stroke();
        
    }    
  return (
        <div className='team-canvas' style={{width: wid*1.3}}>
            <canvas id='cvas' width={wid} height={hei} ref={ref} />
            <div className='can a'><img style={{height: hei/8}} src={damage} /></div>
            <div className='can b'><img style={{height: hei/8}} src={dmg} /></div>
            <div className='can c'><img style={{height: hei/8}} src={dps} /></div>
            <div className='can d'><img style={{height: hei/8}} src={thu} /></div>
            <div className='can e'><img style={{height: hei/8}} src={cc} /></div>
            <div className='can f'><img style={{height: hei/8}} src={chinhxac} /></div>
        </div>
        
   
  )
}
