import './Projects.css';



function Projects (){
    

return (
   <div className="Portfolio" id="Portfolio">
       <h1 className="heading">Portfolio</h1>
      
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>
<div className="container" >
<div className="row bootstrap snippets bootdey">
    <div className="col-md-4">
        <div className="team-member">
            <figure className="effect-zoe">
                {/* <div className="project-photo">
                    <img src="assets/SnippetMobile.png" alt="Snippets" class="img-responsive"/>
                </div> */}
                <div class="team-attrs">
                    <div class="team-name font-accident-two-bold-italic">Stealth Code</div>
                    <div class="team-position">JS | HTML/CSS | REACT | MONGODB | EXPRESS | NODE.JS</div>
                </div>
                <div class="team-content small">
                    Application that makes coding easier with cut and paste snippets for React Components.
                </div>
                <figcaption>

                    <p class="icon-links">
                        <a href="https://github.com/bgiorgi1/StealThisCode_FE"><i class="fa fa-github" ></i></a>
                        <a href="https://stealth-code.herokuapp.com/"><i class="fa fa-external-link" ></i></a>
                        {/* <a href="#!"><i class="fa fa-facebook"></i></a> */}
                    </p>

                    {/* <p class="phone-number">
                        <a href="#!">tel: 1 234 567-89-10</a>
                    </p> */}
                </figcaption>
            </figure>
        </div>
        <div class="dividewhite4"></div>
    </div>

    <div class="col-md-4">
        <div class="team-member">
            <figure class="effect-zoe">
                {/* <div class="project-photo">
                    <img src="assets/parkBook.png" alt="Rachel James Johnes" class="img-responsive"/>
                </div> */}
                <div class="team-attrs">
                    <div class="team-name font-accident-two-bold-italic">ParkBook</div>
                    <div class="team-position">JS | HTML/CSS | EJS | SEQUELIZE | EXPRESS | NODE.JS</div>
                </div>
                <div class="team-content small">
                    Search and find information about your favorite park, add it to favorites and store your memories.
                </div>
                <figcaption>
                    <p class="icon-links">
                        <a href="https://github.com/bgiorgi1/parkbook"><i class="fa fa-github" ></i></a>
                        <a href="https://parkbook1.herokuapp.com/"><i class="fa fa-external-link" ></i></a>
                        {/* <a href="#!"><i class="fa fa-facebook"></i></a> */}
                    </p>

                    {/* <p class="phone-number">
                        <a href="#!">tel: 1 234 567-89-10</a>
                    </p> */}
                </figcaption>
            </figure>
        </div>
        <div class="dividewhite4"></div>
    </div>

    <div class="col-md-4">
        <div class="team-member">
            <figure class="effect-zoe">
                {/* <div class="project-photo">
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Rachel James Johnes" class="img-responsive"/>
                </div> */}
                <div class="team-attrs">
                    <div class="team-name font-accident-two-bold-italic">Healthful Pantry</div>
                    <div class="team-position">JS | HTML/CSS | REACT | MONGODB | EXPRESS | NODE.JS</div>
                </div>
                <div class="team-content small">
                    Find tasty recipes, based off your current medical conditions, allergies and intolerances.
                </div>
                <figcaption>
                    <p class="icon-links">
                        <a href="https://github.com/charlenebatiste/the-healthful-pantry"><i class="fa fa-github" ></i></a>
                        <a href="#!"><i class="fa fa-external-link" ></i></a>
                        {/* <a href="#!"><i class="fa fa-facebook"></i></a> */}
                    </p>

                    {/* <p class="phone-number">
                        <a href="#!">tel: 1 234 567-89-10</a>
                    </p> */}
                </figcaption>
            </figure>
        </div>
        <div class="dividewhite4"></div>
    </div>

</div>
</div>


   </div>
);
}

export default Projects;