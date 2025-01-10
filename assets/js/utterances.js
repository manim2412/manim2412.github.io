'use strict';

function utterances() {
    var commentContainer = document.querySelector("#utterances-comments");

    if (commentContainer) {
        return;
    }

    var script = document.createElement("script");
    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("repo", "manim2412/manim2412.github.io");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("label", "comment"); 
    script.setAttribute("theme", "github-light"); 
    script.setAttribute("crossorigin", "anonymous"); 

    commentContainer.appendChild(script); 
};

utterances();