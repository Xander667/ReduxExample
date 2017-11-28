import React, {PropTypes} from 'react';
class compareTelephonePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Testing the following cases</h1>
        <table  id="codexpl">
          <tr>
            <th> Number 1 </th>
            <th> Number 2 </th>
            <th> Result </th>
          </tr>
          <tr>
            <td> 4256233763 </td>
            <td> s425d62d3fv376f3 </td>
            <td> {this.compareTelephoneNumbers('4256233763','s425d62d3fv376f3')}  </td>
          </tr>
        </table>
        <p></p>
      </div>
    );
  }

  /// Add syntax

  compareTelephoneNumbers(number1, number2) {
    number1 = '4256233763';
    number2 = 's425d62d3fv376f3'; //test both diff lengths
    let result = false;
    let innerPointer = 0;
    for(let index=0; index<number1.length; index++) {

      if(parseInt(number1[index], 10)) {  //const for 10

        for(let innerIndex=innerPointer; innerIndex<number2.length; innerIndex++) {
          if(parseInt(number2[innerIndex], 10)) {
            if(number1[index] !== number2[innerIndex]) { 
              return('False'); 
            } else {
              innerPointer = ++innerIndex;
              break;
            }
          } 
          innerPointer = innerIndex;
        }
      }
    }

    return('True');
  }
}

export default compareTelephonePage;