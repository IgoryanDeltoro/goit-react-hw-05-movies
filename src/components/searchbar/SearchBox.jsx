import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Icon, Input, Wrapper, Form } from './SearchBox.styled';

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
      <Form onSubmit={hendleOnSubmit}>
        <Input
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
      </Form>
    </Wrapper>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBox;
