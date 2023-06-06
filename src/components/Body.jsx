import React from 'react'
import Cover from './partials/Cover'
import CardsBody from './partials/CardsBody'



// const contBody = [
//   {
//     id: 1,
//     title: '¿Cómo empezó todo?',
//     subtitle: 'Comenzando',
//     number: '01',
//     paragraph: 'aliquip ex ea commodo consequat. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//     source: img01,
//   },
//   {
//     id: 2,
//     title: 'Adaptación a los requerimientos',
//     subtitle: 'Nuestra Misión',
//     number: '02',
//     paragraph: 'aliquip ex ea commodo consequat. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//     source: img02,
//   },
//   {
//     id: 3,
//     title: 'Lo que queremos lograr',
//     subtitle: 'Nuestra reponsalibilidad.',
//     number: '03',
//     paragraph: 'aliquip ex ea commodo consequat. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//     source: img03,
//   }
// ]



const Body = () => {
  return (
    <div className='body'>
        <Cover/>
        <CardsBody/>
    </div>
  )
}

export default Body

          {/* {contBody.map(e => <CardsBody key={e.id} title={e.title} paragraph={e.paragraph} subtitle={e.subtitle} number={e.number} source={
          e.source}/> )} */}