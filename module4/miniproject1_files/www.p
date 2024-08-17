@font-face { 
  font-family: News Cycle; 
    src: url('https://fonts.googleapis.com/css?family=News+Cycle'); 
} 

html
{ height: 100%;}

*
{ margin: 0;
  padding: 0;}

body
{ font: normal 90% Arial, Helvetica, sans-serif;
  color: #000;
}

/* tell the browser to render HTML 5 elements as block */
article, aside, figure, footer, header, hgroup, nav, section { 
  display:block;
}

p
{ padding: 0 0 10px 0;
  line-height: 1.7em;
  font-size: 100% }

img
{ border: 0;}

h1, h2, h3, h4, h5, h6 
{ font: normal 175% 'News Cycle', Arial, sans-serif;
  color: #000;
  letter-spacing: -1px;
  margin: 0 0 10px 0;}

h2
{ font: normal 165% 'News Cycle', Arial, sans-serif;}

h3
{ font: normal 130% 'News Cycle', Arial, sans-serif;}

h4, h5, h6
{ margin: 0;
  padding: 0 0 0px 0;
  font: normal 150% 'News Cycle', Arial, sans-serif;
  color: #FFF;
  line-height: 1.5em;}

h5, h6
{ font: normal 95% 'News Cycle', Arial, sans-serif;
  color: #888;
  padding-bottom: 15px;}
  
span
{ color: #B1521A;
  text-shadow: none;}

a, a:hover
{ color: #000;
  background: transparent;
  font-weight: bold;
  outline: none;
  text-decoration: underline;}

a:hover
{ text-decoration: none;}

ul
{ margin: 2px 0 22px 30px;
  line-height: 1.7em;
  font-style: normal;
  font-size: 100%;}

ol
{ margin: 8px 0 22px 20px;}

ol li
{ margin: 0 0 11px 0;}

#main, header, #banner, #menubar, #site_content, footer, #content_grey, nav, #slideshow_container
{ margin-left: auto; 
  margin-right: auto;}
  
header
{ height: 200px;
  //background: #1D1D1D;
  background-image: -ms-linear-gradient(top, #e60000, #000);
  background: -moz-linear-gradient( #e60000, #000);
  background: -o-linear-gradient( #e60000, #000);
  background: -webkit-linear-gradient( top, #e60000, #000);}
 
nav
{ height: 60px;}  
  
#strapline
{ width: 940px;
  height: 140px;
  text-align: center; 
  margin: 0 auto;} 
  
#welcome_slogan
{ width: 940px;
  float: left;
  height: 130px;
  padding-top: 10px;  
  margin: 0 auto;}    
  
#welcome_slogan h3
{ font: bold 300% 'News Cycle', Arial, sans-serif;
  letter-spacing: -3px;
  color: #FFF;} 
  
#menubar
{ width: 1400px;
  height: 55px;
  padding-top: 10px;
  text-align: center; 
  margin: 0 auto;}    
  
ul#nav
{ margin:0;}

ul#nav li
{ padding: 0 0 0 0px;
  list-style: none;
  margin: 2px 0 0 0;
  display: inline;
  background: transparent;}

ul#nav li a
{ float: left;
  font: bold 130% 'News Cycle', Arial, sans-serif;
  height: 24px;
  margin: 8px 20px 0 0;
  text-shadow: 0px 1px 0px #000;
  padding: 0px 20px 10px 20px;
  background: transparent; 
  border-radius: 7px 7px 7px 7px;
  -moz-border-radius: 7px 7px 7px 7px;
  -webkit-border: 7px 7px 7px 7px;
  text-align: center;
  color: #FFF;
  text-decoration: none;} 
  
ul#nav li.current a, ul#nav li:hover a
{ color: #FFF;
  background: #0055D4;
  background: -moz-linear-gradient(#43A9FF, #0043A8);
  background: -o-linear-gradient(#43A9FF, #0043A8);
  background: -webkit-linear-gradient(top, #43A9FF, #0043A8);
  text-shadow: none;}
  
#slideshow_container
{ height: 170px;
  background:  #ffffff;
  padding-top: 20px;}
  
.slideshow
{ width: 700px;
  height: 150px;
  margin: 0 auto;}  
  
/* styling for the slideshow on the homepage */
ul.slideshow {
  list-style: none;
  width: 700px;
  height: 185px;
  overflow: hidden;
  position: relative;}
  
ul.slideshow li {
  position: absolute;
  margin: 0;
  padding: 0;
  left: 0;
  right: 0;}
 
ul.slideshow li.show {
  z-index: 500;}
 
ul img {
  border: none;}
 
#slideshow-caption {
  width: 700px;
  height: 38px;
  position: absolute;
  bottom: 0;
  left: 0; 
  z-index: 500;}
 
#slideshow-caption .slideshow-caption-container {
  padding: 10px 25px 10px 25px; 
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAK8AAACvABQqw0mAAAAAd0SU1FB9wFBAkkEuMqxbIAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAIklEQVQ4y2NkYGCYwUBFwMRAZTBq4KiBowaOGjhq4FAxEABEoADAasEtGgAAAABJRU5ErkJggg==') repeat;  
  z-index: 1000;}
 
#slideshow-caption p {
  padding: 0;
  font: normal 130% arial, sans-serif;
  color: #FFF;
  text-shadow: 1px 1px #000;}  


#site_content
{ width: 940px;
  overflow: hidden;} 

.sidebar_container
{ float: right;
  margin: 20px 0 0 10px;
  width: 240px;}

.sidebar
{ float: left;
  width: 240px;
  margin-bottom: 10px;}

.sidebar_item
{ font: normal 100% Arial, Helvetica, sans-serif;
  width: 240px;}

.sidebar h2
{ padding: 5px 0 0 0;
  font: normal 140% 'News Cycle', Arial, sans-serif;
  height: 30px;}  


#site_content
{ width: 700px;
  overflow: hidden;} 

#content
{ width: 680px;
  margin: 0 0 20px 0;
  float: left;}

.content_item
{ width: 680px;
  margin-top: 20px;
  margin-bottom: 20px;}
  
.content_container
{ width: 330px;
  margin: 20px 10px 0 0;
  float: left;}
  
footer
{ width: 940px;
  height: 50px;
  padding-top: 25px;
  padding-bottom: 20px;  
  font-weight: bold;
  text-align: center; 
  color: #FFF;
  background: #0043A8;
 background-image: -ms-linear-gradient(top, #e60000, #000);
  background: -moz-linear-gradient(#e60000, #000);
  background: -o-linear-gradient(#e60000, #000);
  background: -webkit-linear-gradient(top, #e60000, #000);
  border-radius: 15px 15px 15px 15px;
  -moz-border-radius: 15px 15px 15px 15px;
  -webkit-border: 15px 15px 15px 15px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px;
  -moz-box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px;}
footer a, footer a:hover
{ text-shadow: 1px 1px #FFF;
  color: #1D1D1D;
  text-decoration: none;
  padding-bottom: 20px;}

footer a:hover
{ text-decoration: underline;}

footer a, footer a:hover
{ text-shadow: 1px 1px #000;
  color: #FFF;
  text-decoration: none;}

footer a:hover
{ text-decoration: underline;}
  
 .readmore a
{ color: #FFF;
  text-shadow: 1px 1px #004C8C;}
 
 .button_small
{ font: normal 110% Arial, Helvetica, sans-serif;
  float: left;
  height: 15px;
  padding: 5px 10px 7px 8px;
  background: #0043A8;
  background: -moz-linear-gradient(#43A9FF, #0043A8);
  background: -o-linear-gradient(#43A9FF, #0043A8);
  background: -webkit-linear-gradient(top, #43A9FF, #0043A8);
  border-radius: 15px 15px 15px 15px;
  -moz-border-radius: 15px 15px 15px 15px;
  -webkit-border: 15px 15px 15px 15px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px;
  -moz-box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px;}
  
.button_small a
{ color: #FFF;
  padding-left: 5px;
  text-shadow: 1px 1px #000;}

.form_settings
{ margin: 15px 0 0 0;}

.form_settings p
{ padding: 0 0 4px 0;}

.form_settings span
{ float: left; 
  width: 280px; 
  text-align: left;
  text-shadow: none;
  color: #000;}
  
.form_settings input, .form_settings textarea
{ padding: 2px; 
  width: 299px; 
  font: 100% arial; 
  border: 1px solid #E5E5DB; 
  background: #FFF; 
  color: #47433F;}
  
.form_settings input[type="checkbox"]
{ padding: 2px 0; 
  width: 15px; 
  font: 100% arial; 
  border: 0; 
  background: #FFF; 
  color: #47433F;
  margin: 28px 0;}

.form_settings .submit
{ font: 100% arial; 
  border: 1px solid; 
  width: 99px; 
  margin: 0 0 0 206px; 
  height: 26px;
  padding: 2px 0 3px 0;
  cursor: pointer; 
  background: #0043A8;
  background: -moz-linear-gradient(#43A9FF, #0043A8);
  background: -o-linear-gradient(#43A9FF, #0043A8);
  background: -webkit-linear-gradient(top, #43A9FF, #0043A8);
  color: #FFF;
  border-radius: 7px 7px 7px 7px;
  -moz-border-radius: 7px 7px 7px 7px;
  -webkit-border: 7px 7px 7px 7px;}

