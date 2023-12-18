import React from 'react'
import dps from '../../../image/icon/stats/dps.webp'
import cc from '../../../image/icon/stats/cc.webp'
import chinhxac from '../../../image/icon/stats/chinhxac.webp'
import dmg from '../../../image/icon/stats/dmg.webp'
import damage from '../../../image/icon/stats/damage.webp'
import thu from '../../../image/icon/stats/thu.webp'
import Rate_blue from '../../Charts/row-chart/Rate_blue'
export default function ChampInfo(props) {
    
    return (
    <div className='info-champ'>
            <div className='info-avatar'>
                <div className='avatar-box'>
                    <img src={require('../../../image/avatar/'+props.champ.name+'.webp')} />
                </div>
            </div>
            <div className='info-detail'>
                <h2>{props.champ.fullName}</h2>
                
                <Rate_blue title="DMG" value={props.champ.overview[0]} lenght='2' />
                <Rate_blue title="AP" value={props.champ.overview[1]} lenght='2' />
                <Rate_blue title="DEF" value={props.champ.overview[2]} lenght='2' />
            </div>
            <div className='info-detail sta '>
                <div className='stats'>
                    <div className='stat'><img src={damage}/> <p>{props.champ.stats[0]}</p></div>
                    <div className='stat'><img src={dmg}/><p>{props.champ.stats[1]}</p></div>
                    <div className='stat'><img src={dps}/><p>{props.champ.stats[2]}</p></div>
                    <div className='stat'><img src={thu}/><p>{props.champ.stats[3]}</p></div>
                    <div className='stat'><img src={cc}/><p>{props.champ.stats[4]}</p></div>
                    <div className='stat'><img src={chinhxac}/><p>{props.champ.stats[5]}</p></div>
                </div>
            </div>
        </div>
  )
}
