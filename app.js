// 1. array ichidagi 2 dan katta bo'lgan sonlarni boshqa array ga ko'chiring

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function arrAdd(n) {
  let addArr = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] > 2) addArr.push(n[i]);
  }
  return addArr;
}
// console.log(arrAdd(arr));

// 2. ixtiyoriy array yarating va uning ichidagi juft va toq sonlar yigindisini toping va promt da kiritilgan son bilan array ichidagi sonlar yigindisi o'rtasidagi farq ni toping

const arrAdd2 = (n) => {
  let juft = 0;
  let toq = 0;
  let res = 0;
  let result = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 == 0) {
      juft += n[i];
    } else {
      toq += n[i];
    }
  }
  res = juft - toq;
  result.push(`farqi:${res}  juft son:${juft}  toq son:${toq}`);
  return result;
};
// console.log(arrAdd2(arr));

// 3. foydalanuvchi 2 ta son kiritadi va shu 2 ta so oralig’idagi juft sonlar ye’g’indisini chiqaruvchi algaritm tuzing faqat 1 son 2 son dan kichikligini tekshiring

// let son1 = +prompt("son1 ni kiriting");
// let son2 = +prompt("son2 ni kiriting");

function gap(a, b) {
  let res = 0;
  res = Math.abs(a - b);
  let result = 0;
  for (let i = 0; i < res; i++) {
    if (i % 2 == 0) {
      result += i;
    }
  }
  return result;
}
// console.log(gap(son1,son2));

// 4. function argument tiga berilgan qiymatlar orasida faqat number larni alohida array ga ko'chiring va return qiling

function number(...params) {
    let arr = [];
  for (let i = 0; i < params.length; i++) {
    if (typeof params[i] === "number") {
      arr.push(params[i]) 
    }
  }
  return arr;
}
// console.log(number(1, true, "qwe", 2, 6));

// 5. argument sifatida berilgan object ni value larinidan tashkil topgan array ni qaytaradigan function yarating

function valuesObjects(objects) {
   let values = Object.values(objects);
   return values;
}
// console.log(valuesObjects({ a: 14, b: 24, c: 34, d: 44, e: 54, f: 64 }));


// 6. argument sifatida berilgan object ni key larinidan tashkil topgan array ni qaytaradigan function yarating

function keysObjects(objects) {
    let values = Object.keys(objects);
    return values;
 }
// console.log(keysObjects({ a: 14, b: 24, c: 34, d: 44, e: 54, f: 64 }));

// 7. [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4] shu arraydan 4 soni olib tashlansin.
 let editnum = [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4]

function removeNumbers(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 4) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
// console.log(removeNumbers(editnum));

// 8. Ixtiyoriy object yaratilsin key va value lari 6 tadan kam bo'lmasin 1. value lar ro'yxati chiqarilsin 2. value larining yig'indisi topilsin

let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6
}
function objValues(obj) {
    let values = Object.values(obj);
    let result = 0;
    for (let i = 0; i < values.length; i++) {
        result += values[i];
    }
    return result;
}
// console.log(objValues(obj));