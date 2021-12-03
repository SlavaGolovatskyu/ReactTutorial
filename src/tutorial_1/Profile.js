// import React from 'react';

// function Profile({ registredAt, name }) {
//   function parseData(params, name) {
//     this.name = name.split(' ')[0];
//     this.day = params.getDate();
//     this.month = montoToStr(params.getMonth());
//     this.year = params.getFullYear();
//   }

//   function montoToStr(num) {
//     return num > 12 || num < 1
//       ? null
//       : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(
//           ','
//         )[num];
//   }

//   const data = new parseData(registredAt, name);

//   return (
//     <div className="container">
//       <h1>
//         Привет, <strong>{data.name}</strong>
//       </h1>
//       <h2>
//         Дата регистрации: {data.day} {data.month} {data.year}
//       </h2>
//     </div>
//   );
// }

// export default Profile;
