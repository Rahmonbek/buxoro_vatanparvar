import React, { useState } from "react";
import { PageTitle } from "../../ui/PageTitle";
import rRais from "./assets/r-rais.jpg";
import oRais1 from "./assets/o-rais1.jpg";
import oRais2 from "./assets/o-rais2.jpg";
import oRais3 from "./assets/o-rais3.jpg";
import yRais from "./assets/y-rais.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import "./assets/rahbariyat.scss";
import { Image } from 'antd';
import logo from './assets/logo.gif'

import { useTranslation } from 'react-i18next';
//@ts-ignore
function Leaders() {
  const {t} = useTranslation();
  const [loader, setLoader] = useState(true)
  const loaderT=()=>{
      setTimeout(()=>{
          setLoader(false)
      }, 500)
  }
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
          <div className="rahbariyat-list">
            
           <div className="content-wrapper">
            <Image  className="img" src={rRais} alt="img" />
            <div className="rahbariyat-list-text">
              <p  className="rahbariyat-list-text-position">
                <b>
                            {t('BATIROV XUSAN ARZUDINOVICH')}
              </b></p>

              <p  className="rahbariyat-list-text-name">
              {t('markaziy_kengash_raisi')}
              </p>
              <div className="icons" style={{marginTop:'40px'}}>
                <FaRegCalendarCheck  className="icon"  size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}>{t('Juma soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon"  size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+998781503150">+998 (78) 150 - 31 - 50</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon iconn" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>

            </div>
            </div> 
          </div>
          <div className="rahbariyat-list">
             <div className="content-wrapper">
            <Image  className="img" src={oRais1} alt="img" />
            <div className="rahbariyat-list-text">
              <p  className="rahbariyat-list-text-position">
                <b>
                            {t('MULABAYEV NURMAXAMAT XIKMATOVICH')}
              </b></p>

              <p  className="rahbariyat-list-text-name">
                {t('Rais oʻrinbosari1')}
              </p>
              <div className="icons" style={{marginTop:'40px'}}>
                <FaRegCalendarCheck  className="icon"  size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}} className="ppp">{t('Seshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon"  size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+998781503151">+998 (78) 150 - 31 - 51</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon"  size="1.7rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
          <div className="content-wrapper">
            <Image  className="img" src={oRais2} alt="img" />
            <div className="rahbariyat-list-text">
              <p  className="rahbariyat-list-text-position">
                <b>
                            {t('MAXMUDOV XASANBAY KADIRJANOVICH')}
              </b></p>

              <p  className="rahbariyat-list-text-name">
                {t('Rais oʻrinbosari2')}
              </p>
              <div className="icons" style={{marginTop:'40px'}}>
                <FaRegCalendarCheck  className="icon"  size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}} className="ppp">{t('Chorshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon"  size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+998781503154">+998 (78) 150-31-54</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon"  size="1.7rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
          <div className="content-wrapper">
            <Image  className="img" src={oRais3} alt="img" />
            <div className="rahbariyat-list-text">
              <p  className="rahbariyat-list-text-position">
                <b>
                            {t('ABDUSAMATOV ALISHER BAXADIROVICH')}
              </b></p>

              <p  className="rahbariyat-list-text-name">
                {t('Rais oʻrinbosari3')}
              </p>
              <div className="icons" style={{marginTop:'40px'}}>
                <FaRegCalendarCheck  className="icon"  size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}} className="ppp">{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon"  size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+998781503155">+998 (78) 150-31-55</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon"  size="1.7rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
          <div className="content-wrapper">
            <Image  className="img" src={yRais} alt="img" />
            <div className="rahbariyat-list-text">
              <p  className="rahbariyat-list-text-position">
                <b>
              {t('ISAKOV MAXSUD SHAMSIDINOVICH')}
                   </b>
                            </p>
              <p  className="rahbariyat-list-text-name">
                {t('Tashkiliy-kadrlar boshqarmasi boshligʻi - Rais yordamchisi')}
              </p>
              <div className="icons" style={{marginTop:'40px'}}>
                <FaRegCalendarCheck  className="icon"  size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}} className="ppp">{t('Dushanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon"  size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+998781503152">+998 (78) 150-31-52</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon"  size="1.7rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
            </div>
            </div>
          </div>
          
        
        </div>
      </div>
    </div>
    </Image.PreviewGroup>
  );
}

export default Leaders;
