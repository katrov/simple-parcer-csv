# simple-parcer-csv

## Установка

```console
$ git clone git@github.com:katrov/simple-parcer-csv.git
```

```console
$ cd simple-parcer-csv
```

```console
$ npm install
```

## Использование

### Простой файл
```console
$ node index.js 1000 5000 file.csv
```

#### Пример

```console
$ node index.js 4 10 input.csv
```

input.csv
```code
PR1230
PR1231
PR1232
PR1233
PR1234
PR1235
PR1236
PR1237
PR1238
PR1239
PR1240
PR1241
PR1242
PR1243
PR1244
PR1245
PR1246
PR1247
PR1248
PR1249
PR1250
```

output.txt
```code
{"PR1234","PR1235","PR1236","PR1237","PR1238","PR1239","PR1240"}
```

### Файл с колонками
```console
$ node index.js 1000 5000 file.csv Колонка1
```

## Параметры

```code
$ node index.js {{с какой строки}} {{по какую строку}} {{путь до файла}} {{название колонки}}
```