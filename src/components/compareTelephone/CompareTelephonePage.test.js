import expect from 'expect';

    /**
     * Compare two strings and verify if the numbers are the same, all else ignored.
     * @param phoneNumber1 first telephone number string
     * @param phoneNumber2 second telephone number string
     * @returns True or False depending on if the numbers are the same
     */
    function compareTelephoneNumbers(phoneNumber1, phoneNumber2) {
        if (!phoneNumber1 || !phoneNumber2) { return (false); }
    
        // Two pointers to walk through input strings
        let phoneNumber1Index = 0;
        let phoneNumber2Index = 0;

        // Loop through both strings until the end
        while(phoneNumber1Index < phoneNumber1.length && phoneNumber2Index < phoneNumber2.length) {

            // iterate first string until a number is found
            while(isNaN(phoneNumber1[phoneNumber1Index])) {
                phoneNumber1Index++;
                // incase the string contains no numbers
                if(phoneNumber1Index > phoneNumber1.length) { return false; }
            }

            // iterate second string until number is found
            while(isNaN(phoneNumber2[phoneNumber2Index])) {
                phoneNumber2Index++;
                if(phoneNumber2Index > phoneNumber2.length) { return false; }
            }

            if (phoneNumber1[phoneNumber1Index] !== phoneNumber2[phoneNumber2Index]) {
                return false;
            } else {
                // Found numbers match so far so increase pointers and continue
                phoneNumber1Index++;
                phoneNumber2Index++;
            }
        }

        return true;
    }

describe('compareTelephoneNumbers input tests', () => {

    it('Number A is a long string neither contain numbers', () => {
        expect(compareTelephoneNumbers('sfghbuliurehilrliglhdfdgfldfhgulilui', 'f')).toEqual(false);
    });

    it('Number B is a long string neither contain numbers', () => {
        expect(compareTelephoneNumbers('f', 'sfghbuliurehilrliglhdfdgfldfhgulilui')).toEqual(false);
    });

    it('Number A and B are identical numbers', () => {
        expect(compareTelephoneNumbers('333','333')).toEqual(true);
    });

    it('Number A is longer than Number B', () => {
        expect(compareTelephoneNumbers('333ee','333')).toEqual(true);
    });

    it('Number B is longer than Number A', () => {
        expect(compareTelephoneNumbers('333','ee333')).toEqual(true);
    });

    it('Both inputs are empty strings', () => {
        expect(compareTelephoneNumbers('','')).toEqual(false);
    });

    it('Both inputs are null', () => {
        expect(compareTelephoneNumbers(null, null)).toEqual(false);
    });

    it('Unicode with a wrong number', () => {
        expect(compareTelephoneNumbers('☀2600☁2601☂2602', '425654822')).toEqual(false);
    });

    it('Unicode with a matching number', () => {
        expect(compareTelephoneNumbers('☀2600☁2601☂2602', '.260-02601.2602')).toEqual(true);
    });

    it('Number A and Number B are different', () => {
        expect(compareTelephoneNumbers('***greer', null)).toEqual(false);
    });

    it('Number A includes negative numbers', () => {
        expect(compareTelephoneNumbers('-425648161', '425648161')).toEqual(true);
    });
});