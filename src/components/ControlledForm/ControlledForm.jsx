import { useState } from 'react';

export default function ControlledForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('');
  const [isEmployee, setIsEmployee] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEmployee) {
      alert('Name: ' + userName + ' position: ' + position);
    } else {
      alert('Name: ' + userName);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        UserName
        <input
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          type="text"
          placeholder="enter username"
        />
      </label>
      <label>
        Password
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="enter pass"
        />
      </label>
      <label>
        Employee
        <input
          value={isEmployee}
          onChange={(event) => setIsEmployee(event.target.checked)}
          type="checkbox"
        />
      </label>

      {isEmployee && (
        <label>
          Position
          <input
            value={position}
            onChange={(event) => setPosition(event.target.value)}
            type="text"
          />
        </label>
      )}
      <button type="Submit">Send Data</button>
    </form>
  );
}
