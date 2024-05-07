import React from 'react'
import Person from './15_person'

// function Namelist() {
//   const names = ['Bruce', 'Clark', 'Diana']
//   const nameList = names.map(name => <h2>{name}</h2>)
//   return <div>{nameList}</div>
// }

/*
function Namelist() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'react'
        },
        {
            id: 2,
            name: 'Clark',
            age: 35,
            skill: 'angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'next'
        },
    ]
    // const personList = persons.map(i => <h2>I am {i.name}. I am {i.age} years old. I know {i.skill}.</h2>)
    // return <div>{personList}</div> 
    
    // refactoring the code
    const refactoredList = persons.map (i => (
        <Person key={i.id} i={i}></Person>
    ))
    return <div>{refactoredList}</div>

    // key is a unique attribute required when creating lists of elements.
    // they are not accessible in the child components. they can't render any data.

}
*/

function Namelist() {
  const names = ['Bruce', 'Clark', 'Diana']
  const nameList = names.map((name, index) => <h2 key = {index}> {index} {name} </h2>)
  return <div>{nameList}</div>
}

// When to use Index as a key?
// 1. When items in the list do not have a unique id.
// 2. The list is a static list and will not change.
// 3. The list will never be reordered or filtered.

export default Namelist