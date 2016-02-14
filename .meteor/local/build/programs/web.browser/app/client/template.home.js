(function(){
Template.__checkName("home");
Template["home"] = new Template("Template.home", (function() {
  var view = this;
  return [ HTML.Raw('<div class="jumbotron">\n        <div class="container">\n            <div class="row">\n                <div class="col-md-6">\n                    <h1 class="text-center">Draw whatever you want</h1>\n                    <h2 class="text-center">Enjoy this page drawing and expressing what you feel or think.Create your most original draw and share with your friends.</h2>\n                    <div class="text-center">\n                        <h3 style="color: #fff">Start draw</h3>\n                        <button class="btn btn-info"><a href="#draw">Draw here</a></button>\n                    </div>\n                </div>\n                <div class="col-md-6 text-center">\n                    <img src="inkist1.jpg" class="logo-image">\n                </div>\n            </div>\n        </div>\n    </div>\n    '), HTML.SECTION({
    id: "draw",
    "class": "market"
  }, "\n        ", HTML.Raw('<h4 class="text-center">DESIGN YOUR OWN PICTURES</h4>'), HTML.Raw("<br>"), "\n        ", Spacebars.include(view.lookupTemplate("wall")), "\n    "), HTML.Raw('\n<!--     <section class="features">\n        <div class="container">\n            <div class="row">\n                <div class="col-md-4 text-center">\n                    <img src="portafolio.png" height="200" width="200">\n                    <br>\n                    <h4 class="feature">Create your own portfolio</h4>\n                    <p style="color:#fff">Do you want to be a famous person? Do you have dream of your own Portfolio? Then just sign in here make your dream come true. Here you can post a blog just about anything whether it is a image or a video showing your skills or about yourself.</p>\n                </div>\n                <div class="col-md-4 text-center">\n                    <img src="shared.png" height="200" width="200">\n                    <br>\n                    <h4 class="feature">Post your best news</h4>\n                    <p style="color:#fff">Are you aware of what is happening around you or in the world? Why don\'t you check our News page and get yourself informed of our latest and cool news which will interest you.</p>\n                </div>\n                <div class="col-md-4 text-center">\n                    <img src="news.png" height="200" width="200">\n                    <br>\n                    <h4 class="feature">Read the best blogs</h4>\n                    <p style="color:#fff">You will get from recent new releases to comparision of products and reviews of the products in blogs. </p>\n                </div>\n            </div>\n        </div>\n    </section> -->\n    <footer class="footer-centered">\n        <p class="footer-links">\n            <a href="#">About</a>\n            <a href="#">Terms &amp; Conditions</a>\n            <a href="#">Privacy</a>\n            <a href="#">Contact us</a>\n        </p>\n    </footer>') ];
}));

})();