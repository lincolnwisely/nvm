import React from 'react';

class Registry extends React.Component {
  render() {
    return(
      <div id="registry">
        <div className="container">
          <h2>Registry</h2>
          <div className="items">
            <a href="https://www.target.com/gift-registry/giftwebberwisely" target="_blank"><img src="app/images/target.png" /></a>
            <a href="https://www.amazon.com/wedding/arin-webber-lincoln-wisely-st-louis-march-2018/registry/2E74W8MB3KDEY" target="_blank"><img src="app/images/amazon.png" /></a>
            <a href="https://www.cb2.com/gift-registry/lincoln-wisely-and-arin-webber/r5699234" target="_blank"><img src="app/images/cb2.png" /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Registry;
