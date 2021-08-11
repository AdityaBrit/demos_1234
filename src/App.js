
import './App.css';
import React from 'react';



function App() {
  return (
    <div className="App">



      <div className="header">
        <div className="logo">

          <a href="#" className="logo"> linktree</a>
          {/* <h3 className="logo"> linktree </h3> */}
          <a href="#home">Blog</a>
          <a href="#pricing">Pricing</a>
          <a href="#features">Help</a>

        </div>

        <input type="checkbox" id="menu-bar" />
        <label for="menu-bar" className="fas fa-bars"></label>

        <nav className="navbar">


          <a href="#" className="logo"> Log in</a>

          <a href="#" className="logo">SIGN UP FREE</a>


        </nav>




      </div>


      <div className="home" >

        <div className="content">
          <h1>The Only Link You’ll Ever Need</h1>
          <p>Connect audiences to all of your content with just one link </p>

          <a href="app-debug.apk" className="btn" download >GET STARTED FOR FREE</a>

          <p style={{ fontSize: "15px" }} > Already on Linktree? <span>   <a href="#">Log in</a></span> </p>


        </div>

        <div className="image">

          <img src="images/IMG-20210624-WA0029-removebg.png" alt="" />

        </div>

      </div>


      <section class="about" id="about">
        {/* 
        <h1 className="heading"> about spread Entertainment </h1> */}

        <div className="column">

          <div className="image">


            <img src="images/images.jpg" alt="" />
          </div>

          <div className="content">
            <h3>Use it anywhere</h3>
            <p>Take your Linktree wherever your audience is,<br /> to help them to discover all your important <br /> content.</p>




          </div>

        </div>

      </section>


      <section class="about" id="about">



        <div className="column">

          <div className="image">



            <h3>Link to everywhere</h3>
            <p>Linktree is the launchpad to your latest video, <br /> article, recipe, tour, store, website, social post -<br /> everywhere you are online.
              .</p>

          </div>

          <div className="content">
            <img src="images/images.jpg" alt="" />
          </div>

        </div>

      </section>


      <section class="about" id="about">



        <div className="column">

          <div className="image">


            <img src="images/images.jpg" alt="" />
          </div>

          <div className="content">
            <h3>Collect payments</h3>
            <p>From tips for your content, to donations for <br /> your projects, let your fans & followers <br /> support you in monetizing your passions.</p>




          </div>

        </div>

      </section>


      <section class="about" id="about">



        <div className="column">

          <div className="image">



            <h3>Link to everywhere</h3>
            <p>Linktree is the launchpad to your latest video, <br /> article, recipe, tour, store, website, social post -<br /> everywhere you are online.
              .</p>

          </div>

          <div className="content">
            <img src="images/images.jpg" alt="" />
          </div>

        </div>

      </section>

      <section class="about" id="about">



        <div className="column">

          <div className="image">


            <img src="images/images.jpg" alt="" />
          </div>

          <div className="content">
            <h3>Collect payments</h3>
            <p>From tips for your content, to donations for <br /> your projects, let your fans & followers <br /> support you in monetizing your passions.</p>




          </div>

        </div>

      </section>



      <section className="features" id="features">



        <div className="box-container">


          <div className="box">
            <img src="images/images.png" alt="" />
            <h3>Customize your Linktree</h3>
            <p>Make your Linktree pop. Embody your brand through custom colors, fonts and images.</p>

          </div>


          <div className="box">
            <img src="images/img.png" alt="" />
            <h3>Analytics and Insights</h3>
            <p>Gain valuable insight into your traffic and discover which content is performing with your audience</p>

          </div>


          <div className="box">
            <img src="images/down.jpg" alt="" />
            <h3>Powerful Third-Party Integrations</h3>
            <p>Collect email subscribers, connect with third-party analytics and remarket to your audience</p>

          </div>

          <h1 className="featur"> SEE ALL FEATURES </h1>

        </div>

      </section>

      <hr />
      <br />
      <br />
      <br />
      <br />

      <hr />


      <section class="community" >



        <h1>Join the Linktree community</h1>

        <br />


        <p>The world's biggest influencers, creators, publishers and brands use <br /> Linktree in their marketing strategy.</p>


      </section>




      <section className="review" id="review">

        {/* <h1 className="heading"> people's review </h1> */}

        <div className="box-container">

          <div className="box">
            <i className="fas fa-quote-right"></i>
            <div className="user">



              <div style={{ fontFamily: "monospace" }} className="comment">
                DIGITAL TRANDS
              </div>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-quote-right"></i>
            <div className="user">


              <div style={{ fontFamily: "serif" }} className="comment">
                Entereprner
              </div>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-quote-right"></i>
            <div className="user">



              <div style={{ fontFamily: "-moz-initial" }} className="comment">
                Forbes
              </div>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-quote-right"></i>
            <div className="user">



              <div style={{ fontFamily: "fantasy" }} className="comment">
                engadget
              </div>
            </div>
          </div>




        </div>

      </section>

      <div className="footer">

        <div className="box-container">

          <div class="box">
            <h3>Company</h3>
            <a href="#">Blog</a>
            <a href="#">About</a>
            <a href="#">Press</a>
            <a href="#">Careers</a>
            <a href="#">Social Good</a>
            <a href="#">Contact</a>
          </div>
          <div class="box">
            <h3>Partnerships</h3>
            <a href="#">Linktree for Enterprise</a>
            <a href="#">Charities</a>
            <a href="#">Linktree Ambassador</a>
          </div>

          <div class="box">
            <h3>support</h3>
            <a href="#">Help Topic</a>
            <a href="#">Getting Started</a>
            <a href="#">Features How To</a>
            <a href="#">FAQs</a>
            <a href="#">Report a violation</a>
          </div>

          <div class="box">
            <h3>Trust & Legal</h3>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy policy</a>
            <a href="#">Trust Center</a>

          </div>
         
             

        </div>

        {/* <h1 className="credit"> We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging. </h1> */}

      </div>

      <div>
        <h3>linktree</h3>
        <div className="iconn">
          
        </div>
      </div>

     









    </div>


  );
}

export default App;
