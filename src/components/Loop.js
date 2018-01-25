import React, { Component } from 'react';
import data from '../../categories';
import Category from './Category';

var rows = [];
var i;
for (i = 0; i < data.length; i++) {
  rows.push(<Category key{i}/>);
}
class Loop extends Component {
  render() {
    return (rows);
      /*<Category name={data[0].name} items={['Gaseosas','Con azúcar','Sin azúcar']}/>
      <Category name="Desayunos" items={['Fake 1','Fake 1','Fake 1']}/>
      <Category name="Almuerzos" items={['Fake 1','Fake 1','Fake 1']}/>
      <Category name="Vinos" items={['Fake 1','Fake 1','Fake 1']}/>
    );*/
  }
}

export default Loop;
