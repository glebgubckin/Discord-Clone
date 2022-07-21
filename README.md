# Slack
Веб приложение для общения в каналах

### Использованы сделующие технологии:
* React + TypeScript
* Mobx State Manager
* Scss для стилей
* Vite - сборка проекта
* Vitest - тестирование приложения
* ESlint

**Для корректной работы нужно установить [@slack/ui](https://github.com/glebgubckin/-slack-ui)**

### Установка
1. git clone https://github.com/glebgubckin/slack.git
2. cd slack
3. yarn
4. yarn link @slack/ui
5. yarn dev Или yarn build && yarn preview
6. Запустить тесты - yarn test, UI для тестов - yarn test:ui
7. Запуск ESLint - yarn lint

### Данные для входа
* Логин - admin@admin.ru
* Пароль - 12345678

**К изменению**
- [ ] Добавить Supabase
- [ ] Добавление каналов и чатов
- [ ] Настройки пользователя
- [ ] Станица пользователя
