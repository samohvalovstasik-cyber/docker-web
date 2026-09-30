# 🐳 DockerWeb — учебный проект

Учебный сайт по теме **«Использование контейнеров для разработки Web-приложений (Docker)»**.
Демонстрирует практические навыки фронтенд-разработки: семантическая вёрстка, адаптивность,
работа с CSS-фреймворком UnoCSS и контейнеризация через Docker.

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![UnoCSS](https://img.shields.io/badge/UnoCSS-333333?style=for-the-badge&logo=unocss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)

---

## 📖 О проекте

**DockerWeb** — тематический информационный сайт из 10 связанных страниц, посвящённый
использованию Docker в веб-разработке. Сайт собирается через Vite с использованием
UnoCSS, а раздаётся через Nginx внутри Docker-контейнера.

### Что внутри

- 10 связанных страниц с общей навигацией
- Адаптивная вёрстка (Mobile-First) с 3 контрольными точками: 641px / 769px / 1025px
- Бургер-меню на мобильных устройствах
- Сайдбар с навигацией, формой подписки и «Советом дня» на каждой странице
- 5+ семантических таблиц, формы, iframe-видео с VK Video
- Собственные CSS-стили поверх UnoCSS
- Multi-stage Dockerfile + docker-compose для запуска

---

## 🗂 Структура проекта

```
docker-web-project/
├── src/
│   ├── index.html              # Главная
│   ├── about.html              # О Docker
│   ├── installation.html       # Установка
│   ├── commands.html           # Основные команды
│   ├── dockerfile.html         # Написание Dockerfile
│   ├── compose.html            # Docker Compose
│   ├── examples.html           # Примеры проектов
│   ├── faq.html                # FAQ
│   ├── contact.html            # Контакты
│   ├── blog.html               # Блог
│   └── assets/
│       ├── js/main.js          # Бургер-меню, формы, импорт CSS
│       ├── styles/custom.css   # Кастомные стили
│       └── images/
├── nginx/
│   └── nginx.conf              # Конфигурация Nginx
├── uno.config.ts               # Настройка UnoCSS
├── vite.config.ts              # Настройка Vite (multi-page)
├── package.json
├── Dockerfile                  # Multi-stage сборка
├── docker-compose.yml
├── .dockerignore
├── .gitignore
└── README.md
```

---

## 🛠 Используемые технологии

| Технология | Назначение |
|---|---|
| **HTML5** | Семантическая, валидная разметка |
| **CSS3** | Кастомные стили, анимации, адаптивность |
| **UnoCSS** | Утилитарный CSS-фреймворк (аналог Tailwind) |
| **Vite 5** | Сборщик, dev-сервер, multi-page build |
| **JavaScript (ES6+)** | Нативный JS для интерактива |
| **Docker + Docker Compose** | Контейнеризация приложения |
| **Nginx (alpine)** | Раздача статики в продакшене |
| **Node.js 20 (alpine)** | Среда сборки |

---

## 🚀 Быстрый старт

### Вариант 1. Локальный запуск (для разработки)

Требуется **Node.js 20+**.

```bash
# 1. Клонировать репозиторий
git clone https://github.com/<ваш-логин>/docker-web-project.git
cd docker-web-project

# 2. Установить зависимости
npm install

# 3. Запустить dev-сервер
npm run dev
# Открыть http://localhost:5173
```

### Вариант 2. Запуск через Docker (продакшен)

Требуется **Docker Desktop**.

```bash
# Собрать образ и запустить контейнер
docker compose up -d --build

# Открыть http://localhost:8080
```

Остановить контейнер:

```bash
docker compose down
```

---

## 📜 npm-скрипты

| Команда | Что делает |
|---|---|
| `npm run dev` | Запускает dev-сервер Vite с hot-reload |
| `npm run build` | Собирает проект в папку `dist/` |
| `npm run preview` | Локальный предпросмотр собранной версии |

---

## 🐳 Как это работает в Docker

Проект использует **multi-stage сборку**:

1. **Этап `build`** (Node 20 alpine) — устанавливает зависимости и собирает проект в `dist/`.
2. **Этап `production`** (Nginx alpine) — копирует готовый `dist/` и конфиг Nginx.

Итоговый образ весит **~25 МБ** и содержит только Nginx + собранную статику.

```
┌─────────────────────────────┐
│  Этап 1: node:20-alpine     │
│  npm ci && npm run build    │
│  → /app/dist                │
└──────────────┬──────────────┘
               │ COPY --from=build
               ▼
┌─────────────────────────────┐
│  Этап 2: nginx:alpine       │
│  /usr/share/nginx/html      │
│  CMD ["nginx", "-g", ...]   │
└─────────────────────────────┘
```

---

## 📱 Адаптивность

Проект свёрстан по принципу **Mobile-First** с тремя контрольными точками:

| Устройство | Ширина экрана | Особенности |
|---|---|---|
| Мобильные | < 641px | Бургер-меню, одна колонка, компактные отступы |
| Планшеты | 641px – 1024px | Двухколоночная сетка, полное меню в шапке |
| Десктопы | ≥ 1025px | Трёхколоночная сетка, сайдбар справа, широкие отступы |

---

## 🌐 Кроссбраузерность

Проверено в последних версиях:

- ✅ Chrome / Edge (Chromium)
- ✅ Firefox
- ✅ Safari

---

## ✅ Валидность

- HTML5 — проверено на [validator.w3.org](https://validator.w3.org/)
- CSS — проверено на [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/)

---

## 📄 Страницы сайта

| URL | Описание |
|---|---|
| `/` | Главная — обзор, преимущества, пример Dockerfile, видео |
| `/about.html` | Что такое Docker, терминология, сравнение с VM |
| `/installation.html` | Пошаговая установка Docker Desktop |
| `/commands.html` | Справочник основных команд |
| `/dockerfile.html` | Инструкции Dockerfile, multi-stage сборка |
| `/compose.html` | Docker Compose, директивы, примеры |
| `/examples.html` | Примеры реальных проектов (Nginx, React, PHP, Django) |
| `/faq.html` | Часто задаваемые вопросы |
| `/contact.html` | Форма обратной связи и контакты |
| `/blog.html` | Статьи о Docker |

---

## 👤 Автор

Самохвалов Стас
- GitHub: https://github.com/samohvalovstasik-cyber/docker-web.git

---

## 📝 Лицензия

Проект создан в учебных целях. Свободен для использования и модификации.

---

## 🙏 Источники

- [Документация Docker](https://docs.docker.com/)
- [UnoCSS — официальный сайт](https://unocss.dev/)
- [Vite — официальный сайт](https://vitejs.dev/)
- [Nginx — официальный сайт](https://nginx.org/)