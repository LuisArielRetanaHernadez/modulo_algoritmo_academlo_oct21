import { createSlice } from '@reduxjs/toolkit'


export const convertSlice = createSlice({
  name: 'convert',
  initialState: {
    value: '',
  },
  reducers: {
    romanToDecimal: (state, action) => {
      const conversion = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        v: 5,
        I: 1,
      };  

      const repetRomans = ['', 0]
      // xxi
      let arr = action.payload.toUpperCase().split("");
      // ['x', 'x', 'I']
      let total = 0;
      let current, currentValue, next, nextValue, err;

      for (let i = 0; i < arr.length; i++) {

        current = arr[i]; // x
        currentValue = conversion[current];

        next = arr[i + 1]; 
        nextValue = conversion[next]; 
// VM
        if (
          currentValue + nextValue === 10 
          || (current === 'V' && nextValue < currentValue)
          ) { 
            err = true;
            break;
          }
    
        if (repetRomans[0] === current) repetRomans[1] += 1;

        // repetRomans[1
        if (repetRomans[1] > 3) {
          err = true;
          break;
        }
        
        if (repetRomans[0] !== current) {
          repetRomans[0] = current;
          repetRomans[1] = 1;
        }

        console.log(repetRomans)
        // X I > 10 I X > 9 + 19 
        // I X
        if (currentValue < nextValue) {
          total -= currentValue;
        } else {
          total += currentValue; // 9
        }
      } 
      state.value = err ? '' : total;
},
    decimalToRoman: (state, action) => {
      let
      values = [1, 5, 10, 50, 100, 500, 1000],
      letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
      res = ['X', 'V'],
      num, letra, val, pos, insert
      // 14
      for (let i = 6; i >= 0;i--) {
        num = values[i];
        letra = letras[i];

        if (action.payload >= num) {
          let r = Math.floor(action.payload / num); 
      
          action.payload -= r * num; 
      
          if (r < 4){
            while(r--){
              res.push(letra);
            }
          } else {
            val = res.pop(); // Última letra
            pos = (val ? letras.indexOf(val) : i) + 1; 
      
            insert = letra + (letras[pos] || 'M'); 
      
            res.push(insert);
          }
        } else {
      
          res.push('');
        }
      }
  
      state.value = res.join(''); // XV
    }
  }  
})

export const { romanToDecimal, decimalToRoman } = convertSlice.actions

export default convertSlice.reducer