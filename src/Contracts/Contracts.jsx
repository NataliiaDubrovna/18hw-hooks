import React from 'react';
import User from '../User/User.jsx';
import Checkbox from '../Checkbox/Checkbox.jsx';


function Contracts(){
    const data = [{
            firstName: "Барней",
            lastName: "Стинсовський",
            phone: "+380956319521",
            gender: "male"
        }, {
            firstName: "Робін",
            lastName: "Щербатська",
            phone: "+380931460123",
            gender: "female"
        }, {
            firstName: "Анонімний",
            lastName: "Анонімус",
            phone: "+380666666666"
        }, {
            firstName: "Лілія",
            lastName: "Олдровна",
            phone: "+380504691254",
            gender: "female"
        }, {
            firstName: "Маршен",
            lastName: "Еріксонян",
            phone: "+380739432123",
            gender: "male"
        }, {
            firstName: "Теодор",
            lastName: "Мотсбес",
            phone: "+380956319521",
            gender: "male"
        }];
        
    let [users, setUsers] = React.useState(data);
    let [searchName , setSearchName] = React.useState('');
    let [gender, setGender] = React.useState(['male','female','undefined']);

    function handleInput(event){
        event.preventDefault();
        setSearchName(event.target.value.toLowerCase());
    }

    React.useEffect(()=>{
        console.log(gender, gender.length);

        // let checkedUsers = [...users];

        //  if(gender.length === 0){
        //     checkedUsers = [...users];
        //  } else if( gender.includes('undefined')) {
        //    checkedUsers = users.filter((user)=>typeof user.gender === 'undefined')
        //    console.log(users.filter((user)=> typeof user.gender === "undefined"))
        //  } else if (gender.includes('male')){
        //      checkedUsers = users.filter((user)=> user.gender === "male")
        //  } else if (gender.includes('female')){
        //     checkedUsers = users.filter((user)=> user.gender === "female")
        // }
        // setUsers(checkedUsers);
    
    let female = [];
    let male = [];
    let unknown = [];

    if (gender.includes('female')) {
        female = female.concat(
        users.filter((user) => user.gender === "female")
    )
    } else { female = []}
    if (gender.includes('male')) {
        male = male.concat(
        users.filter((user) => user.gender === "male")
      );
    }else{male=[]}
    if (gender.includes('undefined')) {
        unknown = unknown.concat(
        users.filter((user) => user.gender !== "male" && user.gender !== "female")
      );
    }else{unknown=[]}
    setUsers([
      ...new Set(female.concat(male).concat(unknown)),
    ])
    }, [gender]
    )

    return(
        <div>
            <form>
                <input type="text" placeholder="Search for Last Name...." value={searchName} onChange={handleInput} />
            </form>
            <Checkbox changeGender={setGender} gender={gender}/>
            <div>
                {users.filter((user)=>{
                    if(searchName === ""){
                        return user;
                    } else if(user.lastName.toLowerCase().includes(searchName.toLowerCase())){
                        return user;
                    }
                }).map((user)=>{
                    return <User key={user.firstName} firstName={user.firstName}  lastName={user.lastName} phone={user.phone} gender={user.gender}/>
                })}
            </div>
        </div>
    );
}

export default Contracts;




    
// let female = [];
// let male = [];
// let unknown = [];

// if (gender.includes('female')) {
//     female = female.concat(
//     users.filter((user) => user.gender === "female")
//   );
// }
// if (gender.includes('male')) {
//     male = male.concat(
//     users.filter((user) => user.gender === "male")
//   );
// }
// if (gender.includes('undefined')) {
//     unknown = unknown.concat(
//     users.filter((user) => user.gender !== "male" && user.gender !== "female")
//   );
// }
// setUsers([
//   ...new Set(female.concat(male).concat(unknown)),
// ]);