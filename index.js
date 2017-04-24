/**
 ЗАДАЧА
 Написать HTTP-сервер для загрузки и получения файлов
 - Все файлы находятся в директории files
 - Структура файлов НЕ вложенная.

 - Виды запросов к серверу
   GET /file.ext
   - выдаёт файл file.ext из директории files,

   POST /file.ext
   - пишет всё тело запроса в файл files/file.ext и выдаёт ОК
   - если файл уже есть, то выдаёт ошибку 409
   - при превышении файлом размера 1MB выдаёт ошибку 413

   DELETE /file
   - удаляет файл
   - выводит 200 OK
   - если файла нет, то ошибка 404

 Вместо file может быть любое имя файла.
 Так как поддиректорий нет, то при наличии / или .. в пути сервер должен выдавать ошибку 400.

- Сервер должен корректно обрабатывать ошибки "файл не найден" и другие (ошибка чтения файла)
- index.html или curl для тестирования

 */

// отдачу файлов следует переделать "правильно", через потоки, с нормальной обработкой ошибок
/*        fs.readFile(ROOT + 'index.html', (err, content) => {
          if (err) throw err;
          res.setHeader('Content-Type', 'text/html;charset=utf-8');
          res.end(content);
        });*/

// Пример простого сервера в качестве основы

'use strict';

const a = 1;
const b = 2;

let f = () => a + b;
f();

// const url = require('url');
// const fs = require('fs');
// const {
//   Server
// } = require('http');
// const ROOT = __dirname + '/public/'
// const log = console.log;
// const mime = require('./../lib/node_modules/mime');
