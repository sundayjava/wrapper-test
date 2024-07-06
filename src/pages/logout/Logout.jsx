import { Link } from 'react-router-dom';

const Logout = () => {

    const handleLogout = async () => {
        // Implement logout logic here (e.g., API call, remove authentication token)
        try {
            // Replace with your specific logout logic (e.g., API call)
            const response = await fetch('/api/logout'); // Example API call

            if (response.ok) {
                // Logout successful, redirect to login page
            } else {

                console.error('Logout failed:', response);
            }
        } catch (error) {
            // Handle network errors (optional)
            console.error('Error during logout:', error);
        }
    };

    return (
        <div>
            <h1>Are you sure you want to Log Out?</h1>
            <Link to="/signin" onClick={handleLogout}>Logout</Link>
        </div>
    );
};

export default Logout;