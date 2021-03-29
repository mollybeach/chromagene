export default function Pixel() {
    let data = {
    957640:	'C',
    959509:'T',
    973336:	'A',
    974494: '0'
    }
    
    let pixel;
    let pixelArray = [];
    
    let dnaArray = Object.values(data);
    
    console.log(dnaArray);
    
    dnaArray.forEach(element => {
    console.log(element);
    if(element === 'C'){
            console.log('red');
            pixel='#C94515';
           pixelArray.push(pixel);
           
    }
    if (element === 'T'){
        console.log('green');
        pixel='green';
        pixelArray.push(pixel);
    }
    if (element === 'A'){
        console.log('blue');
        pixel='blue';
        pixelArray.push(pixel);
    }
    if (element === '0'){
        console.log('white');
        pixel='white';
        pixelArray.push(pixel);
    }
    else{
        console.log('yellow')
        pixel='yellow';
         pixelArray.push(pixel);
    }
    return(pixelArray);
    });
    
    console.log(pixel);
}