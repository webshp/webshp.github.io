'use strict';
function pastLoading(){
            document.body.removeChild(loadIcon);
            document.body.classList.add("blue");
        }
function pastTitle(){
                let titleField = document.createElement('nav');
                let title = document.createElement('h1');
                title.innerHTML="Title";
                titleField.classList.add("titleTile");
                titleField.appendChild(title);
                document.body.appendChild(titleField);
        }
function pastButtonsLeft1(){
                let buttonField = document.createElement('nav');
                let buttonName = document.createElement('h3');
                buttonName.innerHTML="Button";
                buttonField.classList.add("buttonTile");
                buttonField.classList.add("buttonTile__left1");
                buttonField.appendChild(buttonName);
                document.body.appendChild(buttonField);
        }
function pastButtonsLeft2(){
                let buttonField = document.createElement('nav');
                let buttonName = document.createElement('h3');
                buttonName.innerHTML="Button";
                buttonField.classList.add("buttonTile");
                buttonField.classList.add("buttonTile__left2");
                buttonField.appendChild(buttonName);
                document.body.appendChild(buttonField);
        }
function pastButtonsRight1(){
                let buttonField = document.createElement('nav');
                let buttonName = document.createElement('h3');
                buttonName.innerHTML="Button";
                buttonField.classList.add("buttonTile");
                buttonField.classList.add("buttonTile__right1");
                buttonField.appendChild(buttonName);
                document.body.appendChild(buttonField);
        }
function pastButtonsRight2(){
                let buttonField = document.createElement('nav');
                let buttonName = document.createElement('h3');
                buttonName.innerHTML="Button";
                buttonField.classList.add("buttonTile");
                buttonField.classList.add("buttonTile__right2");
                buttonField.appendChild(buttonName);
                document.body.appendChild(buttonField);
        }
let my_pb;
let c_ci;
function pastMainArticle(){
                let mainArticleField = document.createElement('article');
                let mainArticleTitle = document.createElement('h1');
                mainArticleTitle.innerHTML="Welcome to Page2";
                let linkToIndex = document.createElement('a');
                linkToIndex.href = "./index.html";
                linkToIndex.innerHTML = "To Index";
                mainArticleField.classList.add("mainArticleTile");
                mainArticleField.appendChild(mainArticleTitle);
                mainArticleField.appendChild(linkToIndex);
                let photoBlock = document.createElement('div');
                my_pb = photoBlock;
                photoBlock.classList.add("photoBlockTile");
                mainArticleField.appendChild(photoBlock);
                let colorCheckerInput = document.createElement('input');
                colorCheckerInput.classList.add("colorCheckerInput");
                colorCheckerInput.addEventListener("input",colorChange);
                c_ci = colorCheckerInput;
                photoBlock.appendChild(colorCheckerInput);
                document.body.appendChild(mainArticleField);
        }
        function colorChange(e){
            my_pb.style.background = c_ci.value;
        }
        let	logoTimer = setTimeout(pastLoading,2000);
        let titleTimer = setTimeout(pastTitle, 2500);  
        let buttonsLeftTimer1 = setTimeout(pastButtonsLeft1, 3000);
        let buttonsRightTimer1 = setTimeout(pastButtonsRight1, 3000);
        let buttonsLeftTimer2 = setTimeout(pastButtonsLeft2, 3250);
        let buttonsRightTimer2 = setTimeout(pastButtonsRight2, 3250);
        let mainArticleTimer = setTimeout(pastMainArticle, 3500);
