import profilePic from  "./bird.jpg"

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        src={profilePic}
        alt="profile picture bla bla"
      ></img>
      <h2 className="card-title">Bro code</h2>
      <p className="card-text">I make YouTube videos and play vide game</p>
    </div>
  );
}

export default Card;
