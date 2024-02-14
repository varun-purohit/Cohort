import { useState, useEffect } from "react";
import s from "./Assignment5.module.css";

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
    <div className={s.profile_container}>
      {/* {console.log("avatarurl", console.log(profData))} */}
      <div className={s.image}>
        <img
          src={profData?.avatar_url}
          alt="Profile Image"
          className={s.profile_img}
        />
      </div>
      <div className={s.text_data}>
        <p>
          <b>{profData?.name}</b>
        </p>
        <p>{profData?.login}</p>
        <p>{profData?.bio}</p>
      </div>

      <div className={s.prof_line}></div>

      <div className={s.social_data}>
        <div className={s.followers}>
          <p className={s.prof_p1}>{profData.followers} </p>
          <p className={s.prof_p2}> Followers</p>
        </div>
        <div className={s.likes}>
          <p className={s.prof_p1}>{profData.following} </p>
          <p className={s.prof_p2}> Following</p>
        </div>
        <div className={s.photos}>
          <p className={s.prof_p1}>{profData.public_repos}</p>
          <p className={s.prof_p2}> Repos</p>
        </div>
      </div>

      {/* <div className="line"></div> */}
    </div>
  );
}

export default Assignment5;
