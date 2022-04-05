import React, { useEffect, useState } from "react";
import { PageTitle } from "../../ui/PageTitle";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import "./assets/rahbariyat.scss";
import { Image } from 'antd';
import logo from './assets/logo.gif'
import user from './assets/user.png'

import { useTranslation } from 'react-i18next';
import http from "../../ui/Services";
import { region, urlPer } from "../../../host";
//@ts-ignore
function Leaders() {
  const {t} = useTranslation();
  const [loader, setLoader] = useState(true)
  const [data, setData] = useState<any>(null)
  const loaderT=()=>{
     
  }
  useEffect(()=>{
    http.get<any>(`/GetApi/Personal/?id=1&regionId=${region}`)
        
    .then((res) => {console.log(res.data); setData(res.data); setTimeout(()=>{
      setLoader(false)
  }, 0) })
    .catch(e => console.log(e))
  },[])
  return (
    <Image.PreviewGroup>
    <div className="rahbariyat" onLoad={()=>{loaderT()}}>
    {loader?<div className="loaderG">
    <div className="befG">
<img src={logo} alt="..."/>
</div>

</div>
:''}
      <div className="container">
        <PageTitle title={t('RAHBARIYAT')} />
        <div className="rahbariyat-info">
     
        {data!==null?data.map((item:any, index:any)=>{
          return(
            <div className="rahbariyat-list sal">
              
             <div className="content-wrapper">
             <div className="rahbariyat-list-text" style={{display:"flex", padding:'0px', alignItems:'flex-start', justifyContent:'center'}}> 
              <Image  className="img" src={item.webSiteProfileImageUrl!==null?`${urlImg}/${item.webSiteProfileImageUrl}`:user} alt="img" />
              </div>
              <div className="rahbariyat-list-text sug">
                <p  className="rahbariyat-list-text-position" style={{marginTop:"10px"}}>
                  <b style={{lineHeight:'30px'}}>
                  {t('check')?item.branchName:item.branchNameRu}       
                </b></p>
  
                <p  className="rahbariyat-list-text-name">
                {t('check')?item.branchPresident:item.branchPresidentRu}
              
                </p>
                <div className="icons" style={{marginTop:'-10px'}}>
                  <FaRegCalendarCheck  className="icon"  size="1.5rem" color="#244BA4" cursor="pointer"/>
                  <p  style={{position:'relative', top:'-14px'}}>{t('check')?item.visitingDaysUz:item.visitingDaysRu}</p>
                </div>
                <div className="icons">
                  <FiPhone className="icon"  size="1.5rem" color="#244BA4" cursor="pointer"/>
                  <p  style={{position:'relative', top:'-14px'}}><a href={`tel: ${item.phoneNumber}`}>{item.phoneNumber!==null?item.phoneNumber:' - '}</a></p>
                </div>
              
                <div className="icons">
                  <HiOutlineMail className="icon iconn" size="1.5rem" color="#244BA4" cursor="pointer"/>
                  <p  style={{position:'relative', top:'-14px'}}><a href={`mailto: ${item.email}`}>{item.email!=="null"?item.email:' - '}</a></p>
                </div>
             
              </div>
              </div> 
            </div>
          )
        }):''}
        
        
        </div>
      </div>
    </div>
    </Image.PreviewGroup>
  );
}

export default Leaders;
