# Исправление багов

Исправленны ошибки, обновленне все библтотеки, классовые компоненты переведенны на функциональные.

# ВЁРСТКА

- созданна страница how-it-works, к ней ведет ссылка из меню пользователя CONTESTS/How it Works

# Добавлен динамический брендинг

- в меню юзера добавленна ссылка на "Event" на страницу "Event"
- в меню юзера добавленна ссылка на "ButtonGroup" на страницу "Button Group"

# DB NO-SQL

Добавленна каталог db-no-sql в server/

- в нем запрос query.mongodb для подсчета количетсва записей содержащих слово «паровоз» в коллекции Messages.

# DB SQL

Добавленна каталог db-sql в server/

- Задание Вывести количество юзеров по ролям {admin: 40, customer: 22, ...}
  Файл: countOfUsers.sql
- Всем юзерам с ролью customer, которые осуществляли заказы в новогодние праздники в период с 25.12 по 14.01, необходимо зачислить по 10% кэшбэка со всех заказов в этот период.
  Файл: customerCashback.sql
- Для роли сreative необходимо выплатить 3-м юзерам с самым высоким рейтингом по 10$ на их счета.
  Файл: payoutWithMaxRating.sql

- разработанна схема для миграции чата с NO-SQL на SQL, скрин Screenshot_UML.png

# NODEJS

Создан логгер ошибок server/utils/

- errorLogFunction

Созданно расписание для копирования и очищения содержимого файла error.log, и перемещения данных в новый файл

- errorLogSchedule

# FULLSTACK

- добавлена новая роль Moderator
- добавлена рассылка решения модератора на почту Creative

# Миграция чата с Mongo на Postgres

- описаны Sequelize модели и миграции
- измененна логика запросов на сервере

# в server/.env

хронятся переменные

- POSTGRES_USER = postgres
- POSTGRES_PASSWORD =
- POSTGRES_DB = squadhelp
- POSTGRES_HOST = db-dev
- MONGO_HOST = mongo-dev
- PORT = 5000
- STATIC_PATH = public/images
- JWT_SECRET =
- SMTP_HOST = smtp.gmail.com
- SMTP_PORT = 587
- SMTP_USER =
- SMTP_PASSWORD =
- API_URL = http://localhost:3000

# в .env в корне проэкта, где находится docker-compose-dev.yaml

хронятся переменные

- POSTGRES_USER = postgres
- POSTGRES_PASSWORD =
- POSTGRES_DB = squadhelp
