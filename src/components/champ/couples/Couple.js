import React from 'react'
import './couple.css'
import { allChamps } from '../../../data/champion'

export const Couples = [
    ['lucian',
    'braum',
    'TÊ TÁI',
    '+',
    'lucibra',
    [1,0,0,0,0,0],
    `+1`,
    `damage`
    ],
    ['xayah',
    'rakan',
    'UYÊN ƯƠNG',
    '+',
    'UU',
    [0,1,0,0,0,0],
    `+1`,
    `dmg`
    ],
]
function Couple(props) {
    let borBot
    if(props.coup[3] == '+') {borBot="solid 2px rgb(22, 186, 42)";}
    else {borBot = "red"}

    let thisClass = "box-detail "+ props.coup[4]
    const open = () => {
        if(document.querySelector(`.opening`)) {document.querySelector(`.opening`).classList.remove(`opening`)}
        else {document.querySelector(`.`+props.coup[4]).classList.add(`opening`)}
    }
    return (
        <div id='box' style={{borderBottom: borBot}} onClick={open}>
            {props.coup[2]}
            <div className={thisClass}>
                <div className='detail-bonus'>
                    <div className='de-img'><img src={require('../../../image/avatar/'+props.coup[0]+'.webp')} /></div>
                    <div className='de-img'>  <img src={require('../../../image/avatar/'+props.coup[1]+'.webp')} /></div>
                    
                    <div className='de'>{props.coup[6]} </div>
                    <div className='de'>  <img className='bonus-stats' src={require('../../../image/icon/stats/'+props.coup[7]+'.webp')} /></div>
                </div>
            </div>
        </div>
    )
}

export default Couple