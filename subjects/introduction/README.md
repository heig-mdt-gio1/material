# Introduction

<!-- slide-front-matter class: center, middle -->

## Foreword

<!-- slide-include ../../BANNER.md -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Lecturers](#lecturers)
- [Prerequisite](#prerequisite)
- [Expectations](#expectations)
- [Goals](#goals)
- [Web development?](#web-development)
- [Logistics](#logistics)
- [Program](#program)
- [Group project](#group-project)
  - [Design a 2D geoportal](#design-a-2d-geoportal)
  - [Functionalities](#functionalities)
- [Technologies](#technologies)
- [2D functionality examples](#2d-functionality-examples)
- [Previous projects](#previous-projects)
- [Previous projects](#previous-projects-1)
- [Previous projects](#previous-projects-2)
- [Your job today](#your-job-today)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Lecturers

- Olivier Lemer, HEIG-VD
- Jens Ingensand, HEIG-VD

## Prerequisite

- Basics of HTML, CSS and JavaScript
- Basics of Object Oriented Programming [OOP][oop]
- Experience with geodata
- Use of command line

[oop]: https://www.datacamp.com/community/tutorials/python-oop-tutorial/

## Expectations

- What is your experience? (e.g. programming languages, past experience)
- What are your expectations?

## Goals

- Learn to structure code: Code principles, Design patterns, Architectural patterns
  - *Easy to apply to other programming languages*
- Versioning tools: GIT
  - *Working together on code; maintaining multiple histories, etc*
- Constructing Web apps using modern web frameworks
  - *Pure HTML/CSS/JS is old school*
- Handling geodata with web frameworks (e.g. Leaflet, Openlayers)
  - *Not just displaying maps*

[cordova]: https://cordova.apache.org/

## Web development?

- Geomatics on the web is increasingly important (e.g. geoportals, interactive deliverables, etc)
- Front-end is becoming relevant in that regard (increasing processing power on the client)
- Web apps now can be deployed on mobile devices (e.g. using [Apache Cordova][cordova])

## Logistics

- Communication through Teams?
- GitHub for code sharing

## Program

| #   | Date       | Subject                                                                    |
| --- | ---------- | -------------------------------------------------------------------------- |
| 1   | 19.02  | Introduction, Setup and group formation |
| 2   | 26.02  | Code Principles, Git and project presentations |
| 3   | 04.03  | Advanced JS  |
| 4   | 11.03  | VueJS |
| 5   | 18.03  | Geographical libraries and Project kickoff! |
| 6   | 25.03  | Project |
| 7   | 01.04  | Project presentations |

## Group project

### Design a 2D geoportal

Example: [geoportail.gouv.fr](https://www.geoportail.gouv.fr)

### Functionalities

- _Landing page_:
  - Menu
  - Landing information
  - Location search
- _2D Map page_:
  - Advanced 2D functionality (of your choice)
  - 2D Layers visualization
- _Additional components/pages_:
  - Team description
  - Documentation

**Be creative!**

## Technologies

- Vuejs v3+ [vuejs.org](https://www.vuejs.org)
- Leaflet v1.7+ [leafletjs.com](https://leafletjs.com/) or Openlayers v6.7+ [openlayers.org](https://openlayers.org/)

## 2D functionality examples

- Real-time geolocated tweets: [demo](https://onemilliontweetmap.com/?center=25.505,-0.09&zoom=2&search=&timeStep=0&timeSelector=0&hashtag1=&hashtag2=sad&sidebar=yes&hashtagBattle=0&timeRange=0&timeRange=25&heatmap=0&sun=0&cluster=1)
- Live SBB trains localization visualization: [demo](http://maps.vasile.ch/transit-sbb/)
- Instragram filters on maps: [demo](http://humangeo.github.io/leaflet-tilefilter/demo.html)
- Data filtering: [demo](https://dvorak.shinyapps.io/college_explorer/)

## Previous projects

![MVC Application](./images/project_2.png)

Planning hicking routes

## Previous projects

![MVC Application](./images/project_3.png)

Real-time parking occupancy

## Previous projects

<p align="center">
  <img src='./images/project_1_1.png' class='w70' />
</p>
<p align="center">
  <img src='./images/project_1_2.png' class='w70' />
</p>

Cadastral constraints

## Your job today

- Form groups of ~3
- Brainstorm on the functionalities of your geoportal
- Prepare a 3 min oral presentation of your idea for next week
