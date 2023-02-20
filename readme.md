# Modular Roleplaying Framework Beta

This project is an attempt to build my modular tabletop roleplaying framework
as a web app and a mobile app for playtesting purposes in the Beta stage of
development. Below I have detailed the overall structure and tools that I am
using.

## Current State

I have a basic dev-local datomic database setup for some example creatures and
I have a simple server with very few routes. Now that the basics are in place,
though, I am hoping to make more steady progress moving forward.

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

### Server ([Ring-Jetty9-Adapter](https://github.com/sunng87/ring-jetty9-adapter) or [Pedestal](https://github.com/pedestal/pedestal))

The regular Ring can't utilize anything past Jetty 9, so this works for Jetty 11.
If I decide to go with Pedestal, it would also replace Reitit.
[A good breakdown](https://practical.li/clojure-web-services/app-servers/overview.html) of web servers.

### Routing ([Reitit](https://github.com/metosin/reitit))

One of the common routing libraries for Clojure apps. My understanding is that
Reitit is a bit more flexible where Compojure is more streamlined. If I ultimately
decide to go with Pedestal, however, then I will be doing the routing through
that instead.

### Authentication ([Buddy](https://github.com/funcool/buddy))

This is tentative since I’m not sure how I’ll do authentication or how important
it will be for the beta.

### Payment ([Clj-Stripe](https://github.com/abengoa/clj-stripe))

I don’t know how this works, but it looks pretty straightforward and it’s not a
priority right now. I probably won't even implement this in the beta.

## Frontend ([Clojurescript](https://clojurescript.org/))

This is very similar to Clojure except it compiles to Javascript instead of Java.

### State Management ([Re-frame](https://github.com/day8/re-frame))

This is a solid state management framework for Clojure frontend.

### React ([Reagent](https://github.com/reagent-project/reagent))

Reagent makes it easy to use hiccup in Clojurescript.

### CSS ([Garden](https://github.com/noprompt/garden))

Similar to Reagent, except it is used to represent CSS in Clojurescript data
structures.

### Interop ([Transit-cljs](https://github.com/cognitect/transit-cljs))

This could be good for exporting json/edn/other data files if I want to interop
ith sites like Alchemy RPG or Roll20.

### Local Instances ([Datascript](https://github.com/tonsky/datascript))

I have to look into this some more, but it could potentially be a good way to
play offline.



## Examples

https://github.com/milgra/tutorials/blob/master/full-stack-web-development-with-clojure-and-datomic.md
https://gitlab.com/lambdatronic/clojure-webapp-template
https://github.com/aliaksandr-s/prototyping-with-clojure
https://github.com/learnuidev/grok (datomic backend)
https://github.com/schnaq/cljs-re-frame-full-stack
https://day8.github.io/re-frame/External-Resources/#examples-and-applications-using-re-frame
https://github.com/sweet-tooth-clojure/character-sheet-example
https://github.com/furkan3ayraktar/clojure-polylith-realworld-example-app

## Notes

### Polylith Architecture Planning

Polylith applications are built out of Projects which are collections of Bases and Components.
Components consist of a core piece of functionality and an interface for utilizing that
functionality. Bases consist of a collection of Components and an interface for interacting
with that underlying functionality that is accessible from the outside world, like an api,
a web application, a cli tool, etc. With that in mind, this is my tentative structure for the beta:

#### Components:
- database
- server
- creature

#### Bases:
- web
- mobile
- api

#### Projects:
- dice-roller
- character-sheet
- rulebook
- world
