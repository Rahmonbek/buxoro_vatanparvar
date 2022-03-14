import React, { useState } from 'react';
import { PageTitle } from '../../ui/PageTitle';
import hAndijan from "./assets/h-andijon.png";
import hBuxoro from "./assets/h-buxoro.png";
import hFargona from "./assets/h-fargona.jpg";
import hJizzax from "./assets/h-jizzax.png";
import hNamangan from "./assets/h-namangan.png";
import hNavoiy from "./assets/h-navoiy.png";
import hQashqadaryo from "./assets/h-qashqadaryo.png";
import hQoraqalpoq from "./assets/h-qoraqalpoq.png";
import hSamarqand from "./assets/h-samarqand.png";
import hSirdaryo from "./assets/h-sirdaryo.png";
import hSurhondaryo from "./assets/h-surhandaryo.png";
import hToshkenViloyat from "./assets/h-toshkent.png";
import hToshkentsh from "./assets/h-toshkentsh.png";
import hXorazm from "./assets/h-xorazm.png";
import "../leaders/assets/rahbariyat.scss";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { Image } from 'antd';
import { MdLanguage} from "react-icons/md";
import logo from './assets/logo.gif'

//@ts-ignore

function Regions() {
  const {t} = useTranslation();
  const [loader, setLoader] = useState(true)
  const loaderT=()=>{
      setTimeout(()=>{
          setLoader(false)
      }, 500)
  }
  return (
    <Image.PreviewGroup>
    <div className="rahbariyat sub reg" onLoad={()=>{loaderT()}}>
    {loader?<div className="loaderG">
    <div className="befG">
<img src={logo} alt="..."/>
</div>

</div>
:''}
    <div className="container">
      <PageTitle title={t('HUDUDIY KENGASHLAR')} />
      <div className="rahbariyat-info">
         <div className="rahbariyat-list">
           <div className="content-wrapper">
            <Image className="img" src={hAndijan} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                               {t('QODIROV SARDORBEK MAXAMMADJONOVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
                 {t('Andijon viloyat kengash raisi')}
              </p>
              <div  style={{marginTop:'30px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}>{t('Seshanba soat 09:00-12:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+99837422282458">+998 (3742) 228-24-58</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="https://vatanparvar.uz/uz/asosiy/">andijon.vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
            <div className="content-wrapper">
            <Image className="img" src={hBuxoro} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                              {t('BAYOZOV RUSTAM RAJABOVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('“Vatanparvar” tashkilotining Buxoro viloyat kengashi')}
              </p>
              <div  style={{marginTop:'30px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}>{t('Dushanba soat 10:00-12:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+998652238367">+998 (65) 223-83-67</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="https://vatanparvar.uz/uz/asosiy/">buxoro.vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
            <div className="content-wrapper">
            <Image className="img" src={hFargona} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                              {t('MIRZAYEV MAXMUD XAMIDOVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('“Vatanparvar” tashkilotining Farg`ona viloyat kengashi')}
              </p>
              <div  style={{marginTop:'30px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}>{t('Dushanba soat 09:00-17:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+998732291644">+998 (73) 229-16-44</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="https://vatanparvar.uz/uz/asosiy/">fargona.vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
            <div className="content-wrapper">
            <Image className="img" src={hJizzax} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                            {t('XUDOYBERDIEV UTKIR RAXMONOVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
                {t('“Vatanparvar” tashkilotining Jizzax viloyat kengashi')}
              </p>
              <div  style={{marginTop:'30px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}>{t('Har kuni soat 09:00-12:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+998907160188">+998 (90) 716-01-88</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="https://vatanparvar.uz/uz/asosiy/">jizzax.vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
            <div className="content-wrapper">
            <Image className="img" src={hNamangan} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                              {t('ALAXODJAYEV AXMADJON MUSAXANOVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('“Vatanparvar” tashkilotining Namangan viloyat kengashi')}
              </p>
              <div  style={{marginTop:'30px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}>{t('Chorshanba soat 09:00-17:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+998692340614">+998 (69) 234-06-14</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="https://vatanparvar.uz/uz/asosiy/">namangan.vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
             <div className="content-wrapper">
            <Image className="img" src={hNavoiy} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                              {t('ISMOILOV SHUXRAT NORMO’MINOVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('“Vatanparvar” tashkilotining Navoiy viloyat kengashi')}
              </p>
              <div  style={{marginTop:'30px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}>{t('Seshanba soat 09:00-12:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+998995050140">+998 (99) 505-01-40</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="https://vatanparvar.uz/uz/asosiy/">navoiy.vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
           <div className="content-wrapper">
            <Image className="img" src={hQashqadaryo} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                               {t('ELAMONOV OTAMUROD GULMURODOVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('“Vatanparvar” tashkilotining Qashqadaryo viloyat kengashi')}
              </p>
              <div  style={{marginTop:'30px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}>{t('Har kuni soat 09:00-12:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+998917204115">+998 (91) 720-41-15</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="https://vatanparvar.uz/uz/asosiy/">qashqadaryo.vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
            <div className="content-wrapper">
            <Image className="img" src={hQoraqalpoq} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                             {t('RAZBEKOV KUATBAY UNGARBAYEVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
                {t('“Vatanparvar” tashkilotining Qoraqalpog’iston Respublika kengashi')}
              </p>
              <div  style={{marginTop:'30px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}>{t('Chorshanba soat 15:00-17:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+998612260616">+998 (61) 226-06-16</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="https://vatanparvar.uz/uz/asosiy/">qqr.vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
            <div className="content-wrapper">
            <Image className="img" src={hSamarqand} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                             {t('RAXIMOV BEKZOD MIRSAIDOVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
                {t('“Vatanparvar” tashkilotining Samarqand viloyat kengashi')}
              </p>
              <div  style={{marginTop:'30px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}>{t('Juma soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+998662364022">+998 (66) 236-40-22</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="https://vatanparvar.uz/uz/asosiy/">samarqand.vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
            <div className="content-wrapper">
            <Image className="img" src={hSirdaryo} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                             {t('IMAMKULOV ULUG’BEK ACHILOVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('“Vatanparvar” tashkilotining Sirdaryo viloyat kengashi')}
              </p>
              <div  style={{marginTop:'30px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}>{t('Juma soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+998994770878">+998 (99) 477-08-78</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="https://vatanparvar.uz/uz/asosiy/">sirdaryo.vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
            <div className="content-wrapper">
            <Image className="img" src={hSurhondaryo} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                             {t('YUSUPOV ZUFARJAN YUSUPOVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('“Vatanparvar” tashkilotining Surxondaryo viloyat kengashi')}
              </p>
              <div  style={{marginTop:'30px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}>{t('Juma soat 10:00-13:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+998762222232">+998 (76) 222-22-32</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="https://vatanparvar.uz/uz/asosiy/">surxondaryo.vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
            <div className="content-wrapper">
            <Image className="img" src={hToshkenViloyat} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                            {t('OTAKUZIEV NURBEK NABIKUZIEVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
               {t('“Vatanparvar” tashkilotining Toshkent viloyat kengashi')}
              </p>
              <div  style={{marginTop:'30px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}>{t('Har kuni soat 09:00-12:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+998903226029">+998 (90) 322-60-29</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="https://vatanparvar.uz/uz/asosiy/">toshkent-vil.vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
            <div className="content-wrapper">
            <Image className="img" src={hToshkentsh} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                             {t('Alimxodjayev Farhod Maxmudxodjayevich')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('“Vatanparvar” tashkilotining Toshkent shahar kengashi')}
              </p>
              <div  style={{marginTop:'30px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}>{t('Juma soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+998781503156">+998 (78) 150-31-56</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="https://vatanparvar.uz/uz/asosiy/">toshkent.vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
            <div className="content-wrapper">
            <Image className="img" src={hXorazm} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                              {t('IBRAGIMOV DAVRONBЕK BAKIЕVICH')}
              </p>
              <p className="rahbariyat-list-text-name">
               {t('“Vatanparvar” tashkilotining Xorazm viloyat kengashi')}
              </p>
              <div  style={{marginTop:'30px'}} className="icons">
                <FaRegCalendarCheck  className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}>{t('Juma soat 15:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="tel:+998971495022">+998 (97) 149-50-22</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="1.5rem" color="#244BA4" cursor="pointer"/>
                <p  style={{position:'relative', top:'-14px'}}><a href="https://vatanparvar.uz/uz/asosiy/">xorazm.vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
      </div>
    </div>
  </div></Image.PreviewGroup>
  );
}

export default Regions;
