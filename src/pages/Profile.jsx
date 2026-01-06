import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="w-96 m-auto mt-10 font-bold text-2xl">Loading...</div>
    );
  }

  return (
    <div className="min-h-[80vh] flex justify-center items-start p-10">
      {isAuthenticated && user ? (
        <div className="flex gap-10">
          {/* User Image */}
          <div className="w-60 h-60 border p-2 rounded-2xl">
            <img
              src={user.picture || "https://i.pravatar.cc/150?img=3"} // fallback image
              alt={user.name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* User Info */}
          <div className="flex flex-col justify-start gap-4 font-Noto">
            <h1 className="capitalize">
              Name: <span className="text-orange-600 font-bold">{user.name}</span>
            </h1>
            <h1>
              Email: <span className="text-orange-600 font-bold">{user.email}</span>
            </h1>
            <h1>
              Email Verified:{" "}
              <span className="text-orange-600 font-bold">
                {user.email_verified ? "Yes" : "No"}
              </span>
            </h1>

            {/* Logout Button */}
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="mt-6 bg-orange-600 text-white font-bold px-6 py-2 rounded-lg w-40"
            >
              Log Out
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl font-bold">
          You are not logged in. Please log in to see your profile.
        </p>
      )}
    </div>
  );
}

export default Profile;
