import './App.css';
import ControlledForm from './components/ControlledForm/ControlledForm';
import FetchUsers from './components/FetchUsers/FetchUsers';
import UnControlledForm from './components/UnControlledForm/UnControlledForm';
import UnControlledFormRef from './components/UnControlledForm/UnControlledFormRef';

function App() {
  return (
    <>
      <fieldset>
        <legend>UnControlledForm:</legend>
        <UnControlledForm />
      </fieldset>
      <fieldset>
        <legend>UnControlledFormRef:</legend>
        <UnControlledFormRef />
      </fieldset>
      <fieldset>
        <legend>ControlledForm:</legend>
        <ControlledForm />
      </fieldset>

      <FetchUsers />
    </>
  );
}

export default App;
