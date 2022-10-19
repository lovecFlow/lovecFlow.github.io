const cols = document.querySelectorAll('.col'); 

// RGB
// #FF0000 Красный
// #00FF00 Зеленый 
// #0000FF Синий 

document.addEventListener('keydown', event => {
    if (event.code.toLocaleLowerCase() === 'space') { 
        setRandomColors(); 
    }
}); 

// document.addEventListener('touchstart', event  => { 
//     if (event.code.toLocaleLowerCase() === 'touch') { 
//         setRandomColors(); 
//     }
// }); 

function generateRandomColors() { 
    const hexCodes = '0123456789ABCDEF'; //Все значения потенц входящие в цвет
    let color = '';
    for (let i = 0; i < 6; i++) { 
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]; //Генератор рандомных цветов
        //Обращаемся к хексКодес и прописываем матан. 
    }
    return '#' + color; 
}

function setRandomColors() { 
    cols.forEach(col => { 
        const text = col.querySelector('h2');
        const button = col.querySelector('button');
        const color = generateRandomColors();
        
        text.textContent = color; 
        col.style.background = color;

        setTextColor(text, color);
        setTextColor(button, color);
    });  
}

function setTextColor(text, color) { 
   const luminance = chroma(color).luminance(); 
   text.style.color = luminance > 0.5 ? 'black' : 'white'; 

}

setRandomColors(); 