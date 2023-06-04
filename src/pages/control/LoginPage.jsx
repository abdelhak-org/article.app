import React ,{useState} from 'react'
import styles from "./controlstyle.module.css"
const LoginPage = ()=> {
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  
  return (
    <div>
    <form className={styles.control} onSubmit={handleSubmit}>
      <h3 className={styles.header__control}>Log in Your Account </h3>
      <div className={styles.form__control}>
        <label className={styles.label__control}>Email</label>
        <input
          className={styles.input__control}
          type="text"
          name="email"
          value={state.email}
          autoComplete="off"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.form__control}>
        <label className={styles.label__control}>Password</label>
        <input
          className={styles.input__control}
          type="password"
          name="password"
          value={state.password}
          autoComplete="off"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.form__control}>
        <button 
        className={styles.btn}
        type="submit">Login </button>
      </div>
    </form>
  </div>
   
  )
}

export default LoginPage
