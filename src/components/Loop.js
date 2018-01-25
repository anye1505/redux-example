import React, { Component } from 'react';
import data from '../../categories';
import Category from './Category';

var rows = [];
var i;
for (i = 0; i < data.length; i++) {
  rows.push(<Category name={data[i].name} items={data[i].sublevels.name}/>);
}
class Loop extends Component {
  render() {
    return (rows);
  }
}

export default Loop;
