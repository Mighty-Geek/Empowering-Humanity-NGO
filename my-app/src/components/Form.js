import { useState } from 'react';

export default function Form() {

    // States for registration
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [profile, setProfile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contacts, setContacts] = useState([]);

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    const handleStatus = (e) => {
        setStatus(e.target.value);
        setSubmitted(false);
    };

    const handleProfile = (e) => {
        setProfile(e.target.value);
        setSubmitted(false);
    };

    const handleContacts = (e) => {
        setContacts(e.target.value);
        setSubmitted(false);
    }

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '' || status === '' || contacts.length === 0) {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };
    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    return (
        <div className="form">
            <div className="heading">
                <h1>User Registration</h1>
            </div>

            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form>
                {/* Labels and inputs for form data */}
                <label className="label">Name</label>
                <input onChange={handleName} className="input"
                    value={name} type="text" />

                <label className="label">Status</label>
                <select type="text" name="status" onChange={handleStatus}>
                    <option value='female'>Female</option>
                    <option value='kid'>Kid</option>
                    <option value='senior'>Senior citizen</option>
                </select>

                <label className="label">Profile</label>
                <select type="text" name="profile" onChange={handleProfile}>
                    <option value='user'>User</option>
                    <option value='admin'>Admin</option>
                    <option value='superadmin'>Super Admin</option>
                </select>

                <label className="label">Emergency Contacts</label>
                <input onChange={handleContacts} className="input" value={contacts} type="text" />

                <label className="label">Email</label>
                <input onChange={handleEmail} className="input"
                    value={email} type="email" />

                <label className="label">Password</label>
                <input onChange={handlePassword} className="input"
                    value={password} type="password" />

                <button onClick={handleSubmit} className="form-btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}