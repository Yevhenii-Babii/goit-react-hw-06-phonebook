import { Form } from './Form/Form';
import { List } from './List/List';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';

export function App() {
  const contacts = useSelector(state => state.contacts.contacts);

  const filter = useSelector(state => state.filter.filter);

  const filterName = () => {
    const filterName = filter.toLowerCase().trim();
    return contacts.filter(user =>
      user.name.toLowerCase().trim().includes(filterName)
    );
  };

  return (
    <>
      <Form />
      <List contacts={filterName()} />
      <Filter />
    </>
  );
}
