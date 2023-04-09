function CreateUserForm({createUser}) {
    return (
        <form className='form-element' onSubmit={(e) => createUser(e)}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"/>

            <label htmlFor="displayName">User Name</label>
            <input type="text" name="displayName"/>

            <label htmlFor="userPassword">Password</label>
            <input type="password" name="password"/>

            <button className="login-submit-btn"> Submit</button>
        </form>
    );
}
export default CreateUserForm;