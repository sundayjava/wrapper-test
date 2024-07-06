import React, { createContext, useState, useEffect } from 'react';
import Loading from "../pages/load/Loading"; // Assuming Loading component is defined

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Initialize user state as null
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await getUserData(); // Example function to fetch user data
                setUser(userData); // Set user data
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched or error occurs
            }
        };

        fetchUserData();
    }, []);

    // Example function to simulate fetching user data
    const getUserData = async () => {
        // Replace with actual API call or login logic
        try {
            const response = await fetch('/api/content-creators/id'); // Adjust endpoint as per your backend setup
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Check content-type to ensure the response is JSON
            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new TypeError("Received non-JSON response");
            }

            const userData = await response.json();
            return userData;
        } catch (error) {
            console.error('Error in getUserData:', error);
            throw error;
        }
    };

    // Return loading state until data is fetched
    if (loading) {
        return <Loading />; // Render the Loading component while data is being fetched
    }

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};


