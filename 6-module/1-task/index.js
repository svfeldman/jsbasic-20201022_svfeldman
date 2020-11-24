/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
<<<<<<< HEAD
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
=======
     *      },
>>>>>>> c53c39f1bea05ac0bffdb31ae5afdeb703eaa6a3
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
<<<<<<< HEAD
    // for (let i = 0; i < rows.length; i++) {
    //   let elem = rows[i];
    //   console.log(this);
    //   if (!this.elem) {
    //     this.elem = document.createElement('table');
    //     this.elem.innerHTML = `<thead>
    //                               <tr>
    //                                 <td>Имя</td>
    //                                 <td>Возраст</td>
    //                                 <td>Зарплата</td>
    //                                 <td>Город</td>
    //                                 <td>нажми меня :)</td>
    //                               </tr>
    //                           </thead>
    //                           <tbody>
    //                             <tr>
    //                               <td>${elem.name}</td>
    //                               <td>${elem.age}</td>
    //                               <td>${elem.salary}</td>
    //                               <td>${elem.city}</td>
    //                               <td><button>X</button></td>
    //                             </tr>
    //                          </tbody>`;
    //   }
    // }
=======
    this.elem = document.createElement('table');

    this.elem.innerHTML = `
      <thead>
          <tr>
            <td>Имя</td>
            <td>Возраст</td>
            <td>Зарплата</td>
            <td>Город</td>
            <td></td>
          </tr>
      </thead>
    `;

    let tbody = this.elem.querySelector('tbody');

    let tableInner = rows.map(row => {
      let cellsWithData = Object.values(row) // для каждого значения из объекта row
        .map(value => `<td>${value}</td>`) // обернуть его в <td>
        .join(''); // полученный массив <td>...</td> объединить в одну строку

      return `
          <tr>
            ${cellsWithData}
            <td><button>X</button></td>
          </tr>
        `; // возвращаем верстку одной строки
    }).join('');

    this.elem.innerHTML += `
      <tbody>
        ${tableInner}
      <tbody>
    `; // оборачиваем полученные строчки в tbody

    this.elem.addEventListener('click', (event) => this.onClick(event));
  }

  onClick(event) {
    if (event.target.tagName != 'BUTTON') {
      return;
    }

    let tr = event.target.closest('tr');

    tr.remove();
>>>>>>> c53c39f1bea05ac0bffdb31ae5afdeb703eaa6a3
  }

}
