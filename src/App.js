import React, { Component } from 'react';
import './App.css';
import memberOneScreenShot from './member1.jpg';
import memberTwoScreenShot from './member2.jpg';
import memberThreeScreenShot from './member3.jpg';




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
  return <header><h1 id="header-text">My React Website</h1><ul className="main-nav">
      <li><a href="">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#ourteam">Our Team</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul><i className="fa fa-dz-nav fa-bars" onClick={this.onClick}></i>
  </header>;
  }

}

class Section extends React.Component {

  render() {
  return <section><MainImage />
    <div className="content">
    <span id="ourteam"></span>
    <OurTeam />
    <span id="about"></span>
    <h1 id="teamHeading">About</h1>
    <hr className="customLine"/>
    <article id="main-article">
    What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
<hr />
 What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
  </article>
  </div>
  <span id="contact"></span>
  <Contact />
  </section>;
  }

}

class Footer extends React.Component {

  render() {
  return <footer><cite>&copy; 2018 Company
  </cite>
  <address>
    Visit us at:<br/>
    Example.com<br/>
    Box 564, Disneyland<br/>
    USA
    </address>
  </footer>;
  }

}


class OurTeam extends React.Component {
 

  render() {
    const memberOne = ['Whan Khan', 'whan@company.com', 888234567]
    const memberTwo = ['Joshua Dylan', 'joshua@company.com', 888234564]
    const memberThree = ['Lara Kent', 'lara@company.com', 888234561]

      return <div>
      <div className="row">
        <h1 id="teamHeading">Our Team</h1>
        <hr className="customLine"/>
      </div>
      <div className="row">  
          <div className="span4">
            <div className="teamMember">
              <div className="memberContainer">
                <img src={memberOneScreenShot} alt="Avatar" className="image" />
                <div className="overlay">
                  <div className="text">{ memberOne[1] }<br/><br/>
                      { memberOne[0] }<br/><br/>
                      <a className="call"  href="tel{memberOne[2]}">Call Me</a><br/><br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="span4">
            <div className="teamMember">
              <div className="memberContainer">
                <img src={memberTwoScreenShot} alt="Avatar" className="image" />
                <div className="overlay">
                  <div className="text">{ memberTwo[1] }<br/><br/>
                  { memberTwo[0] }<br/><br/>
                  <a className="call" href="tel{memberTwo[2]}">Call Me</a><br/><br/></div>
                </div>
              </div>
            </div>
          </div>
          <div className="span4">
            <div className="teamMember">
              <div className="memberContainer">
                <img src={memberThreeScreenShot} alt="Avatar" className="image" />
                <div className="overlay">
                  <div className="text">{ memberThree[1] }<br/><br/>
                  { memberThree[0] }<br/><br/>
                  <a className="call" href="tel{memberTwo[2]}">Call Me</a><br/><br/></div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>  
  }

}

class MainImage extends React.Component {

  render(){
    return <div id="home-section-one"> <div id="icon-wrapper">
      <a href="http://facebook.com"><i className="fa fa-facebook"></i></a><br/>
      <a href="http://twitter.com"><i className="fa fa-twitter"></i></a><br/>
      <a href="http://instagram.com"><i className="fa fa-instagram"></i></a><br/>
    </div>  <div id="contact-wrapper"><a className="contact" href="#contact">Get in Touch</a></div></div>
  }
}

class App extends Component {

  render() {

    return (
      <div id="wrapper">
        <Header />
        <Section />
        <Footer />
      </div>  
    );
  }




  responsiveNavFunction = () => {
    console.log('this is:', this);
  }
}



class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    document.querySelector('#success').style.display = 'block'; 

    document.querySelector('textarea').value = '';

    let inputs = document.querySelectorAll('input');
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].type != 'submit'){
        inputs[i].value = '';
      }
    }
    event.preventDefault();
  }


  render() { 

    return <div>
      <h1 id="teamHeading">Contact</h1>
      <hr className="customLine"/>
        <form id="contactForm" onSubmit={this.handleSubmit}>
        <h2>Contact our Team</h2>
        <label>
          Name:*<br/>
          <input type="text" pattern="[A-Ba-b]{5}" value={this.state.fname} onChange={this.handleChange} placeholder="First Name" required />
        </label>
        <label>
          Email:*<br/>
          <input type="email" value={this.state.email} onChange={this.handleChange} placeholder="Last Name" required />
        </label>
        <label><br/>
          Message: <br/>
          <textarea type="text" value={this.state.tarea} onChange={this.handleChange} placeholder="Message..." />
        </label><br/>
        <input type="submit" value="Submit" />
        <span id="success">Thank you for contacting us.<br/> A member of staff will be in touch shortly.</span>
      </form>
        
    </div>  
  }

}



export default App;
