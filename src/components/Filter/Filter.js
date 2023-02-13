import PropTypes from 'prop-types';
import React from 'react';

export class Filter extends React.Component {
  handleChange = evt => {
    evt.preventDefault();
    const input = evt.currentTarget;
    this.props.handleChange(input.value);
  };

  render() {
    return (
      <>
        <h2> Find contacts by name</h2>
        <input
          onChange={this.handleChange}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
};
