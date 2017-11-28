import expect from 'expect';

const decimalBase = 10;

    /**
     * Compare two strings and verify if the numbers are the same, all else ignored.
     * @param phoneNumber1 first telephone number string
     * @param phoneNumber2 second telephone number string
     * @returns True or False depending on if the numbers are the same
     */
    function compareTelephoneNumbers(phoneNumber1, phoneNumber2) {
        if (!phoneNumber1 || !phoneNumber2) { return ('False'); }
    

        // while loop both

        //     while find numberA

        //     while find numberB

        //     compare
    


        let innerPointer = 0;
        for (let index = 0; index < phoneNumber1.length; index++) {
            if (parseInt(phoneNumber1[index], decimalBase)) {
    
                for (let innerIndex = innerPointer; innerIndex < phoneNumber2.length; innerIndex++) {
                    if (parseInt(phoneNumber2[innerIndex], decimalBase)) { //is NaN
                        if (phoneNumber1[index] !== phoneNumber2[innerIndex]) {
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

describe('compareTelephoneNumbers input tests', () => {

    it('Number A and B are identical numbers', () => {
        expect(compareTelephoneNumbers('333','333')).toEqual('True');
    });

    it('Number A is longer than Number B', () => {
        expect(compareTelephoneNumbers('333ee','333')).toEqual('True');
    });

    it('Number B is longer than Number A', () => {
        expect(compareTelephoneNumbers('333','ee333')).toEqual('True');
    });

    it('Number A and Number B are different', () => {
        expect(compareTelephoneNumbers('4233','333')).toEqual('False');
        expect(compareTelephoneNumbers('','333')).toEqual('False');
        expect(compareTelephoneNumbers(null, '333')).toEqual('False');
        expect(compareTelephoneNumbers('3r2','')).toEqual('False');
        expect(compareTelephoneNumbers('fgreer', null)).toEqual('False');
        expect(compareTelephoneNumbers('Agreer', null)).toEqual('False');
        expect(compareTelephoneNumbers('***greer', null)).toEqual('False');
    });

    it('Lots of jibberish numbers?', () => {
        expect(compareTelephoneNumbers('s425d62d3fv376f3','fdsbi42biu56biubui2bui3376b3')).toEqual('True');
    });
});