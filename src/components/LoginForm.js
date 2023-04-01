function LoginForm({loginUser}) {
    return (
        <form className='form-element' onSubmit={(e) =>loginUser(e)}>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email"/>

            <label htmlFor="password">Password:</label>
            <input type="password" name="password"/>

            <button className="login-submit-btn" type="submit">Log In</button>
        </form>
    );
}

export default LoginForm;