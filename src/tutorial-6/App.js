import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import PersonalInfoForm from './components/Forms/NextForm/PersonalForm/PersonalInfoForm';
import AddressForm from './components/Forms/NextForm/PersonalForm/AddressForm';
import Result from './components/Forms/NextForm/PersonalForm/Result';
import styles from './style.module.scss';

export default function App() {
  const [formValues, setFormValues] = React.useState({});

  const history = useHistory();

  const nextStep = (name) => {
    history.push(name);
  };

  console.log('MAIN FORM', formValues);

  return (
    <div className={styles.App}>
      <Route
        path="/"
        render={() => (
          <PersonalInfoForm nextStep={nextStep} setFormValues={setFormValues} />
        )}
        exact
      />
      <Route
        path="/address"
        render={() => (
          <AddressForm nextStep={nextStep} setFormValues={setFormValues} />
        )}
        exact
      />
      <Route
        path="/result"
        render={() => <Result formValues={formValues} />}
        exact
      />
    </div>
  );
}
