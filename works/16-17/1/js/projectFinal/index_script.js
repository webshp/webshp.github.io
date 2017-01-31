'use strict';
function pastLoading(){
            document.body.removeChild(loadIcon);
            document.body.classList.add("blue");
        }
function pastTitle(){
                let titleField = document.createElement('nav');
                let title = document.createElement('h1');
                title.innerHTML = "Title";
                titleField.classList.add("titleTile");
                titleField.appendChild(title);
                document.body.appendChild(titleField);
        }
function pastButtonsLeft1(){
                let buttonField = document.createElement('nav');
                let buttonName = document.createElement('h3');
                buttonName.innerHTML = "Button";
                buttonField.classList.add("buttonTile");
                buttonField.classList.add("buttonTile__left1");
                buttonField.appendChild(buttonName);
                document.body.appendChild(buttonField);
        }
function pastButtonsLeft2(){
                let buttonField = document.createElement('nav');
                let buttonName = document.createElement('h3');
                buttonName.innerHTML = "Button";
                buttonField.classList.add("buttonTile");
                buttonField.classList.add("buttonTile__left2");
                buttonField.appendChild(buttonName);
                document.body.appendChild(buttonField);
        }
function pastButtonsRight1(){
                let buttonField = document.createElement('nav');
                let buttonName = document.createElement('h3');
                buttonName.innerHTML = "Button";
                buttonField.classList.add("buttonTile");
                buttonField.classList.add("buttonTile__right1");
                buttonField.appendChild(buttonName);
                document.body.appendChild(buttonField);
        }
function pastButtonsRight2(){
                let buttonField = document.createElement('nav');
                let buttonName = document.createElement('h3');
                buttonName.innerHTML = "Button";
                buttonField.classList.add("buttonTile");
                buttonField.classList.add("buttonTile__right2");
                buttonField.appendChild(buttonName);
                document.body.appendChild(buttonField);
        }
function pastMainArticle(){
                let mainArticleField = document.createElement('article');
                let mainArticleTitle = document.createElement('h1');
                mainArticleTitle.innerHTML = "Welcome to Index.";
                let linkToPage2 = document.createElement('a');
                linkToPage2.href = "./page2.html";
                linkToPage2.innerHTML = "To Page2";
                mainArticleField.classList.add("mainArticleTile");
                mainArticleField.appendChild(mainArticleTitle);
                mainArticleField.appendChild(linkToPage2);
                document.body.appendChild(mainArticleField);
        }
        let	logoTimer = setTimeout(pastLoading,2000);
        let titleTimer = setTimeout(pastTitle, 2500);  
        let buttonsLeftTimer1 = setTimeout(pastButtonsLeft1, 3000);
        let buttonsRightTimer1 = setTimeout(pastButtonsRight1, 3000);
        let buttonsLeftTimer2 = setTimeout(pastButtonsLeft2, 3250);
        let buttonsRightTimer2 = setTimeout(pastButtonsRight2, 3250);
        let mainArticleTimer = setTimeout(pastMainArticle, 3500);
