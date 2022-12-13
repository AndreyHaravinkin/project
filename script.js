"use strict"

                                                 // Взаимодействие с пользователем

//alert('Hello')

//const result = confirm("Are you here?");
//console. log(result);

//const answer = +prompt("Вам есть 18?", "18");    //+перед prom меняет тип информации введеной пользователем с string в number(по умолчинию string)
//console. log(typeof(answer));                    //оператор typeof показывает в консоле тип введенной пользователем  информации
//const answers = [];

//answers[0] = prompt('Как тебя зовут?', '');
//answers[1] = prompt('Какая твоя фамилия?', '');
//answers[2] = prompt('Сколько тебе лет?', '');

//console. log(typeof(answers));


                                                   // Интерполяция

//const category = 'toys';
//console. log(`http://someurl.com/$(category)/5`);   // спомощью `` мы соеденяем элемента без использоания знака +

//const user = 'Ivan'
//alert(`Привет, ${user}`);


                                                    // Операторы

//let incr = 10,
    //decr = 10;

//++incr;
//--decr; 

//incr++;  // ++ оператор инкремента - увиличения на еденицу    -- или ++ с зади - Постфиксная форма
//decr--;  // -- оператор декремента - уменьшение на еденицу    -- или ++ спереди -  Префиксная форма  

//console. log(incr++);
//console. log(decr--);

// = - это присваивание
// == - это сравнение
//console. log(2*4 == 8); // в консоле вернется true, так как 2*4 будет 8 и console. log(2*4 == '8'); - тоже будет true
//console. log(2*4 === '8'); // строгое сравнение. Результатом будет falsБ так как '8' это строка

// логические операторы '&& - и' , '|| - или'

//&& - оба значения верны
// || - какоето из значений верно

//const isChecked = true,
 //     isClose = true;
//console. log(isChecked && isClose); // true

//const isChecked = true,
 //     isClose = false;
//console. log(isChecked && isClose); // true

// ! - оператор отрицание. Если значение было положительным станет отрицательным, если было правдой станет не правдой
// != - оператор 'не равен'
//const isChecked = true,
     //isClose = true;
//console. log(isChecked || !isClose); // без ! будет false, с ! будет true



const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов', ''), 
      d = prompt('На сколько оцените его?', '');
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console. log(personalMovieDB);
      