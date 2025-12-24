export default function UnControlledForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const userName = event.target.elements['userName'].value;
    console.log(event.target.elements['password'].value);
    alert("Name " + userName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        UserName
        <input type="text" name="userName" placeholder="enter username" />
      </label>
      <label>
        Password
        <input type="password" name="password" placeholder="enter pass" />
      </label>
      <button type="Submit">Send Data</button>
    </form>
  );
}
