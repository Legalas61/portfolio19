
  addShowClass(scrine1);
  chat.innerHTML = `
    Привет! Меня зовут Антон и я разработчик. <br> <b>А ты?</b>
  `
  footer.innerHTML = `
  <span>Антон привет, я ...</span>
  <div class="btns">
    <button class="btn hr">Рекрутер</button>
    <button class="btn customer">Заказчик</button>
  </div>
  `
  let bottom1 = document.querySelectorAll('.scrine2 button')[0],
    bottom2 = document.querySelectorAll('.scrine2 button')[1],
    btns = document.querySelector('.btns'),
    userTextChat = document.querySelector('footer span');
  setTimeout(function() {
    hide(scrine1);
    show(scrine2);
    show2ScrineCode();
  }, 2000);
  //scrine2
  function show2ScrineCode() {
    const hr = document.querySelector('.hr'),
      customer = document.querySelector('.customer');

    hr.onclick = function() {
      addShowClass(footer);
      addShowClass(chat);
      setTimeout(function() {
        chat.innerHTML =
          "Lorem ipsum dolor sit amet, consectetur adipisicingollit anim id est laborum. <br> <b>В каком формате хотите скачать резюме?</b>"
        userTextChat.innerHTML = "Я хочу скачать резюме в формате..."
        bottom1.innerHTML = "PDF";
        bottom2.innerHTML = "DOC";
        removeShowClass(footer);
        removeShowClass(chat);
      }, 2000);
    }
    customer.onclick = function() {
      addShowClass(chat);
      addShowClass(footer);
      setTimeout(function() {
        hide(bottom1)
        hide(bottom2)

        chat.innerHTML = "Я делал много разных проектов <br> <b>Какого типа работы вас интересуют?</b>";
        hide(btns);
        let newBtns = ["Калькуляторы", "Анимация", "Тестовые задания"];
        for (var i = 0; i < newBtns.length; i++) {
          let btns = document.querySelector('.btns'),
            newBtn = document.createElement('button');
          newBtn.innerHTML = newBtns[i]; // получаю название для кнопки
          newBtn.classList.add("btn");
          switch (i) {
            case 0:
              newBtn.classList.add("calc");
              break;
            case 1:
              newBtn.classList.add("animation");
              break;
            case 2:
              newBtn.classList.add("testCase");
              break;
          }
          btns.appendChild(newBtn);
        }
        removeShowClass(footer);
        removeShowClass(chat);
        userTextChat.innerHTML = "Покажи мне..."
        show(btns)

        acrivBtns()
      }, 2000);
    }
  }

  // {act} button
  function acrivBtns() {
    const calc = btns.querySelector('.calc'),
      animation = btns.querySelector('.animation'),
      testCase = btns.querySelector('.testCase');

    let btnsItems = document.querySelectorAll('button'),
      worksCalk = [{
        title: "Это мой первый калькулятор",
        teh: ["JavaScript", "HTML", "CSS"],
        dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
        img: "img/work1.png",
        link: '#'
      }, {
        title: "Это мой второй калькулятор",
        teh: ["JS", "HTML", "CSS"],
        dec: "Lorem ipsum dolor sit amet, consectetur  consectetur adipisicing elit, sed do eiusmod tempor",
        img: "img/work1.png",
        link: '#'
      }, {
        title: "Это 3 калькулятор",
        teh: ["JS", "HTML5", "CSS"],
        dec: "Lorem ipsum dolor sit amet, consectetur  consectetur adipisicing elit, sed do eiusmod tempor",
        img: "img/work1.png",
        link: '#'
      }],
      worksAnimation = [{
        title: "Это мой первый анимация",
        teh: ["JavaScript", "HTML", "CSS"],
        dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
        img: "img/work1.png",
        link: '#'
      }, {
        title: "Это мой вторая анимация",
        teh: ["JavaScript", "HTML", "CSS"],
        dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
        img: "img/work1.png",
        link: '#'
      }],
      worksTestCase = [{
        title: "Это мой Тестовое задание",
        teh: ["JavaScript", "HTML", "CSS"],
        dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
        img: "img/work1.png",
        link: '#'
      }]


    for (var i = 0; i < btnsItems.length; i++) {
      btnsItems[i].onclick = function() {
        mainBlock.classList.add('navBtn')
        mainBlockPrint();
        let activLink = btns.querySelector('.activLink');
        if (activLink != undefined) {
          activLink.classList.remove("activLink")
        }
        this.classList.add("activLink");
        let activCateg;
        switch (this.innerHTML) {
          case 'Калькуляторы':
            activCateg = worksCalk;
            break;
          case 'Анимация':
            activCateg = worksAnimation;
            break;
          case 'Тестовые задания':
            activCateg = worksTestCase;
            break;
        }

        // {action} next, prew
        const nextBtn = mainBlock.querySelector('.next'),
          prewBtn = mainBlock.querySelector('.prew');
        let lengAcrivCateg = (activCateg.length) - 1,
          caut = 0;
        let chat1 = document.querySelector('span.chatText');
        theme(activCateg, caut)

        nextBtn.onclick = function() {
          chat1.classList.remove("R")
          chat1.classList.add("L")
          setTimeout(function() {
            chat1.classList.remove("L")
          }, 800);
          caut++
          if (caut > lengAcrivCateg) {
            caut = 0;
          }
          theme(activCateg, caut)
        }
        prewBtn.onclick = function() {
          chat1.classList.remove("L")
          chat1.classList.add("R")
          setTimeout(function() {
            chat1.classList.remove("R")
          }, 800);
          caut--
          if (caut < 0) {
            caut = lengAcrivCateg;
          }
          theme(activCateg, caut)
        }
      }
    }
  }

  function theme(e, j) {
    return (
      chat.innerHTML =
      `<div class="work-deck">
        <div class="left-side">
          <b>${e[j].title}</b>
          <span>${e[j].teh}</span>
          <p>${e[j].dec}</p>
        </div>
        <div class="picWork">
          <img src="${e[j].img}" alt="${e[j].title}" />
          <a href="${e[j].link}">Ссылка</a>
        </div>
      </div>`
    )
  }

  function mainBlockPrint() {
    return (
      mainBlock.innerHTML =
      `
      <span>Покажи мне </span>
      <div class="navWork">
        <button class="prew btn">Прошлую работу</button>
        <button class="next btn">Cледующую работу</button>
      </div>
      <span>работу</span>
    `
    )
  }
