import PropTypes from 'prop-types';
import React from 'react';
export class ContactList extends React.Component {
  state = {
    contacts: this.props.contacts,
  };

  remove = event => {
    event.preventDefault();
    this.props.remove(event.target.parentElement.firstChild.textContent);
  };
  render() {
    return (
      <ul>
        <h2>Contacts</h2>
        {this.state.contacts.map(elem => (
          <li key={elem.id}>
            <p>{elem.name}</p>
            <p>{elem.number}</p>
            <button type="Button" onClick={this.remove}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  remove: PropTypes.func,
};

// jesli mamy komponent funkcyjny to elementy się re-renderują

// import PropTypes from 'prop-types';
// import React from 'react';
// export const ContactList = contacts => {
//   const remove = event => {
//     console.log(event.target.parentElement.firstChild.textContent);
//   };
//   return (
//     <>
//       <ul>
//         <h2>Contacts</h2>
//         {contacts.contacts.map(elem => (
//           <li key={elem.id}>
//             <p>{elem.name}</p>
//             <p>{elem.number}</p>
//             <button type="Button" onClick={remove}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   remove: PropTypes.func,
// };
