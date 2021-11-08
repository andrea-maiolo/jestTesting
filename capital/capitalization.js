function capitalized(str){
    let reg = /^[a-z]/
    return newStr = str.replace(reg, str[0].toUpperCase())
}
module.exports = capitalized;