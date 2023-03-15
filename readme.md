# Modular Roleplaying Framework Beta

This project is an attempt to build my modular tabletop roleplaying framework
as a web app and a mobile app for playtesting purposes in the Beta stage of
development. Below I have detailed the overall structure and tools that I am
using.

## Current State

I have a very basic frontend UI in bases/web that uses kee-frame and re-frame to
determine which views to display based on the url as well as which data to query
from the database for that url. If the user navigates to a url, it makes an http
request to the backend server in order to populate the app state. The backend
server has a simple interface for returning all of the creatures in the database
which the frontend uses to populate some basic character desriptions.

Next Goals:
- Build out content for character sheets
- Figure out how to handle all of the state with Mount so that I can have hotloading
- Figure out how to use the cli commands to connect to the database, create a server, and compile the clojurescript

# Project Structure

## Backend ([Clojure](https://clojure.org/))

This project is pretty much Clojure all the way down. I'm using Datomic for the
database, Clojure for all of the backend logic, and Clojurescript for all of the
frontend pieces.

### Architecture ([Polylith](https://github.com/polyfy/polylith))

Need to learn how this works and if it makes sense for this project.

### Interactive Development ([Mount](https://github.com/tolitius/mount)[Portal](https://github.com/djblue/portal))

Mount manages the application state in a lot of different ways for dev and testing.
Portal is just a beefed up REPL and I think I can get it working through
Polylith.

### Security ([Watson](https://github.com/clj-holmes/clj-watson))

I think this mostly just works out of the box. Might need other tools in addition.

### Database ([Datomic](https://www.datomic.com/))

Still just learning the basics of Datomic, but it’s starting to make sense.

### Server & Routing ([Pedestal](https://github.com/pedestal/pedestal))

Pedestal is built by Cognitect, so I am going to learn it since I was having
a hard time deciding which Server/Routing stuff I wanted to use and everything else
is as Clojure-y as it can get.

### Authentication ([Buddy](https://github.com/funcool/buddy))

This is tentative since I’m not sure how I’ll do authentication or how important
it will be for the beta.

### Payment ([Clj-Stripe](https://github.com/abengoa/clj-stripe))

I don’t know how this works, but it looks pretty straightforward and it’s not a
priority right now. I probably won't even implement this in the beta.

## Frontend ([Clojurescript](https://clojurescript.org/))

This is similar to Clojure except it compiles to Javascript instead of Java.

###

### State Management ([Kee-frame](https://github.com/ingesolvoll/kee-frame) [Re-frame](https://github.com/day8/re-frame))

This is a really good combo for a state management framework for Clojure frontend.

### React ([Reagent](https://github.com/reagent-project/reagent))

Reagent makes it easy to use hiccup in Clojurescript.

### CSS ([Garden](https://github.com/noprompt/garden))

Similar to Reagent, except it is used to represent CSS in Clojurescript data
structures.

### Interop ([Transit-cljs](https://github.com/cognitect/transit-cljs))

This could be good for exporting json/edn/other data files if I want to interop
with sites like Alchemy RPG or Roll20.

### Local Instances ([Datascript](https://github.com/tonsky/datascript))

I have to look into this some more, but it could potentially be a good way to
use the application offline.



## Examples

https://github.com/milgra/tutorials/blob/master/full-stack-web-development-with-clojure-and-datomic.md

https://gitlab.com/lambdatronic/clojure-webapp-template

https://github.com/aliaksandr-s/prototyping-with-clojure

https://github.com/learnuidev/grok (datomic backend)

https://github.com/schnaq/cljs-re-frame-full-stack

https://day8.github.io/re-frame/External-Resources/#examples-and-applications-using-re-frame

https://github.com/sweet-tooth-clojure/character-sheet-example

https://github.com/seancorfield/usermanager-example/tree/polylith

https://github.com/furkan3ayraktar/clojure-polylith-realworld-example-app

https://github.com/DavidVujic/polylith-experiments

## Notes

### Polylith Architecture Planning

My current understanding is Components consist of a core piece of functionality
and an interface for utilizing that functionality. Bases consist of a collection
of Bases and a valid selection of Components to be used by those bases and a public
interface for interacting with that underlying functionality from the outside world.
This could be an API, a CLI tool, a mobile app, a web app, etc. Projects are a
collection of usually one base and multiple components and a build script
that defines what deployable artifact is being created, like an uberjar, lambda
function, REST API, library, tool, etc.

The tricky thing right now is that polylith isn't built with clojurescript in mind,
so I am trying to figure out how I'm going to implement the frontend in the polylith context.
Right now, I have the bases/web which has an alias in its deps.edn for compiling the
clojurescript code found in src/beta/web/main.cljs. This can be run in the cljs browser
repl and it displays the reagent hiccup as html.


### Tentative Application Structure

#### Components:
- database
- server
- creature
- other game-concept components (dice, worlds, resources, etc.)

#### Bases:
- web
- mobile
- api
- fitbit

#### Projects:
- dice-roller
- character-sheet (I will probably start with this)
- rulebook
- world