/*******************открытие бургера*****************/

document.getElementById('burger').addEventListener('click', function () {
  document.querySelector('header').classList.toggle('burgeropen');

})

/**************************остановка скрола при бургере****************************/

document.getElementById('burger').addEventListener('click', function () {
  document.body.classList.toggle('stop-skroll');
});

/***закрытие бургера и остановки скрола привыборе пункта меню**********************************/

let menulinks = document.querySelectorAll('.header__nav').forEach(function (element) {
  element.addEventListener('click', function () {
    document.querySelector('header').classList.remove('burgeropen');
    document.body.classList.remove('stop-skroll');

  })
});

/**************открытие/закрытие  мобального окна слайдера внешнее питание**********/
var container1 = document.querySelector('.portfolio-sliderpopupcontainer');
var call10 = document.querySelectorAll('.galary__but1');
var call11 = document.querySelectorAll('.galary__but2');
var call12 = document.querySelectorAll('.galary__but3');
var call13 = document.querySelectorAll('.galary__but4');

let call6 = document.querySelector('.portfoliopopup1__closebtn');
let vneshslider = document.querySelector('.portfoliopopup1__outsidesystem');
let inslider = document.querySelector('.portfoliopopup1__insidesystem');
let station = document.querySelector('.portfoliopopup1__stationslide');
let roofslide = document.querySelector('.portfoliopopup1__roofslide');

for (let j = 0; j < call10.length; j++) {
  call10[j].addEventListener('click', function () {
    container1.classList.add('open');
    vneshslider.classList.add('block');
  });
};

for (let j = 0; j < call11.length; j++) {
  call11[j].addEventListener('click', function () {
    container1.classList.add('open');
    inslider.classList.add('block');
  });
};

for (let j = 0; j < call12.length; j++) {
  call12[j].addEventListener('click', function () {
    container1.classList.add('open');
    station.classList.add('block');
  });
};

for (let j = 0; j < call13.length; j++) {
  call13[j].addEventListener('click', function () {
    container1.classList.add('open');
    roofslide.classList.add('block');
  });
};


call6.addEventListener('click', function () {
  container1.classList.remove('open');
  vneshslider.classList.remove('block');
  inslider.classList.remove('block');
  station.classList.remove('block');
  roofslide.classList.remove('block');
});


let call14 = document.querySelectorAll('.popup-conf');
let container2 = document.querySelector('.politico__popupcontainer')
let call17 = document.querySelector('.formpopup2__closebtn');
for (let j = 0; j < call14.length; j++) {
  call14[j].addEventListener('click', function () {
    container2.classList.add('open');

  });
};

call17.addEventListener('click', function () {
  container2.classList.remove('open');
});

/**************открытие/закрытие  мобального окна формы заявки**********/
var container = document.querySelector('.formpopupcontainer');
var call = document.querySelectorAll('.contactlist__item-btn');
var call1 = document.querySelectorAll('.consult__but');
var closecontainer = document.querySelector('.formpopup__closebtn');
var call3 = document.querySelector('.home__btn ');
var call4 = document.querySelector('.contact-link');


for (let j = 0; j < call.length; j++) {
  call[j].addEventListener('click', function () {
    container.classList.add('open');
  });
};

for (let j = 0; j < call1.length; j++) {
  call1[j].addEventListener('click', function () {
    container.classList.add('open');
  });
};

call3.addEventListener('click', function () {
  container.classList.add('open');
});

call4.addEventListener('click', function () {
  container.classList.add('open');
});


closecontainer.addEventListener('click', function () {
  container.classList.remove('open');
});



/** выбор всех чекбоксов по одному клику, чтобы показывались все описания во всех слайдах **/

document.getElementById('firstslide').onclick = function () {
  var checkboxes = document.getElementsByName('slider');
  for (var checkbox of checkboxes) {
    checkbox.checked = this.checked;
  }
}

/******* блок управления всптывающим блоком со ссылкой*/
/*при клике на стрелку поворачивается стрела открывается блок с сылко*/
/**если при этом есть открытые блоки они закрываются */
/**при повторном клике на стрелку открытого блока он закрывется  */

const services_items = document.querySelectorAll('.services__item')
let N = services_items.length;
let flagopen = new Array(N).fill(0);
const moveblock = document.querySelectorAll('.services__moveblock');
const arrows_but = document.querySelectorAll('.services__item-button');

function obnulenie(flag) {
  for (let k = 0; k < N; k++)
    if (k != flag) moveblock[k].classList.remove('moveblockopen');
  for (let k = 0; k < N; k++)
    if (k != flag) arrows_but[k].classList.remove('arrowrotate')
  for (let k = 0; k < N; k++) {
    if (k != flag) flagopen[k] = 0;
  }

}


for (let j = 0; j < N; j++) {
  services_items[j].addEventListener('click', function () {
    if (flagopen[j] == 0) {
      arrows_but[j].classList.add('arrowrotate');
      moveblock[j].classList.add('moveblockopen');
      obnulenie(j);
      flagopen[j] = 1;
    }
    else obnulenie(-1);
  })
}

/*************** закрытие открытого блока при клике вне секции */

document.addEventListener('click', function (event) {
  flagivent = 0;
  services_items.forEach(el => {
    if (!el.contains(event.target))
      flagivent++;
  })
  if (flagivent == N) obnulenie(-1);

});




/**********************слайдер секции home */

const swiper = new Swiper('.mySwiper1', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  autoplay: {
    delay: 5000,
  },

  a11y: {
    paginationBulletMessage: 'Слайд номер{{index}}'
  }


});

/**слайдер секции потртфолио до мобильной версии с цифрами */

var myswiper = new Swiper('.mySwiper2', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination2',
    type: 'fraction',

    clickable: true
  },
  autoplay: {
    delay: 15000,
  },
  a11y: {
    paginationBulletMessage: 'Слайд номер{{index}}'
  },
});

/**слайдер портфолию мобильная версия переход на буллеты вместо цифр */
var myswiper = new Swiper('.mySwiper3', {
  loop: true,
  pagination: {
    el: '.swiper-pagination3',
    type: 'bullets',

    clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Слайд номер{{index}}'
  },
});


/****слайдер секции виды услуг мобильная версия */
var swiper4 = new Swiper('.mySwiper4', {
  spaceBetween: 15,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination4',
    clickable: true,
    type: 'bullets',
  },
  a11y: {
    paginationBulletMessage: 'Слайд номер{{index}}'
  },

});


/********************************************** */
const swiper5 = new Swiper('.mySwiper5', {
  loop: true,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination5',
    clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Слайд номер{{index}}'
  },
});

/********************************************** */
const swiper6 = new Swiper('.mySwiper6', {
  loop: true,
  pagination: {
    el: '.swiper-pagination6',
    clickable: true
  },
  autoplay: {
    delay: 15000,
  },
  a11y: {
    paginationBulletMessage: 'Слайд номер{{index}}'
  },
});

/**************************яндекс карта********** */
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [55.800893, 49.272369],
    zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'г.Казань ул.Дорожная (пос. Киндери), д.1г',
    }, {

      iconImageHref: 'img/Subtract.svg',
      iconLayout: 'default#image',
      iconImageSize: [28, 40],
      iconImageOffset: [-5, -38]
    });
  myMap.geoObjects
    .add(myPlacemark);
});

/**************валидация формы popup*////////////////

let selector = document.querySelector("#telpopup")
let im = new Inputmask("+7(999) 999-99-99")
im.mask(selector)

let validation = new JustValidate("#formpopup")

validation.addField("#usernamepopup", [
  {
    rule: "required",
    errorMessage: "Введите имя!"
  },
  {
    rule: "minLength",
    value: 2,
    errorMessage: "Минимум 2 символа!"
  }
]).addField("#telpopup", [
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length > 0)
    },
    errorMessage: 'Введите телефон'
  },
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length === 10)
    },
    errorMessage: 'Введите телефон полностью'
  }
]).addField("#popuptextmessage", [
  {
    rule: "required",
    errorMessage: "Введите сообщение!"
  },
  {
    rule: "minLength",
    value: 10,
    errorMessage: "Минимум 10 символа!"
  }
]).addField("#useragreement", [
  {
    rule: "required",
    errorMessage: "Поставте галочку"
  }

]).onSuccess(async function () {
  let data = {
    name: document.getElementById("usernamepopup").value,
    tel: document.getElementById("telpopup").value,
    msg: document.getElementById("popuptextmessage").value
  }


  let response = await fetch("mail.php", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })

  let result = await response.text()

  alert(result)
})

/*****************валидация формы заявки с сайта**********/

let selector1 = document.querySelector("#tel")
let im1 = new Inputmask("+7(999) 999-99-99")
im1.mask(selector1)

let validation1 = new JustValidate("#form")

validation1.addField("#username", [
  {
    rule: "required",
    errorMessage: "Введите имя!"
  },
  {
    rule: "minLength",
    value: 2,
    errorMessage: "Минимум 2 символа!"
  }
]).addField("#tel", [
  {
    validator: (value) => {
      const phone1 = selector1.inputmask.unmaskedvalue()
      return Boolean(Number(phone1) && phone1.length > 0)
    },
    errorMessage: 'Введите телефон'
  },
  {
    validator: (value) => {
      const phone1 = selector1.inputmask.unmaskedvalue()
      return Boolean(Number(phone1) && phone1.length === 10)
    },
    errorMessage: 'Введите телефон полностью'
  }
]).addField("#textmessage", [
  {
    rule: "required",
    errorMessage: "Введите сообщение!"
  },
  {
    rule: "minLength",
    value: 10,
    errorMessage: "Минимум 10 символа!"
  }
]).addField("#agreement", [
  {
    rule: "required",
    errorMessage: "Поставте галочку"
  }
]).onSuccess(async function () {
  let data1 = {
    name: document.getElementById("username").value,
    tel: document.getElementById("tel").value,
    msg: document.getElementById("textmessage").value
  }


  let response1 = await fetch("mail.php", {
    method: "POST",
    body: JSON.stringify(data1),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })

  let result1 = await response1.text()

  alert(result1)
})


const form = document.getElementById("formpopup");
const form1 = document.getElementById("form");
closecontainer.addEventListener('click', function () {
  let elements = document.querySelectorAll('.just-validate-error-label');
  form.reset();

  for (let j = 0; j < elements.length; j++) {
    elements[j].classList.add('close');
  }
});

const clearforms = document.querySelectorAll('.clearbtn');

for (let j = 0; j < clearforms.length; j++) {
  clearforms[j].addEventListener('click', function () {
    let elements1 = document.querySelectorAll('.just-validate-error-label');
    form1.reset();
    form.reset();
    for (let i = 0; i < elements1.length; i++) {
      elements1[i].classList.add('close');
      
    }
  });
};



