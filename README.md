## Тестовое задание
[Результат(деплой на Heroku)](https://boiling-harbor-35158.herokuapp.com)
или 
### Девсервер
```bash
git clone https://github.com/klochkovS/test_exercise.git . && yarn install && yarn build
```
---
#### Задачи
Реализовать приложение, которое умеет показывать следующие страницы:

+ `/` - главная
+ `/login` - страница ввода логина и пароля
+ `/news` - страница с новостями (любая однотипная информация)
+ `/profile` - страница с произвольным текстом, недоступная без авторизации

На сайте, в шапке реализовать ссылки:

+ На главную (`/`)
+ Новости (`/news`)
+ Профиль (`/profile`)

Если пользователь кликает на страницу “профиля” и он не “авторизован” - перекидывать на страницу /login

Форма входа (/login) принимает данные по умолчанию:

```
username: root
password: qwerty1 
```

Если введены другие данные, то показывается сообщения:

Имя пользователя или пароль введены не верно 

Если введены корректные данные, то перенаправлять на страницу `/profile`