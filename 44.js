function neutralise(s1, s2) {
    
    const plusMinus = {
        '++': '+',
        '-+': '0',
        '--': '-',
        '+-': '0'
    };
    
    const res = s1.split('').map((el, i) => plusMinus[el + s2[i]]).join('');
    return res;
    

}
console.log(neutralise("--++", "++++")) //"00++";
