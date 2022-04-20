"use strict";
(function(){
    function creatDivParent(childrenElement,parentDivID){   
        const divElement = document.createElement("div");
        divElement.id = parentDivID;
        for( const element of childrenElement){
            divElement.appendChild(element);
        }
        return divElement;
    }
    const mainElement = document.getElementsByTagName('main')[0];
    const urlDiv = creatDivParent([], "vurl-txt");
    const descDiv = creatDivParent([], "desc-txt");
    const aTag = document.createElement("a");
    const titleDiv = creatDivParent([aTag], "Title");
    const addSpaceDiv = creatDivParent([titleDiv, descDiv, urlDiv], "adspace");
    const h3Tag = document.createElement("h3");
    const text = document.createTextNode("Real-time Ad Preview:");
    h3Tag.appendChild(text);
    const previewDiv = creatDivParent([h3Tag,addSpaceDiv],'preview');
    mainElement.appendChild(previewDiv);
    //title text
    const titleText = document.getElementById("txt");
    titleText.addEventListener("input", (e) => {
        const titlePreview = document.getElementById("Title").children[0];
        titlePreview.textContent = e.target.value;
    }, false);
    
    //link
    const turl = document.getElementById("t_url");
    turl.addEventListener("input", (e) => {
        const titlePreview = document.getElementById("Title").children[0];
        titlePreview.href = e.target.value;
    }, false);

    //description
    const descTitle = document.getElementById("desc");
    descTitle.addEventListener("input", (e) => {
        const dText = document.getElementById("desc-txt");
        dText.textContent = e.target.value;
    }, false);
    //Visible URL
    const visibleUrl = document.getElementById("v_url");
    visibleUrl.addEventListener("input",(e) =>{
        const vURL = document.getElementById("vurl-txt");
        vURL.textContent = e.target.value;
    }, false);

})();
