import React from 'react'

const FunctionalComponent = ({ people }) =>  {
   const obj = [
        {
          id: 1,
          name: 'Bertie Yates',
          age: 29,
          email: 'abc@gmail.com'
        },
        {
          id: 2,
          name: 'Hester Hogan',
          age: 32,
          email: 'abtc@gmail.com'
        },
        {
          id: 3,
          name: 'Larry Little',
          age: 36,
          email: 'abhhc@gmail.com'
        },
        {
          id: 4,
          name: 'Sean Walsh',
          age: 34,
          email: 'abbc@gmail.com'
        },
        {
          id: 5,
          name: 'Lola Gardner',
          age: 29,
          email: 'asbc@gmail.com'
        },
      ];
    return (
        <>
          {people.map((person) => {
            const { id, name, age, email} = person;
            return (
              <article key={id} className='person'>
                <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                  <p>{email}</p>
                </div>
              </article>
            );
          })}
        </>
      );
    };
export default FunctionalComponent
