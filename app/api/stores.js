import {apiRequest} from './utils';

//city, locality
//locality, city
async function getStores(locality, city) {
  console.log('Load start');
  const stores = await apiRequest(
    'GET',
    `/customer/search-shopkeepers/city/${city}/locality/${locality}`,
  );
  //   const stores = await apiRequest('GET', '/users');
  console.log(stores);
  return stores;
}

// function Stores() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function loadUsers() {
//       try {
//         console.log('Load start');
//         const users = await apiRequest('GET', '/users');
//         console.log('Load done', users);
//         setUsers(users);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     loadUsers();
//   }, []);
//   return users;
// }

export default getStores;
