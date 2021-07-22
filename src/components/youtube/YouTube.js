import React from "react";
import "./YouTube.css"

function YouTube(props) {
    return <div className="YouTube" id="Youtube">
        <h1>Codesplaining</h1>
        <article className="YTbody">
            I've found content creation to be a great way to continue my learnings.  Check out my <a href="https://www.youtube.com/channel/UCi_Pg4C5tnf4qXiU-JZew0A">channel</a> to see how I codesplain all of my projects.
        </article>
        <div>
        <div class="container-fluid">
  <div class="row videos">
    <div class="col-md">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/IF2aNSDgHOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    </div>
    <div class="col-md">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/pEn4_WIm8MU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>
    <div class="col-md">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/V5hmaPoG-_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   </div>
  </div>
</div>

        </div>
    </div>;
  }

  export default YouTube;