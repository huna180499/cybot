import React, { useState, useEffect  } from 'react';
import matvatto from '../../image/icon/item/matvatto.webp'
import mattim from '../../image/icon/item/mattim.webp'
import mayquet from '../../image/icon/item/mayquet.webp'
import thaukinh from '../../image/icon/item/thaukinh.webp'
import matxanh from '../../image/icon/item/matxanh.jfif'
import clipashefarm from '../../image/video/ashe-farm.mp4'
import clipolaffarm from '../../image/video/olaf-farm.mp4'
import './Training.css'
const Trainer = (props) => {
  return (
<div className='trainer' value={props.train.name} onClick={props.func}>
  <div className='train'>
            <div>{props.train.name}</div>
        <div className='practice'>({props.train.numof})</div>
        </div> 
        <p>{props.train.detail}</p>
    </div>
  )
}
const Being = (props) => {
      const [prac, setPrac] = useState(props.training)
  const [numPrac, setNumPrac] = useState(0)
  useEffect(()=> {setPrac(props.training)}        )
  useEffect(()=> {setNumPrac(0)          },[prac])
  useEffect(()=> {
    if(document.querySelector(`.prac-being`)){document.querySelector(`.prac-being`).classList.remove(`prac-being`)}
    console.log(numPrac)
    document.getElementsByClassName(`prac`)[numPrac].classList.add('prac-being')
  },[numPrac]);

  const changePrac = (event) => {
    let ele = document.getElementsByClassName(`prac`)
    for(let i=0;i<ele.length;i++) {
      if(event.currentTarget == ele[i]) {setNumPrac(i)}
    }
  }
  const numof = prac.numof;
  const div = <div className='prac' style={{width: 100/numof + "%"}} onClick={changePrac}>⛛ </div>;
  let list = [];
  for(let i=0;i<numof;i++) {list.push(div)}
  return (
    <div className='Train-being'>
      <div className='pracs'>
        {list.map((x) => {return x})}
      </div>
      <div className='train-detail'>
        {prac.jsx[numPrac]}
      </div>
    </div>
  )
} 
const FARMING = {
  name: "FARMING", 
  numof: 2, 
  detail: "Các bài luyện tập cải thiện chỉ số lính",
  jsx: [
        <div>
          <div>LEVEL: <span style={{fontSize: '130%',color:'yellow'}}>&#9733;</span></div>
          <div>RESET ĐÒN ĐÁNH</div>
          <div>Phím S sẽ giúp tướng dừng đột ngột mọi hoạt động. Tận dụng để giữ nhịp farm lính một cách ổn định</div>
          <video width="300" height="200" controls>
            <source src={clipolaffarm}/>
          </video>
        </div>,

        <div>
           <div>LEVEL: <span style={{fontSize: '130%',color:'yellow'}}>&#9733; &#9733;</span></div>
           <div style={{color: 'rgb(186, 100, 74)'}}> ASHE </div>
           <div>LEVEL: <span style={{fontSize: '130%',color:'yellow'}}>&#9733; &#9733; &#9733;</span></div>
          <div style={{color: 'rgb(186, 100, 74)'}}>KARTHUS </div>
           <div className='baitap'> 
            <div>TRAIN</div>
            <div className='content'>
              - Farm 100 lính dưới 10p<br></br>
              - Không mua item <br></br>
              - Không sử dụng kĩ năng <br></br>
              - Không mang bảng ngọc <span>Bước chân thần tốc</span>
            </div>
          </div>
          <video width="290" height="200" controls>
            <source src={clipashefarm}/>
          </video>
        </div>
       
      ]
}
const VISION = {
  name: "VISION", 
  numof: 3, 
  detail: "Chi tiết về tầm nhìn",
  jsx: [<div>
          <div>LOẠI: Cơ bản</div>
          <div>THÔNG SỐ TẦM NHÌN</div>
          <div className='baitap'> 
            <div>
              <img src={(matxanh)}/> <br></br>
              <img src={(matvatto)}/> <br></br>
              <img src={(mayquet)}/> <br></br>
              <img src={(mattim)}/> <br></br>
              <img src={(thaukinh)}/> <br></br>
            </div>
            <div >
              Mắt xanh <br></br>
              Mắt vật tổ <br></br>
              Máy quét <br></br>
              Mắt tím <br></br>
              Thấu kính
            </div>
            <div className='cooldown'>
              120s <br></br>
              50s <br></br>
              6s <br></br>
              Vĩnh viễn <br></br>
              Vĩnh viễn <br></br>
            </div>
            <div className='cooldown'>
              ... <br></br>
              Hồi 60s <br></br>
              Hồi 70s <br></br>
              ... <br></br>
              Hồi 15s
            </div>
         
          </div>
       </div>,
        <div>
          <div>LOẠI: Cơ bản</div>
          <div>KIẾM SOÁT MỤC TIÊU</div>
          <br></br>
          <div> - Với thời gian tồn tại lên tới 2.5 phút, mắt xanh nên được tận dụng vào thời điểm 90s trước khi mục tiêu xuất hiện. Để chắn chắn rằng bạn biết đối phương kiểm soát hay chưa.</div>
          <div>
            
          </div>
        </div>,
        <div>
          <div>LOẠI: Nâng cao</div>
        </div>
      ]
}
const SKILLS = {
  name: "SKILLS", 
  numof: 3, 
  detail: "Góc nhìn khác về kĩ năng định hướng",
  jsx: [
        <div>
          <div>LEVEL: <span style={{fontSize: '130%',color:'yellow'}}>&#9733;</span></div>
          <div>ƯU TIÊN TƯỚNG</div>
        </div>,
        <div>
          <div>LEVEL: <span style={{fontSize: '130%',color:'yellow'}}>&#9733; &#9733;</span></div>
          <div></div>
        </div>,
        <div>
          <div>LEVEL: <span style={{fontSize: '130%',color:'yellow'}}>&#9733; &#9733; &#9733;</span></div>
         
       </div>
  ]
}
export default function Training() {
  const [trainBeing, setTrain] = useState(FARMING);
  const chooseTrain = (event) => {
    let name = event.currentTarget.getAttribute("value");
    if(name == "FARMING") {setTrain(FARMING)}
    else if(name == "VISION") {setTrain(VISION)}
    else if(name == "SKILLS") {setTrain(SKILLS)}
  }
  return (
    <div style={{backgroundColor: `rgba(0, 0, 0, 0.500)`}}>
      <div className='title'>
        - T R A I N I N G -
      </div>
      <Trainer train={FARMING} func={chooseTrain}/>
      <Trainer train={VISION}  func={chooseTrain}/>
      <Trainer train={SKILLS}  func={chooseTrain}/>
     
      <Being training={trainBeing}/>
    </div>
  )
}
