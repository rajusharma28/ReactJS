import { useEffect, useState, useCallback } from "react";

function Body() {
    const [profiles, setProfiles] = useState([]);
    const [numProfilesToLoad, setNumProfilesToLoad] = useState(10);
    const [searchUser, setSearchUser] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // useCallback to memoize the function and prevent unnecessary re-renders
    const fetchRandomProfiles = useCallback(async (count) => {
        setLoading(true);
        setError(null);
        
        // Better random ID generation - GitHub user IDs go much higher
        const randomStartId = Math.floor(1 + Math.random() * 10000000);

        try {
            const response = await fetch(
                `https://api.github.com/users?since=${randomStartId}&per_page=${count}`
            );
            
            // Check if response is OK
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            setProfiles(data);
        } catch (error) {
            console.error("Error fetching profiles:", error);
            setError(`Failed to load profiles: ${error.message}`);
            setProfiles([]);
        } finally {
            setLoading(false);
        }
    }, []); // Empty dependency array since we don't use any external variables

    useEffect(() => {
        fetchRandomProfiles(numProfilesToLoad);
    }, [fetchRandomProfiles, numProfilesToLoad]);

    const filteredProfiles = profiles.filter((user) =>
        user.login.toLowerCase().includes(searchUser.toLowerCase())
    );

    const handleNumProfilesChange = (e) => {
        const value = parseInt(e.target.value, 10);
        // Validate input and set reasonable limits
        if (!isNaN(value) && value > 0 && value <= 100) {
            setNumProfilesToLoad(value);
        }
    };

    return (
        <div className="but">
            <div className="input-group">
                <input
                    type="number"
                    className="inpu"
                    placeholder="Number of profiles (1-100)"
                    value={numProfilesToLoad}
                    onChange={handleNumProfilesChange}
                    min="1"
                    max="100"
                />
                <button 
                    onClick={() => fetchRandomProfiles(numProfilesToLoad)}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Load Random Profiles"}
                </button>
            </div>

            <div className="input-group">
                <input
                    type="text"
                    className="inpu search-input"
                    placeholder="Search username"
                    value={searchUser}
                    onChange={(e) => setSearchUser(e.target.value)}
                />
            </div>

            {error && (
                <div className="error-message">
                    {error}
                    {error.includes('rate limit') && (
                        <p>GitHub API rate limit exceeded. Please try again later.</p>
                    )}
                </div>
            )}

            <div className="container">
                {loading ? (
                    <p>Loading profiles...</p>
                ) : filteredProfiles.length > 0 ? (
                    filteredProfiles.map((value) => (
                        <div key={value.id} className="cards">
                            <img 
                                src={value.avatar_url} 
                                alt={value.login} 
                                className="avatar"
                            />
                            <h2>{value.login}</h2>
                            <a
                                href={value.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="profile-link"
                            >
                                View Profile
                            </a>
                        </div>
                    ))
                ) : (
                    <p className="no-profiles-message">
                        {profiles.length > 0 && searchUser
                            ? "No matching profiles found."
                            : "No profiles loaded. Try loading again."}
                    </p>
                )}
            </div>
        </div>
    );
}

export default Body;