import "./Assignment1.css";

const Assignment1 = () => {
  return (
    <div className="profile-container">
      <div className="image">
        <img
          src="https://www.shutterstock.com/image-vector/cute-animated-character-animalsmalladorable-600nw-2337214701.jpg"
          alt="Profile Image"
          className="profile-img"
        />
      </div>
      <div className="text-data">
        <p>
          <b>CoolDude 69</b>
        </p>
        <p>London</p>
      </div>

      <div className="prof-line"></div>

      <div className="social-data">
        <div className="followers">
          <p className="prof-p1">80K </p>
          <p className="prof-p2"> Followers</p>
        </div>
        <div className="likes">
          <p className="prof-p1">803K </p>
          <p className="prof-p2"> Likes</p>
        </div>
        <div className="photos">
          <p className="prof-p1">1.4K </p>
          <p className="prof-p2"> Photos</p>
        </div>
      </div>

      {/* <div className="line"></div> */}
    </div>
  );
};

export default Assignment1;
