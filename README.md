Blog App using Ember
====================

Building blog app with Ember js. This app is based on the [tutorial](http://www.youtube.com/watch?v=Ga99hMi7wfY) from Tom Dale, one of the founders of Ember js. I have not done entirely like in the video.

### Installation

I am going to use yeoman, grunt, bower. Please refer the respective site for more info.  Using these will save a lot of time

##### Install node, npm

``` bash
sudo apt-get install git-core curl build-essential openssl libssl-dev
```

On the latest version of Ubuntu, you can simply:

``` bash
sudo apt-get install nodejs nodejs-dev npm
```

On earlier versions:

``` bash
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs nodejs-dev npm
```

To get rid of the `sudo` for npm everytime,

``` bash
sudo chown -R `whoami` /usr/lib/node_modules/
sudo chown -R `whoami` ~/.npm
```

##### Install yeoman, grunt, bower

``` bash
npm install -g yo grunt-cli bower
```
- Install ember-generator from the [ github page ](https://github.com/yeoman/generator-ember).

``` bash
npm install -g generator-ember
```

###### Create a basic ember app with the generator

``` bash
mkdir emberprojects
cd emberprojects
mkdir blog
cd blog
yo ember
```
There are files, directories to make our development with ember smooth!

``` bash
grunt server
```

Look http://localhost:9000/ or http://localhost:9000/index.html

#### Creating 'About' page:

``` bash
yo ember:view about
```

Now we have template, view created, route is missing. Create a route by

`routes.js`

``` javascript
Blog.Router.map(function () {
  this.resource('about');
});
```
Add the link to the header bar to the default application template `application.hbs`

``` html
<ul class="nav">
    <li> {{#linkTo 'about'}}About{{/linkTo}} </li>
</ul>
```

Now click the `About` link in the header! it should work! yey! On inspecting the `About` link, it looks like ember is adding active ember-view class! :)

#### Creating posts:

``` bash
yo ember:model post title:string author:string intro:string extended:string  publishedAt:date
```

Do not overwrite the routes, lets add the resource `posts` to `routes.js`

``` javascript

Blog.Router.map(function () {

  this.resource('posts');
  this.resource('about');
});
```

We have the template, view, controller for `posts`, lets add the `posts` link in the navbar to the default application template (`application.hbs`)

``` html
<ul class="nav">
    <li> {{#linkTo 'posts'}}Posts{{/linkTo}} </li>
    <li>{{#linkTo 'about'}}About{{/linkTo}}</li>
</ul>
```

##### Create Fixtures or sample posts data

In the `posts.js` model file add the fixture data

``` js

Blog.Post.Fixtures = [
{
  id: 1,
  author: "Vysakh",
  publishedAt: new Date('4-8-2013'),
  intro: "This is just an intro",
  extended: "Yup it is :)"
},

{
  id: 2,
  author: "Dale",
  publishedAt: new Date('4-8-2013'),
  intro: "This is just an intro from Dale",
  extended: "Wow!Yup it is :)"
}

];

```

Edit the `posts.hbs` (create if it is not created during scaffold) to show all the list of posts
