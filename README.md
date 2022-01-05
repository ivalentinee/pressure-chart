# Pressure chart

## Перед началом работы
```
$ docker-compose build
```

## Тестовый запуск
- Собираем: `docker-compose run --rm app make`
- Запускаем: `docker-compose run --rm --service-ports app make serve`

## Сборка внутри докера
`docker-compose run --rm app make release`

Путь до сгенерированного файла: `build/index.html`

## Если нужно что-то изменить
Смотреть в файл `src/index.js`
