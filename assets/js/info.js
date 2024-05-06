document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    const productDetailsSlider = document.querySelector('.portfolio-details-slider .swiper-wrapper');
    const productInfoList = document.querySelector('.portfolio-info ul');
    const productDescription = document.querySelector('.portfolio-description h2');
    const productDescriptionText = document.querySelector('.portfolio-description p');
  
  
    const products = {
      "AK-12": {
        "images": [
          "assets/img/guns/carabine/AK-12.png",
          "assets/img/guns/carabine/AK-12 2.png",
        ],
        "characteristics": [
          { "label": "Производитель", "value": "концерн «Калашников»" },
          { "label": "Калибр", "value": "5,45 мм" },
          { "label": "Применяемый боеприпас", "value": "5,45х39" },
          { "label": "Вес без патронов", "value": "3,7 кг" },
          { "label": "Прицельная дальность", "value": "800 м" },
          { "label": "Объем магазина", "value": "30 патронов" },
          { "label": "Выстрелов/мин", "value": "700" },
          { "label": "Общая длина", "value": "875 мм" },
          { "label": "Длина ствола", "value": "415 мм" },
        ],
        "description": "5,45 автомат Калашникова АК-12 – это современный образец стрелкового оружия, разработанный профессионалами своего дела на базе легендарной платформы. Он вобрал в себя все передовые технологии для большей функциональности, сохранив безусловную надежность."
      },
      
      "M4-COBRA": {
        "images": [
            "assets/img/guns/carabine/m4-kobra.png",
            "assets/img/guns/carabine/m4-kobra-2.png",
            "assets/img/guns/carabine/m4-kobra-3.png"
        ],
        "characteristics": [
            { "label": "Производитель", "value": "Colt's Manufacturing Company" },
            { "label": "Калибр", "value": "5.56x45 мм NATO" },
            { "label": "Применяемый боеприпас", "value": "5.56x45 мм" },
            { "label": "Вес без патронов", "value": "2,9 кг" },
            { "label": "Прицельная дальность", "value": "600 м" },
            { "label": "Объем магазина", "value": "30 патронов" },
            { "label": "Выстрелов/мин", "value": "700-950" },
            { "label": "Общая длина", "value": "840 мм" },
            { "label": "Длина ствола", "value": "370 мм" }
        ],
        "description": "M4 - Cobra - это карабин, произведенный компанией Colt's Manufacturing Company. Это компактное и маневренное оружие, которое широко применяется в армии, полиции и спецназе. M4 - Cobra обеспечивает высокую огневую мощность и точность при стрельбе на средние дистанции."
    },
  
    "HK-g36": {
      "images": [
          "assets/img/guns/carabine/HK g36.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Heckler & Koch" },
          { "label": "Калибр", "value": "5.56x45 мм NATO" },
          { "label": "Применяемый боеприпас", "value": "5.56x45 мм" },
          { "label": "Вес без патронов", "value": "3,63 кг" },
          { "label": "Прицельная дальность", "value": "800 м" },
          { "label": "Объем магазина", "value": "30 патронов" },
          { "label": "Выстрелов/мин", "value": "750" },
          { "label": "Общая длина", "value": "999 мм" },
          { "label": "Длина ствола", "value": "480 мм" }
      ],
      "description": "HK G36 - это автоматическая винтовка, производимая немецкой компанией Heckler & Koch. Это легкое и надежное оружие, которое применяется в различных вооруженных силах и полиции многих стран. HK G36 обеспечивает высокую точность и надежность при стрельбе как на короткие, так и на средние дистанции."
    },
  
    "Steyr-Aug-a3": {
      "images": [
          "assets/img/guns/carabine/Steyr Aug a3.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Steyr Mannlicher" },
          { "label": "Калибр", "value": "5.56x45 мм NATO" },
          { "label": "Вес без патронов", "value": "3,6 кг" },
          { "label": "Прицельная дальность", "value": "300-400 м" },
          { "label": "Объем магазина", "value": "30 патронов" },
          { "label": "Выстрелов/мин", "value": "650" },
          { "label": "Общая длина", "value": "790 мм" },
          { "label": "Длина ствола", "value": "508 мм" }
      ],
      "description": "Steyr Aug A3 - это австрийская боевая винтовка, разработанная компанией Steyr Mannlicher. Она известна своим уникальным дизайном и хорошей эргономикой. Aug A3 применяется во многих странах благодаря своей надежности и универсальности."
    },
  
    "Tavor-tar-21": {
      "images": [
          "assets/img/guns/carabine/Tavor tar-21.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Israel Weapon Industries" },
          { "label": "Калибр", "value": "5.56x45 мм NATO" },
          { "label": "Вес без патронов", "value": "3,27 кг" },
          { "label": "Прицельная дальность", "value": "500 м" },
          { "label": "Объем магазина", "value": "30 патронов" },
          { "label": "Выстрелов/мин", "value": "750" },
          { "label": "Общая длина", "value": "720 мм" },
          { "label": "Длина ствола", "value": "460 мм" }
      ],
      "description": "Tavor TAR-21 - это израильская автоматическая винтовка, разработанная компанией Israel Weapon Industries. Она имеет компактный и эргономичный дизайн, а также хорошую точность и надежность. TAR-21 широко используется в вооруженных силах Израиля и других стран."
    },
  
    "FN-F2000": {
      "images": [
          "assets/img/guns/carabine/FN F2000.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "FN Herstal" },
          { "label": "Калибр", "value": "5.56x45 мм NATO" },
          { "label": "Вес без патронов", "value": "3,6 кг" },
          { "label": "Прицельная дальность", "value": "400 м" },
          { "label": "Объем магазина", "value": "30 патронов" },
          { "label": "Выстрелов/мин", "value": "850" },
          { "label": "Общая длина", "value": "680 мм" },
          { "label": "Длина ствола", "value": "400 мм" }
      ],
      "description": "FN F2000 - это бельгийская боевая винтовка, разработанная компанией FN Herstal. Она характеризуется компактным и уникальным дизайном, а также высокой скорострельностью и точностью. F2000 применяется в вооруженных силах многих стран."
    },
  
    "Maxim-9": {
      "images": [
          "assets/img/guns/pistol/Maxim9.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "SilencerCo" },
          { "label": "Калибр", "value": "9x19 мм" },
          { "label": "Вес без патронов", "value": "907 г" },
          { "label": "Длина ствола", "value": "127 мм" },
          { "label": "Общая длина", "value": "210 мм" },
          { "label": "Объем магазина", "value": "15 патронов" },
          { "label": "Тип", "value": "пистолет-пулемет" }
      ],
      "description": "Maxim 9 - это интегрированный глушительный пистолет-пулемет, разработанный американской компанией SilencerCo. Он представляет собой инновационное решение для сокрытия выстрелов. Maxim 9 оснащен встроенным глушителем, который снижает шум выстрела до безопасного уровня."
    },
  
    "Stalker-STC": {
      "images": [
          "assets/img/guns/pistol/Stalker STC.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Stalker Arms" },
          { "label": "Калибр", "value": "9x19 мм" },
          { "label": "Вес без патронов", "value": "750 г" },
          { "label": "Длина ствола", "value": "105 мм" },
          { "label": "Общая длина", "value": "180 мм" },
          { "label": "Объем магазина", "value": "15 патронов" }
      ],
      "description": "Stalker STC - это компактный и надежный пистолет, разработанный компанией Stalker Arms. Он отличается отличной эргономикой и высокой скорострельностью. STC идеально подходит для скрытого ношения и самообороны."
    },
  
    "FN-Five-Seven-Mk3-MRD": {
      "images": [
          "assets/img/guns/pistol/FN Five-Seven Mk3 MRD.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "FN Herstal" },
          { "label": "Калибр", "value": "5.7x28 мм" },
          { "label": "Вес без патронов", "value": "618 г" },
          { "label": "Длина ствола", "value": "122 мм" },
          { "label": "Общая длина", "value": "208 мм" },
          { "label": "Объем магазина", "value": "20 или 30 патронов" }
      ],
      "description": "FN Five-Seven Mk3 MRD - это высокотехнологичный пистолет, разработанный компанией FN Herstal. Он известен своим уникальным калибром и легким весом. Five-Seven Mk3 MRD оснащен планкой для установки оптических прицелов и аксессуаров."
    },
  
    "Beretta-m93r": {
      "images": [
          "assets/img/guns/pistol/beretta m93r.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Beretta" },
          { "label": "Калибр", "value": "9x19 мм" },
          { "label": "Вес без патронов", "value": "1,27 кг" },
          { "label": "Длина ствола", "value": "125 мм" },
          { "label": "Общая длина", "value": "240 мм" },
          { "label": "Объем магазина", "value": "20 или 30 патронов" }
      ],
      "description": "Beretta M93R - это итальянский пистолет-пулемет, разработанный компанией Beretta. Он имеет характерный внешний вид с удлиненным стволом и складным прикладом. M93R обладает высокой скорострельностью и точностью на короткие дистанции."
    },
    
    "Тульский-Токарев": {
      "images": [
          "assets/img/guns/pistol/Пистолет Тульский Токарев ТТ_.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Тульский оружейный завод" },
          { "label": "Калибр", "value": "7,62x25 мм Токарева" },
          { "label": "Вес без патронов", "value": "900 г" },
          { "label": "Длина ствола", "value": "116 мм" },
          { "label": "Общая длина", "value": "195 мм" },
          { "label": "Объем магазина", "value": "8 или 10 патронов" }
      ],
      "description": "Тульский Токарев (ТТ) - это российский самозарядный пистолет, разработанный в 1930-х годах. Он служил стандартным вооружением советских вооруженных сил во время Второй мировой войны и в послевоенный период. ТТ характеризуется простотой конструкции, надежностью и высокой убойной силой патрона."
    },
  
    "Glock-19-gen-5": {
      "images": [
          "assets/img/guns/pistol/glock 19 gen 5.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Glock" },
          { "label": "Калибр", "value": "9x19 мм" },
          { "label": "Вес без патронов", "value": "625 г" },
          { "label": "Длина ствола", "value": "102 мм" },
          { "label": "Общая длина", "value": "187 мм" },
          { "label": "Объем магазина", "value": "15 или 17 патронов" }
      ],
      "description": "Glock 19 Gen 5 - это компактный и надежный пистолет, разработанный австрийской компанией Glock. Он является одним из самых популярных в мире пистолетов для скрытого ношения. Gen 5 представляет собой обновленную версию оригинальной модели с улучшенными характеристиками."
    },
  
    "Barrett-m82": {
      "images": [
          "assets/img/guns/sniper/Barrett m82.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Barrett Firearms Manufacturing" },
          { "label": "Калибр", "value": ".50 BMG" },
          { "label": "Вес без патронов", "value": "13,6 кг" },
          { "label": "Длина ствола", "value": "737 мм" },
          { "label": "Общая длина", "value": "1 448 мм" },
          { "label": "Объем магазина", "value": "10 или 12 патронов" },
          { "label": "Прицельная дальность", "value": "1800 м" }
      ],
      "description": "Barrett M82 - это американская полуавтоматическая снайперская винтовка, разработанная компанией Barrett Firearms Manufacturing. Она известна своим мощным калибром .50 BMG и дальнейшей точностью стрельбы. M82 широко используется в вооруженных силах многих стран и в качестве средства для борьбы с техникой."
    },
  
    "DVL-10-M1-Diversant": {
      "images": [
          "assets/img/guns/sniper/dvl-10-m1-diversant.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "DVL" },
          { "label": "Калибр", "value": ".308 Winchester" },
          { "label": "Длина ствола", "value": "600 мм" },
          { "label": "Общая длина", "value": "1100 мм" },
          { "label": "Объем магазина", "value": "5 или 10 патронов" },
          { "label": "Масса", "value": "6,8 кг" },
          { "label": "Дальность стрельбы", "value": "800 м (эффективная)" }
      ],
      "description": "DVL-10 M1 Diversant - это российская снайперская винтовка, разработанная компанией DVL. Она известна своей точностью и надежностью. Эта винтовка прекрасно подходит для тактических операций и дальних дистанций."
    },
  
    "TSVL-8-M1-Сталинград": {
      "images": [
          "assets/img/guns/sniper/TSVL-8 M1 Сталинград.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "TSVL" },
          { "label": "Калибр", "value": ".338 Lapua Magnum" },
          { "label": "Длина ствола", "value": "700 мм" },
          { "label": "Общая длина", "value": "1300 мм" },
          { "label": "Объем магазина", "value": "5 или 10 патронов" },
          { "label": "Масса", "value": "7,5 кг" },
          { "label": "Дальность стрельбы", "value": "1200 м (эффективная)" }
      ],
      "description": "TSVL-8 M1 Сталинград - это российская снайперская винтовка, разработанная компанией TSVL. Она примечательна своей мощью и точностью. Сталинград идеально подходит для дальних стрельб."
    },
  
    "Gepard-GM6-lynx": {
      "images": [
          "assets/img/guns/sniper/gepard gm6 lynx.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Gepard" },
          { "label": "Калибр", "value": ".50 BMG" },
          { "label": "Длина ствола", "value": "750 мм" },
          { "label": "Общая длина", "value": "1200 мм" },
          { "label": "Объем магазина", "value": "5 патронов" },
          { "label": "Масса", "value": "12,5 кг" },
          { "label": "Дальность стрельбы", "value": "1800 м (эффективная)" }
      ],
      "description": "Gepard GM6 Lynx - это венгерская снайперская винтовка, разработанная компанией Gepard. Она известна своим мощным калибром и высокой точностью. Lynx прекрасно подходит для преследования и поражения целей на больших дистанциях."
    },
  
    "Mk14-EBR": {
      "images": [
          "assets/img/guns/sniper/Mk14 EBR.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Springfield Armory" },
          { "label": "Калибр", "value": "7,62x51 мм NATO" },
          { "label": "Длина ствола", "value": "457 мм" },
          { "label": "Общая длина", "value": "940 мм" },
          { "label": "Объем магазина", "value": "20 патронов" },
          { "label": "Масса", "value": "6,8 кг" },
          { "label": "Дальность стрельбы", "value": "800 м (эффективная)" }
      ],
      "description": "Mk14 EBR - это американская снайперская винтовка, разработанная компанией Springfield Armory. Она имеет высокую огневую мощь и точность. Mk14 EBR прекрасно подходит для тактических операций и дальних дистанций."
    },
  
    "МЦ-566": {
      "images": [
          "assets/img/guns/sniper/МЦ-566.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "ИЖМАШ" },
          { "label": "Калибр", "value": ".308 Winchester" },
          { "label": "Длина ствола", "value": "560 мм" },
          { "label": "Общая длина", "value": "1100 мм" },
          { "label": "Объем магазина", "value": "5 или 10 патронов" },
          { "label": "Масса", "value": "5,2 кг" },
          { "label": "Дальность стрельбы", "value": "800 м (эффективная)" }
      ],
      "description": "МЦ-566 - это российская снайперская винтовка, производимая ИЖМАШ. Она известна своей надежностью и точностью. МЦ-566 представляет собой превосходный выбор для стрельбы на средние и дальние дистанции."
    },
  
    "KRISS-Super-V": {
      "images": [
          "assets/img/guns/smg/KRISS Vector.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "KRISS USA" },
          { "label": "Калибр", "value": ".45 ACP" },
          { "label": "Длина ствола", "value": "165 мм" },
          { "label": "Общая длина", "value": "635 мм" },
          { "label": "Объем магазина", "value": "10, 13 или 30 патронов" },
          { "label": "Масса", "value": "2,9 кг" },
          { "label": "Скорострельность", "value": "1100 выстрелов в минуту" }
      ],
      "description": "KRISS Super V - это пистолет-пулемёт американского производства, выпускаемый компанией KRISS USA. Он отличается оригинальной системой отдачи, которая значительно снижает отдачу и повышает контролируемость при стрельбе."
    },
  
    "Saiga-9": {
      "images": [
          "assets/img/guns/smg/Карабин Сайга-9.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Концерн Калашников" },
          { "label": "Калибр", "value": "9x19 мм" },
          { "label": "Длина ствола", "value": "250 мм" },
          { "label": "Общая длина", "value": "630 мм" },
          { "label": "Объем магазина", "value": "10, 15 или 30 патронов" },
          { "label": "Масса", "value": "3,4 кг" },
          { "label": "Скорострельность", "value": "800-900 выстрелов в минуту" }
      ],
      "description": "Сайга-9 - это российский карабин-пистолет-пулемёт, выпускаемый Концерном Калашников. Он характеризуется надёжностью и простотой конструкции, а также высокой скорострельностью и точностью при стрельбе."
    },
  
    "Beretta-PMX": {
      "images": [
          "assets/img/guns/smg/Beretta PMX.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Beretta" },
          { "label": "Калибр", "value": "9x19 мм" },
          { "label": "Длина ствола", "value": "130 мм" },
          { "label": "Общая длина", "value": "546 мм" },
          { "label": "Объем магазина", "value": "15 или 30 патронов" },
          { "label": "Масса", "value": "2,6 кг" },
          { "label": "Скорострельность", "value": "900 выстрелов в минуту" }
      ],
      "description": "Beretta PMX - это итальянский пистолет-пулемёт, разработанный компанией Beretta. Он отличается компактными размерами, высокой скорострельностью и надёжностью, что делает его прекрасным выбором для тактических операций."
    },
  
    "ARP-9-Искра": {
      "images": [
          "assets/img/guns/smg/arp-9-iskra.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "АРМА-ДЕЙ" },
          { "label": "Калибр", "value": "9x19 мм" },
          { "label": "Длина ствола", "value": "128 мм" },
          { "label": "Общая длина", "value": "580 мм" },
          { "label": "Объем магазина", "value": "30 патронов" },
          { "label": "Масса", "value": "2,2 кг" },
          { "label": "Скорострельность", "value": "900 выстрелов в минуту" }
      ],
      "description": "ARP-9 Искра - это российский пистолет-пулемёт, разработанный компанией АРМА-ДЕЙ. Он характеризуется компактным размером, высокой скорострельностью и надёжностью. Искра прекрасно подходит для использования в городских условиях."
    },
  
    "FMG-9": {
      "images": [
          "assets/img/guns/smg/FMG-9.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Magpul Industries" },
          { "label": "Калибр", "value": "9x19 мм" },
          { "label": "Длина ствола", "value": "127 мм" },
          { "label": "Общая длина", "value": "360 мм" },
          { "label": "Объем магазина", "value": "15 или 30 патронов" },
          { "label": "Масса", "value": "1,5 кг" },
          { "label": "Скорострельность", "value": "950-1100 выстрелов в минуту" }
      ],
      "description": "FMG-9 - это компактный пистолет-пулемёт, разработанный компанией Magpul Industries. Он отличается складной конструкцией, что позволяет удобно транспортировать и скрывать его при необходимости."
    },
  
    "ПП-19-01-Витязь": {
      "images": [
          "assets/img/guns/smg/ПП-19-01 Витязь.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Ижевский механический завод" },
          { "label": "Калибр", "value": "9x19 мм" },
          { "label": "Длина ствола", "value": "220 мм" },
          { "label": "Общая длина", "value": "680 мм" },
          { "label": "Объем магазина", "value": "30 патронов" },
          { "label": "Масса", "value": "2,9 кг" },
          { "label": "Скорострельность", "value": "700-800 выстрелов в минуту" }
      ],
      "description": "ПП-19-01 Витязь - это российский пистолет-пулемёт, разработанный на базе ПП-19 Бизон. Он отличается высокой надёжностью и удобством использования, что делает его популярным выбором среди силовых структур."
    },
  
    "Lever-Action-X-Model": {
      "images": [
          "assets/img/guns/shotgun/Lever Action X Model .410.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Неизвестно" },
          { "label": "Калибр", "value": ".410" },
          { "label": "Длина ствола", "value": "508 мм" },
          { "label": "Общая длина", "value": "1067 мм" },
          { "label": "Объем магазина", "value": "4 патрона" },
          { "label": "Масса", "value": "2,5 кг" },
          { "label": "Тип", "value": "Ружье с рычажным затвором" }
      ],
      "description": "Lever Action X Model - это ружье с рычажным затвором, обладающее классическим стилем и надёжностью. Оно часто используется для охоты на коротких дистанциях."
    },
  
    "Smith-&-Wesson-m&p": {
      "images": [
          "assets/img/guns/shotgun/Smith & Wesson m&p.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Smith & Wesson" },
          { "label": "Калибр", "value": "12 калибр" },
          { "label": "Длина ствола", "value": "457 мм" },
          { "label": "Общая длина", "value": "940 мм" },
          { "label": "Объем магазина", "value": "4, 6, 8 или 10 патронов" },
          { "label": "Масса", "value": "3,5 кг" },
          { "label": "Тип", "value": "Ружье с нарезным стволом" }
      ],
      "description": "Smith & Wesson M&P - это нарезное ружье, производимое американской компанией Smith & Wesson. Оно отличается надёжностью, точностью и удобством использования."
    },
  
    "Spas-12": {
      "images": [
          "assets/img/guns/shotgun/spas 12.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Franchi S.p.A." },
          { "label": "Калибр", "value": "12 калибр" },
          { "label": "Длина ствола", "value": "508 мм" },
          { "label": "Общая длина", "value": "1041 мм" },
          { "label": "Объем магазина", "value": "6, 8 или 10 патронов" },
          { "label": "Масса", "value": "4,1 кг" },
          { "label": "Тип", "value": "Ружье с нарезным и гладким стволом" }
      ],
      "description": "Spas-12 - это итальянское ружье, выпускаемое компанией Franchi S.p.A. Оно характеризуется возможностью переключения между режимами стрельбы и гладкого и нарезного ствола, что делает его универсальным для различных задач."
    },
  
    "МР-155-Ultima": {
      "images": [
          "assets/img/guns/shotgun/МР-155 Ultima.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Ижмех" },
          { "label": "Калибр", "value": "12 калибр" },
          { "label": "Длина ствола", "value": "710 мм" },
          { "label": "Общая длина", "value": "1280 мм" },
          { "label": "Объем магазина", "value": "3 или 5 патронов" },
          { "label": "Масса", "value": "3,5 кг" },
          { "label": "Тип", "value": "Ружье с нарезным стволом" }
      ],
      "description": "МР-155 Ultima - это российское нарезное ружье, разработанное компанией Ижмех. Оно отличается надёжностью и точностью при стрельбе, а также удобством использования и малым уровнем отдачи."
    },
  
    "Сайга-12": {
      "images": [
          "assets/img/guns/shotgun/сайга 12.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Концерн Калашников" },
          { "label": "Калибр", "value": "12 калибр" },
          { "label": "Длина ствола", "value": "520 мм" },
          { "label": "Общая длина", "value": "1060 мм" },
          { "label": "Объем магазина", "value": "5, 8 или 10 патронов" },
          { "label": "Масса", "value": "4,1 кг" },
          { "label": "Тип", "value": "Ружье с нарезным и гладким стволом" }
      ],
      "description": "Сайга-12 - это российское ружье, выпускаемое Концерном Калашников. Оно отличается высокой надёжностью и простотой конструкции, а также возможностью использования как нарезных, так и гладких стволов."
    },
  
    "Benelli-M3-Super": {
      "images": [
          "assets/img/guns/shotgun/Benelli_M3_Super.png"
      ],
      "characteristics": [
          { "label": "Производитель", "value": "Benelli" },
          { "label": "Калибр", "value": "12 калибр" },
          { "label": "Длина ствола", "value": "510 мм" },
          { "label": "Общая длина", "value": "1040 мм" },
          { "label": "Объем магазина", "value": "5, 7 или 8 патронов" },
          { "label": "Масса", "value": "3,5 кг" },
          { "label": "Тип", "value": "Ружье с нарезным и гладким стволом" }
      ],
      "description": "Benelli M3 Super - это итальянское ружье, производимое компанией Benelli. Оно отличается высокой надёжностью и универсальностью благодаря возможности переключения между режимами стрельбы."
    }
    };
  
  
    if (product && products[product]) {
      const productData = products[product];
      
  
      productData.images.forEach(image => {
        const imageElement = document.createElement('div');
        imageElement.classList.add('swiper-slide');
        imageElement.innerHTML = `<img src="${image}" alt="">`;
        productDetailsSlider.appendChild(imageElement);
      });
  
  
      productData.characteristics.forEach(char => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${char.label}</strong>: ${char.value}`;
        productInfoList.appendChild(listItem);
      });
  
  
      productDescription.textContent = product;
      productDescriptionText.textContent = productData.description;
  
  
      new Swiper('.portfolio-details-slider', {
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      });
    } else {
      productDetailsSlider.innerHTML = '<p>Информация о товаре не найдена.</p>';
      productInfoList.innerHTML = '<p>Информация о товаре не найдена.</p>';
      productDescription.textContent = 'Подробнее об оружии';
      productDescriptionText.textContent = 'Информация о товаре не найдена.';
    }
  });
  