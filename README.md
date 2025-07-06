<a name="readme-top"></a>

<h1 align="center">Portfolio</h1>
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgements</a></li>
  </ol>
</details>

### About

Portfolio website to showcase my projects. [Visit live](https://rakesh-gupta29.github.io/)

### Built with

- [Astrojs](https://astro.build/)
- [GSAP](https://greensock.com/gsap/)
- [Tailwind](https://tailwindcss.com/)

### Getting Started

- You should have latest stable version of `Node` and `NPM` installed to run the project on your machine. <br />
- Clone the URL and install the dependencies using `npm i`.<br />
- Run the relevant command as per `package.json` file to start the development server.

### Prerequisites

- Node: latest stable version
- NPM: latest version
- Git: optional; to clone the code on your machine

### Installation

Run the following commands to clone and run the project

```zsh
$ git clone https://github.com/rakesh-gupta29/rakesh-gupta29.github.io
$ cd rakesh-gupta29.github.io
$ npm i
$ npm run dev
```

This will start the development server at [http://localhost:4100/](http://localhost:4100/)

## Contact

I'm always happy to connect and collaborate on interesting projects. <br />You can reach out to me at [rakesh.rkgupta29@gmail.com](mailto:rakesh.rkgupta29@gmail.com).

## Acknowledgements

- GitHub pages
- Google fonts

  <div class="w-container blade-bottom-padding-lg">
    <div class="flex flex-wrap gap-x-6 max-w-2xl xl:max-w-4xl gap-y-6">
      {
        skills.map((elem) => {
          return (
            <article>
              <div class="grid mx-auto place-content-center h-[4.5rem]   rounded-xl p-[1px] skills-card w-[5rem] mb-2 ">
                <img
                  src={elem.src}
                  alt={elem.title}
                  class="h-9 px-3 w-auto object-contain object-center"
                />
              </div>
              <span class="text-white text-sm text-center p-1 block font-regular  text-opacity-80 ">
                {elem.title}
              </span>
            </article>
          );
        })
      }
    </div>
  </div>
