// Задание
// Дан массив books.

// Выведите этот массив на экран в виде списка (тег ul - список должен быть сгенерирован с помощью Javascript).
// На странице должен находиться div с id="root", куда и нужно будет положить этот список (похожая задача была дана в модуле basic).
// Перед выводом обьекта на странице, нужно проверить его на корректность (в объекте должны содержаться все три свойства 
// - author, name, price). Если какого-то из этих свойств нету, в консоли должна высветиться ошибка с указанием 
// - какого свойства нету в обьекте.
// Те элементы массива, которые являются некорректными по условиям предыдущего пункта, не должны появиться на странице.


const books = [
  { 
    author: "Скотт Бэккер",
    name: "Тьма, что приходит прежде",
    price: 70 
  }, 
  {
   author: "Скотт Бэккер",
   name: "Воин-пророк",
  }, 
  { 
    name: "Тысячекратная мысль",
    price: 70
  }, 
  { 
    author: "Скотт Бэккер",
    name: "Нечестивый Консульт",
    price: 70
  }, 
  {
   author: "Дарья Донцова",
   name: "Детектив на диете",
   price: 40
  },
  {
   author: "Дарья Донцова",
   name: "Дед Снегур и Морозочка",
  }
];


function createBookEntry(item) {
    let bookItem = '';
    if(item.hasOwnProperty("author")) {
        bookItem += `<li>${item.author}</li>`;
    } else {
        throw new Error(`The property "author" is missing in ${JSON.stringify(item)}`);
    }
    if(item.hasOwnProperty("name")) {
        bookItem += `<li>${item.name}</li>`;
    } else {
        throw new Error(`The property "name" is missing in ${JSON.stringify(item)}`);
    }
    if(item.hasOwnProperty("price")) {
        bookItem += `<li>${item.price}</li>`;
    } else {
        throw new Error(`The property "price" is missing in ${JSON.stringify(item)}`);
    }
    return bookItem;
}

function createBooksList(booksList) {
    let bookList = '';
    booksList.forEach(item => {
        try {
            bookList += `<ul>${createBookEntry(item)}</ul>`;
        } catch(e) {
            console.error(e.message);
        }

    });

    const list = document.getElementById('root');
   list.innerHTML = bookList;

}


createBooksList(books);