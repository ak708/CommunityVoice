import { useState } from "react";

export default function Home() {
    const [username, setUsername] = (useState < string) | (null > null);

    const loginWithReddit = () => {
        const clientId = process.env.REDDIT_CLIENT_ID;
        const redirectUri = process.env.REDDIT_REDIRECT_URI;
        const scope = "identity"; // Minimal scope to get username
        const state = "randomstring123"; // Prevent CSRF, can be random
        const authUrl = `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=code&state=${state}&redirect_uri=${redirectUri}&duration=temporary&scope=${scope}`;
        window.location.href = authUrl;
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
                CommunityVoice
            </h1>
            {!username ? (
                <button
                    onClick={loginWithReddit}
                    className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
                >
                    Login with Reddit
                </button>
            ) : (
                <p className="text-lg">Welcome, {username}!</p>
            )}
        </div>
    );
}
