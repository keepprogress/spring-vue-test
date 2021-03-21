# spring-vue-test

[![BuildStatus](https://travis-ci.com/keepprogress/spring-vue-test.svg?branch=master)](https://travis-ci.com/keepprogress/spring-vue-test)
[![versionspringboot](https://img.shields.io/badge/dynamic/xml?color=informational&url=https://raw.githubusercontent.com/keepprogress/spring-vue-test/master/pom.xml&query=%2F%2A%5Blocal-name%28%29%3D%27project%27%5D%2F%2A%5Blocal-name%28%29%3D%27parent%27%5D%2F%2A%5Blocal-name%28%29%3D%27version%27%5D&label=springboot)](https://github.com/spring-projects/spring-boot)
[![versionjava](https://img.shields.io/badge/jdk-8,_9,_11-critical.svg?logo=java)](https://github.com/spring-projects/spring-boot)
[![versionvuejs](https://img.shields.io/badge/dynamic/json?color=yellow&url=https://raw.githubusercontent.com/keepprogress/spring-vue-test/master/frontend/package.json&query=$.dependencies.vue&label=vue&logo=vue.js)](https://vuejs.org/)
[![versionnodejs](https://img.shields.io/badge/dynamic/xml?color=blueviolet&url=https://raw.githubusercontent.com/keepprogress/spring-vue-test/master/frontend/pom.xml&query=%2F%2A%5Blocal-name%28%29%3D%27project%27%5D%2F%2A%5Blocal-name%28%29%3D%27build%27%5D%2F%2A%5Blocal-name%28%29%3D%27plugins%27%5D%2F%2A%5Blocal-name%28%29%3D%27plugin%27%5D%2F%2A%5Blocal-name%28%29%3D%27executions%27%5D%2F%2A%5Blocal-name%28%29%3D%27execution%27%5D%2F%2A%5Blocal-name%28%29%3D%27configuration%27%5D%2F%2A%5Blocal-name%28%29%3D%27nodeVersion%27%5D&label=nodejs&logo=node.js)](https://nodejs.org/en/)
[![versionwebpack](https://img.shields.io/badge/dynamic/json?color=blue&url=https://raw.githubusercontent.com/keepprogress/spring-vue-test/master/frontend/package-lock.json&query=$.dependencies.webpack.version&label=webpack&logo=webpack)](https://webpack.js.org/)
[![versionaxios](https://img.shields.io/badge/dynamic/json?color=red&url=https://raw.githubusercontent.com/keepprogress/spring-vue-test/master/frontend/package.json&query=$.dependencies.axios&label=axios)](https://github.com/axios/axios)
## 目錄  

* [專案簡介](#專案簡介)
* [專案結構](#專案結構)
* [技術運用選擇](#技術運用選擇)
  * [後端技術](#後端技術)
  * [前端技術](#前端技術)
  * [技術細節](#技術細節)
    * [後端運行前端轉譯檔案](#後端運行前端轉譯檔案)
    * [Dockerfile](#dockerfile)
    * [Travis CI配置](#travisci配置)
    * [Heroku自動部屬](#heroku自動部屬)
    * [SpringSecurity配置](#springsecurity配置)
    * [解決CORS](#解決cors)
    * [切換遠端資料庫以及本機資料庫連線](#切換遠端資料庫以及本機資料庫連線)
    * [使遠端資料庫PostgresSQL使用UTF8(讀寫中文)](#使遠端資料庫postgressql使用utf8讀寫中文)
    * [解決SEQUENCE與IDENTITY切換](#解決sequence與identity切換)
    * [Nightwatch配置](#nightwatch配置)
    * [Vuex配置](#vuex配置)
    * [未登入跳轉頁面](#未登入跳轉頁面)
* [如何在作業系統上運行](#如何在作業系統上運行)
  * [前置作業](#前置作業)
    * [Windows(前後端分離)](#windows前後端分離)
    * [Linux (後端+前端轉譯後檔案)](#linux後端前端轉譯後檔案)
  * [資料庫以及使用者創建](#資料庫以及使用者創建)
  * [運行](#運行)
    * [在WINDOWS運行](#在windows運行)
    * [在Linux運行](#在linux運行)
    * [運行Nightwatch End2End test](#運行nightwatchend2endtest已從運行script移除但可手動運行)

## 專案簡介
```
使用Spring-boot 及 Vue 簡易架設自動部屬電商網站，包含中文資料庫CRUD功能。
使用Vuex以及spring security簡易登入系統做no session, stateless的簡易登入。
專案架構採取前後端分離，使用maven-frontend-plugin確保每個部屬或測試環境的node 與 npm 版本相同，
新環境運行不需要全域安裝node及npm (前端開發時自行全域安裝node與npm)
```

## 專案結構

```
spring-boot-vuejs
├─┬ backend     → 後端 module (Spring Boot)
│ ├── src
│ └── pom.xml   → 後端 dependency
├─┬ frontend    → 前端 module (Vue)
│ ├── src
│ └── pom.xml   → 前端 frontend-maven-plugin
└── pom.xml     → Maven parent pom
```

## 技術運用選擇

### 後端技術
| framework or dependency | description                                             | 
| ----------------------- | ------------------------------------------------------- | 
| SpringBoot              | MVC框架                                                 | 
| SpringSecurity          | 認證授權框架                                            | 
| Spring-Boot Devtools    | 開發者工具(更改後端代碼免重啟)                          |
| Spring-Data-Rest        | 提供Spring-Data-Repository endpoints                    |     
| Spring Boot Actuator    | 內部監控(網站健康狀況、Bean生命週期及endpoints)         |
| Spring Data JPA         | ORM(可連接多個datasource、減少sql語句、entity對應資料庫)|
| PostgreSQL              | 產品環境使用遠端資料庫連接                              |
| MySQL-connecter-java    | 連接本機MySQL資料庫                                     |
| Heroku                  | 雲端部屬服務                                            |
| Travis CI               | 持續整合(unit Test)                                     |
| Lombok                  | 簡化封裝工具(免下getter setter)                         |

### 前端技術
| framework or package       | description                                   | 
| -------------------------- | --------------------------------------------- | 
| Vue                        | 前端框架                                      |
| Vue-router                 | 路由框架                                      |
| Vue-cli                    | webpack based開發懶人包(快速創建默認配置專案) |
| Vuex                       | 全局狀態管理框架                              | 
| Axios                      | 前端HTTP框架                                  |
| Bootstrap-vue              | bootstrap-vue整合                             |
| Jest                       | 前端單元測試                                  |
| nightwatch                 | 端對端測試    


### 技術細節

#### 後端運行前端轉譯檔案
```
使用maven-resource-plugin將frontend/target/dist內檔案複製到
backend/src/main/resources/public
```
#### Dockerfile
```js
# Docker multi-stage build

# 1. Building the App with Maven
FROM maven:3-jdk-11

ADD . /springvuedir
WORKDIR /springvuedir

# Just echo so we can see, if everything is there :)
RUN ls -l

# Run Maven build
RUN mvn clean install


# Just using the build artifact and then removing the build-container
FROM openjdk:11-jdk

MAINTAINER keepprogress

VOLUME /tmp

# Add Spring Boot app.jar to Container
COPY --from=0 "/springvuedir/backend/target/backend-1.0.0.jar" app.jar

ENV JAVA_OPTS=""

# Fire up our Spring Boot app by default
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar" ]

```

#### TravisCI配置
```js
建立.travis.yml檔案
before_install 配置與application-dev.properties 對應之datasource
-------------------------------------------------------------------------------

language: java
jdk:
  - openjdk8
  - openjdk9
  - openjdk11

service:
  - mysql

before_install:
  - mysql -u root -e 'CREATE SCHEMA IF NOT EXISTS `full-stack-ecommerce`;'
  - mysql -u root -e "CREATE USER IF NOT EXISTS 'ecommerce'@'localhost' IDENTIFIED BY 'ecommerce';"
  - mysql -u root -e "GRANT ALL PRIVILEGES ON * . * TO 'ecommerce'@'localhost';"
  - mysql -u root -e "USE `full-stack-ecommerce`;"

script: mvn clean install

cache:
  directories:
  - node_modules
  
-------------------------------------------------------------------------------

```

#### Heroku自動部屬
```
![heroku-pipeline](https://github.com/keepprogress/spring-vue-test/tree/master/readme_img/heroku_pipeline.png)
勾選等待CI PASS
![heroku_deploy_with_ci](https://github.com/keepprogress/spring-vue-test/tree/master/readme_img/heroku_deploy_with_ci.png)

```

#### SpringSecurity配置
在backend/src/main/java/com/keepprogress/backend/configuration創立
WebSecurityConfiguration.java檔
關閉SpringSecurity內建 CSRF token 前端不接Token
設定/api/secured需驗證
```java
package com.keepprogress.backend.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // No session will be created or used by spring security
		.and()
			.httpBasic()
		.and()
			.authorizeRequests()
				.antMatchers("/magic-api/**").permitAll()
				.antMatchers("/api/hello").permitAll()
				.antMatchers("/api/user/**").permitAll() // allow every URI, that begins with '/api/user/'
				.antMatchers("/api/secured").authenticated()
				//.anyRequest().authenticated() // protect all other requests
		.and()
			.csrf().disable(); // disable cross site request forgery, as we don't use cookies - otherwise ALL PUT, POST, DELETE will get HTTP 403!

	}

}
```

#### 解決CORS
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
--------------------------------------------------------------------------------
在vue根目錄創建vue.config.js
https://cli.vuejs.org/zh/config/#devserver-proxy
須注意使用devserver-proxy跳轉到localhost:8098時 
axios的api baseURL 配置只需維持預設值(8080)，設定8098會CORS失敗
```

#### 切換遠端資料庫以及本機資料庫連線
```java
在backend/src/main/resources

有三個application properties檔案
application.properties       →   存放共通設定
application-dev.properties   →   存放本機資料庫(MySQL)連線properties
application-prod.properties  →   存放遠端資料庫(PostgreSQL)連線properties

application.properties 內
以
spring.profiles.active = dev or prod

做切換
```

#### 使遠端資料庫PostgresSQL使用UTF8(讀寫中文)
在spring.datasource.url加上
?useUnicode=true&characterEncoding=UTF-8


```js
#datasource.url=postgres://lfjmhfcpbxtzjh:46fc048e051f0d530e492f17a9042422c3797ecc882de4b5bbc5106eac0b0df8@ec2-54-166-242-77.compute-1.amazonaws.com:5432/d1p7k40m672pvb



##check ok!
spring.datasource.url=jdbc:postgresql://ec2-54-166-242-77.compute-1.amazonaws.com:5432/d1p7k40m672pvb?useUnicode=true&characterEncoding=UTF-8
spring.datasource.username=lfjmhfcpbxtzjh
spring.datasource.password=46fc048e051f0d530e492f17a9042422c3797ecc882de4b5bbc5106eac0b0df8
spring.datasource.type=org.apache.tomcat.jdbc.pool.DataSource

spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.hibernate.ddl-auto=update
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect




```

#### 解決SEQUENCE與IDENTITY切換
```java
Entity內

@Id
	@GeneratedValue(
			strategy = GenerationType.AUTO,
			generator="native"
	)
	@GenericGenerator(
			name="native",
			strategy = "native"
	)
  ...
  
參考 https://vladmihalcea.com/why-should-not-use-the-auto-jpa-generationtype-with-mysql-and-hibernate/
```

#### Nightwatch配置
根目錄創建 nightwatch.conf.js
```js
const chrome = require('chromedriver')

module.exports = {

  src_folders: ['tests/e2e/youtubee2e'],
  page_objects_path: ['tests/e2e/youtubee2e/pageobj'],

  webdriver: {
    start_process: true,
    server_path: chrome.path,
    port: 9500
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
}

```

#### Vuex配置
src/store/index.js
```js
import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/utils/backend-api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginSuccess: false,
    loginError: false,
    userName: null,
    userPass: null
  },
  actions: {
    login ({ commit }, { user, password }) {
      return new Promise((resolve, reject) => {
        console.log("Accessing backend with user: '" + user)
        api.getSecured(user, password)
          .then(response => {
            console.log("Response: '" + response.data + "' with Statuscode " + response.status)
            if (response.status === 200) {
              console.log('Login successful')
              // place the loginSuccess state into our vuex store
              commit('loginSuccess', {
                userName: user,
                userPass: password
              })
            }
            resolve(response)
          })
          .catch(error => {
            console.log('Error: ' + error)
            // place the loginError state into our vuex store
            commit('loginError', {
              userName: user
            })
            reject(new Error('Invalid credentials!'))
          })
      })
    }
  },
  mutations: {
    loginSuccess (state, payload) {
      state.loginSuccess = true
      state.username = payload.userName
    },
    loginError (state, payload) {
      state.loginError = true
      state.userName = payload.userName
    }
  },
  getters: {
    isLoggedIn: state => state.loginSuccess,
    hasLoginErrored: state => state.loginError
  }
})

```

#### 未登入跳轉頁面
在src/router/index.js
```js
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log('Needs Authorization Here!')
    if (!store.getters.isLoggedIn) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})
```

## 如何在作業系統上運行

### 前置作業
#### Windows(前後端分離)
```
安裝Java8
參考manual
https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/windows-7-install.html

安裝MySQL
參照MySQL manual
https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/windows-installation.html

全域安裝nodejs 及 npm
https://nodejs.org/en/
安裝nodejs以後會順便安裝npm

安裝maven (需先安裝java8)
https://maven.apache.org/install.html

安裝git bash
https://git-scm.com/downloads
Git PATH設定 選擇 use git from the windows command prompt

MySQL資料庫編碼改成utf8mb4(中文化)
參考
https://stackoverflow.com/questions/3513773/change-mysql-default-character-set-to-utf-8-in-my-cnf/30044721#30044721
my.inf檔案 通常會在programData/MySQL/MySQLServerX.X/my.inf
需先設定顯示隱藏檔案
完成後進MySQL Command Line Client
輸入show variables like 'char%'
除了character_set_system會是utf8 及 character_set_filesystem 會是binary
其他都是utf8mb4 就成功了

```
#### Linux(後端+前端轉譯後檔案)
```
安裝git
sudo yum install git

安裝java8
sudo yum install java-1.8.0-openjdk

安裝wget
sudo yum install wget

安裝grep
sudo yum install grep

安裝maven
sudo yum install maven

安裝MySQL
參考MySQL manual
https://dev.mysql.com/doc/refman/8.0/en/charset.html
改編碼utf8mb4參考
https://stackoverflow.com/questions/3513773/change-mysql-default-character-set-to-utf-8-in-my-cnf/30044721#30044721

```

### 資料庫以及使用者創建
```sql
CREATE USER 'ecommerce'@'localhost' IDENTIFIED BY 'ecommerce';

GRANT ALL PRIVILEGES ON * . * TO 'ecommerce'@'localhost';

ALTER USER 'ecommerce'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ecommerce';

-- -----------------------------------------------------
-- Schema full-stack-ecommerce
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `full-stack-ecommerce`;

CREATE SCHEMA `full-stack-ecommerce`;
USE `full-stack-ecommerce` ;

-- -----------------------------------------------------
-- 由於使用ddl.auto = update 可以不用手動創建table
-- -----------------------------------------------------
```

### 運行

#### 在WINDOWS運行

##### 前端轉譯+後端運行
```
使用管理員權限執行cmd
git clone https://github.com/keepprogress/spring-vue-test.git
cd .../spring-vue-test-master

mvn clean install
mvn -pl backend spring-boot:run
```

##### 前端運行
```
cd .../spring-vue-test-master/frontend
npm run serve
```

#### 在Linux運行
```
git clone https://github.com/keepprogress/spring-vue-test.git
cd .../spring-vue-test-master

mvn clean install
mvn -pl backend spring-boot:run
```

#### 運行NightwatchEnd2EndTest(已從運行script移除但可手動運行)
```
cd .../spring-vue-test-master/frontend
npm run test
```
