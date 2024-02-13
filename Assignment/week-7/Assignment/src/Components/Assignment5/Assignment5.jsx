import { useState, useEffect } from "react";
import "./Assignment5.css";

function Assignment5() {
  const [profData, setProfDtata] = useState({});
  useEffect(() => {
    const gitData = async () => {
      const response = await fetch(`https://api.github.com/users/hkirat`);
      const data = await response.json();
      console.log("data", data);
      setProfDtata(data);
    };
    gitData();
  }, []);
  return (
    <div className="profile-container">
      {/* {console.log("avatarurl", console.log(profData))} */}
      <div className="image">
        <img
          src={profData?.avatar_url}
          alt="Profile Image"
          className="profile-img"
        />
      </div>
      <div className="text-data">
        <p>
          <b>{profData?.name}</b>
        </p>
        <p>{profData?.login}</p>
        <p>{profData?.bio}</p>
      </div>

      <div className="prof-line"></div>

      <div className="social-data">
        <div className="followers">
          <p className="prof-p1">{profData.followers} </p>
          <p className="prof-p2"> Followers</p>
        </div>
        <div className="likes">
          <p className="prof-p1">{profData.following} </p>
          <p className="prof-p2"> Following</p>
        </div>
        <div className="photos">
          <p className="prof-p1">{profData.public_repos}</p>
          <p className="prof-p2"> Repos</p>
        </div>
      </div>

      {/* <div className="line"></div> */}
    </div>
  );
}

export default Assignment5;
