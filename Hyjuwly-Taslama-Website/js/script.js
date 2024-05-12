const header = document.querySelector("header");

window.addEventListener("scroll", function () {
	header.classList.toggle("sticky", window.scrollY > 60);
});
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
	menu.classList.toggle("bx-x");
	navbar.classList.toggle("open");
};

// DIL
const allangs = ["tm", "ru", "en"];
let currentLang = localStorage.getItem("language");
let flag = document.querySelector(".flag");
let displayLang = document.querySelector(".display-lang");
const langButtons = document.querySelectorAll("[data-h]");
const currentPathName = window.location.pathname;
let currentText = {};

const indexData = {
  "TM": {
    "navbar-1": "Baş sahypa",
    "navbar-2": "Biz barada",
    "navbar-3": "Hyzmatlar",
    "navbar-4": "Işlerimiz",
    "navbar-5": "Habarlaşmak üçin",
    "text-1": "Hyjuwly Taslama binagärlik arzuwlaryňyzy durmuşa geçirýär. Biz siziň islegleriňize laýyk gelýän we garaşýan zatlaryňyzdan has ajaýyp binalary döretmäge bagyşlanan tejribeli hünärmenler toparydyrys.",
    "about-btn": "Biz barada",
    "text-2": "ÄHLI MESELELERE TÄZEÇIL ÇÖZÜW",
    "text-3": "Biz bilen tanyş boluň",
    "text-4": "Hyjuwly Taslama hususy kärhanasy binagärlik arzuwlaryňyzy durmuşa geçirýär. Biz siziň islegleriňize laýyk gelýän we garaşýan zatlaryňyzdan has ajaýyp binalary döretmäge bagyşlanan tejribeli hünärmenler toparydyrys.",
    "text-5": "Işlerimiz",
    "more-btn": "Dowamy",
    "culture-text-1": "Maksada okgunlylyk",
    "culture-text-2": "Üstünligiňiz biziň maksadymyz",
    "culture-text-3": "Islendik taslamany durmuşa geçirmekde siziň ynamdar hyzmatdaşyňyz. Meýilnamalaşdyrmakdan we dizaýndan başlap, gurluşyk we başga ýerlere çenli, üznüksiz ýerine ýetirilmegini we has ýokary netijäni üpjün edýän hyzmatlaryň doly toplumyny hödürleýäris.",
    "doly-oka":"Doly oka",
    "habarlash":"Habarlaş",
    "adynyz": "Adyňyz",
    "email": "Email",
    "habarynyz": "Habaryňyz",
    "submit":"Ugrat",
    "footer-title": "Taslama kärhanasy",
    "footer-navbar-1": "Baş sahypa",
    "footer-navbar-2": "Biz barada",
    "footer-navbar-3":"Hyzmatlar",
    "footer-navbar-4": "Işlerimiz",
    "our-address": "Biziň salgymyz",
    "address": "Türkmenistan, Aşgabat şäheri , 2127 ( G.Gulyýew ) köçesi, 66-njy öýi",
    "phone-number": "Telefon belgimiz"
  },
  "RU": {
    "navbar-1": "Главная",
    "navbar-2": "О нас",
    "navbar-3": "Наши услуги",
    "navbar-4": "Наши проекты",
    "navbar-5": "Контакты",
    "text-1": "Hyjuwly Taslama – это команда профессионалов, которые с энтузиазмом и ответственностью воплощают ваши мечты в жизнь. Мы предлагаем полный спектр услуг в области архитектуры и дизайна, от разработки концепции до реализации проекта.",
    "about-btn": "О нас",
    "text-2": "Новые идеи",
    "text-3": "Знакомства с нами",
    "text-4": "Hyjuwly Taslama – это команда профессионалов, которые с энтузиазмом и ответственностью воплощают ваши мечты в жизнь. Мы предлагаем полный спектр услуг в области архитектуры и дизайна, от разработки концепции до реализации проекта.",
    "text-5": "Проекты",
    "more-btn": "Ещё",
    "culture-text-1": "Целеустремленность",
    "culture-text-2": "Ваш успех – наша цель",
    "culture-text-3": "Мы ваш надежный партнер в реализации любого проекта. Мы предлагаем полный спектр услуг, от планирования и проектирования до строительства и не только, гарантируя бесперебойное выполнение и превосходный результат.",
    "doly-oka":"Читай дальше",
    "habarlash": "Связаться",
    "adynyz": "Ваше имя",
    "email": "Email",
    "habarynyz": "Сообщение",
    "submit":"Прислать",
    "footer-title": "Архитектурное бюро",
    "footer-navbar-1": "Главная",
    "footer-navbar-2": "О нас",
    "footer-navbar-3":"Наши услуги",
    "footer-navbar-4": "Наши проекты",
    "our-address": "Наш адрес",
    "address": "Туркменистан, Ашхабад, Улица 2127 (Г. Куллиев), Здание 66",
    "phone-number": "Наши номера"
  },
  "EN": {
    "navbar-1": "Home",
    "navbar-2": "About us",
    "navbar-3": "Services",
    "navbar-4": "Projects",
    "navbar-5": "Contacts",
    "text-1": "Hyjuwly Taslama brings your architectural dreams to life. We are a team of experienced professionals dedicated to creating exceptional spaces that meet your needs and exceed your expectations.",
    "about-btn": "About us",
    "text-2": "Dream-Driven Architecture",
    "text-3": "Meet Hyjuwly Taslama",
    "text-4": "Hyjuwly Taslama brings your architectural dreams to life. We are a team of experienced professionals dedicated to creating exceptional spaces that meet your needs and exceed your expectations.",
    "text-5": "Projects",
    "more-btn": "See more",
    "culture-text-1": "Determination",
    "culture-text-2": "Your success is our goal",
    "culture-text-3": "We are your trusted partner in bringing any project to life. We offer a complete range of services, from planning and design to construction and beyond, ensuring seamless execution and a superior outcome.",
    "doly-oka":"Read more",
    "habarlash": "Get in touch",
    "adynyz": "Name",
    "email": "Email",
    "habarynyz": "Message",
    "submit":"Submit",
    "footer-title": "Architectural firm",
    "footer-navbar-1": "Home",
    "footer-navbar-2": "About us",
    "footer-navbar-3": "Services",
    "footer-navbar-4": "Projects",
    "our-address": "Our Address",
    "address": "Turkmenistan, Ashgabat, 2127 street (G.Kuliyev), 66 building",
    "phone-number": "Phone numbers"
  }
};
const aboutData = {
	"TM":{
    "navbar-1": "Baş sahypa",
    "navbar-2": "Biz barada",
    "navbar-3": "Hyzmatlar",
    "navbar-4": "Işlerimiz",
    "navbar-5": "Habarlaşmak üçin",
    "footer-title": "Taslama kärhanasy",
    "footer-navbar-1": "Baş sahypa",
    "footer-navbar-2": "Biz barada",
    "footer-navbar-3":"Hyzmatlar",
    "footer-navbar-4": "Işlerimiz",
    "our-address": "Biziň salgymyz",
    "address": "Türkmenistan, Aşgabat şäheri , 2127 ( G.Gulyýew ) köçesi, 66-njy öýi",
    "phone-number": "Telefon belgimiz",
  },
  "RU":{
    "navbar-1": "Главная",
    "navbar-2": "О нас",
    "navbar-3": "Наши услуги",
    "navbar-4": "Наши проекты",
    "navbar-5": "Контакты",
    "footer-title": "Архитектурное бюро",
    "footer-navbar-1": "Главная",
    "footer-navbar-2": "О нас",
    "footer-navbar-3":"Наши услуги",
    "footer-navbar-4": "Наши проекты",
    "our-address": "Наш адрес",
    "address": "Туркменистан, Ашхабад, Улица 2127 (Г. Куллиев), Здание 66",
    "phone-number": "Наши номера",
  },
  "EN":{
    "navbar-1": "Home",
    "navbar-2": "About us",
    "navbar-3": "Services",
    "navbar-4": "Projects",
    "navbar-5": "Contacts",
    "footer-title": "Architectural firm",
    "footer-navbar-1": "Home",
    "footer-navbar-2": "About us",
    "footer-navbar-3": "Services",
    "footer-navbar-4": "Projects",
    "our-address": "Our Address",
    "address": "Turkmenistan, Ashgabat, 2127 street (G.Kuliyev), 66 building",
    "phone-number": "Phone numbers",
  }
};
const projectsData = {
  "TM":{
    "navbar-1": "Baş sahypa",
    "navbar-2": "Biz barada",
    "navbar-3": "Hyzmatlar",
    "navbar-4": "Işlerimiz",
    "navbar-5": "Habarlaşmak üçin",
    "footer-title": "Taslama kärhanasy",
    "footer-navbar-1": "Baş sahypa",
    "footer-navbar-2": "Biz barada",
    "footer-navbar-3":"Hyzmatlar",
    "footer-navbar-4": "Işlerimiz",
    "our-address": "Biziň salgymyz",
    "address": "Türkmenistan, Aşgabat şäheri , 2127 ( G.Gulyýew ) köçesi, 66-njy öýi",
    "phone-number": "Telefon belgimiz",
  },
  "RU":{
    "navbar-1": "Главная",
    "navbar-2": "О нас",
    "navbar-3": "Наши услуги",
    "navbar-4": "Наши проекты",
    "navbar-5": "Контакты",
    "footer-title": "Архитектурное бюро",
    "footer-navbar-1": "Главная",
    "footer-navbar-2": "О нас",
    "footer-navbar-3":"Наши услуги",
    "footer-navbar-4": "Наши проекты",
    "our-address": "Наш адрес",
    "address": "Туркменистан, Ашхабад, Улица 2127 (Г. Куллиев), Здание 66",
    "phone-number": "Наши номера",
  },
  "EN":{
    "navbar-1": "Home",
    "navbar-2": "About us",
    "navbar-3": "Services",
    "navbar-4": "Projects",
    "navbar-5": "Contacts",
    "footer-title": "Architectural firm",
    "footer-navbar-1": "Home",
    "footer-navbar-2": "About us",
    "footer-navbar-3": "Services",
    "footer-navbar-4": "Projects",
    "our-address": "Our Address",
    "address": "Turkmenistan, Ashgabat, 2127 street (G.Kuliyev), 66 building",
    "phone-number": "Phone numbers",
  }
}
const contactData = {
  "TM":{
    "navbar-1": "Baş sahypa",
    "navbar-2": "Biz barada",
    "navbar-3": "Hyzmatlar",
    "navbar-4": "Işlerimiz",
    "navbar-5": "Habarlaşmak üçin",
    "habarlash":"Habarlaş",
    "adynyz": "Adyňyz",
    "email": "Email",
    "habarynyz": "Habaryňyz",
    "submit":"Ugrat",
    "footer-title": "Taslama kärhanasy",
    "footer-navbar-1": "Baş sahypa",
    "footer-navbar-2": "Biz barada",
    "footer-navbar-3":"Hyzmatlar",
    "footer-navbar-4": "Işlerimiz",
    "our-address": "Biziň salgymyz",
    "address": "Türkmenistan, Aşgabat şäheri , 2127 ( G.Gulyýew ) köçesi, 66-njy öýi",
    "phone-number": "Telefon belgimiz",
  },
  "RU":{
    "navbar-1": "Главная",
    "navbar-2": "О нас",
    "navbar-3": "Наши услуги",
    "navbar-4": "Наши проекты",
    "navbar-5": "Контакты",
    "habarlash": "Связаться",
    "adynyz": "Ваше имя",
    "email": "Email",
    "habarynyz": "Сообщение",
    "submit":"Прислать",
    "footer-title": "Архитектурное бюро",
    "footer-navbar-1": "Главная",
    "footer-navbar-2": "О нас",
    "footer-navbar-3":"Наши услуги",
    "footer-navbar-4": "Наши проекты",
    "our-address": "Наш адрес",
    "address": "Туркменистан, Ашхабад, Улица 2127 (Г. Куллиев), Здание 66",
    "phone-number": "Наши номера",
  },
  "EN":{
    "navbar-1": "Home",
    "navbar-2": "About us",
    "navbar-3": "Services",
    "navbar-4": "Projects",
    "navbar-5": "Contacts",
    "habarlash": "Get in touch",
    "adynyz": "Name",
    "email": "Email",
    "habarynyz": "Message",
    "submit":"Submit",
    "footer-title": "Architectural firm",
    "footer-navbar-1": "Home",
    "footer-navbar-2": "About us",
    "footer-navbar-3": "Services",
    "footer-navbar-4": "Projects",
    "our-address": "Our Address",
    "address": "Turkmenistan, Ashgabat, 2127 street (G.Kuliyev), 66 building",
    "phone-number": "Phone numbers",
  },
}

function checkPagePathName() {
	switch (currentPathName) {
		case "/index.html":
			currentText = indexData;
			break;
		case "/about.html":
			currentText = aboutData;
			break;
		case "/contact.html":
			currentText = contactData;
			break;
		case "/projects.html":
			currentText = projectsData;
			break;
	}
}
checkPagePathName();

function changeLang() {
	for (const key in currentText[currentLang]) {
		const elem = document.querySelector(`[data-lang=${key}]`);
		if (elem) {
			elem.textContent = currentText[currentLang][key];
		}
	}
  const placeholders = document.querySelectorAll('[placeholder-lang]');
  placeholders.forEach(elem => {
      const key = elem.getAttribute('placeholder-lang');
      if (currentText[currentLang][key]) {
          elem.placeholder = currentText[currentLang][key];
      }
  });
}

function changeFlag() {
	switch (currentLang) {
		case "TM":
      flag.src = `/img/tm.png`;
			displayLang.textContent = "TM";
			break;
		case "RU":
      flag.src = `/img/ru.png`;
			displayLang.textContent = "RU";
			break;
		case "EN":
      flag.src = `/img/uk.png`;
			displayLang.textContent = "EN";
			break;
	}
}
changeFlag();
changeLang();

langButtons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		currentLang = event.target.dataset.h;
		localStorage.setItem("language", event.target.dataset.h);
		changeLang();
		changeFlag();
	});
});


// SURAT FILTER
const buttonSection = document.querySelectorAll(".buttons-section button");
const cardSection = document.querySelectorAll(".container .card");

const filtercards = (e) => {
	document.querySelector(".active").classList.remove("active");
	e.target.classList.add("active");

	cardSection.forEach((card) => {
		card.classList.add("hide");

		if (
			card.dataset.name === e.target.dataset.name ||
			e.target.dataset.name === "all"
		) {
			card.classList.remove("hide");
		}
	});
};

buttonSection.forEach((button) =>
	button.addEventListener("click", filtercards)
);