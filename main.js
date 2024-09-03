 const myArray = [1,2 ,3,4,5,6];
 const newArray = myArray.map(
    (val , index , arr) => {
        if (index %2 == 0)
            {
                return val*1;
            }
            else {
                return val*2;
            }
    }
 );
 console.table(myArray);
 console.table(newArray);

 let st1 = 'mohd';
 let mt1 = 'ppu';
const p = document.querySelector('p');
p.textContent = `welcome ${st1} to ${mt1}`;
