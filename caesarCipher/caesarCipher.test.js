const caesarCipher = require('./caesarCipher');

test('does the cipher work', () =>{
    expect(caesarCipher('hello',5)).toBe('mjqqt')
    expect(caesarCipher('a', 1)).toBe('b')
    expect(caesarCipher('aaa', 1)).toBe('bbb')
    expect(caesarCipher('hello, world!', 5)).toBe('mjqqt, btwqi!')
    expect(caesarCipher('mjqqt, btwqi!', -5)).toBe('hello, world!')
    expect(caesarCipher('z', 1)).toBe('a')
    expect(caesarCipher('', 1)).toBe('')
    expect(caesarCipher('hello, world!', 75)).toBe('ebiil, tloia!')
    expect(caesarCipher('hello, world!', -29)).toBe('ebiil, tloia!')
})


