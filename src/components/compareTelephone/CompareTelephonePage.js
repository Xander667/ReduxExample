import React, {PropTypes} from 'react';
class compareTelephonePage extends React.Component {

    /// Add syntax
    compareTelephoneNumbers(number1, number2) {
      if(!number1 || !number2) { return ('False');}
  
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
          }
        }
      }
  
      return('True');
  }

  render() {
    return (
      <div>
        <h1>Testing the following cases</h1>
        <table  id="codexpl">
          <tr>
            <th> Number 1 </th>
            <th> Number 2 </th>
            <th> Should Pass? </th>
            <th> Result </th>
          </tr>
          <tr>
            <td> 4256233763 </td>
            <td> s425d62d3fv376f3 </td>
            <td> True </td>
            <td> {this.compareTelephoneNumbers('4256233763','s425d62d3fv376f3')}  </td>
          </tr>
          <tr>
            <td> s425d62d3fv376f3 </td>
            <td> s425d62d3fv376f3 </td>
            <td> True </td>
            <td> {this.compareTelephoneNumbers('s425d62d3fv376f3','s425d62d3fv376f3')}  </td>
          </tr>
          <tr>
            <td> s425d62d3fv376f3 </td>
            <td> 4256233763 </td>
            <td> True </td>
            <td> {this.compareTelephoneNumbers('s425d62d3fv376f3','4256233763')}  </td>
          </tr>
          <tr>
            <td> 42256233763 </td>
            <td> s425d62d3fv376f3 </td>
            <td> False </td>
            <td> {this.compareTelephoneNumbers('42256233763','s425d62d3fv376f3')}  </td>
          </tr>
          <tr>
            <td> 4252132136233763 </td>
            <td> s42wq321r5d62d3fv376f3 </td>
            <td> False </td>
            <td> {this.compareTelephoneNumbers('4252132136233763','s42wq321r5d62d3fv376f3')}  </td>
          </tr>
          <tr>
            <td> 4252132136233763 </td>
            <td> 42d`521321fgttg36233gtr763rgt</td>
            <td> True </td>
            <td> {this.compareTelephoneNumbers('4252132136233763','42d`521321fgttg36233gtr763rgt')}  </td>
          </tr>
          <tr>
            <td>  </td>
            <td> s42wq321r5d62d3fv376f3 </td>
            <td> False </td>
            <td> {this.compareTelephoneNumbers('','s42wq321r5d62d3fv376f3')}  </td>
          </tr>
          <tr>
            <td> null </td>
            <td> s42wq321r5d62d3fv376f3 </td>
            <td> False </td>
            <td> {this.compareTelephoneNumbers(null,'s42wq321r5d62d3fv376f3')}  </td>
          </tr>
        </table>
        <p></p>
      </div>
    );
  }
}

export default compareTelephonePage;