import React, {PropTypes} from 'react';
class compareTelephonePage extends React.Component {

    /// Add syntax
    compareTelephoneNumbers(phoneNumber1, phoneNumber2) {
      if (!phoneNumber1 || !phoneNumber2) { return ('False'); }
      
          let phoneNumber1Index = 0;
          let phoneNumber2Index = 0;
  
          // Loop through both strings until the end
          while(phoneNumber1Index < phoneNumber1.length && phoneNumber2Index < phoneNumber2.length) {
  
              // iterate first string until number is found
              while(isNaN(phoneNumber1[phoneNumber1Index])) {
                  phoneNumber1Index++;
              }
  
              // iterate second string until number is found
              while(isNaN(phoneNumber2[phoneNumber2Index])) {
                  phoneNumber2Index++;
              }
  
              if (phoneNumber1[phoneNumber1Index] !== phoneNumber2[phoneNumber2Index]) {
                  return 'False';
              } else {
                  // Found numbers match so far so increase pointers and continue
                  phoneNumber1Index++;
                  phoneNumber2Index++;
              }
          }
          return 'True';
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
          <tr>
            <td> Empty String </td>
            <td> Empty String </td>
            <td> False </td>
            <td> {this.compareTelephoneNumbers('','')}  </td>
          </tr>   
          <tr>
            <td> null </td>
            <td> null </td>
            <td> False </td>
            <td> {this.compareTelephoneNumbers(null, null)}  </td>
          </tr>   
          <tr>
            <td> 4256233765 </td>
            <td> '☀2600☁2601☂2602' </td>
            <td> False </td>
            <td> {this.compareTelephoneNumbers('4256233765','☀2600☁2601☂2602')}  </td>
          </tr>
          <tr>
            <td> ☀2600☁2601☂2602 </td>
            <td> ☀2600☁2601☂2602 </td>
            <td> True </td>
            <td> {this.compareTelephoneNumbers('☀2600☁2601☂2602','☀2600☁2601☂2602')}  </td>
          </tr>
        </table>
        <p></p>
      </div>
    );
  }
}

export default compareTelephonePage;