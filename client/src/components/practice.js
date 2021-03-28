let data = {
957640:	'C',
959509:'T',
973336:	'A',
974494: '0'
}

let pixel;

let dnaArray = Object.values(data);

console.log(dnaArray);

dnaArray.forEach(element => {
console.log(element);
if(element === 'C'){
        console.log('red');
        pixel='red';
       
}
if (element === 'T'){
    console.log('green');
    pixel='green';
}
if (element === 'A'){
    console.log('blue');
    pixel='blue';
}
if (element === '0'){
    console.log('white');
    pixel='white';
}
else{
    console.log('yellow')
    pixel='yellow';
}
return(pixel);
});

console.log(pixel);



/*

957640:	[C, C],
959509:[T, T],
973336:	[A, G],
974494:[0, 0]
976962:[C, C, rs587777299],
976963: [0, 0, rs150359724],
977780: [T, C, rs2710875]

rs2710875	1	977780	T	C
rs28484890	1	979514	0	0
rs113288277	1	979748	0	0
rs75774767	1	980773	0	0
rs2465128	1	981931	A	G
rs150132566	1	982213	G	G
rs142416636	1	982722	0	0
rs146358566	1	982783	0	0
*/