 Простейший TODO list:
1. Вывод списка задач
2. Добавление новой задачи
3. Редактирование задачи
4. Удаление выбранной задачи
5. Сохранение  списка актуальных задач в localstorage. При перезагрузке страницы задачи должны подгружаться из localstorage
6. Каждая задача должна содержать дату и время своего добавления(редактирования)
7. Задачи отсортированы по времени добавления(редактирования). Наиболее новые задачи находятся сверху списка.
   
Настроить сборку и dev  окружение (нельзя использовать готовые сборки):
1. Подключить eslint, TS, Material-UI, Jest, React, Webpack (package.json) 
2. Настроить Webpack для dev окружения и для генерации production build
3. Написать unit тесты для реализованных в задаче компонентов
4. Предусмотреть возможность просмотра test coverage (html вид) и bundle size

[DEMO ONLINE](https://stoic-golick-0e3ea7.netlify.app/)

Start your local server use:
```
npm run dev
```

Build your application use:
```
npm run build
```

Format prettier use:
```
npm run format
```

Start unit-tests use:
```
npm run tests
```