import React, { useState } from 'react';
import './Champs.css'
import ChampInfo from '../../components/champ/table-info/Table_Info'
import { allChamps } from '../../data/champion'
import ListChamp from '../../components/champ/list-all-champ/ListChamp';
export const Home = (props) => {
  const isMobile = window.innerWidth <= 768
  return (
    <div className={isMobile ? 'home-page' :'home-page no-responsive'}>
      {isMobile ? (   <div><h1>CyBot LÀ GÌ?</h1>
      CyBot là một công cụ (Tool) được xây dựng dựa trên mô hình game Liên Minh Huyền Thoại, có thể được xem là Bách khoa toàn thư LOL. Cybot được tạo ra nhằm hỗ trợ người chơi tiếp cận. 
      <div id='1' className='option' onClick={props.func}>C H A M P S</div>
      <div id='2' className='option' onClick={props.func}>T E A M  - L I N E U P</div>
      <div id='3' className='option' onClick={props.func}>T R A N N I N G</div></div> ) : (
        <div className='no-responsive'> 
        Không hỗ trợ thiết bị này. 
        Hãy chuyển sang chế độ hiển thị kích thước màn hình của iPhone và tải lại trang để có trải nghiệm tốt nhất.
        </div>
      )
    }
    </div>
  )
}

export default function Champs() {

  
  const [champ, setChamp] = useState(allChamps[0])
  const pickChamp = (event) => {
    let nameOfChamp = event.currentTarget.getAttribute("name");
    for(let i=0;i<allChamps.length;i++) {
      if(nameOfChamp == allChamps[i].name) {setChamp(allChamps[i]);break;}
    }  
  }
  
  return (
    <div style={{backgroundColor: `rgba(0, 0, 0, 0.500)`}}>
      <ChampInfo champ={champ}/>    
      <ListChamp After_Click_Champ={pickChamp} display_Bottom_Stats="none" columns="5" height="400"/>
    </div>
  )
}
