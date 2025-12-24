import { useRef } from 'react';

export default function UnControlledFormRef() {
  const inputRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Name: ' + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        UserName
        <input type="text" ref={inputRef} placeholder="enter username" />
      </label>
      <label>
        Password
        <input type="password" name="password" placeholder="enter pass" />
      </label>
      <button type="Submit">Send Data</button>
    </form>
  );
}
