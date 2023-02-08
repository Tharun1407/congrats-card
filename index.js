const element = (
  <div className="container">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        alt="person"
      />
      <h1 className="heading1">Tharun Bheesetty</h1>
      <p className="para">I am a full stack Developer</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        alt="watch"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
