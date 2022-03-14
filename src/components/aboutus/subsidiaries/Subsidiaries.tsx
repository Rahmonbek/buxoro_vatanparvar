import React, { useState } from 'react';
import { PageTitle } from '../../ui/PageTitle';
import tKadrM from "./assets/t-kadrlarM.jpg";
import tRespublikaM from "./assets/t-respublikaM.jpg";
import tRaisM from "./assets/Kamolov-1M.jpg";
import "../leaders/assets/rahbariyat.scss";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdLanguage} from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { Image } from 'antd';
import logo from './assets/logo.gif'

function Subsidiaries() {
  const {t} = useTranslation();
  const [loader, setLoader] = useState(true)
  const loaderT=()=>{
      setTimeout(()=>{
          setLoader(false)
      }, 500)
  }
  return(
    <Image.PreviewGroup>
    <div className="rahbariyat sub" onLoad={()=>{loaderT()}}>
    {loader?<div className="loaderG">
    <div className="befG">
<img src={logo} alt="..."/>
</div>

</div>
:''}
    <div className="container">
      <PageTitle title={t('TASSARUFIDAGI TASHKILOTLAR')} />
        <div className="rahbariyat-info">
       
          <div className="rahbariyat-list">
          <div className="content-wrapper">
                        <Image className="img komp"  src={tRespublikaM} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                <b>
                                 {t('KURBANIYAZOV ANVAR YULDASHEVICH')}</b>
              </p>
              <p className="rahbariyat-list-text-name">
               {t('Respublika texnik va amaliy sport turlari markazi')}
              </p>
              <div style={{marginTop:'30px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p    style={{position:'relative', top:'-14px'}} >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div style={{marginTop:'-10px'}} className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p    style={{position:'relative', top:'-14px'}}><a href="tel:+998712236712">+998 (71) 223-67-12</a></p>
              </div>
              <div style={{marginTop:'-10px'}} className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p    style={{position:'relative', top:'-14px'}}><a href="#">-----</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p    style={{position:'relative', top:'-14px'}}><a href="https://vatanparvar.uz/uz/asosiy/">vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
           <div className="content-wrapper">
                        <Image className="img komp"  src={tRaisM} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                <b>
                            {t('KAMALOV SARVAR TOXIROVICH')}</b>
                            </p>
              <p className="rahbariyat-list-text-name">
                {t('“VATANPARVAR” Axborot texnologiyalari markazi')}
              </p>
              <div style={{marginTop:'30px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p    style={{position:'relative', top:'-14px'}} >{t('Juma soat 15:00-17:00')}</p>
              </div>
              <div style={{marginTop:'-10px'}} className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p    style={{position:'relative', top:'-14px'}}><a href="tel:+998712079293">+998 (71) 207-92-93</a></p>
              </div>
              <div style={{marginTop:'-10px'}} className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p    style={{position:'relative', top:'-14px'}}><a href="#">info@vitc.uz</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p    style={{position:'relative', top:'-14px'}}><a href="https://vatanparvar.uz/uz/asosiy/">vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
           <div className="content-wrapper">
                        <Image className="img komp"  src={tKadrM} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                <b>
                               {t('UMAROV MAJID XAMDAMOVICH')}</b>
              </p>
              <p className="rahbariyat-list-text-name">
               {t('Kadrlar malakasini oshirish va qayta tayyorlash markazi')}
              </p>
              <div style={{marginTop:'30px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p    style={{position:'relative', top:'-14px'}} className="ppp">{t('Payshanba soat 16:00-18:00')}</p> 
              </div>
              <div style={{marginTop:'-10px'}} className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p    style={{position:'relative', top:'-14px'}}><a href="#">------</a></p>
              </div>
              <div style={{marginTop:'-10px'}} className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p    style={{position:'relative', top:'-14px'}}><a href="#">-----</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p    style={{position:'relative', top:'-14px'}}><a href="https://vatanparvar.uz/uz/asosiy/">vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  </div> </Image.PreviewGroup>
  );
}

export default Subsidiaries;
