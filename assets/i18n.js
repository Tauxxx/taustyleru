const translations = {
  ru: {
    meta: {
      description: "Senior PHP Fullstack Developer с 20+ лет опыта. Архитектура, интеграции, оптимизация производительности. Laravel, Bitrix, high-load системы. Проектирую и строю надёжные backend-решения для бизнеса."
    },
    nav: {
      clients: "Заказчикам",
      stack: "Стек",
      experience: "Опыт",
      cases: "Кейсы",
      process: "Процесс",
      faq: "FAQ",
      contact: "Контакт"
    },
    hero: {
      tag: "Senior PHP Fullstack Developer",
      title0: "Архитектура.",
      title1: "Интеграции.",
      title2: "Производительность.",
      subtitle: "20+ лет в разработке — от стартапов до high-load платформ",
      desc: "Проектирую и строю серверную часть под нагрузку. Работаю с Laravel, Bitrix, очередями, кэшем и сложными API-интеграциями. Делаю системы, которые не ломаются когда нужны.",
      stats: {
        experience: "лет опыта",
        users: "пользователей/мес",
        sessions: "конкурентных сессий"
      },
      cta: {
        discuss: "→ Обсудить задачу",
        experience: "Посмотреть опыт"
      }
    },
    clients: {
      label: "Кому подхожу",
      title: "Типичные заказчики",
      med: {
        type: "Медицина / Beauty / Wellness",
        title: "Клиники, сети салонов, медицинские платформы",
        desc: "Строил интеграционную платформу YClients + Bitrix24 для сети клиник — 1–2 млн пользователей в месяц, 10 000 одновременных сессий. Знаю специфику: расписания врачей, онлайн-запись, синхронизация клиентских данных между системами без потерь и даунтайма.",
        i1: "Интеграции",
        i1_body: "YClients API (rate limit 2 RPS — решено через Cache::remember + waitForRateLimit). Bitrix24 REST API — двусторонняя синхронизация заказов и клиентов. Webhook-обработчики для входящих событий.",
        i2: "Архитектура под нагрузку",
        i2_body: "Laravel + Redis-очереди для асинхронной синхронизации. Nuxt 3 + TypeScript виджет онлайн-записи. Многоуровневое кэширование — снижение нагрузки на БД и внешние API.",
        i3: "Надёжность и мониторинг",
        i3_body: "Декомпозиция монолита в сервисные модули (поиск, рекомендации, выгрузки). Метрики, логирование, анализ инцидентов — проактивное обнаружение проблем до того, как они касаются пользователей.",
        i4: "Инфраструктура",
        i4_body: "Nginx → PHP-FPM → Laravel. MySQL / PostgreSQL + Redis. Настройка production-окружения с нуля — до стабильной работы при пиковом трафике."
      },
      ecom: {
        type: "E-commerce / Ритейл",
        title: "Интернет-магазины, розничные сети, маркетплейсы",
        desc: "Строил платформы, которые выдерживают «Чёрную пятницу» без деградации. Знаю полный стек e-commerce: от каталога и корзины до логистики, оплаты и аналитики в реальном времени. Оптимизировал API с ~300 мс до 50–80 мс при пиках.",
        i1: "Производительность",
        i1_body: "Laravel Octane (Swoole) — персистентный процесс, время ответа API 50–80 мс вместо ~300 мс. Оптимизация SQL-запросов, индексы, профилирование узких мест. Кэширование на Redis.",
        i2: "Real-time аналитика",
        i2_body: "Laravel Reverb + WebSockets — 2000 одновременных подключений на одном сервере. Менеджеры видят продажи и остатки мгновенно, без перезагрузки страницы.",
        i3: "Интеграции",
        i3_body: "1С (двусторонний обмен товарами, заказами, остатками). RetailCRM, Mindbox. Доставка: СДЭК, 5Post. Оплата: Робокасса. Google Analytics, Яндекс.Метрика + GTM.",
        i4: "Платформа",
        i4_body: "1С-Битрикс D7 (кастомные модули, компоненты) + Laravel-микросервисы для сложной бизнес-логики. Vue.js / Nuxt фронтенд. Event-driven архитектура для фоновых задач."
      },
      b2b: {
        type: "B2B / Корпоративный сектор",
        title: "Компании с legacy-системами и сложными интеграциями",
        desc: "Старый монолит, который нельзя остановить, но нужно развивать? Несколько корпоративных систем, которые не умеют друг с другом разговаривать? Это моя стандартная задача — рефакторинг без потери бизнес-логики и интеграции без хрупких связей.",
        i1: "Работа с legacy",
        i1_body: "Анализ архитектурных ошибок накопленного кода. Рефакторинг без нарушения бизнес-логики и стабильности. Поэтапная декомпозиция монолита в Laravel-сервисы без остановки production.",
        i2: "Корпоративные интеграции",
        i2_body: "MS SQL и Microsoft Axapta (ERP). Обмен данными с 1С. REST API для внутренних корпоративных сервисов. Контроль целостности и отказоустойчивость обменов.",
        i3: "Процессы и качество",
        i3_body: "Code Review, контроль архитектуры. Git + CI/CD. Документирование нетривиальных решений. Формирование кодовой базы, пригодной для дальнейшего масштабирования командой.",
        i4: "Микросервисная архитектура",
        i4_body: "Выделение независимых модулей (поиск, рекомендации, уведомления, выгрузки). Event-driven взаимодействие через очереди. Горизонтальное масштабирование без переписывания ядра."
      },
      startup: {
        type: "Продукты / Стартапы",
        title: "Команды, которым нужен опытный senior fullstack/backend",
        desc: "Нет смысла держать в штате дорогого сеньора ради одного проекта или этапа. Подключаюсь, проектирую архитектуру, выстраиваю процессы — и передаю команде работающую систему с документацией.",
        i1: "Архитектура с нуля",
        i1_body: "Выбор стека под задачу (не под моду). Проектирование БД, API, очередей. Laravel как основа — быстрый старт без потери масштабируемости. Документирование решений для команды.",
        i2: "Полный стек при необходимости",
        i2_body: "Бэкенд: PHP 8 / Laravel. Фронтенд: Vue 3 / Nuxt 3 / TypeScript. DevOps: Nginx, Docker, CI/CD. Могу закрыть весь цикл до момента, когда команда готова подхватить.",
        i3: "Code Review и менторинг",
        i3_body: "Разовый аудит кодовой базы с письменным отчётом. Систематический review для junior/middle-разработчиков. Объяснение решений — не просто «так правильно», а почему именно так.",
        i4: "Форматы работы",
        i4_body: "Проектная работа (конкретная задача → результат). Аутстаф в команду на время. Архитектурный консалтинг (оценка + план). Удалённо, гибко, с прозрачной коммуникацией."
      },
      fintech: {
        type: "Финтех / Процессинг",
        title: "Платёжные сервисы и транзакционные системы",
        desc: "Строю backend для финансовых операций, где цена ошибки — деньги пользователей. Транзакционная целостность, идемпотентность, аудит каждого действия и антифрод — не опции, а обязательная основа архитектуры.",
        i1: "Транзакционное ядро",
        i1_body: "PostgreSQL / MySQL с SERIALIZABLE isolation + advisory locks. Double-entry bookkeeping в БД. Явный beginTransaction везде, идемпотентность через idempotency_key.",
        i2: "Laravel-стек для финтех",
        i2_body: "Horizon + Redis для асинхронных операций. Events + Listeners — аудит лог каждой операции. Database transactions на уровне сервисного слоя.",
        i3: "Антифрод",
        i3_body: "Rate limiting по IP / карте / устройству. Velocity checks (N транзакций за M минут). Blacklist-сервисы (MaxMind). Аномалии по сумме и гео.",
        i4: "PSP / Банки / Инфраструктура",
        i4_body: "REST + Webhooks, ISO 8583 (legacy), PCI DSS. Стек: Nginx → PHP-FPM → Redis → PostgreSQL primary+replica. HashiCorp Vault для ключей, ELK / Loki для аудит-лога."
      }
    },
    stack: {
      label: "Технологии",
      title: "Стек",
      backend: "Backend",
      db: "Базы данных и кэш",
      frontend: "Фронтенд",
      devops: "Инфраструктура и DevOps",
      monitoring: "Мониторинг",
      integrations: "Интеграции",
      robokassa: "Робокасса",
      yandex_metrica: "Яндекс.Метрика"
    },
    experience: {
      label: "Карьера",
      title: "Опыт работы",
      present: "настоящее время",
      y: "г.",
      m: "мес.",
      items: [
        {
          company: "Клиника Превентивной Медицины",
          role: "PHP Fullstack Senior Developer",
          period: "Январь 2025 — настоящее время",
          desc: [
            "Веб-платформа «под ключ» — до 10 000 одновременных пользователей, 1–2 млн/мес",
            "Интеграционная платформа YClients ↔ Bitrix24: синхронизация заказов и клиентов",
            "Nuxt 3 + Vue 3 + TypeScript фронтенд, Laravel + Redis-очереди бэкенд",
            "Декомпозиция монолита в сервис-ориентированные модули",
            "Мониторинг, логирование, анализ инцидентов и превентивные улучшения"
          ]
        },
        {
          company: "Единая Европа — Холдинг",
          role: "Fullstack Engineer Laravel / Bitrix",
          period: "Октябрь 2021 — Декабрь 2024",
          desc: [
            "Laravel Octane (Swoole): время ответа API снижено с ~300 мс до 50–80 мс при пиках",
            "Laravel Reverb + WebSockets: аналитика реального времени, 2000 одновременных подключений",
            "Интеграции: Mindbox, RetailCRM, СДЭК, 5Post, Робокасса, MS SQL, Microsoft Axapta",
            "Event-driven архитектура на Laravel Events + Listeners + Redis/Horizon"
          ]
        },
        {
          company: "МДМ Комплект",
          role: "Ведущий веб-разработчик",
          period: "Декабрь 2018 — Июнь 2021",
          desc: [
            "Полный цикл: архитектура, разработка, code review, production",
            "Кастомные модули Битрикс, сложные каталоги, личные кабинеты",
            "REST API, интеграции с платёжными системами и службами доставки",
            "Laravel микросервисы + Vue.js фронтенд + React Native мобильный клиент"
          ]
        },
        {
          company: "Хэппи Гифтс",
          role: "Руководитель отдела ИТ",
          period: "Август 2016 — Февраль 2018",
          desc: [
            "Команда разработчиков (штат + аутсорс), бюджет, IT-стратегия",
            "Бесперебойная работа 17 филиалов, мониторинг, резервирование",
            "+12% онлайн-продаж за год — улучшение UX и оптимизация сценариев"
          ]
        },
        {
          company: "Группа компаний Kokoc.",
          role: "Веб-разработчик (PHP, MySQL, JS)",
          period: "Май 2013 — Июнь 2016",
          desc: [
            "1С-Битрикс, кастомные модули и компоненты",
            "Интеграции с CRM, GTM, Google Analytics, Яндекс.Метрика",
            "Участие в разработке сервиса Callback"
          ]
        }
      ]
    },
    portfolio: {
      label: "Портфолио",
      title: "Проекты",
      badge: "В РАЗРАБОТКЕ",
      dev: "Детальные кейсы в разработке — скоро здесь появятся реальные проекты с метриками и архитектурными схемами.",
      p1: {
        title: "YClients × Bitrix24 Integration Platform",
        desc: "High-load интеграционная платформа для сети клиник. 1–2 млн пользователей/мес, очереди Redis, синхронизация в реальном времени."
      },
      p2: {
        title: "E-commerce High-load Platform",
        desc: "Платформа розничной сети на Laravel Octane + WebSockets. Выдержала «Чёрную пятницу» без деградации при 2000+ одновременных подключений."
      },
      p3: {
        title: "Service-Oriented Monolith Migration",
        desc: "Декомпозиция монолитного легаси в сервис-ориентированные модули без остановки production — поиск, рекомендации, выгрузки."
      }
    },
    cases: {
      label: "Кейсы",
      title: "Реальные задачи — реальные цифры",
      c1: {
        type: "КЕЙС 01 · Медицина / High-load",
        title: "Интеграция YClients × Bitrix24 для сети клиник",
        m1: "пользователей / мес",
        m2: "одновременных сессий",
        m3: "потерь данных при пиках",
        prob: "Проблема",
        prob_body: "Сеть клиник работает на YClients для записи и Bitrix24 для CRM. Данные о записях, клиентах и статусах существовали в двух разрозненных системах — менеджеры дублировали работу вручную, данные расходились, при пиковой нагрузке сайт падал.",
        sol: "Решение",
        sol_body: "Спроектировал интеграционную платформу с нуля: Laravel-бэкенд с Redis-очередями для асинхронной синхронизации, Nuxt 3 + TypeScript фронтенд для виджета записи, стратегия кэширования для YClients API (2 RPS rate limit). Декомпозиция монолита в сервисные модули — поиск, рекомендации, выгрузки.",
        res: "Результат",
        res_body: "Платформа стабильно работает при 10 000 одновременных пользователей. Синхронизация заказов и клиентских данных — автоматически. Менеджеры перестали дублировать данные вручную. Система мониторинга позволяет выявлять проблемы до того, как они влияют на пользователей."
      },
      c2: {
        type: "КЕЙС 02 · E-commerce / Performance",
        title: "High-load платформа розничной сети — «Чёрная пятница»",
        m1: "ответ API (было ~300ms)",
        m2: "WebSocket-подключений",
        m3: "деградации в пик трафика",
        prob: "Проблема",
        prob_body: "Интернет-магазин крупной розничной сети не справлялся с нагрузкой в акционные периоды. API отвечал медленно (~300 мс), менеджеры не видели актуальных данных по остаткам и заказам в реальном времени. Интеграции с Mindbox, RetailCRM, СДЭК были хрупкими.",
        sol: "Решение",
        sol_body: "Внедрил Laravel Octane на Swoole — персистентный процесс убрал накладные расходы на инициализацию. Для аналитики реального времени — Laravel Reverb с WebSockets (2000 одновременных подключений на одном сервере). Event-driven архитектура для надёжности фоновых задач.",
        res: "Результат",
        res_body: "Время ответа API снижено с ~300 мс до 50–80 мс при пиковых нагрузках. «Чёрная пятница» прошла без деградации. Менеджеры получают обновления по продажам и остаткам мгновенно — без перезагрузки страницы."
      },
      c3: {
        type: "КЕЙС 03 · Корпоратив / Architecture",
        title: "Миграция монолита без остановки production",
        m1: "онлайн-продаж за год",
        m2: "филиалов без простоев",
        m3: "технический долг",
        prob: "Проблема",
        prob_body: "Устаревший монолит на 1С-Битрикс с годами накопленного технического долга. Добавление новой функциональности занимало недели, любое изменение могло сломать соседний модуль. Бизнес хотел роста, архитектура не позволяла.",
        sol: "Решение",
        sol_body: "Поэтапная декомпозиция без остановки production: вынос независимых модулей в Laravel-сервисы (поиск, рекомендации, выгрузки), рефакторинг legacy с сохранением бизнес-логики, внедрение современных практик — Vue.js фронтенд, CI/CD, code review.",
        res: "Результат",
        res_body: "Новые фичи выходят в разы быстрее. Кодовая база пригодна для масштабирования. Онлайн-продажи выросли на 12% за год за счёт улучшения UX и скорости загрузки. Команда работает без постоянного страха «что-то сломать»."
      }
    },
    process: {
      label: "Процесс",
      title: "Как я работаю",
      s1: { title: "Разбор задачи", body: "Изучаю текущую архитектуру, стек, узкие места. Задаю неудобные вопросы. Не начинаю писать код, пока не понял проблему полностью." },
      s2: { title: "Архитектура", body: "Предлагаю решение с обоснованием. Объясняю trade-offs — что получим, от чего отказываемся и почему именно этот путь." },
      s3: { title: "Разработка", body: "Пишу итерациями с промежуточными ревью. Покрываю критичные места тестами. Документирую нетривиальные решения прямо в коде." },
      s4: { title: "Деплой и передача", body: "Выкатываю в production с планом отката. Настраиваю мониторинг. Передаю команде документацию и объясняю, как это работает и как поддерживать." },
      f1: "Проектная работа — конкретная задача с результатом",
      f2: "Аутстаф — в вашу команду на время",
      f3: "Архитектурный консалтинг — оценка и план",
      f4: "Code review — разовый аудит кодовой базы"
    },
    manifesto: {
      label: "Принципы",
      title: "Как я думаю о работе",
      m1: { title: "Сначала понять — потом писать", body: "Неправильно понятая задача, решённая технически блестяще — это провал. Трачу время на уточнение требований, потому что это дешевле, чем рефакторинг готового кода." },
      m2: { title: "Простое решение лучше умного", body: "Если задачу можно решить без микросервисов, очередей и event sourcing — решаю без них. Сложность системы должна соответствовать реальной проблеме, а не впечатлять." },
      m3: { title: "Метрики, не интуиция", body: "Оптимизирую то, что измеримо медленно. Профилирую перед тем, как трогать код. Решения по архитектуре принимаю на основе данных нагрузки, а не предположений." },
      m4: { title: "Код живёт после меня", body: "Пишу так, чтобы следующий разработчик понял без созвона. Документирую «почему», а не «что». Легаси появляется тогда, когда забываешь, что кто-то другой будет это поддерживать." },
      m5: { title: "Интеграции — это договоры", body: "Внешний API может упасть, изменить формат или начать тормозить. Проектирую интеграции с явными границами, таймаутами, retry-логикой и fallback-сценариями." },
      m6: { title: "Бизнес-результат важнее технического совершенства", body: "Идеальная архитектура, которая выйдет через три месяца вместо одного, часто хуже хорошего решения, которое работает прямо сейчас и может быть улучшено итерационно." }
    },
    faq: {
      label: "FAQ",
      title: "Частые вопросы",
      q1: { q: "Берёшься за legacy-проекты и чужой код?", a: "Да, и это значительная часть моей работы. Большинство реальных проектов — это не гринфилд, а системы с историей. Умею читать чужой код, находить архитектурные проблемы и проводить рефакторинг без нарушения бизнес-логики. Прежде чем что-то менять — разбираюсь, почему это написано именно так." },
      q2: { q: "Работаешь один или с командой?", a: "Могу работать как самостоятельно (полный цикл от архитектуры до production), так и встроиться в существующую команду. Имею опыт руководства командой разработчиков, code review и менторинга. Формат обсуждаем под задачу." },
      q3: { q: "Какой минимальный объём задачи имеет смысл?", a: "Предпочитаю задачи, где есть архитектурная составляющая — интеграция, рефакторинг, построение новой функциональности. Разовые мелкие правки рассматриваю в контексте более длительного сотрудничества. Напишите — скажу честно, имеет ли смысл обсуждать." },
      q4: { q: "Подписываешь NDA? Как с конфиденциальностью?", a: "Да, подписываю NDA. Данные клиентов и детали проектов не разглашаю. Все кейсы на сайте — обезличены или описаны с разрешения. Работаю в рамках договора с чёткими обязательствами с обеих сторон." },
      q5: { q: "Сколько времени нужно на онбординг в проект?", a: "Зависит от сложности и состояния документации. Для типичного Laravel или Bitrix-проекта — 2–5 рабочих дней, чтобы понять архитектуру и начать полезно работать. Помогает наличие README, схем БД и доступа к staging-окружению." },
      q6: { q: "Работаешь удалённо? Какие форматы взаимодействия?", a: "Преимущественно удалённо — это мой основной формат работы. Готов к гибриду при необходимости. По взаимодействию: предпочитаю асинхронную коммуникацию (Telegram, задачи в Jira/трекере) с синхронными созвонами по ключевым точкам. Не пропадаю, отвечаю в разумное время." }
    },
    contact: {
      label: "Связь",
      title: "Обсудим задачу",
      desc: "Если нужна интеграция с внешними системами, высоконагруженный бэкенд, рефакторинг legacy или архитектурный консалтинг — напишите. Расскажу, как решал похожие задачи и что реально можно сделать.",
      name: "Имя / Компания",
      contact: "Контакт (tg / email)",
      task: "Задача",
      task_placeholder: "Опишите задачу — масштаб, стек, что сейчас не работает...",
      submit: "→ Отправить",
      status_sending: "// Отправка...",
      status_success: "// Готово! Свяжусь в ближайшее время.",
      status_error: "// Ошибка отправки. Попробуйте через TG: @taustyle",
      status_validation: "// Укажите контакт и задачу",
      status_network: "// Ошибка сети. Попробуйте позже."
    },
    footer: {
      text: "· 2026 · PHP Senior Fullstack Developer ·",
      status: "Открыт к проектам",
      quote: "Спокойное море никогда не делало хорошего моряка (порт.)"
    }
  },
  en: {
    meta: {
      description: "Senior PHP Fullstack Developer with 20+ years of experience. Architecture, integrations, performance optimization. Laravel, Bitrix, high-load systems. Designing and building reliable backend solutions for business."
    },
    nav: {
      clients: "For Clients",
      stack: "Stack",
      experience: "Experience",
      cases: "Cases",
      process: "Process",
      faq: "FAQ",
      contact: "Contact"
    },
    hero: {
      tag: "Senior PHP Fullstack Developer",
      title0: "Architecture.",
      title1: "Integrations.",
      title2: "Performance.",
      subtitle: "20+ years in development — from startups to high-load platforms",
      desc: "Designing and building high-load server-side solutions. Expert in Laravel, Bitrix, queues, caching, and complex API integrations. Building systems that don't fail when needed.",
      stats: {
        experience: "years exp",
        users: "users/mo",
        sessions: "concurrent sessions"
      },
      cta: {
        discuss: "→ Discuss Task",
        experience: "View Experience"
      }
    },
    clients: {
      label: "Who I'm for",
      title: "Typical Clients",
      med: {
        type: "Medical / Beauty / Wellness",
        title: "Clinics, Beauty Networks, Health Platforms",
        desc: "Built an integration platform (YClients + Bitrix24) for a clinic network — 1–2M monthly users, 10,000 concurrent sessions. Familiar with medical specifics: doctor schedules, online booking, and zero-loss data synchronization.",
        i1: "Integrations",
        i1_body: "YClients API (2 RPS rate limit — handled via Cache::remember + waitForRateLimit). Bitrix24 REST API — bidirectional order and client sync. Webhook handlers for incoming events.",
        i2: "High-load Architecture",
        i2_body: "Laravel + Redis Queues for async sync. Nuxt 3 + TypeScript online booking widget. Multi-level caching to reduce DB and external API load.",
        i3: "Reliability & Monitoring",
        i3_body: "Monolith decomposition into service modules (search, recommendations, exports). Metrics, logging, incident analysis — proactive issue detection.",
        i4: "Infrastructure",
        i4_body: "Nginx → PHP-FPM → Laravel. MySQL / PostgreSQL + Redis. Production environment setup from scratch for stable peak traffic performance."
      },
      ecom: {
        type: "E-commerce / Retail",
        title: "Online Stores, Retail Chains, Marketplaces",
        desc: "Built platforms that survive 'Black Friday' without degradation. Full e-commerce stack knowledge: from catalog and cart to logistics, payments, and real-time analytics. Optimized API from ~300ms to 50–80ms.",
        i1: "Performance",
        i1_body: "Laravel Octane (Swoole) — persistent process, API response time 50–80ms instead of ~300ms. SQL query optimization, indexing, bottleneck profiling. Redis caching.",
        i2: "Real-time Analytics",
        i2_body: "Laravel Reverb + WebSockets — 2000 concurrent connections on a single server. Managers see sales and stock updates instantly without page refresh.",
        i3: "Integrations",
        i3_body: "1C (bidirectional sync: products, orders, stock). RetailCRM, Mindbox. Logistics: CDEK, 5Post. Payments: Robokassa. Google Analytics, Yandex.Metrica + GTM.",
        i4: "Platform",
        i4_body: "1C-Bitrix D7 (custom modules, components) + Laravel microservices for complex business logic. Vue.js / Nuxt frontend. Event-driven architecture for background tasks."
      },
      b2b: {
        type: "B2B / Corporate Sector",
        title: "Companies with Legacy Systems & Complex Integrations",
        desc: "Old monolith that can't be stopped but needs to grow? Disconnected corporate systems? My specialty is refactoring without business logic loss and building robust integrations.",
        i1: "Legacy Work",
        i1_body: "Architectural error analysis of existing code. Refactoring without disrupting stability. Step-by-step monolith decomposition into Laravel services without downtime.",
        i2: "Corporate Integrations",
        i2_body: "MS SQL and Microsoft Axapta (ERP). Data exchange with 1C. REST API for internal corporate services. Integrity control and fault-tolerant exchanges.",
        i3: "Process & Quality",
        i3_body: "Code Review, architectural control. Git + CI/CD. Documenting non-trivial solutions. Forming a codebase suitable for further scaling by the team.",
        i4: "Microservice Architecture",
        i4_body: "Extracting independent modules (search, recommendations, notifications). Event-driven interaction via queues. Horizontal scaling without core rewrites."
      },
      startup: {
        type: "Products / Startups",
        title: "Teams Needing an Experienced Senior Fullstack/Backend",
        desc: "No need to keep an expensive senior on staff for a single project or stage. I join, design the architecture, set up processes, and hand over a working system with documentation.",
        i1: "Architecture from Scratch",
        i1_body: "Stack selection based on task (not trends). DB, API, and queue design. Laravel as a foundation — fast start without sacrificing scalability. Team documentation.",
        i2: "Full Stack if Needed",
        i2_body: "Backend: PHP 8 / Laravel. Frontend: Vue 3 / Nuxt 3 / TypeScript. DevOps: Nginx, Docker, CI/CD. Covering the entire cycle until the team is ready.",
        i3: "Code Review & Mentoring",
        i3_body: "One-time codebase audit with a written report. Systematic review for junior/middle developers. Explaining the 'why', not just the 'how'.",
        i4: "Engagement Formats",
        i4_body: "Project-based (specific task → result). Outstaffing for a period. Architectural consulting (assessment + plan). Remote, flexible, transparent communication."
      },
      fintech: {
        type: "Fintech / Processing",
        title: "Payment Services & Transactional Systems",
        desc: "Building backend for financial operations where the cost of error is real money. Transactional integrity, idempotency, audit trails, and anti-fraud are mandatory architectural foundations.",
        i1: "Transactional Core",
        i1_body: "PostgreSQL / MySQL with SERIALIZABLE isolation + advisory locks. Double-entry bookkeeping. Explicit beginTransaction everywhere, idempotency via idempotency_key.",
        i2: "Laravel Stack for Fintech",
        i2_body: "Horizon + Redis for async operations. Events + Listeners for a full audit log of every operation. Database transactions at the service layer.",
        i3: "Anti-fraud",
        i3_body: "Rate limiting by IP / card / device. Velocity checks (N transactions per M minutes). Blacklist services (MaxMind). Amount and geo anomaly detection.",
        i4: "PSP / Banks / Infrastructure",
        i4_body: "REST + Webhooks, ISO 8583 (legacy), PCI DSS. Stack: Nginx → PHP-FPM → Redis → PostgreSQL primary+replica. HashiCorp Vault, ELK / Loki for audit logs."
      }
    },
    stack: {
      label: "Technologies",
      title: "Stack",
      backend: "Backend",
      db: "Databases & Cache",
      frontend: "Frontend",
      devops: "Infrastructure & DevOps",
      monitoring: "Monitoring",
      integrations: "Integrations",
      robokassa: "Robokassa",
      yandex_metrica: "Yandex Metrica"
    },
    experience: {
      label: "Career",
      title: "Work Experience",
      present: "Present",
      y: "y.",
      m: "mo.",
      items: [
        {
          company: "Preventive Medicine Clinic",
          role: "PHP Fullstack Senior Developer",
          period: "January 2025 — Present",
          desc: [
            "Turnkey web platform — up to 10,000 concurrent users, 1–2M monthly",
            "Integration platform YClients ↔ Bitrix24: order and client sync",
            "Nuxt 3 + Vue 3 + TypeScript frontend, Laravel + Redis queues backend",
            "Monolith decomposition into service-oriented modules",
            "Monitoring, logging, incident analysis, and proactive improvements"
          ]
        },
        {
          company: "United Europe — Holding",
          role: "Fullstack Engineer Laravel / Bitrix",
          period: "October 2021 — December 2024",
          desc: [
            "Laravel Octane (Swoole): API response time reduced from ~300ms to 50–80ms",
            "Laravel Reverb + WebSockets: real-time analytics, 2000 concurrent connections",
            "Integrations: Mindbox, RetailCRM, CDEK, 5Post, Robokassa, MS SQL, MS Axapta",
            "Event-driven architecture on Laravel Events + Listeners + Redis/Horizon"
          ]
        },
        {
          company: "MDM Komplekt",
          role: "Lead Web Developer",
          period: "December 2018 — June 2021",
          desc: [
            "Full cycle: architecture, development, code review, production",
            "Custom Bitrix modules, complex catalogs, client accounts",
            "REST API, integrations with payment systems and delivery services",
            "Laravel microservices + Vue.js frontend + React Native mobile client"
          ]
        },
        {
          company: "Happy Gifts",
          role: "Head of IT Department",
          period: "August 2016 — February 2018",
          desc: [
            "Developer team management (in-house + outsource), budget, IT strategy",
            "Uninterrupted operation of 17 branches, monitoring, redundancy",
            "+12% online sales in a year — UX improvements and scenario optimization"
          ]
        },
        {
          company: "Kokoc Group",
          role: "Web Developer (PHP, MySQL, JS)",
          period: "May 2013 — June 2016",
          desc: [
            "1C-Bitrix, custom modules and components",
            "Integrations with CRM, GTM, Google Analytics, Yandex.Metrica",
            "Participated in the development of the Callback service"
          ]
        }
      ]
    },
    portfolio: {
      label: "Portfolio",
      title: "Projects",
      badge: "UNDER DEVELOPMENT",
      dev: "Detailed cases are under development — real projects with metrics and architecture diagrams are coming soon.",
      p1: {
        title: "YClients × Bitrix24 Integration Platform",
        desc: "High-load integration platform for a clinic network. 1–2M users/mo, Redis queues, real-time sync."
      },
      p2: {
        title: "E-commerce High-load Platform",
        desc: "Retail chain platform on Laravel Octane + WebSockets. Handled 'Black Friday' without degradation at 2000+ concurrent connections."
      },
      p3: {
        title: "Service-Oriented Monolith Migration",
        desc: "Decomposition of a legacy monolith into service-oriented modules without stopping production — search, recommendations, exports."
      }
    },
    cases: {
      label: "Cases",
      title: "Real Tasks — Real Numbers",
      c1: {
        type: "CASE 01 · Medical / High-load",
        title: "YClients × Bitrix24 Integration for Clinic Network",
        m1: "users / mo",
        m2: "concurrent sessions",
        m3: "data loss at peaks",
        prob: "Problem",
        prob_body: "The clinic network used YClients for booking and Bitrix24 for CRM. Booking, client, and status data existed in two disconnected systems — managers duplicated work manually, data diverged, and the site crashed during peak loads.",
        sol: "Solution",
        sol_body: "Designed an integration platform from scratch: Laravel backend with Redis queues for async sync, Nuxt 3 + TypeScript frontend for the booking widget, caching strategy for YClients API (2 RPS limit). Monolith decomposition into service modules.",
        res: "Result",
        res_body: "The platform works stably at 10,000 concurrent users. Automatic sync of orders and client data. Managers stopped manual duplication. Monitoring system allows detecting issues before they affect users."
      },
      c2: {
        type: "CASE 02 · E-commerce / Performance",
        title: "High-load Retail Platform — 'Black Friday'",
        m1: "API response (was ~300ms)",
        m2: "WebSocket connections",
        m3: "degradation at peak traffic",
        prob: "Problem",
        prob_body: "A large retail online store couldn't handle the load during promotion periods. API was slow (~300ms), managers lacked real-time stock and order data. Integrations with Mindbox, RetailCRM, and CDEK were fragile.",
        sol: "Solution",
        sol_body: "Implemented Laravel Octane on Swoole — persistent process eliminated bootstrap overhead. For real-time analytics: Laravel Reverb with WebSockets (2000 concurrent connections). Event-driven architecture for background task reliability.",
        res: "Result",
        res_body: "API response time reduced from ~300ms to 50–80ms during peak loads. 'Black Friday' passed without degradation. Managers receive sales and stock updates instantly without page refreshes."
      },
      c3: {
        type: "CASE 03 · Corporate / Architecture",
        title: "Monolith Migration Without Production Downtime",
        m1: "online sales growth",
        m2: "branches without downtime",
        m3: "technical debt",
        prob: "Problem",
        prob_body: "An outdated 1C-Bitrix monolith with years of accumulated technical debt. Adding new features took weeks, any change could break adjacent modules. The business wanted growth, but architecture prevented it.",
        sol: "Solution",
        sol_body: "Step-by-step decomposition without production downtime: moving independent modules to Laravel services (search, recommendations, exports), legacy refactoring while preserving logic, modern practices (Vue.js, CI/CD, code review).",
        res: "Result",
        res_body: "New features are released much faster. Codebase is suitable for scaling. Online sales grew by 12% in a year due to better UX and load speed. The team works without the constant fear of 'breaking something'."
      }
    },
    process: {
      label: "Process",
      title: "How I Work",
      s1: { title: "Task Analysis", body: "Studying current architecture, stack, and bottlenecks. Asking uncomfortable questions. I don't start writing code until I fully understand the problem." },
      s2: { title: "Architecture", body: "Proposing a solution with justification. Explaining trade-offs — what we get, what we give up, and why this specific path." },
      s3: { title: "Development", body: "Writing in iterations with intermediate reviews. Covering critical areas with tests. Documenting non-trivial solutions directly in code." },
      s4: { title: "Deploy & Handover", body: "Deploying to production with a rollback plan. Setting up monitoring. Handing over documentation and explaining how it works and how to maintain it." },
      f1: "Project-based — specific task with a result",
      f2: "Outstaffing — joining your team for a period",
      f3: "Architectural consulting — assessment and plan",
      f4: "Code review — one-time codebase audit"
    },
    manifesto: {
      label: "Principles",
      title: "My Engineering Mindset",
      m1: { title: "Understand First — Code Later", body: "A misunderstood task solved brilliantly is still a failure. I spend time clarifying requirements because it's cheaper than refactoring ready-made code." },
      m2: { title: "Simple Over Smart", body: "If a task can be solved without microservices, queues, or event sourcing — I solve it without them. System complexity should match the real problem, not impress." },
      m3: { title: "Metrics Over Intuition", body: "I optimize what is measurably slow. Profiling before touching the code. Architectural decisions are based on load data, not assumptions." },
      m4: { title: "Code Lives After Me", body: "I write so the next developer understands without a call. Documenting 'why', not just 'what'. Legacy appears when you forget someone else will maintain this." },
      m5: { title: "Integrations Are Contracts", body: "External APIs can fail, change format, or slow down. I design integrations with explicit boundaries, timeouts, retry logic, and fallback scenarios." },
      m6: { title: "Business Outcome Over Tech Perfection", body: "A perfect architecture that releases in three months instead of one is often worse than a good solution that works now and can be improved iteratively." }
    },
    faq: {
      label: "FAQ",
      title: "Frequently Asked Questions",
      q1: { q: "Do you take on legacy projects and others' code?", a: "Yes, and this is a significant part of my work. Most real projects are not greenfields but systems with history. I can read others' code, find architectural flaws, and refactor without losing business logic. Before changing anything, I understand why it was written that way." },
      q2: { q: "Do you work alone or with a team?", a: "I can work independently (full cycle from architecture to production) or join an existing team. I have experience leading developer teams, performing code reviews, and mentoring. Format is discussed based on the task." },
      q3: { q: "What is the minimum project size that makes sense?", a: "I prefer tasks with an architectural component — integration, refactoring, or building new functionality. One-off small fixes are considered within the context of a longer collaboration. Write to me, and I'll be honest if it makes sense to discuss." },
      q4: { q: "Do you sign NDAs? What about confidentiality?", a: "Yes, I sign NDAs. Client data and project details are kept confidential. All cases on the site are anonymized or described with permission. I work under a contract with clear obligations for both parties." },
      q5: { q: "How long does onboarding into a project take?", a: "It depends on complexity and documentation. For a typical Laravel or Bitrix project, it takes 2–5 business days to understand the architecture and start working effectively. READMEs, DB schemas, and staging access help significantly." },
      q6: { q: "Do you work remotely? What are the communication formats?", a: "Mostly remote — this is my main work format. I'm open to hybrid if necessary. For communication, I prefer async (Telegram, Jira tasks) with sync calls at key milestones. I'm always available and respond within a reasonable time." }
    },
    contact: {
      label: "Contact",
      title: "Discuss Task",
      desc: "If you need external integration, high-load backend, legacy refactoring, or architectural consulting — get in touch. I'll tell you how I solved similar tasks and what can be done.",
      name: "Name / Company",
      contact: "Contact (tg / email)",
      task: "Task",
      task_placeholder: "Describe the task — scale, stack, what's not working now...",
      submit: "→ Send",
      status_sending: "// Sending...",
      status_success: "// Done! I'll get back to you soon.",
      status_error: "// Error. Try via TG: @taustyle",
      status_validation: "// Provide contact and task",
      status_network: "// Network error. Try again later."
    },
    footer: {
      text: "· 2026 · PHP Senior Fullstack Developer ·",
      status: "Available for projects",
      quote: "A calm sea never made a skilled sailor (port.)"
    }
  }
};

const i18n = {
  currentLang: localStorage.getItem('lang') || (navigator.language.startsWith('en') ? 'en' : 'ru'),

  init() {
    this.switchLang(this.currentLang);
    this.createSwitcher();
  },

  switchLang(lang) {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);

    const strings = translations[lang];

    // DOM Translation
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const path = el.getAttribute('data-i18n');
      const text = this.getValueByPath(strings, path);
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else if (el.hasAttribute('data-i18n-attr')) {
          const attr = el.getAttribute('data-i18n-attr');
          el.setAttribute(attr, text);
        } else {
          el.innerHTML = text;
        }
      }
    });

    // Special cases: Meta and Title
    document.title = (lang === 'ru' ? 'PHP Fullstack Developer — Senior Fullstack Engineer' : 'PHP Fullstack Developer — Senior Fullstack Engineer');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', strings.meta.description);

    // Update switcher UI
    this.updateSwitcherUI();
  },

  getValueByPath(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  },

  createSwitcher() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    const li = document.createElement('li');
    li.className = 'lang-switcher-wrapper';
    li.innerHTML = `
      <div class="lang-switcher">
        <button onclick="i18n.switchLang('ru')" class="lang-btn ${this.currentLang === 'ru' ? 'active' : ''}">RU</button>
        <span class="sep">/</span>
        <button onclick="i18n.switchLang('en')" class="lang-btn ${this.currentLang === 'en' ? 'active' : ''}">EN</button>
      </div>
    `;
    navLinks.appendChild(li);
  },

  updateSwitcherUI() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const lang = btn.getAttribute('onclick').match(/'([^']+)'/)[1];
      btn.classList.toggle('active', lang === this.currentLang);
    });
  }
};

// Auto-init
document.addEventListener('DOMContentLoaded', () => i18n.init());
