import { useContext } from 'react';
import UserContext from '../components/usercontext';

export default function Skills() {
    const { theme } = useContext(UserContext);
    return (
        <div>
            <h1>Skills</h1>
        </div>
    );
};