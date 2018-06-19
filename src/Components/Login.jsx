import React from 'react';

const Login = () => {

  const signIn = (e) => {
    e.preventDefault();
    alert('It is work');
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <section>
      <form>
        <label htmlFor="loggin">Логин</label>
        <input id="loggin" type="text" onChange={handleChange} required /><br />
        <label htmlFor="pass">Пароль</label>
        <input id="pass" type="password" required />
        <button onClick={signIn}>Войти</button>
      </form>
    </section>
  );

};

export default Login;
