import { useState, createContext, useContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const value = {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
    }

    return (
        <UserContext.Provider 
            value={value}>
            {children}
        </UserContext.Provider>
    );
}

const useUserContext = () => {
    return useContext(UserContext);
}

export { UserProvider, useUserContext }