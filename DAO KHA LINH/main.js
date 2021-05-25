
// let n = parseInt(prompt(" Nhập n: "));
// let inputNumber = parseInt(prompt(" Nhập inputNumber: "));
// function findOppositeNumber(n, inputNumber)
// {
//     if( n % 2 != 0  && (n <4  || n >20))
//     {
//         console.log(" Vui lòng nhập lại n: ");
//     }
//     else if ( inputNumber < 0 || inputNumber > (n-1))
//     {
//         console.log(" Vui lòng nhập lại inputNumber: ");
//     }
//     else
//     {
//         if( inputNumber > (n/2))
//         {
//             inputNumber = inputNumber - (n/2);
//         }
//         else if ( inputNumber <=(n/2))
//         {
//             inputNumber = inputNumber + (n/2);
//         }
//     }
//     console.log(inputNumber);
// }
// findOppositeNumber(n,inputNumber);


// let s1 = prompt(" Nhập chuỗi s1: ");
// let s2 = prompt(" Nhập chuỗi s2: ");
// function merge2String(s1, s2)
// {
//     let dodai_s1 = s1.length;
//     let _string = s2;
//     let dodai_s2 = s2.length;

//     if (dodai_s1 > dodai_s2)
//     {
//         dodai_s1 = dodai_s2;
//         _string = s1;
//     }
    
//     let ketqua = "";
    
//     for (let i = 0; i < dodai_s1; ++i) 
//     {
//         ketqua = ketqua + s1[i] + s2[i];
//     }

//     ketqua = ketqua + _string.slice(dodai_s1);
    
//     return ketqua; 
// } 

// console.log(merge2String(s1,s2));


let nhapso = parseInt(prompt(" Nhập số dự đoán: "));
let soLucky = parseInt(9);
let dem=0;

if ( nhapso <=0 || nhapso >10)
{
    
    console.log(" Vui lòng nhập lại số dự đoán từ 1 đến 10");
}
else if( nhapso >0 || nhapso <=10)
{
    
    while ( dem <3)
    {
        dem ++;
        if(dem <=3)
        {
            if(nhapso == soLucky)
            {
                console.log(" Chúc mừng bạn đã dự đoán đúng số may mắn !");
            }
            else
            {
                console.log(" Chúc bạn may mắn lần sau :)");
            }
        }
        else if(dem >3)
        {
            console.log(" Chúc bạn may mắn lần sau :)");
        }
        let nhapso = parseInt(prompt(" Nhập số dự đoán: "));
    }    
}

