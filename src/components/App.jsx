

import { Form } from './Form/Form';
import { List } from './List/List';
import { Filter } from './Filter/Filter';

import { useSelector } from 'react-redux';

export function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const allContacts = JSON.parse(localStorage.getItem('newContact'));
  //   if (allContacts) {
  //     return allContacts;
  //   }
  //   return [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ];
  // });

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
