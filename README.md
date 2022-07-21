# Slack
Веб приложение для общения в каналах

### Использованы сделующие технологии:
* React + TypeScript
* Mobx State Manager
* Scss для стилей
* Vite - сборка проекта
* Vitest - тестирование приложения
* ESlint

### Установка
1. git clone https://github.com/glebgubckin/slack.git
2. cd slack
3. cd src/lib/ui && yarn link && cd ../../..
4. yarn
5. yarn link @slack/ui
6. yarn dev или yarn build && yarn preview
7. Запустить тесты - yarn test, UI для тестов - yarn test:ui
8. Запуск ESLint - yarn lint

### Данные для входа
* Логин - admin@admin.ru
* Пароль - 12345678

**К изменению**
- [ ] Добавить Supabase
- [ ] Добавление каналов и чатов
- [ ] Настройки пользователя
- [ ] Станица пользователя
