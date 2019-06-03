import React from 'react';

/**
 * A person's card with it's data
 * @param {Object} props - PersonCard properties
 * @param {string} props.name - Person's name
 * @param {number} props.age - Person's age
 * @param {string[]} props.phoneNumbers - Person's phone numbers
 * @param {string} [props.gender] - Person's gender
 */
const PersonCard = ({ name, age, phoneNumbers, gender }) => {
  return (
    <div>
      <div>
        <b>Name: </b><span>{name}</span>
      </div>
      <div>
        <b>Age: </b><span>{age}</span>
      </div>
      <div>
        <b>Phone numbers:</b> <span>{phoneNumbers.join(' | ')}</span>
      </div>
      {
        gender &&
        <div>
          <b>Gender:</b> <span>{gender}</span>
        </div>
      }
    </div>
  );
};

export default PersonCard;