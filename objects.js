import input from './input.js'
let numOfStudents = await input("Hány adatot szeretnél megadni?");

let students = [];

for (let i = 0; i < numOfStudents; i++) {
    let name = await input(`Név :`);
    let email = await input(`E-mail: `);
    
    let studentData = {
        name: name,
        email: email
    };
    
    students.push(studentData);
}

console.log("\nA tanulók adatai:");
students.forEach(student => {
    console.log(`Név: ${student.name} E-mail: ${student.email}`);
});





const orarend = {
    hétfő: [
      { óra: 1, tantárgy: 'Matematika', tanár: 'Kovács János' },
      { óra: 2, tantárgy: 'Magyar', tanár: 'Nagy Zsófia' },
      { óra: 3, tantárgy: 'Fizika', tanár: 'Bodnár Béla' }
    ],
    kedd: [
      { óra: 1, tantárgy: 'Biológia', tanár: 'Szabó Andrea' },
      { óra: 2, tantárgy: 'Informatika', tanár: 'Tóth Péter' },
      { óra: 3, tantárgy: 'Kémia', tanár: 'Kiss László' }
    ],
    szerda: [
      { óra: 1, tantárgy: 'Történelem', tanár: 'Farkas Tamás' },
      { óra: 2, tantárgy: 'Földrajz', tanár: 'Varga Éva' },
      { óra: 3, tantárgy: 'Angol', tanár: 'Péter Márta' }
    ],
    csütörtök: [
      { óra: 1, tantárgy: 'Fizika', tanár: 'Bodnár Béla' },
      { óra: 2, tantárgy: 'Matematika', tanár: 'Kovács János' },
      { óra: 3, tantárgy: 'Ének', tanár: 'Kovács Krisztina' }
    ],
    péntek: [
      { óra: 1, tantárgy: 'Biológia', tanár: 'Szabó Andrea' },
      { óra: 2, tantárgy: 'Informatika', tanár: 'Tóth Péter' },
      { óra: 3, tantárgy: 'Társadalomismeret', tanár: 'Horváth Gábor' }
    ]
  };
  
  function kiirOrarend(orarend) {
    for (let nap in orarend) {
      console.log(`${nap.charAt(0).toUpperCase() + nap.slice(1)}:`); 
      orarend[nap].forEach((ora) => {
        console.log(`Óra: ${ora.óra}, Tantárgy: ${ora.tantárgy}, Tanár: ${ora.tanár}`);
      });
      console.log(''); 
    }
  }
  
  kiirOrarend(orarend);



  