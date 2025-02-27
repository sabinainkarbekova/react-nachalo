import React from "react";

function Special() {
  return (
    <div className="specialSection">
      <div className="specialContent">
        <img src="https://media.discordapp.net/attachments/1192465756114399332/1341682118547472426/SpecialT.png?ex=67b6e258&is=67b590d8&hm=5f9cde730312843557fb43bcdf80de923613bf7d8e5bc48b41e60b93535a7184&=&format=webp&quality=lossless&width=798&height=593" alt="Special" className="specialImage" />
        <div className="specialText">
          <h4 className="specialSubtitle">WHY WE STARTED</h4>
          <h2 className="specialTitle">
            It started out as a simple idea and evolved into our passion
          </h2>
          <p className="specialDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <button className="specialButton">Discover our story {">"}</button>
        </div>
      </div>
    </div>
  );
}
export default Special;