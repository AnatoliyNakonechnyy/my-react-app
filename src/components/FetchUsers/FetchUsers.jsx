import { useEffect, useState } from 'react';
import { utilsFetchUsers } from './utils/UtilsFathUsers';

const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const handleFetchAndLoadUsers = async () => {
      setIsLoading(true);
      try {
        const usersResponse = await utilsFetchUsers();
        setUsers(usersResponse.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setIsLoading(false);
      }
    };
    handleFetchAndLoadUsers();
  }, []);

  return (
    <div>
      {isLoading && <p>Data is loading...</p>}
      {error && <p style={{ color: 'red' }}>{error.toString()}</p>}
      {!isLoading &&
        users.length > 0 &&
        users.map((user) => (
          <div key={user.id}>
            <p>{`${user.id} - ${user.name}`}</p>
          </div>
        ))}
    </div>
  );
};

export default FetchUsers;
