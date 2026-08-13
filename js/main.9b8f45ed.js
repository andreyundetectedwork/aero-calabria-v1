/**
 * Aero Calabria - Multi-language Single Page Application
 * Supported Languages: SR (Serbian), EN (English), RU (Russian)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current state
  let currentLang = 'sr';

  // 2. UI Translations Object
  const uiTranslations = {
    sr: {
      "nav.about": "O nama",
      "nav.menu": "Jelovnik",
      "nav.story": "Mocarela priča",
      "nav.reviews": "Utisci",
      "nav.contact": "Kontakt",
      "hero.subtitle": "Ćemovsko polje • Podgorica",
      "hero.title1": "Drevni ambijent.",
      "hero.title2": "Neprikosnoveni ukusi.",
      "hero.desc": "Mesto gde se susreću tradicija pečenja ispod sača i na pici sa prirodnim kamenom, domaći roštilj i gostoprimstvo koje se pamti.",
      "hero.btnMenu": "Pogledaj jelovnik",
      "hero.reviewsCount": "recenzija posetilaca",
      "about.title": "Oaza Van Gradske Gužve",
      "about.subtitle": "Na korak od Podgorica, u miru Ćemovskog polja, napravili smo skrovište koje odiše duhom starinskih konoba.",
      "about.card1.title": "Pice na kamenu",
      "about.card1.desc": "Hrskavo testo, sveži sastojci i autentične recepture.",
      "about.card2.title": "Domaći Roštilj",
      "about.card2.desc": "Krompir, kajmak, dimljene kobasice i biftek po vašoj meri.",
      "about.card3.title": "Letnja bašta",
      "about.card3.desc": "Uživajte u zelenilu, čistom vazduhu i potpunom miru.",
      "menu.tag": "Aero Calabria Meni",
      "menu.title": "Jelovnik & Specijaliteti",
      "menu.subtitle": "Cene su u €. Knjiga utisaka se nalazi na šanku.",
      "menu.tabs.all": "Sve 🍽️",
      "menu.tabs.pizza": "Pice 🍕",
      "menu.tabs.grill": "Roštilj 🥩",
      "menu.tabs.pasta": "Pašte & Pečeno 🍝",
      "menu.tabs.appetizers": "Predjela & Salate 🥗",
      "menu.tabs.deserts": "Poslastice 🍰",
      "menu.tabs.drinks": "Pića & Pivo 🍻",
      "story.tag": "Priča iz naše kuhinje",
      "story.title": "Sve o Mocareli 🧀",
      "reviews.tag": "Gostoprimstvo na prvom mestu",
      "reviews.title": "Reči Naših Gostiju",
      "reviews.subtitle": "Pročitajte utiske posetilaca i putnika koji su nas posetili.",
      "contact.tag": "Dobrodošli",
      "contact.title": "Lokacija i Radno Vreme",
      "contact.addressTitle": "Adresa",
      "contact.phoneTitle": "Telefon za rezervacije",
      "contact.hoursTitle": "Radno Vreme",
      "contact.hoursVal": "Ponedeljak – Nedelja: 08:00 – 23:00",
      "contact.btnCall": "Pozovi Odmah"
    },
    en: {
      "nav.about": "About Us",
      "nav.menu": "Menu",
      "nav.story": "Mozzarella Story",
      "nav.reviews": "Reviews",
      "nav.contact": "Contact",
      "hero.subtitle": "Ćemovsko polje • Podgorica",
      "hero.title1": "Ancient Atmosphere.",
      "hero.title2": "Unforgettable Flavors.",
      "hero.desc": "Where tradition meets oven-baked pizza on natural stone, hearty authentic Montenegro barbecue, and memorable hospitality.",
      "hero.btnMenu": "Explore Menu",
      "hero.reviewsCount": "guest reviews",
      "about.title": "An Oasis Away from City Noise",
      "about.subtitle": "Just minutes outside Podgorica in Ćemovsko polje, step into a cozy tavern surrounded by nature.",
      "about.card1.title": "Stone Oven Pizzas",
      "about.card1.desc": "Crispy crust, rich mozzarella, and classic toppings.",
      "about.card2.title": "Traditional Grill",
      "about.card2.desc": "Juicy steaks, smoked sausages, kajmak, and crispy potatoes.",
      "about.card3.title": "Open Air Garden",
      "about.card3.desc": "Enjoy cold drinks and fresh food surrounded by greenery.",
      "menu.tag": "Aero Calabria Menu",
      "menu.title": "Food & Beverages",
      "menu.subtitle": "Prices are in €. The complaint book is located at the bar.",
      "menu.tabs.all": "All 🍽️",
      "menu.tabs.pizza": "Pizzas 🍕",
      "menu.tabs.grill": "Barbecue 🥩",
      "menu.tabs.pasta": "Baked & Pasta 🍝",
      "menu.tabs.appetizers": "Appetizers & Salads 🥗",
      "menu.tabs.deserts": "Desserts 🍰",
      "menu.tabs.drinks": "Drinks & Beer 🍻",
      "story.tag": "Kitchen Story",
      "story.title": "About Mozzarella 🧀",
      "reviews.tag": "Warm Hospitality",
      "reviews.title": "Guest Reviews",
      "reviews.subtitle": "Hear what travelers and locals say about their experience with us.",
      "contact.tag": "Welcome",
      "contact.title": "Location & Working Hours",
      "contact.addressTitle": "Address",
      "contact.phoneTitle": "Phone & Reservations",
      "contact.hoursTitle": "Opening Hours",
      "contact.hoursVal": "Monday – Sunday: 08:00 AM – 11:00 PM",
      "contact.btnCall": "Call Now"
    },
    ru: {
      "nav.about": "О нас",
      "nav.menu": "Меню",
      "nav.story": "История Моцареллы",
      "nav.reviews": "Отзывы",
      "nav.contact": "Контакты",
      "hero.subtitle": "Чемовско полье • Подгорица",
      "hero.title1": "Атмосфера старины.",
      "hero.title2": "Незабываемый вкус.",
      "hero.desc": "Уютное место, где традиции пиццы на каменном поду сочетаются с сочным черногорским грилем и искренним гостеприимством.",
      "hero.btnMenu": "Смотреть меню",
      "hero.reviewsCount": "отзывов гостей",
      "about.title": "Оазис Вдали От Городской Суеты",
      "about.subtitle": "В нескольких минутах от Подгорицы, среди природы Чемовского поля, вас ждет атмосфера настоящей таверны.",
      "about.card1.title": "Пицца на камне",
      "about.card1.desc": "Хрустящее тесто, тягучая моцарелла и свежие ингредиенты.",
      "about.card2.title": "Черногорский Гриль",
      "about.card2.desc": "Сочные стейки, копченые колбаски, каймак и румяный картофель.",
      "about.card3.title": "Летний Сад",
      "about.card3.desc": "Наслаждайтесь едой на свежем воздухе в окружении зелени.",
      "menu.tag": "Меню Aero Calabria",
      "menu.title": "Блюда и Напитки",
      "menu.subtitle": "Цены указаны в €. Книга жалоб и предложений находится на барной стойке.",
      "menu.tabs.all": "Все 🍽️",
      "menu.tabs.pizza": "Пицца 🍕",
      "menu.tabs.grill": "Гриль 🥩",
      "menu.tabs.pasta": "Паста и Запеканки 🍝",
      "menu.tabs.appetizers": "Закуски и Салаты 🥗",
      "menu.tabs.deserts": "Десерты 🍰",
      "menu.tabs.drinks": "Напитки и Пиво 🍻",
      "story.tag": "История нашей кухни",
      "story.title": "Все о Моцарелле 🧀",
      "reviews.tag": "Гостеприимство",
      "reviews.title": "Отзывы Наших Гостей",
      "reviews.subtitle": "Что говорят путешественники и постоянные гости о нашем заведении.",
      "contact.tag": "Добро пожаловать",
      "contact.title": "Локация и Часы Работы",
      "contact.addressTitle": "Адрес",
      "contact.phoneTitle": "Телефон и бронь",
      "contact.hoursTitle": "Режим работы",
      "contact.hoursVal": "Понедельник – Воскресенье: 08:00 – 23:00",
      "contact.btnCall": "Позвонить"
    }
  };

  // 3. Mozzarella Narrative Translated
  const mozzarellaStory = {
    sr: `<p><strong>Mocarela</strong>, kako je Italijani pišu, a mi izgovaramo, jeste veoma ukusan, hranljiv i bogat sir. Obiluje proteinima koji godode mišićima, nezasićenim masnim kiselinama koje čuvaju srce i krvotok, te vitaminom D i kalcijumom za jačanje kostiju.</p>
         <p>Legende kažu da mocarela postoji odvajkada. Još u starom Rimu, u I veku posle Hrista, pripremali su sličan sir od ovčijeg mleka. Zahvaljujući mocareli u istoriju su ušli i monasi samostana San Lorenzo di Capua iz III veka. Svakom gladnom namerniku koji bi zakucao na njihova vrata odsecali bi i davali po komad sira i hleba. Sir se tada kratko zvao „mozza“, od italijanske reči <em>„mozzare“</em> – odseći. Naziv je kasnije produžen.</p>,
    en: `<p><strong>Mozzarella</strong> is a delicious, nutritious cheese rich in muscle-building proteins, heart-healthy unsaturated fatty acids, as well as vitamin D and calcium for strong bones.</p>
         <p>Legends say mozzarella has been around since ancient times. Back in ancient Rome, during the 1st century AD, a similar cheese was crafted from sheep's milk. The monks of San Lorenzo di Capua monastery in the 3rd century also entered history thanks to mozzarella — every hungry traveler knocking on their door was offered a freshly sliced piece of cheese and bread. The cheese was briefly called "mozza", from the Italian word <em>"mozzare"</em> meaning "to cut off".</p>`,
    ru: `<p><strong>Моцарелла</strong> — невероятно вкусный и питательный сыр, богатый белком, полезными ненасыщенными жирными кислотами, витамином D и кальцием для укрепления костей.</p>
         <p>Легенды гласят, что подобный сыр начали готовить еще в Древнем Риме в I веке нашей эры из овечьего молока. А в III веке монахи монастыря Сан-Лоренцо-ди-Капуа угощали каждого голодного путника куском свеженарезанного сыра с хлебом. Название произошло от итальянского слова <em>«mozzare»</em> — отрезать.</p>`
  };

  // 4. Reviews List
  const reviewsData = [
    {
      author: "Kateryna Vasylchenko",
      rating: 5,
      text: {
        sr: "Došli smo spontano iz Budve samo da probali picu na lepom mestu i našli smo tačno ono što smo tražili! Preukusno, neverovatan pogled! Hvala na gostoprimstvu!",
        en: "It was so spontaneous, we came from Budva just to try pizza in a beautiful place, and found what we were looking for! So tasty, incredibly nice view! Thank you for hospitality!",
        ru: "Приехали спонтанно из Будвы просто попробовать пиццу в красивом месте и нашли именно то, что искали! Очень вкусно, потрясающий вид! Спасибо за гостеприимство!"
      }
    },
    {
      author: "Bojana Malinovska",
      rating: 4,
      text: {
        sr: "Nije bilo gužve, što je učinilo celo iskustvo veoma prijatnim. Iako je malo van grada, osećate se kao da ste kilometrima daleko od Podgorice — što je za mene ogroman plus. Mirna atmosfera je savršen beg od gradske vreve.",
        en: "There wasn’t too much crowd, which made the whole experience very pleasant. Although it’s a bit outside the city, it feels like you’re miles away from Podgorica — and for me, that’s definitely a plus. The peaceful atmosphere really makes it a perfect escape.",
        ru: "Людей было немного, что сделало вечер очень приятным. Хотя ресторан находится за городом, кажется, что ты вдали от Подгорицы — для меня это огромный плюс. Спокойная атмосфера просто супер."
      }
    },
    {
      author: "Kyle Savage",
      rating: 5,
      text: {
        sr: "Ovo mesto je fantastično! Hrana je bila ukusna (jeli smo pice i dimljenu kobasicu), cene su vrlo pristupačne. Patrik je bio izuzetno ljubazan, odlično govori engleski i dao nam je sjajne preporuke za putovanje kampom.",
        en: "This place is amazing! Food was delicious (had pizza's and smoked sausage) very reasonable prices, Patrick was extremely nice, very chatty with amazing English and gave perfect service throughout.",
        ru: "Потрясающее место! Очень вкусная пицца и копченые колбаски, разумные цены. Патрик был невероятно мил, отлично говорит по-английски и обеспечил великолепный сервис!"
      }
    },
    {
      author: "Isabel",
      rating: 5,
      text: {
        sr: "Stigli smo u Crnu Goru kamping kombijem i pronašli ovo mesto. Imali smo najtopliju dobrodošlicu i jednu od najboljih hrana u poslednje vreme! Pice su sveže i neverovatne, a dimljena kobasica i krompir pravi specijalitet.",
        en: "Came into Montenegro in our campervan and found this place. We have had the warmest welcome and some of the best food we have had in ages! Pizzas are fresh and just incredible.",
        ru: "Заехали в Черногорию на кемпере и нашли это место. Самый теплый прием и лучшая еда за долгое время! Пицца свежайшая, а копченая колбаса с картофелем — просто восторг."
      }
    },
    {
      author: "Halcyon Sailor",
      rating: 5,
      text: {
        sr: "Parkirao sam ovde 2 noći tokom putovanja. Veoma topla dobrodošlica, a pica koju sam jeo bila je ubedljivo najbolja. Cene su fer, osoblje ljubazno, a kafa odlična!",
        en: "I parked here for 2 nights on my travels. Very warm welcome and the pizza I had was the best by far, prices were very fair as well. Friendly staff and great coffee!",
        ru: "Останавливался здесь на 2 ночи во время путешествия. Очень теплый прием, пицца лучшая из всех, что я пробовал, приятные цены и отличный кофе."
      }
    }
  ];

  // 5. Complete Raw Menu Database fully translated across categories
  const menuData = [
    // --- PIZZAS ---
    {
      category: "pizza",
      title: { sr: "Margherita", en: "Margherita", ru: "Маргарита" },
      desc: { sr: "paradajz, sir, origano", en: "tomato, cheese, oregano", ru: "томаты, сыр, орегано" },
      price: "6.90 / 5.00",
      sizeNote: "750g / 450g"
    },
    {
      category: "pizza",
      title: { sr: "Napoletana", en: "Napoletana", ru: "Наполетана" },
      desc: { sr: "paradajz, sir, origano, šunka", en: "tomato, cheese, oregano, ham", ru: "томаты, сыр, орегано, ветчина" },
      price: "7.50 / 5.50",
      sizeNote: "750g / 450g"
    },
    {
      category: "pizza",
      title: { sr: "Capricciosa", en: "Capricciosa", ru: "Капричоза" },
      desc: { sr: "paradajz, sir, origano, šunka, pečurke", en: "tomato, cheese, oregano, ham, mushrooms", ru: "томаты, сыр, орегано, ветчина, шампиньоны" },
      price: "7.80 / 5.80",
      sizeNote: "750g / 450g"
    },
    {
      category: "pizza",
      title: { sr: "Quattro Formaggi", en: "Quattro Formaggi", ru: "Четыре сыра" },
      desc: { sr: "paradajz, 4 vrste sira", en: "tomato, four kinds of cheese", ru: "томаты, 4 вида сыра" },
      price: "7.90 / 5.90",
      sizeNote: "750g / 450g"
    },
    {
      category: "pizza",
      title: { sr: "Quattro Stagioni", en: "Quattro Stagioni", ru: "Четыре сезона" },
      desc: { sr: "paradajz, sir, origano, šunka, tuna, pečurke, pavlaka", en: "tomato, cheese, oregano, ham, tuna, mushrooms, sour cream", ru: "томаты, сыр, орегано, ветчина, тунец, грибы, сметана" },
      price: "7.90 / 5.90",
      sizeNote: "750g / 450g"
    },
    {
      category: "pizza",
      title: { sr: "Calzone", en: "Calzone", ru: "Кальцоне" },
      desc: { sr: "preklopljena: paradajz, sir, šunka, pečurke", en: "folded: tomato, cheese, ham, mushrooms", ru: "закрытая: томаты, сыр, ветчина, грибы" },
      price: "7.70 / 5.70",
      sizeNote: "750g / 450g"
    },
    {
      category: "pizza",
      title: { sr: "Calabrese", en: "Calabrese", ru: "Калабрезe" },
      desc: { sr: "paradajz, 2 vrste sira, origano, njeguški pršut, pečurke, masline", en: "tomato, 2 types of cheese, oregano, montenegrin prosciutto, mushrooms, olives", ru: "томаты, 2 вида сыра, орегано, негушский пршут, грибы, оливки" },
      price: "8.00 / 6.00",
      sizeNote: "750g / 450g"
    },
    {
      category: "pizza",
      title: { sr: "Diavola", en: "Diavola", ru: "Дьявола" },
      desc: { sr: "paradajz, sir, kulen, ljuti sos, feferoni, pečurke", en: "tomato, cheese, pepperoni, chili sauce, peppers, mushrooms", ru: "томаты, сыр, пепперони, острый соус, острый перец, грибы" },
      price: "7.90 / 5.90",
      sizeNote: "750g / 450g"
    },
    {
      category: "pizza",
      title: { sr: "Frutti di Mare", en: "Frutti di Mare", ru: "Фрутти ди Маре" },
      desc: { sr: "paradajz, sir, origano, plodovi mora, pečurke, masline", en: "tomato, cheese, oregano, seafood, mushrooms, olives", ru: "томаты, сыр, орегано, морепродукты, грибы, оливки" },
      price: "8.00 / 6.00",
      sizeNote: "750g / 450g"
    },
    {
      category: "pizza",
      title: { sr: "Mozzarella", en: "Mozzarella", ru: "Моцарелла" },
      desc: { sr: "paradajz, sveža mocarela, rukola", en: "tomato, mozzarella, fresh rocket salad", ru: "томаты, свежая моцарелла, свежая рукола" },
      price: "7.90 / 5.90",
      sizeNote: "750g / 450g"
    },
    {
      category: "pizza",
      title: { sr: "Aero Pizza Folded", en: "Aero Pizza Preklopljena", ru: "Aero Закрытая Пицца" },
      desc: { sr: "paradajz, čeri paradajz, sir, pileći file", en: "tomato, cherry tomatoes, cheese, chicken fillet", ru: "томаты, черри, сыр, куриное филе" },
      price: "8.00 / 6.00",
      sizeNote: "750g / 450g"
    },

    // --- GRILL / ROŠTILJ ---
    {
      category: "grill",
      title: { sr: "Velji Pjat (Mješani Roštilj)", en: "Velji Pjat (Mixed Grill Platter)", ru: "Velji Pjat (Большое ассорти гриль)" },
      desc: { sr: "razne vrste roštiljskog mesa, krompir, prilozi (1000 g!)", en: "assorted grilled meats, potatoes, side dishes (1000 g!)", ru: "ассорти из мяса на гриле с гарниром (1000 г!)" },
      price: "15.90",
      weight: "1000 g"
    },
    {
      category: "grill",
      title: { sr: "Biftek", en: "Beefsteak", ru: "Стейк из говядины (Бифштекс)" },
      desc: { sr: "sočni biftek sa povrćem i krompirom", en: "juicy beefsteak with grilled vegetables and potatoes", ru: "сочный бифштекс с овощами и картофелем" },
      price: "19.00",
      weight: "350 g"
    },
    {
      category: "grill",
      title: { sr: "Dimljena Kobasica", en: "Smoked Sausage", ru: "Копченая колбаса" },
      desc: { sr: "dimljena domaća kobasica sa hrskavim krompirom", en: "smoked homemade sausage with baked potatoes", ru: "домашняя копченая колбаса с румяным картофелем" },
      price: "7.30",
      weight: "350 g"
    },
    {
      category: "grill",
      title: { sr: "Svinjska Rebra", en: "Pork Ribs", ru: "Свиные ребрышки" },
      desc: { sr: "sočna svinjska rebra, pečeni krompir, domaći kajmak", en: "tender pork ribs, roasted potatoes, local kajmak cream", ru: "нежные свиные ребрышки, печеный картофель, каймак" },
      price: "9.30",
      weight: "400 g"
    },
    {
      category: "grill",
      title: { sr: "Ćevapi", en: "Kebabs (Ćevapi)", ru: "Чевапи (Говядина)" },
      desc: { sr: "tradicionalni juneći ćevapi na žaru", en: "traditional grilled minced beef kebabs", ru: "традиционные колбаски из говядины на гриле" },
      price: "7.00",
      weight: "300 g"
    },
    {
      category: "grill",
      title: { sr: "Gurmanska Pljeskavica", en: "Gourmet Pljeskavica", ru: "Гурманская Плескавица" },
      desc: { sr: "slanina, sir i tucana ljuta papričica unutar mesa", en: "stuffed with bacon, cheese, and chili inside", ru: "котлета из фарша со сланиной, сыром и перцем чили" },
      price: "7.00",
      weight: "350 g"
    },
    {
      category: "grill",
      title: { sr: "Aero Piletina", en: "Aero Chicken", ru: "Курица Aero" },
      desc: { sr: "specijalitet kuće sa piletinom i povrćem", en: "house specialty chicken fillet with herbs and vegetables", ru: "фирменное куриное филе с овощами и специями" },
      price: "7.50",
      weight: "350 g"
    },

    // --- BAKED & PASTA ---
    {
      category: "pasta",
      title: { sr: "Pasta 'Pasticciata'", en: "Pasta 'Pasticciata'", ru: "Паста 'Pasticciata'" },
      desc: { sr: "pene, mleveno juneće meso, zapečeni sir", en: "penne pasta, minced beef, baked cheese", ru: "пенне, рубленый говяжий фарш, запеченный сыр" },
      price: "6.20",
      weight: "400 g"
    },
    {
      category: "pasta",
      title: { sr: "Chicken Pasta", en: "Chicken Pasta", ru: "Куриная паста" },
      desc: { sr: "pene, piletina, pečurke, sir", en: "penne, chicken, mushrooms, cheese", ru: "пенне, куриное филе, шампиньоны, сыр" },
      price: "6.50",
      weight: "400 g"
    },
    {
      category: "pasta",
      title: { sr: "Pasta Carbonara", en: "Pasta Carbonara", ru: "Паста Карбонара" },
      desc: { sr: "pene, sos, slanina, sir", en: "penne, creamy sauce, bacon, parmesan cheese", ru: "пенне, соус, бекон, сыр" },
      price: "6.40",
      weight: "400 g"
    },
    {
      category: "pasta",
      title: { sr: "Zapečene Palačinke sa Piletinom", en: "Baked Pancakes with Chicken", ru: "Запеченные блинчики с курицей" },
      desc: { sr: "piletina, pečurke, parmezan, sos", en: "chicken, mushrooms, parmesan, savory sauce", ru: "курица, грибы, пармезан, соус" },
      price: "4.80",
      weight: "300 g"
    },

    // --- APPETIZERS & SALADS ---
    {
      category: "appetizers",
      title: { sr: "Crnogorski Pjat / Hors d'oeuvre", en: "Montenegrin Hors D'oeuvre", ru: "Черногорская закуска" },
      desc: { sr: "masline, domaći sir, njeguški pršut", en: "olives, local cheeses, Montenegrin Njegusi prosciutto", ru: "оливки, негушский сыр, негушский пршут" },
      price: "8.50",
      weight: "250 g"
    },
    {
      category: "appetizers",
      title: { sr: "Njeguški Pršut", en: "Njegushi Prosciutto", ru: "Негушский пршут" },
      desc: { sr: "tanko sečeni tradicionalni dimljeni pršut", en: "thinly sliced smoked prosciutto", ru: "традиционный черногорский вяленый пршут" },
      price: "4.50",
      weight: "150 g"
    },
    {
      category: "appetizers",
      title: { sr: "Cezar Salata", en: "Caesar Salad", ru: "Салат Цезарь" },
      desc: { sr: "piletina, zelena salata, krutoni, preliv, parmezan", en: "chicken, fresh greens, croutons, dressing, parmesan", ru: "курица, микс салата, сухарики, соус, пармезан" },
      price: "5.90",
      weight: "150 g"
    },
    {
      category: "appetizers",
      title: { sr: "Urnebes Salata", en: "Urnebes Salad", ru: "Салат Урнебес" },
      desc: { sr: "pikantni sir sa pečenom tucanom paprikom", en: "spicy cheese blend with crushed peppers", ru: "пикантная закуска из сыра и острого перца" },
      price: "3.60",
      weight: "200 g"
    },

    // --- DESERTS ---
    {
      category: "deserts",
      title: { sr: "Žito sa Šlagom", en: "Wheat Berry with Whipped Cream", ru: "Пшеница со сливками" },
      desc: { sr: "tradicionalno žito sa orasima i šlagom", en: "sweet wheat berry dessert with walnuts and cream", ru: "традиционное сладкое кушанье из пшеницы с орехами" },
      price: "2.70",
      weight: "300 g"
    },
    {
      category: "deserts",
      title: { sr: "Slatke Palačinke", en: "Sweet Pancakes", ru: "Сладкие Блинчики" },
      desc: { sr: "Eurocrem / Nutella / Džem po izboru", en: "choice of Nutella, chocolate cream or jam", ru: "на выбор: нутелла, шоколад или джем" },
      price: "3.00",
      weight: "200 g"
    },
    {
      category: "deserts",
      title: { sr: "Kolač Kuće", en: "House Cake", ru: "Домашний Торт" },
      desc: { sr: "dnevni domaći kolač", en: "fresh daily baked cake slice", ru: "свежий торт дня" },
      price: "2.50",
      weight: "150 g"
    },

    // --- DRINKS ---
    {
      category: "drinks",
      title: { sr: "Espresso Kafa", en: "Espresso Coffee", ru: "Кофе Эспрессо" },
      desc: { sr: "vrhunska espreso kafa", en: "rich aromatic espresso shot", ru: "классический эспрессо" },
      price: "1.20"
    },
    {
      category: "drinks",
      title: { sr: "Nikšićko Pivo (Točeno)", en: "Nikšićko Draft Beer", ru: "Разливное пиво Никшичко" },
      desc: { sr: "sveže hladno točeno pivo", en: "fresh cold Montenegrin draft beer", ru: "холодное разливное черногорское пиво" },
      price: "2.30",
      sizeNote: "0,33 l"
    },
    {
      category: "drinks",
      title: { sr: "Loza Rajković / Rakija", en: "Montenegrin Brandy (Loza)", ru: "Черногорская Ракия (Лоза)" },
      desc: { sr: "autentična crnogorska lozova rakija", en: "authentic Montenegrin grape brandy", ru: "традиционная черногорская виноградная ракия" },
      price: "2.00",
      sizeNote: "0,03 l"
    }
  ];

  // Render Functions
  function updateLanguage(lang) {
    currentLang = lang;

    // Update UI elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (uiTranslations[lang] && uiTranslations[lang][key]) {
        el.textContent = uiTranslations[lang][key];
      }
    });

    // Update active state on lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active', 'bg-amber-600', 'text-stone-950');
        btn.classList.remove('text-stone-400');
      } else {
        btn.classList.remove('active', 'bg-amber-600', 'text-stone-950');
        btn.classList.add('text-stone-400');
      }
    });

    // Mozzarella Story
    const mozEl = document.getElementById('mozzarella-text');
    if (mozEl) {
      mozEl.innerHTML = mozzarellaStory[lang] || mozzarellaStory['en'];
    }

    // Render Dynamic Content
    renderMenu();
    renderReviews();
  }

  function renderMenu(categoryFilter = 'all') {
    const container = document.getElementById('menu-container');
    if (!container) return;

    let itemsToRender = menuData;
    if (categoryFilter !== 'all') {
      itemsToRender = menuData.filter(i => i.category === categoryFilter);
    }

    if (itemsToRender.length === 0) {
      container.innerHTML = `<p class="text-center text-stone-500 py-12">Nema stavki u ovoj kategoriji.</p>`;
      return;
    }

    let html = '<div class="grid grid-cols-1 md:grid-cols-2 gap-6">';
    itemsToRender.forEach(item => {
      const title = item.title[currentLang] || item.title['en'];
      const desc = item.desc ? (item.desc[currentLang] || item.desc['en']) : '';
      const size = item.sizeNote ? `<span class="text-xs text-stone-400 font-mono">(${item.sizeNote})</span>` : '';
      const weight = item.weight ? `<span class="text-xs text-amber-500/80 font-mono">${item.weight}</span>` : '';

      html += `
        <div class="menu-card bg-stone-900/80 p-6 rounded-2xl border border-stone-800 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-4 mb-2">
              <h3 class="font-serif text-lg font-bold text-stone-100">${title} ${size}</h3>
              <span class="text-amber-400 font-bold text-lg whitespace-nowrap">${item.price} €</span>
            </div>
            ${desc ? `<p class="text-stone-400 text-sm leading-relaxed">${desc}</p>` : ''}
          </div>
          ${weight ? `<div class="mt-3 pt-2 border-t border-stone-800/60">${weight}</div>` : ''}
        </div>
      `;
    });
    html += '</div>';

    container.innerHTML = html;
  }

  function renderReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return;

    let html = '';
    reviewsData.forEach(r => {
      const text = r.text[currentLang] || r.text['en'];
      const stars = '★'.repeat(r.rating);

      html += `
        <div class="bg-stone-900/70 p-6 rounded-2xl border border-stone-800 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="font-semibold text-stone-200">${r.author}</span>
              <span class="text-amber-400 text-sm tracking-wider">${stars}</span>
            </div>
            <p class="text-stone-300 text-sm italic leading-relaxed">"${text}"</p>
          </div>
          <div class="mt-4 pt-3 border-t border-stone-800/40 text-xs text-stone-500 flex items-center gap-1">
            <svg class="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            <span>Google Review</span>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  // Language buttons click handlers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.target.getAttribute('data-lang');
      if (lang) updateLanguage(lang);
    });
  });

  // Category filter click handlers
  const tabBtns = document.querySelectorAll('.menu-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => {
        b.classList.remove('bg-amber-600', 'text-stone-950', 'border-amber-600');
        b.classList.add('bg-stone-900', 'text-stone-300', 'border-stone-800');
      });
      btn.classList.remove('bg-stone-900', 'text-stone-300', 'border-stone-800');
      btn.classList.add('bg-amber-600', 'text-stone-950', 'border-amber-600');

      const cat = btn.getAttribute('data-cat');
      renderMenu(cat);
    });
  });

  // Mobile menu drawer
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
      });
    });
  }

  // Set Current Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize
  updateLanguage('sr');
});