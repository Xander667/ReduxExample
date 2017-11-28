import expect from 'expect';

    /// Add syntax
    function compareTelephoneNumbers(number1, number2) {
        if(!number1 || !number2) { return ('False');}
    
        let innerPointer = 0;
        for(let index=0; index<number1.length; index++) {
          if(parseInt(number1[index], 10)) {  //const for 10
  
            for(let innerIndex=innerPointer; innerIndex<number2.length; innerIndex++) {
              if(parseInt(number2[innerIndex], 10)) {
                if(number1[index] !== number2[innerIndex]) { 
                  return 'False'; 
                } else {
                  innerPointer = ++innerIndex;
                  break;
                }
              } 
            }
          }
        }
    
        return 'True';
    }
  

describe('compareTelephoneNumbers tests', () => {

    it('same numbers', () => {
        expect(compareTelephoneNumbers('333','333')).toEqual('True');
    });

    it('A longer', () => {
        expect(compareTelephoneNumbers('333ee','333')).toEqual('True');
    });

    it('B longer', () => {
        expect(compareTelephoneNumbers('333','ee333')).toEqual('True');
    });

    it('diff numbers', () => {
        expect(compareTelephoneNumbers('4233','333')).toEqual('False');
    });

    it('Lots of jibberish numbers?', () => {
        expect(compareTelephoneNumbers('s425d62d3fv376f3','fdsbi42biu56biubui2bui3376b3')).toEqual('True');
    });
});