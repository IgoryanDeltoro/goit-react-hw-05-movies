import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Icon, Input, Wrapper } from './SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const hendleInputValue = event => {
    setSearch(event.target.value);
  };

  const hendleOnSubmit = event => {
    event.preventDefault();
    if (search !== '') {
      onSubmit(search.trim());
      reset();
    }
  };
  const reset = () => {
    setSearch('');
  };

  return (
    <Wrapper>
      <form onSubmit={hendleOnSubmit}>
        <Input
          id="btn"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={search}
          onChange={hendleInputValue}
        />
        <Button type="submit">
          <Icon />
        </Button>
      </form>
    </Wrapper>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBox;
