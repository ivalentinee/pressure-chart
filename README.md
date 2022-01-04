# Pressure chart

## Перед началом работы
```
$ docker-compose build
```

## Тестовый запуск
`docker-compose run --rm --service-ports make serve`

## Сборка внутри докера
`docker-compose run --rm app make release`

Путь до сгенерированного файла: `build/index.html`
