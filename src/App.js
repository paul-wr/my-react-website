import React, { Component } from 'react';
import './App.css';


class Header extends React.Component {

 onClick() {
    let x = document.querySelector('.main-nav');
    let y = document.querySelectorAll('.main-nav > li');
    let fa = document.querySelector('.fa-dz-nav');
    
    if(fa.className === 'fa fa-dz-nav fa-times'){
        fa.className = 'fa fa-dz-nav fa-bars';
    } else if (fa.className === 'fa fa-dz-nav fa-bars'){
        fa.className = 'fa fa-dz-nav fa-times';
    }

    if (x.className === "main-nav") {
        x.className += " responsive-nav animate";
        for(var i = 0; i < y.length; i++){
        y[i].className += " animate-li";
        }
    } else {
        x.className = "main-nav";
    }
}

  render() {
  return <header><ul className="main-nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Our Work</a></li>
      <li><a href="#">Services</a></li>
    </ul><i className="fa fa-dz-nav fa-bars" onClick={this.onClick}></i>
  </header>;
  }

}

class Footer extends React.Component {

  render() {
  return <footer></footer>;
  }

}


class App extends Component {

  render() {

    return (
      <div id="wrapper">
        <Footer />
        <Header />
      </div>  
    );
  }




  responsiveNavFunction = () => {
    console.log('this is:', this);
  }
}



export default App;
