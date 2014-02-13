---
layout: post
title:  "How I work and why"
date:   2014-02-13 09:00
categories: personal
tags: jekyll workflow preprocessor
---
<p class="post__excerpt">It may not be perfect, but it serves a purpose.</p>

I think the largest step I've ever taken in terms of personal productivity is to formalise a workflow for myself.

Once upon a time, I used to just go with the flow. Which, while it was easy at the time, really didn't account for a lot of the hiccups that come with working on projects. Unfortunately I was too inexperienced at the time to preempt these hiccups.

I think the biggest problem was in coming back to work I'd done for long standing bug fixes, feature requests and so on. I'd look at it from a slightly more experienced perspective and I'd have no idea what I'd done or why I'd done it. 

This all led to work taking a lot longer that it should have, which eventually led to me getting frustrated enough to think of a system and enforce it upon myself.

The criteria I set myself were:

* Fluid enough to be applied to any project
* As automated as possible to remove human errors
* Simple to set up

I'd by lying if I said I decided there and then what I'd do, then went straight into it. There was a <em>lot</em> of trial and error involved, but, I settled on the following:

##File system

In order to be able to easily navigate through projects, a set file system had to be put in place. The names of the folders are pretty much set in stone, but their existence is all dependent on if the project requires it.

Here are a few common ones

<pre>
img  - Images, split by page/category/whatever inside.
js   - Javascript files
scss - My SCSS files
css  - Where my Sass is compiled into
</pre> 

###SCSS file system

Now, I don't just stick all of my scss files directly inside the scss folder, they have their own system, based on ["How to structure a Sass project"][sass-structure] by John W. Long. 

<pre>
stylesheets/
|
|-- modules/   #Colours etc.
|    
|
|-- partials/  #Depending on the project I flip between one .scss file per page and a more          
|              #SMACSS kind of structure.
|
|-- vendor/    #Anything 3rd party          
|
|
`-- main.scss     #Primary file which call all the others, this is the one that's compiled   
 -- main.min.scss #To compile both minified and expanded versions at the same time    
</pre>

##Preprocessing

You may have noticed I'm a Sass guy and of course this requires processing into CSS at some point. Now, there are many solutions to this: Straight on the command line using <code>sass --watch</code>, a task runner like [Grunt][grunt] or [Gulp][gulp] or using some sort of tool like [CodeKit][codekit] or [Prepros][prepros].

I personally use Prepros. The reasons for this are simple: It's free (yes, I know there's a pro version) and it's cross platform. 

As I use Windows at work and a Mac at home, the cross platform capabilities are really what sold it to me.

I use Prepros to compile both an expanded and a minified version of the CSS file into the CSS folder. Also, as a bonus, I also use Prepros to optimise all of my images.

##Version control

Time has taught me in the harshest way that you should always version your work. Keeping track of changes and allowing for collaboration while accounting for communication issues is paramount to a developer that works with others, or has the odd off day and accidentally commits a deletion of half their work.

I use a few different things here, due to systems already in place at my job and personal preferences.

At work we use [TortoiseSVN][tortoise], which serves its purpose but I'm not particularly fond of it, due to its slightly confusing explorer integration.

At home is use either [Bitbucket][bitbucket] or [Github][github]. Both are great, I prefer Github because of the awesome community and the fact it really ups your game because your code is on show (this site is actually [hosted on github][hosted]), but Bitbucket gives you private repos for free. So, when you're working on something for a client and they're not too hot on the source code being visible, Bitbucket is the answer. I should say that Github do offer private repos, but they're not free.

##Testing

We're lucky enough to have a [BrowserStack][browserstack] license at work, with its local testing abiilities, combined with either Prepros built in server, jekyll's built in server, or my [MAMP][mamp]/[WAMP][wamp] server, my cross browser testing is entirely covered.

As for Javascript testing, I'm not really experienced enough in app development to weigh in with an opinion, but [Jasmine][jasmine] works for me.

##Conclusion

That's the basics of my development workflow at the minute, there are a few areas that I'm still hashing out (deployment, for instance), but on the whole its worked for me up until now. No doubt it'll continue to evolve as I become more experienced but that's all part of the fun.

<p class="post__signature">S.</p>

[prepros]: http://alphapixels.com/prepros/
[sass-structure]: http://thesassway.com/beginner/how-to-structure-a-sass-project/
[grunt]: http://gruntjs.com/
[gulp]: http://gulpjs.com/
[codekit]: https://incident57.com/codekit/
[tortoise]: http://tortoisesvn.net/
[bitbucket]: https://bitbucket.org/
[github]: http://github.com/
[hosted]: https://github.com/ShaunYearStrong/ShaunYearStrong.github.io
[browserstack]: http://www.browserstack.com/
[mamp]: http://www.mamp.info/en/index.html
[wamp]: http://www.wampserver.com/en/
[jasmine]: http://pivotal.github.io/jasmine/

