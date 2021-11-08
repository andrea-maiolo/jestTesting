function caesarCipher(string, num){
    let solution='';
    let arrFromString = string.split('');

    for(let i=0; i<arrFromString.length; i++){
        let charCodeOfLetter = arrFromString[i].charCodeAt(0);
        if(charCodeOfLetter >= 65 && charCodeOfLetter <= 90 && num>0){
            let newCharCode = ((charCodeOfLetter + num - 65)%26 +65);
            let newLetter = String.fromCharCode(newCharCode);
            solution += newLetter;
        }else if(charCodeOfLetter >= 65 && charCodeOfLetter <= 90 && num<0){
            let firstConversion = -(charCodeOfLetter + num - 90);
            let module = firstConversion % 26;
            let secondConversion = -(module - 90);
            let newLetter = String.fromCharCode(secondConversion)
            solution += newLetter;
        }else if(charCodeOfLetter >= 97 && charCodeOfLetter <= 122 && num>0){
            let newCharCode = ((charCodeOfLetter + num - 97)%26 +97);
            let newLetter = String.fromCharCode(newCharCode);
            solution += newLetter;
        }else if(charCodeOfLetter >= 97 && charCodeOfLetter <= 122 && num<0){
            let firstConversion = -(charCodeOfLetter + num - 122);
            let module = firstConversion % 26;
            let secondConversion = -(module - 122);
            let newLetter = String.fromCharCode(secondConversion)
            solution += newLetter;
        }else{
            solution += arrFromString[i];
        }
    }
    return solution
}
module.exports = caesarCipher;