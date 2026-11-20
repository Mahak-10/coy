
import { useEffect, useState } from "react";
import "./Discover.css";
import { motion, AnimatePresence } from "framer-motion";

function Discover() {
  const [profiles, setProfiles] = useState([]);
  const [showMatch, setShowMatch] = useState(false);
  const [matchedProfile, setMatchedProfile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/feed")
      .then((response) => response.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSwipe = async (profileId, action) => {
    try {
      const response = await fetch("http://localhost:5000/api/swipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profile_id: profileId,
          action: action,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.message === "It's a match!") {
          const profile = profiles.find(
            (profile) => profile.id === profileId
          );

          setMatchedProfile(profile);
          setShowMatch(true);
        }

        setProfiles((prev) =>
          prev.filter((profile) => profile.id !== profileId)
        );
      }
    } catch (error) {
      console.error("Swipe failed:", error);
    }
  };

  return (
    <div className="discover-page">
      {/* MATCH POPUP */}
      {showMatch && matchedProfile && (
        <div className="match-overlay">
          <div className="match-popup">
            <div className="match-avatars">
              <div className="avatar you-avatar">You</div>

              <div className="heart-circle">♥</div>

              <div className="avatar">
                <img
                  src={matchedProfile.photo}
                  alt={matchedProfile.name}
                />
              </div>
            </div>

            <h1>It's a match!</h1>

            <p>
              You and {matchedProfile.name} liked each other.
            </p>

            <a
              className="whatsapp-button"
              href={`https://wa.me/?text=${encodeURIComponent(
                `Hey ${matchedProfile.name}! We matched on Coy!`
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Say hi on WhatsApp
            </a>

            <button
              className="continue-button"
              onClick={() => setShowMatch(false)}
            >
              Continue Discovering
            </button>
          </div>
        </div>
      )}

      

      {/* PROFILE FEED */}
      {profiles.length === 0 ? (
        <p className="empty-state">
          No more profiles to discover!
        </p>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            className="profile-card"
            key={profiles[0].id}
            initial={{ opacity: 0, x: 150, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -300, rotate: -12 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
            }}
            drag="x"
            dragDirectionLock
            dragMomentum={false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(event, info) => {
              if (info.offset.x > 100) {
                handleSwipe(profiles[0].id, "like");
              } else if (info.offset.x < -100) {
                handleSwipe(profiles[0].id, "pass");
              }
            }}
          >
            <img
              src={profiles[0].photo}
              alt={profiles[0].name}
            />

            <h2>
              {profiles[0].name}, {profiles[0].age}
            </h2>

            <p>{profiles[0].college}</p>
            <p>{profiles[0].city}</p>
            <p>{profiles[0].bio}</p>
            <p>{profiles[0].interests}</p>

            {/* SWIPE BUTTONS */}
            <div className="swipe-buttons">
              <button
                onClick={() =>
                  handleSwipe(profiles[0].id, "pass")
                }
              >
                Pass
              </button>

              <button
                onClick={() =>
                  handleSwipe(profiles[0].id, "like")
                }
              >
                Like
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default Discover;
