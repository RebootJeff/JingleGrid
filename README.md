#JingleGrid - README

Quick overview: JingleGrid is one of my pet projects. It will allow users without music theory expertise to quickly create melodies.

**List of Contents** (yea I said "list" instead of "table" but let's not fight about it)
  1. [What](#what) - purpose and powers
    * [Features](#features)
    * [Version history](#version-history)
  2. [Why](#why) - my motivation
  3. [How](#how) - which technologies
    * [Challenges](#challenges)
  4. [When](#when) - deadlines
  5. [Where](#where) - hosting

##What
My idea for JingleGrid was insipred by [Music Matrix](http://www.sembeo.com/media/Matrix.swf), a flash app that combines harmonies with minimalism. I want to make something similar, but much more powerful. The web app I'm going to develop will allow users to click on grid cells to add "notes" to "canvas" for creating simple jingles, much like Music Matrix, but it will go a few steps further. It will show users the names of notes, allow users to change the key, and more.

###Features
1. [ ] Basic music matrix canvas
2. [ ] GUI has play/pause button, names of notes,and other relevant details as more features are added
3. [ ] User can change tempo and key
4. [ ] User can add octaves (this will add more rows to the canvas)
5. [ ] User can add measures/bars (this will add more columns to the canvas)
6. [ ] User can save/share jingle (not sure how I will do this)

###Version History
- v0.0 - App does not exist yet

##Why
I learned music notation and very little music theory back in the day, but I love music and I want to produce my own. I don't plan on becoming an indie rockstar or anything, I just like to make stuff...including music. Sometimes, I struggle to come up with tunes/melodies/jingles even though I can use tools like [LMMS](http://lmms.sourceforge.net/).

It would be nice if I could just lock in a specific key and experiment with notes in that key using a super simple GUI. That is the purpose of JingleGrid.

Of course, JingleGrid also serves as a pet project that will help me learn a lot. It will challenge me greatly, but I belive it's within the realm of reason that I can complete this project as I teach myself the relevant skills. I've been looking for ways to practice web development, and this fits the bill nicely.

##How
The basic canvas/grid and GUI can be easily created with **HTML, CSS, and jQuery**. I've already built some self-confidence by creating a grid for [something else](https://github.com/RebootJeff/myOdinProject/tree/master/odin.js.sketch_pad). However, I don't know how to work with audio yet. I know how to create the overall interface for this web app, but I don't know how to actually produce sound from it.

Other features such as changing tempo and key, adding octaves, and adding measures should be a simple matter of changing parameters in the basic canvas. What worries me is how to implement saving and sharing features. I assume this would require some back-end knowledge that I currently don't possess. I plan on [learning](https://github.com/TheOdinProject/curriculum) **Ruby/Ruby on Rails**, so hopefully that will help.

###Challenges
  * How can I play sounds? How does audio work in JS?
    * Answer: I was browsing JSConf videos on YouTube, and I found [a presentation](http://www.youtube.com/watch?v=PN8Eg1K9xjE) about the [Web Audio API](http://www.html5rocks.com/en/tutorials/webaudio/intro/). Awesome!
  * How can I implement saving and sharing features?
  * How can I allow users to add octaves and measures without resetting the entire grid?

### (proposed) Tech Stack

- Client-side
  - Angular
  - Compass
  - Bootstrap
- Server-side
  - Node.js w/Express
  - Passport.js
  - MongoDB w/Mongoose

##When
~~[ ] Complete basic prototype by 8/14/13
[ ] Make it not ugly by 8/17/13
[ ] Add some nice-to-have features by 8/23/13~~

Programming Bootcamp applications are taking up a lot more time than I expected. JingleGrid is on hold indefinitely. Hopefully I'll get into a bootcamp and be able to work on it as a class project.
**Update:** I've enrolled in a bootcamp called Hack Reactor. Woot!

##Where
Here. On my GitHub. Yay, open source :)
