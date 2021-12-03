import React from 'react';

function montoToStr(num) {
  return num > 12 || num < 1
    ? null
    : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(
        ','
      )[num];
}

function parseData(params, name) {
  this.name = name.split(' ')[0];
  this.day = params.getDate();
  this.month = montoToStr(params.getMonth());
  this.year = params.getFullYear();
}

class ProfileClass extends React.Component {
  render() {
    const data = new parseData(this.props.registredAt, this.props.name);

    return (
      <div className="container">
        <h1>
          Привет, <strong>{data.name}</strong>
        </h1>
        <h2>
          Дата регистрации: {data.day} {data.month} {data.year}
        </h2>
      </div>
    );
  }
}

export default ProfileClass;
