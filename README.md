# spring-vue-test

[![BuildStatus](https://travis-ci.com/keepprogress/spring-vue-test.svg?branch=master)](https://travis-ci.com/keepprogress/spring-vue-test)
[![versionspringboot](https://img.shields.io/badge/dynamic/xml?color=brightgreen&url=https://raw.githubusercontent.com/jonashackt/spring-boot-vuejs/master/pom.xml&query=%2F%2A%5Blocal-name%28%29%3D%27project%27%5D%2F%2A%5Blocal-name%28%29%3D%27parent%27%5D%2F%2A%5Blocal-name%28%29%3D%27version%27%5D&label=springboot)](https://github.com/spring-projects/spring-boot)
[![versionjava](https://img.shields.io/badge/jdk-8,_9,_11-brightgreen.svg?logo=java)](https://github.com/spring-projects/spring-boot)
[![versionvuejs](https://img.shields.io/badge/dynamic/json?color=brightgreen&url=https://raw.githubusercontent.com/jonashackt/spring-boot-vuejs/master/frontend/package.json&query=$.dependencies.vue&label=vue&logo=vue.js)](https://vuejs.org/)
[![versionnodejs](https://img.shields.io/badge/dynamic/xml?color=brightgreen&url=https://raw.githubusercontent.com/jonashackt/spring-boot-vuejs/master/frontend/pom.xml&query=%2F%2A%5Blocal-name%28%29%3D%27project%27%5D%2F%2A%5Blocal-name%28%29%3D%27build%27%5D%2F%2A%5Blocal-name%28%29%3D%27plugins%27%5D%2F%2A%5Blocal-name%28%29%3D%27plugin%27%5D%2F%2A%5Blocal-name%28%29%3D%27executions%27%5D%2F%2A%5Blocal-name%28%29%3D%27execution%27%5D%2F%2A%5Blocal-name%28%29%3D%27configuration%27%5D%2F%2A%5Blocal-name%28%29%3D%27nodeVersion%27%5D&label=nodejs&logo=node.js)](https://nodejs.org/en/)
[![versionwebpack](https://img.shields.io/badge/dynamic/json?color=brightgreen&url=https://raw.githubusercontent.com/jonashackt/spring-boot-vuejs/master/frontend/package-lock.json&query=$.dependencies.webpack.version&label=webpack&logo=webpack)](https://webpack.js.org/)
[![versionaxios](https://img.shields.io/badge/dynamic/json?color=brightgreen&url=https://raw.githubusercontent.com/jonashackt/spring-boot-vuejs/master/frontend/package.json&query=$.dependencies.axios&label=axios)](https://github.com/axios/axios)
## Table of Contents  

* [Setup Vue.js & Spring Boot](#setup-vuejs--spring-boot)
* [Project setup](#project-setup)
* [Backend](#backend)
* [Frontend](#frontend)
  * [Use frontend-maven-plugin to handle NPM, Node, Bower, Grunt, Gulp, Webpack and so on :)](#use-frontend-maven-plugin-to-handle-npm-node-bower-grunt-gulp-webpack-and-so-on-)
* [First App run](#first-app-run)
* [Faster feedback with webpack-dev-server](#faster-feedback-with-webpack-dev-server)
* [Browser developer tools extension](#browser-developer-tools-extension)
* [HTTP calls from Vue.js to (Spring Boot) REST backend](#http-calls-from-vuejs-to-spring-boot-rest-backend)
  * [The problem with SOP](#the-problem-with-sop)
  * [Enabling Axios CORS support](#enabling-axios-cors-support)
  * [Enabling Spring Boot CORS support](#enabling-spring-boot-cors-support)
  * [But STOP! Webpack & Vue have something much smarter for us to help us with SOP!](#but-stop-webpack--vue-have-something-much-smarter-for-us-to-help-us-with-sop)
* [Using history mode for nicer URLs](#using-history-mode-for-nicer-urls)
* [Bootstrap & Vue.js](#bootstrap--vuejs)

## Setup Vue.js & Spring Boot

### Prerequisites

#### MacOSX

```
brew install node
npm install -g @vue/cli
```

#### Linux

```
sudo apt update
sudo apt install node
npm install -g @vue/cli
```

#### Windows

```
choco install npm
npm install -g @vue/cli
```

## Project setup

```
spring-boot-vuejs
├─┬ backend     → backend module with Spring Boot code
│ ├── src
│ └── pom.xml
├─┬ frontend    → frontend module with Vue.js code
│ ├── src
│ └── pom.xml
└── pom.xml     → Maven parent pom managing both modules
```

## Backend

Go to https://start.spring.io/ and initialize a Spring Boot app with `Web` and `Actuator`. Place the zip’s contents in the backend folder.

Customize pom to copy content from Frontend for serving it later with the embedded Tomcat:

```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
    </plugin>
    <plugin>
      <artifactId>maven-resources-plugin</artifactId>
      <executions>
        <execution>
          <id>copy Vue.js frontend content</id>
          <phase>generate-resources</phase>
          <goals>
            <goal>copy-resources</goal>
          </goals>
          <configuration>
            <outputDirectory>src/main/resources/public</outputDirectory>
            <overwrite>true</overwrite>
            <resources>
              <resource>
                <directory>${project.parent.basedir}/frontend/target/dist</directory>
                <includes>
                  <include>static/</include>
                  <include>index.html</include>
                  <include>favicon.ico</include>
                </includes>
              </resource>
            </resources>
          </configuration>
        </execution>
      </executions>
    </plugin>
  </plugins>
</build>
```


## Frontend

Creating our `frontend` project is done by the slightly changed (we use `--no-git` here, because our parent project is already a git repository and otherwise vue CLI 3 would initialize an new one):

```
vue create frontend --no-git
```

see https://cli.vuejs.org/guide/

This will initialize a project skeleton for Vue.js in /frontend directory - it, therefore, asks some questions in the cli:

![vuejs-cli3-create](screenshots/vuejs-cli3-create.png)

__Do not__ choose the default preset with `default (babel, eslint)`, because we need some more plugins for our project here (choose the Plugins with the __space bar__):

![vuejs-cli3-select-plugins](screenshots/vuejs-cli3-select-plugins.png)

You can now also use the new `vue ui` command/feature to configure your project:

![vue-ui](screenshots/vue-ui.png)

If you want to learn more about installing Vue.js, head over to the docs: https://vuejs.org/v2/guide/installation.html


### Use frontend-maven-plugin to handle NPM, Node, Bower, Grunt, Gulp, Webpack and so on :)

If you’re a backend dev like me, this Maven plugin here https://github.com/eirslett/frontend-maven-plugin is a great help for you - because, if you know Maven, that’s everything you need! Just add this plugin to the frontend’s `pom.xml`:

```xml
<build>
    <plugins>
        <plugin>
            <groupId>com.github.eirslett</groupId>
            <artifactId>frontend-maven-plugin</artifactId>
            <version>${frontend-maven-plugin.version}</version>
            <executions>
                <!-- Install our node and npm version to run npm/node scripts-->
                <execution>
                    <id>install node and npm</id>
                    <goals>
                        <goal>install-node-and-npm</goal>
                    </goals>
                    <configuration>
                        <nodeVersion>v10.10.0</nodeVersion>
                    </configuration>
                </execution>
                <!-- Install all project dependencies -->
                <execution>
                    <id>npm install</id>
                    <goals>
                        <goal>npm</goal>
                    </goals>
                    <!-- optional: default phase is "generate-resources" -->
                    <phase>generate-resources</phase>
                    <!-- Optional configuration which provides for running any npm command -->
                    <configuration>
                        <arguments>install</arguments>
                    </configuration>
                </execution>
                <!-- Build and minify static files -->
                <execution>
                    <id>npm run build</id>
                    <goals>
                        <goal>npm</goal>
                    </goals>
                    <configuration>
                        <arguments>run build</arguments>
        </configuration>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

### Tell Webpack to output the dist/ contents to target/

Commonly, node projects will create a dist/ directory for builds which contains the minified source code of the web app - but we want it all in `/target`. Therefore we need to create the optional [vue.config.js](https://cli.vuejs.org/config/#vue-config-js) and configure the `outputDir` and `assetsDir` correctly: 

```javascript
module.exports = {
  ...
  // Change build paths to make them Maven compatible
  // see https://cli.vuejs.org/config/
  outputDir;: 'target/dist',
  assetsDir;: 'static';
}
```


## First App run

Inside the root directory, do a: 

```
mvn clean install
```

Run our complete Spring Boot App:

```
mvn --projects backend spring-boot:run
```

Now go to http://localhost:8098/ and have a look at your first Vue.js Spring Boot App.



## Faster feedback with webpack-dev-server

The webpack-dev-server, which will update and build every change through all the parts of the JavaScript build-chain, is pre-configured in Vue.js out-of-the-box! So the only thing needed to get fast feedback development-cycle is to cd into `frontend` and run:

```
npm run serve
```

That’s it! 


## Browser developer tools extension

Install vue-devtools Browser extension https://github.com/vuejs/vue-devtools and get better feedback, e.g. in Chrome:

![vue-devtools-chrome](screenshots/vue-devtools-chrome.png)


## IntelliJ integration

There's a blog post: https://blog.jetbrains.com/webstorm/2018/01/working-with-vue-js-in-webstorm/

Especially the `New... Vue Component` looks quite cool :)



## HTTP calls from Vue.js to (Spring Boot) REST backend

Prior to Vue 2.0, there was a build in solution (vue-resource). But from 2.0 on, 3rd party libraries are necessary. One of them is [Axios](https://github.com/mzabriskie/axios) - also see blog post https://alligator.io/vuejs/rest-api-axios/

```
npm install axios --save
```

Calling a REST service with Axios is simple. Go into the script area of your component, e.g. Hello.vue and add:

```js
import axios from 'axios'

data ();{
  return {
    response: [],
    errors: []
  }
},

callRestService ();{
  axios.get(`api/hello`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.response = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
}
}
```

In your template area you can now request a service call via calling `callRestService()` method and access `response` data:

```html
<button class=”Search__button” @click="callRestService()">CALL Spring Boot REST backend service</button>

<h3>{{ response }}</h3>
```

### The problem with SOP

Single-Origin Policy (SOP) could be a problem if we want to develop our app. Because the webpack-dev-server runs on http://localhost:8080 and our Spring Boot REST backend on http://localhost:8098.

We need to use Cross-Origin Resource Sharing Protocol (CORS) to handle that (read more background info about CORS here https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)


#### Enabling Axios CORS support

Create a central Axios configuration file called `http-commons.js`:

```js
import axios from 'axios'

export const AXIOS = axios.create({
  baseURL: `http://localhost:8098`,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:8080'
  }
})
```

Here we allow requests to the base URL of our Spring Boot App on port 8098 to be accessible from 8080.

Now we could use this configuration inside our Components, e.g. in `Hello.vue`:
```js
import {AXIOS} from './http-common'

export default {
  name: 'hello',

  data () {
    return {
      posts: [],
      errors: []
    }
  },
  methods: {
    // Fetches posts when the component is created.
    callRestService () {
      AXIOS.get(`hello`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
```

#### Enabling Spring Boot CORS support

Additionally, we need to configure our Spring Boot backend to answer with the appropriate CORS HTTP Headers in its responses (there's a good tutorial here: https://spring.io/guides/gs/rest-service-cors/). Therefore we add the annotation `@CrossOrigin` to our BackendController:

```java
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping(path = "/hello")
public @ResponseBody String sayHello() {
    LOG.info("GET called on /hello resource");
    return HELLO_TEXT;
}
```

Now our Backend will respond CORS-enabled and will accept requests from 8080. But as this only enables CORS on one method, we have to repeatedly add this annotation to all of our REST endpoints, which isn’t a nice style. We should use a global solution to allow access with CORS enabled to all of our REST resources. This could be done in the `SpringBootVuejsApplication.class`:

```java
// Enable CORS globally
@Bean
public WebMvcConfigurer corsConfigurer() {
  return new WebMvcConfigurerAdapter() {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
      registry.addMapping("/api/*").allowedOrigins("http://localhost:8080");
    }
  };
}
```

Now all calls to resources behind `api/` will return the correct CORS headers. 


#### But STOP! Webpack & Vue have something much smarter for us to help us with SOP!

Thanks to my colleague [Daniel](https://www.codecentric.de/team/dre/) who pointed me to the nice proxying feature of Webpack dev-server, we don't need to configure all the complex CORS stuff anymore!

According to the [Vue CLI 3 docs](https://cli.vuejs.org/config) the only thing we need to [configure is a devserver-proxy](https://cli.vuejs.org/config/#devserver-proxy) for our webpack devserver requests. This could be done easily in the optional [vue.config.js](https://cli.vuejs.org/config/#vue-config-js) inside `devServer.proxy`: 

```js
module.exports = {
  // proxy all webpack dev-server requests starting with /api
  // to our Spring Boot backend (localhost:8098) using http-proxy-middleware
  // see https://cli.vuejs.org/config/#devserver-proxy
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8098',
        ws: true,
        changeOrigin: true
      }
    }
  },
  ...
}
```

With this configuration in place, the webpack dev-server uses the [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware), which is a really handy component, to proxy all frontend-requests from http://localhost:8080 --> http://localhost:8098 - incl. Changing the Origin accordingly.

This is used in the webpack build process to configure the proxyMiddleware (you don't need to change something here!):

```js
// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context];
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})
```

## Using history mode for nicer URLs

If we use the default configuration of the generated Vue.js template, we see URLs with a `#` inside them - like this:

```
http://localhost:8098/#/bootstrap

or

http://localhost:8098/#/user
```

With the usage of __[HTML5 history mode](https://router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode)__, we can achieve much nicer URLs without the `#` in them. Only thing to do in the Vue.js frontend is to configure our router accordingly inside the [router.js](frontend/src/router.js):

```
...

Vue.use(Router);

const router = new Router({
    mode: 'history', // uris without hashes #, see https://router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode
    routes: [
        { path: '/', component: Hello },
        { path: '/callservice', component: Service },
        ...
```

That's nearly everything. BUT only nearly! If one clicks on a link inside our frontend, the user is correctly send to the wished component. 

But if the user enters the URL directly into the Browser, we get a `Whitelabel Error Page` because our Spring Boot backend gives us a __HTTP 404__ - since this URL isn't present in the backend:

![html5-history-mode-whitelabel-error-page-404](screenshots/html5-history-mode-whitelabel-error-page-404.gif)

The solution is to redirect or better forward the user to the frontend (router) again. The [Vue.js docs don't provide an example configuration for Spring Boot](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations), but luckily [there are other resources](https://www.baeldung.com/spring-redirect-and-forward). In essence we have to implement a forwarding controller in our [BackendController](backend/src/main/java/de/jonashackt/springbootvuejs/controller/BackendController.java):

```
    // Forwards all routes to FrontEnd except: '/', '/index.html', '/api', '/api/**'
    // Required because of 'mode: history' usage in frontend routing, see README for further details
    @RequestMapping(value = "{_:^(?!index\\.html|api).$}")
    public String redirectApi() {
        LOG.info("URL entered directly into the Browser, so we need to redirect...");
        return "forward:/";
    }
```

This controller will forward every request other then `'/', '/index.html', '/api', '/api/**'` to our Vue.js frontend.


## Bootstrap & Vue.js

There’s a nice integration of Bootstrap in Vue.js: https://bootstrap-vue.js.org/

```
npm install bootstrap-vue
```

Now you can use all the pretty Bootstrap stuff with ease like:

```
<b-btn @click="callRestService()">CALL Spring Boot REST backend service</b-btn>
```

instead of

```
<button type="button" class=”btn” @click="callRestService()">CALL Spring Boot REST backend service</button>
```

The docs contain all the possible components: https://bootstrap-vue.js.org/docs/components/alert/

See some elements, when you go to http://localhost:8080/#/bootstrap/ - this should look like this:

![bootstrap-styled-vuejs](screenshots/bootstrap-styled-vuejs.png)

A good discussion about various UI component frameworks: http://vuetips.com/bootstrap
