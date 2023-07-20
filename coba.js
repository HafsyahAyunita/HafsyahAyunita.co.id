// function cetakNama(nama) {
//     return `Halo, nama saya ${nama}`;
// }

// const PI = 3.14;

// class orang {
//     constructor() {
//         console.log('telah dibuat');
//     }
// }

// const mahasiswa = {
//     nama: 'doddy',
//     umur: 20,
//     cetakMhs() {
//         return `halo, nama saya ${this.nama}, saya berumur ${this.umur} tahun`;
//     },
// };




// // module.exports.cetakNama = cetakNama;
// // module.exports.PI = PI;
// // module.exports.mahasiswa = mahasiswa;
// // module.exports.orang = orang;

// modul.exports = {
//     cetakNama,
//     PI,
//     mahasiswa,
//     orang,
// }


// core module node js
// try {
  //     fs.writeFileSync('test.txt', 'hai ini fsystemku');   
  // } catch (error) {
    //     console.log('error')
    // }
    
// try {
  //     fs.writeFileSync('data/test.txt', 'hai ini fsystemku');   
  // } catch (error) {
    //     console.log('error')
    // }
    
    // fs.writeFile('fsystemAsy.txt', 'hai ini fsystemkuAsy', (error) => {
      //     console.log(error);
      // }); 
      
      
      // try {
        //     fs.mkdirSync('DATA', false)
        // } catch (error) {
          //     console.log('salah!!!!') ;  
          // }
          
          // try {
            //     fs.mkdirSync("DATA/fsystem.txt");   
            // } catch (e) {
              //     console.log( e )
              // }
              
              
              // fs.writeFile('test.txt', 'a' , (err) => {
                //   if (err) throw err;
                //   console.log('The file has been saved!');
                // });
                
                
                // macOS, Linux, and Windows
                
                // console.log(fs.readFileSync('data/test.txt', 'utf-8'));
                
                // fs.readFile('data/test.txt', (err, data) => {
                  //     if (err) throw err;
                  //     console.log(data);
                  //   });
                  // console.log(`okeyyy1 ${answer1}`);
                  // console.log(`okeyyy2 : ${answer}`);
                  
const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('namamu? ', (na) => {
    rl.question('nohp? ', (no) => {

      
      const contacts = {na,no};
      const file = fs.readFileSync('data/contacts.json', 'utf-8');
       const j = JSON.parse(file);

      j.push(contacts);
      fs.writeFileSync('data/contacts.json',JSON.stringify(j));
      rl.close();
    }); 
  });
  
  
  
  
  
  // fs.writeFile('test.txt',`{nama: ${na}, no HP: ${no}}` , (err) => {
  //     if (err) throw err;
  //     console.log('The file has been saved!');
  //   });
  