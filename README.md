<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/manuarora700/trippers-project">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Trippers: Travel the world</h3>

  <p align="center">
    A Node JS, Server Side Rendered, Secured web application.
    <br />
    <a href="https://github.com/manuarora700/trippers-project/README"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="http://trippers.manuarora.me">View Demo</a>
    ·
    <a href="https://github.com/manuarora700/trippers-project/issues">Report Bug</a>
    ·
    <a href="https://github.com/manuarora700/trippers-project/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://trippers.manuarora.me)

Trippers is a tours and travels website to travel to your dream location. It features tours packages, Available tours, Difficulty, Number of people, and more. Details are as follows:

Details:

- Homepage which shows available tours
- Users can post tours and travel packages
- Upload pictures, post comments
- Ratings
- User authentication using JWT
- Database secure and stored in MongoDB Atlas
- CRUD operations
- Beautiful Pug templates

There are more features which i'll be adding soon.

### Built With

- [Node JS](https://getbootstrap.com)
- [Express](https://getbootstrap.com)
- [MongoDB](https://getbootstrap.com)
- [JWT](https://getbootstrap.com)
- [bcrypt](https://getbootstrap.com)
- [Pug](https://getbootstrap.com)
- [slugify](https://getbootstrap.com)
- [Mongoose](https://jquery.com)
- [HTML](https://jquery.com)
- [CSS](https://jquery.com)
- [javascript](https://jquery.com)
- [Postman](https://jquery.com)

<!-- GETTING STARTED -->

## Getting Started

This is to setup the project locally on your computer

### Prerequisites

Get the latest version of node from the official node website

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repository

```sh
git clone https://github.com/manuarora700/trippers-project.git
```

2. Install NPM packages

```sh
npm install
```

3. Create a file `config.js` in the root directory and fill in the following details ( Replace whatever is written in {{}} with your credentials)

```JS
NODE_ENV = development
PORT = 3000
DATABASE=mongodb+srv://{{YOUR_USERNAME}}:<PASSWORD>@cluster0-axx7z.mongodb.net/trippers?retryWrites=true&w=majority
DATABASE_PASSWORD={{YOUR_PASSWORD}}

JWT_SECRET={{ ANY RANDOM STRING }}
JWT_EXPIRES_IN=90d
```

<!-- USAGE EXAMPLES -->

## Usage

On the terminal write `npm run start:dev` and it should start.

_For more examples, please refer to the [Documentation](https://example.com)_

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/manuarora700/trippers/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Your Name - [@mannupaaji](https://twitter.com/mannupaaji) - manuarorawork@gmail.com

Project Link: [https://github.com/manuarora700/trippers](https://github.com/manuarora700/trippers-project)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)
- [Animate.css](https://daneden.github.io/animate.css)
- [Loaders.css](https://connoratherton.com/loaders)
- [Slick Carousel](https://kenwheeler.github.io/slick)
- [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
- [Sticky Kit](http://leafo.net/sticky-kit)
- [JVectorMap](http://jvectormap.com)
- [Font Awesome](https://fontawesome.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/manuarora700/trippers-project.svg?style=flat-square
[contributors-url]: https://github.com/manuarora700/trippers-project/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/manuarora700/trippers-project.svg?style=flat-square
[forks-url]: https://github.com/manuarora700/trippers-project/network/members
[stars-shield]: https://img.shields.io/github/stars/manuarora700/trippers-project.svg?style=flat-square
[stars-url]: https://github.com/manuarora700/trippers-project/stargazers
[issues-shield]: https://img.shields.io/github/issues/manuarora700/trippers-project.svg?style=flat-square
[issues-url]: https://github.com/manuarora700/trippers-project/issues
[license-shield]: https://img.shields.io/github/license/manuarora700/trippers-project.svg?style=flat-square
[license-url]: https://github.com/manuarora700/trippers-project/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/manuarora28
[product-screenshot]: images/screenshot.png
