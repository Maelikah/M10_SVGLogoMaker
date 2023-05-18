# SVG Logo Maker

</br>

![Github License](https://img.shields.io/badge/license-MIT-blue.svg)

</br>

---

##   📝 Description


---

</br>

The purpose of this repository is to apply the concepts reviewed during the week and generate an SVG logo based on user prompt, choosing shape (circle, square, or triangle), shape color, text (limit of 3 characters), and text color. Inquirer is used for questions and jest is used for the tests.

</br>

---


##   ⌨️ Programming Languages & Technologies
---

</br>

<div style="display: inline_block">

<img src="./assets/javascript.svg" alt="JavaScript">
&nbsp;&nbsp;
<img src="./assets/nodejs.svg" alt="NodeJS">
&nbsp;&nbsp;
<img src="./assets/jest.svg" alt="Jest">
&nbsp;&nbsp;
<img src="./assets/screen-castify-red.svg" alt="screencastify">

</div>

</br>


---

## 📑 Table of Contents

---

</br>

- [Installation](#💿-installation)
- [Usage](#💻-usage)
- [License](#🔏-license)
- [Credits](#🖋️-credits)
- [Tests](#🧪-tests)
- [User Story](#✍️-user-story)
- [Acceptance Criteria](#👏-acceptance-criteria)


</br>


---

##  💿 [Installation](#📑-table-of-contents)

---

</br>

1. Fork and clone repository to local machine 
2. Run `npm i` to install dependencies in local project directory


</br>


---

##   💻 [Usage](#📑-table-of-contents)

---

</br>

1. Open integrated terminal
2. Run node index.js
3. Answer the prompts that follow
4. A SVG Icon will be generated and stored in the `examples` folder.

</br>


---

##  🔏 [License](#📑-table-of-contents)

---

</br>


 This project is licensed under the terms of the `MIT` license. 


</br>


---

## 🖋️ [Credits](#📑-table-of-contents)

---

</br>


- https://shields.io/category/license
- https://github.com/devicons/devicon/tree/master/icons
- https://www.npmjs.com/package/inquirer
- https://www.npmjs.com/package/inquirer#answers
- https://nodejs.org/en/docs
- https://nodejs.org/api/fs.html
- https://jestjs.io/
- https://emojipedia.org/
- https://www.w3.org/wiki/CSS/Properties/color/keywords
- https://regexr.com/3ag5b
- https://en.wikipedia.org/wiki/SVG
- https://www.w3schools.com/graphics/tryit.asp?
- https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide

</br>


---

##   🧪 [Tests](#📑-table-of-contents)

---

</br>



Type `npm run test` on command line


</br>


---

## ✍️ [User Story](#📑-table-of-contents)

---

</br>

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

</br>

---

## 👏 [Acceptance Criteria](#📑-table-of-contents)

---

</br>


```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, square, triangle, `inverted triangle` and `ellipse` 
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

</br>


---

[Back to Top](#svg-logo-maker)