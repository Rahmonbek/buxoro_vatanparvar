import React, { useState } from 'react';
import aMoliya from './assets/a-moliya.jpg';
import aMatbuot from './assets/a-matbuot.jpg';
import aHarbiy from './assets/a-harbiy.jpg';
import aTexnik from './assets/a-texnik.jpg';
import aOmmaviy from './assets/a-ommaviy.jpg';
import aYuridik from './assets/a-yuridik.jpg';
import aiqtisod from './assets/a-iqtisod.jpg';
import aModdiy from './assets/a-moddiy.jpg';
import aHisobchi from './assets/a-hisobchi.jpg';
import aGuruh from './assets/a-guruh.jpg';
import "../leaders/assets/rahbariyat.scss";
import { PageTitle } from '../../ui/PageTitle';
import { HiOutlineMail } from "react-icons/hi";
import { Image } from 'antd';
import logo from './assets/logo.gif'

import { FiPhone } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
//@ts-ignore

function Aparat() {
  const {t, i18n} = useTranslation();
  const [loader, setLoader] = useState(true)
const loaderT=()=>{
    setTimeout(()=>{
        setLoader(false)
    }, 500)
}
  return(
    <Image.PreviewGroup >
    <div className="rahbariyat"onLoad={()=>{loaderT()}}>
    {loader?<div className="loaderG">
    <div className="befG">
<img src={logo} alt="..."/>
</div>

</div>
:''}
    <div className="container">
      <PageTitle title={t('MARKAZIY APPARAT')} />
         <div className="rahbariyat-info">
         <div className="rahbariyat-list">
           <div className="content-wrapper">
             <Image className="img" src={aMoliya} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                              {t('MUSTAKIMOV DAVRON ABDUVALIYEVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
                {t('Moliya-xoʻjalik boshqarmasi')}
              </p>
              <div  style={{marginTop:'40px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}}>{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}}><a href="tel:+998781503153">+998 (78) 150-31-53</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"
                />
                <p   style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
            <div className="content-wrapper">
             <Image className="img" src={aMatbuot} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                            {t('BOʻRANOV LAZIZ OLIMOVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
               {t('Matbuot kotibi')}
              </p>
              <div  style={{marginTop:'40px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}} >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}}><a href="tel:+998712355263">+998 (71) 235-52-63</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"
                />
                <p   style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
            <div className="content-wrapper">
             <Image className="img" src={aHarbiy} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                            {t('ISRAILOV AZIZ DJURAKULOVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
             {t('Harbiy-vatanparvarlik va yoshlar bilan ishlash boʻlimi')}
              </p>
              <div  style={{marginTop:'40px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}} >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}}><a href="tel:+99871712348562">+998 (71) 234-85-62</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"
                />
                <p   style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
              </div>
              </div>
          </div>
          <div className="rahbariyat-list">
            <div className="content-wrapper">
             <Image className="img" src={aTexnik} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                            {t('DJALALOV ABDUMAʼRUF ABDUKARIMOVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('Texnik va amaliy sport turlari boʻlimi')}
              </p>
              <div  style={{marginTop:'40px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}} >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}}><a href="tel:+998712358291">+998 (71) 235-82-91</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"
                />
                <p   style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
          <div className="content-wrapper">
             <Image className="img" src={aOmmaviy} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                            {t('YAKUBOV TURAB JURAKULOVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
             {t('Ommaviy texnik kasb mutaxassislarini tayyorlash boʻlimi')}
              </p>
              <div  style={{marginTop:'40px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}} >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}}><a href="tel:+998712344317">+998 (71) 234-43-17</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"
                />
                <p   style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
           <div className="content-wrapper">
             <Image className="img" src={aYuridik} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                              {t('MUMINOV FARRUX ABDIXALIMOVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('Yuridik boʻlim')}
              </p>
              <div  style={{marginTop:'40px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}} >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}}><a href="tel:+998712355263">+998 (71) 235-52-63</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"
                />
                <p   style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
            <div className="content-wrapper"> 
             <Image className="img" src={aiqtisod} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                               {t('INAGAMOV ALISHER ABDUXAMIDOVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
                 {t('Moliya-iqtisod boʻlimi')}
              </p>
              <div  style={{marginTop:'40px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}} >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}}><a href="tel:+998712348537">+998 (71) 234-85-37</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"
                />
                <p   style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
            <div className="content-wrapper">
             <Image className="img" src={aModdiy} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                            {t('RASULOV ULUGʻBEK TULKUNOVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
               {t('Moddiy-texnik ta’minot va hisobga olish boʻlimi')}
              </p>
              <div  style={{marginTop:'40px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}} >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}}><a href="tel:+998712352024">+998 (71) 235-20-24</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"
                />
                <p   style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
            <div className="content-wrapper">
             <Image className="img" src={aHisobchi} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                            {t('ROGONOVA TATYANA VLADIMIROVNA')}
              </p>
              <p className="rahbariyat-list-text-name">
               {t('Bosh hisobchi')}
              </p>
              <div  style={{marginTop:'40px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}} >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}}><a href="tel:+998712353619">+998 (71) 235-36-19</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"
                />
                <p   style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
           <div className="content-wrapper">
             <Image className="img" src={aGuruh} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                               {t('MOROZOVA EMMA VAGANOVNA')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('Guruh boshligʻi')}
              </p>
              <div  style={{marginTop:'40px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}} >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p   style={{position:'relative', top:'-14px'}}><a href="tel:+998712353227">+998 (71) 235-32-27</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"
                />
                <p   style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
            </div>
            </div>
          </div>
          
         </div>
      </div>
    </div></Image.PreviewGroup>
  )
}

export default Aparat;
