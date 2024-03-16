# Master Développement Territorial | Géoinformatique opérationnelle : Développement avancé d’outils (GIO1)

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Logistics](#logistics)
  - [Communication](#communication)
  - [Course objectives](#course-objectives)
  - [Prerequisite](#prerequisite)
  - [Evaluation](#evaluation)
- [Weekly schedule](#weekly-schedule)
- [Documentation](#documentation)
- [Additional Subjects](#additional-subjects)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Logistics

### Communication

All communication will be done through Teams [here](https://teams.microsoft.com/l/team/19%3AIeFWjAZMGUF8rIc30XKlW05HiCMpqEPlCEIfiVZe9EY1%40thread.tacv2/conversations?groupId=e9b6a83e-27c7-4e53-8a3c-4b3ba0a4c879&tenantId=a372f724-c0b2-4ea0-abfb-0eb8c6f84e40). You can also send me or Jens a private message on Teams or an email if you prefer.

### Course objectives

The goal of this course is to discover concepts and tools to organize the front-end side of a web application and enrich the user interface/experience according to current good practices.

You will:

- learn the basic concepts of code architecture in the context of front-end application
- use modern web development tools (git, VS Code, ...)
- develop a web application using a JavaScript framework (VueJS)
- integrate third-party cartographical libraries (leaflet, openlayers,...)

_This course uses subjects from or based on [COMEM+][comem] [architecture & deployment][comem-archidep], [web-oriented architecture][comem-archioweb] and [mobile development][comem-devmobil] courses taught to students of [Media Engineering][im] at [HEIG-VD][heig], as well as [advanced frontend development][dfa] course taught to students of [MAS-RAD CAS-DAR][masrad-casdar] at [HE-ARC][he-arc]._

### Prerequisite

**Knowledge:**

- Basics of HTML, CSS and [JavaScript][js-bas]
- Basics of Object Oriented Programming [OOP][oop]
- Utilization of geodata
- Use of [command line][cli]

**Tools:**

- Latest [LTS version of NodeJS][node] (14.X.X)
- Latest version of [Git][git-install] (2.33.X)
- Latest version of [VS Code][vs-code] (1.60.X)

### Evaluation

**Project requirements - Developing a small geo-portal web application:**

- Developed with VueJS framework
- Add internal navigation with vue-router
- Integrate and use [one UI Componants library][vue-ui-lib]
- A (home)page with geocoding feature ; the use should be able to display the results in 2D, and your app should use the [GeoAdmin Search REST API][geo-admin-search]
- A page displaying geographical data in 2D (using either [leaflet][leaflet] or [openlayers][openlayers])
- A static page that describe the project, the tool and the team behind it (yourselves)
- Project must be version controlled with Git and stored on [GitHub][github]

## Weekly schedule

<br>
<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Date</th>
      <th>Content</th>
      <th>Tasks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td><td>19.02</td>
      <td><ul>
          <li><a href="./subjects/introduction">Introduction</a></li>
          <li><a href="./subjects/basic-principles">Code and architectural principles</a></li>
      </ul></td>
      <td>Group formation and brainstorming</td>
    </tr>
    <tr>
      <td>2</td><td>26.02</td>
      <td>
      Git<ul>
          <li><a href="https://mediacomem.github.io/comem-archidep/2019-2020/subjects/git/?home=https://heig-mdt-gio1.github.io/material/latest/">Git Introduction</a></li>
          <li><a href="https://mediacomem.github.io/comem-archidep/2019-2020/subjects/git-branching/?home=https://heig-mdt-gio1.github.io/material/latest/">Git Branching</a></li>
          <li><a href="https://mediacomem.github.io/comem-archidep/2019-2020/subjects/git-collaborating/?home=https://heig-mdt-gio1.github.io/material/latest/">Collaborating with Git</a></li>
      </ul></td>
      <td>Project ideas presentation and validation</td>
    </tr>
    <tr>
      <td>3</td><td>04.03</td>
      <td>Advanced JS<ul>
          <li><a href="https://mediacomem.github.io/comem-devmobil/latest/subjects/js-modules/?home=https://heig-mdt-gio1.github.io/material/latest/">Modular JavaScript</a></li>
          <li><a href="https://mediacomem.github.io/comem-archioweb/2019-2020/subjects/npm/?home=https://heig-mdt-gio1.github.io/material/latest/">Node Package Manager (npm)</a>
            <ul>
              <li><a href="https://www.impressivewebs.com/npm-for-beginners-a-guide-for-front-end-developers/">Additional reading about npm for frontend developers</a></li>
            </ul></li>
          <li><a href="https://mediacomem.github.io/comem-devmobil/latest/subjects/js-classes/?home=https://heig-mdt-gio1.github.io/material/latest/">JavaScript ES6 Classes</a></li>
          <li><a href="./subjects/basic-promises">Basic Promises (improved)</a> <i>(<a href="https://mediacomem.github.io/comem-devmobil/latest/subjects/js-promises-basics/?home=https://heig-mdt-gio1.github.io/material/latest/">original version</a>)</i></li>
      </ul></td>
      <td><a href="https://github.com/heig-mdt-gio1/mdt-gio1-practice">Practice best practices</a></td>
    </tr>
    <tr>
      <td>4</td><td>11.03</td>
      <td>Web Frameworks<ul>
          <li><a href="./subjects/web-frameworks">Understanding Web Frameworks</a></li>
          <li><a href="./subjects/vuejs">Starting with vueJS</a></li>
      </ul></td>
      <td>Project's VueJS squeleton</td>
    </tr>
    <tr>
      <td>5</td><td>18.03</td>
      <td>Web Frameworks<ul>
          <li><a href="./subjects/rest/?home=https://heig-mdt-gio1.github.io/material/latest/">RESTful APIs</a></li>
          <li><a href="./subjects/geolibs">Geographical Libraries</a></li>
          <li><a href="./subjects/vue-external-libraries">Vuejs External Libraries</a></li>
      </ul></td>
      <td>Project!</td>
    </tr>
    <tr>
      <td>6</td><td>25.03</td>
      <td></td>
      <td>Project!</td>
    </tr>
    <tr>
      <td>7</td><td>08.04</td>
      <td></td>
      <td>Project presentations</td>
    </tr>
  </tbody>
</table>
<br>

## Documentation

- [VueJS Introduction][vue-intro]
- [Leaflet][leaflet]
- [OpenLayers][openlayers]

## Additional Subjects

- [JavaScript CheatSheet][js-cheat]
- [JavaScript Closures][js-clos]
- [JavaScript Prototypes][js-prot]
- [Advanced Promises][js-prom]

_2022 - [Jens Ingensand](mailto:jens.ingensand@heig-vd.ch), [Mathias Oberson](mailto:mathias.oberson@heig-vd.ch) & ([Thibaud Chassin](thibaud.chassin@heig-vd.ch))_

[cli]: https://mediacomem.github.io/comem-archidep/latest/subjects/cli/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[dfa]: https://mediacomem.github.io/comem-masrad-dfa/latest/
[heig]: http://www.heig-vd.ch
[im]: https://heig-vd.ch/formations/bachelor/filieres/ingenierie-des-medias
[comem]: http://www.heig-vd.ch/comem
[comem-archioweb]: https://mediacomem.github.io/comem-archioweb/latest/
[comem-archidep]: https://mediacomem.github.io/comem-archidep/latest/
[comem-devmobil]: https://mediacomem.github.io/comem-devmobil/latest/
[masrad-casdar]: https://www.he-arc.ch/ingenierie/mas-rad-cas-dar
[he-arc]: https://www.he-arc.ch/
[node]: https://nodejs.org/en/
[git-install]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[vs-code]: https://code.visualstudio.com/
[js-bas]: https://mediacomem.github.io/comem-masrad-dfa/latest/subjects/js/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[git]: https://mediacomem.github.io/comem-archidep/2019-2020/subjects/git/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[git-branching]: https://mediacomem.github.io/comem-archidep/2019-2020/subjects/git-branching/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[git-collab]: https://mediacomem.github.io/comem-archidep/2019-2020/subjects/git-collaborating/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[js-modules]: https://mediacomem.github.io/comem-devmobil/latest/subjects/js-modules/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[rest]: ./subjects/rest/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[js-prom-basic]: https://mediacomem.github.io/comem-devmobil/latest/subjects/js-promises-basics/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[npm]: https://mediacomem.github.io/comem-archioweb/2019-2020/subjects/npm/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[vue-intro]: https://vuejs.org/v2/guide/
[leaflet]: https://leafletjs.com/reference-1.7.1.html
[openlayers]: https://openlayers.org/en/latest/doc/
[cesium]: https://cesium.com/docs/cesiumjs-ref-doc/
[js-clos]: https://mediacomem.github.io/comem-devmobil/latest/subjects/js-closures/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[js-prot]: https://mediacomem.github.io/comem-devmobil/latest/subjects/js-prototypes/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[js-prom]: https://mediacomem.github.io/comem-devmobil/latest/subjects/js-promises/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[vue-ui-lib]: https://github.com/vuejs/awesome-vue#responsive
[github]: https://github.com
[js-classes]: https://mediacomem.github.io/comem-devmobil/latest/subjects/js-classes/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[basic-principles]: ./subjects/basic-principles
[oop]: https://www.datacamp.com/community/tutorials/python-oop-tutorial
[intro]: ./subjects/introduction
[write-functions]: https://hackernoon.com/dont-be-that-guy-write-better-functions-f5423aa01c1f
[design-patterns]: https://fr.wikipedia.org/wiki/Patron_de_conception
[practice]: https://github.com/Tazaf/mdt-gio1-practice/
[js-cheat]: https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet
[web-frameworks]: ./subjects/web-frameworks
[vue-intro-course]: ./subjects/vuejs
[geo-libs]: ./subjects/geolibs
[vue-ext-lib-course]: ./subjects/vue-external-libraries
[geo-admin-search]: https://api3.geo.admin.ch/services/sdiservices.html
[vue-seed]: https://github.com/Tazaf/mdt-gio1-vue-seed
