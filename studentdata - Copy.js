const students = [
    {
        "name": "Victor",
        "class": "Primary 3",
        "gender": "Male",
        "age":8,
        "imageUrl": "student_images/victor.png"
    },
    {
        "name": "Mary",
        "class": "Primary 3",
        "gender": "Female",
        "age":9,
        "imageUrl": "student_images/mary.png"
    },
    {
        "name": "James",
        "class": "Primary 1",
        "gender": "Male",
        "age":8,
        "imageUrl": "student_images/james.png"
    },
    {
        "name": "Olivia",
        "class": "Primary 1",
        "gender": "Male",
        "age":8,
        "imageUrl": "student_images/olivia.png"
    },
    {
        "name": "Liam",
        "class": "Primary 4",
        "gender": "Female",
        "age":10,
        "imageUrl": "student_images/liam.png"
    },
    {
        "name": "David",
        "class": "Primary 3",
        "gender": "Male",
        "age":11,
        "imageUrl": "student_images/sophia.png"
    },
    {
        "name": "Lucas",
        "class": "Primary 3",
        "gender": "Male",
        "age":12,
        "imageUrl": "student_images/lucas.png"
    },
    {
        "name": "Emma",
        "class": "Primary 3",
        "gender": "Male",
        "age":12,
        "imageUrl": "student_images/emma.png"
    },
    {
        "name": "Ethan",
        "class": "Primary 3",
        "gender": "Female",
        "age":12,
        "imageUrl": "student_images/ethan.png"
    },
    {
        "name": "Ava",
        "class": "Primary 2",
        "gender": "Male",
        "age":10,
        "imageUrl": "student_images/ava.png"
    }
]
const studentList = document.querySelector('.studentList');
function createSingleCard (singleStudentObject){
    const card=document.createElement('div');
    card.setAttribute('class','card');

    const imageSection =document.createElement('div');
    imageSection.setAttribute('class','image-section');
    imageSection.style.backgroundImage =`url(${singleStudentObject.imageUrl})`;

    const datasection= document.createElement('div')
    datasection.setAttribute('class','data-section')

    const name= document.createElement('h2');
    name.setAttribute('class','name')
    name.innerText=singleStudentObject.name;

    const paragraph = document.createElement('p');
    paragraph.setAttribute('class','class')
    paragraph.innerText=singleStudentObject.class;

    const gender = document.createElement('p');
    gender.setAttribute('class','gender')
    gender.innerText=singleStudentObject.gender;

    datasection.appendChild(name);
    datasection.appendChild(paragraph);
    datasection.appendChild(gender);

    card.appendChild(imageSection);
    card.appendChild(datasection);
    return card;
}

for (let index = 0; index < students.length; index++) {
    studentList.appendChild(createSingleCard(students[index]));    
}

const newStudents = students.map((x,i) => {
   return `${x.name.toUpperCase() } ${i+1}`;
});

console.log(newStudents);

//const filteredArray = students.filter((item) => item.name.toLowerCase() === "ethan")
//console.log(filteredArray);

   //filteredArray= students.filter((item) => item.age === "<=10")
//console.log(filteredArray);

// const searchInput = document.getElementsByName('search-input')[0];
// console.log(searchInput )

//  searchInput .addEventListener ('keydown',filterStudentCards);

// function filterStudentCards(){
//     const searchhandle = searchInput.value; 
//     const studentCards = studentList.children;
//     console.log(searchhandle)
//     console.log(studentCards)

//     for(let i=0;i<studentCards.length;i++){
//         const studentCard = studentCards[i];
//         console.log(studentCard)
//         const studentName = studentCard.querySelector('.name').textContent.toLowerCase();
        
//         if (studentName.includes(searchhandle)){
//             studentCard.classList.remove('filtered');
//         } else {
//            studentCard.classList.add('filtered');
//         }

//    }
//    return;
// }

//declare the variable
//
// create a variable called filteredArray
//i could use an arrow function
//create a for loop
//use the if and else statements
// const searchInput = document.getElementsByName('search-input')[0];
// console.log(searchInput ) 

// searchInput .addEventListener ('keyup',filterStudentCards);
// function filterStudentCards(){
//    const searchhandle = searchInput.value; 
//     const studentCards = studentList.children;
//     console.log(searchhandle)
//     console.log(studentCards)

//    for(let i=0;i<studentCards.length;i++){
//         const studentCard = studentCards[i];
//        console.log(studentCard)
//         const studentName = studentCard.querySelector('.name').textContent.toLowerCase();
        
//         if (studentName.includes(searchhandle)){
//             studentCard.classList.remove('filtered');
//        } else {
//             studentCard.classList.add('filtered');
//        }
//         const filteredArray = students.filter((item) => item.studentCard === "studentName");            
//         console.log(filteredArray)
//     }
//     return;
// }


const searchInput =document.querySelector("input[name='search-input']");
console.log(searchInput)
const studentCardsContainer = document.querySelector('.studentList');

searchInput.addEventListener('keyup',() => {
    const searchvalue = searchInput.value.toLowerCase();
    const filteredCards = students.filter(student => 
    student.name.toLowerCase().includes(searchvalue) ||
    student.class.toLowerCase().includes(searchvalue) ||
    student.gender.toLowerCase()===searchvalue)
    console.log(filteredCards);

    studentList.innerHTML='';
    if (filteredCards.length) {
        for (let index = 0; index < filteredCards.length; index++) {
            studentList.appendChild(createSingleCard(filteredCards[index])); 
        }
        
    } else{
        const paragraph = document.createElement('p');
        paragraph.innerText='search not found';
        studentList.appendChild(paragraph);
    }
});