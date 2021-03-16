<template>
  <div class="about">
    <div class="container">
      <br />
      <br />
      <br />
      <h1>關於天龍書局後台系統</h1>
      <br />
      <h5 align="left">
        本專案採用Spring-Data-Rest 與 Spring-Data-JPA
        <br />
        在 Spring Data 裡面只要用 @RepositoryRestResource
        回傳的就是HATEOAS這個格式
        <br />
        在產品與產品類別使用了@OneToMany 與 @ManyToOne 來做關聯
        <br />
        Product.java裡的category 設定不能為null
        <br />
        由於HATEOAS叫出的category不會給id,而是在Product.java mapped by category
        <br />
        所以POST product的 category必須給值 該值為
        <br />
        <br />
        <pre>
        category:{
          "https://spring-vue-heroku-demo.herokuapp.com/magic-api/product-category/1"
        }
        </pre>
        這種樣式 其中product-category/1的數字1為特定一產品id
        <br />
        <br />
        而使用GET方法取得特定產品得到的值關於category 卻是
        <br />
        <br />
        <pre align="left">
        "category": {
          href": "https://spring-vue-heroku-demo.herokuapp.com/magic-api/products/1/category"
        }
        </pre>
        <br />
        這種樣式,並沒有直接包含product-category的id相關資訊
        <br />
        <br />
        在Postman點擊該連結會跳出GET的request再點擊send會得到類似樣式的回應
        <br />
        <br />
        <pre>
        "categoryName": "中文書",
        "_links": {
        "self": {
          "href":
            "https://spring-vue-heroku-demo.herokuapp.com/magic-api/product-category/1"
        },
        "productCategory": {
          "href":
            "https://spring-vue-heroku-demo.herokuapp.com/magic-api/product-category/1"
        },
        "products": {
          "href":
            "https://spring-vue-heroku-demo.herokuapp.com/magic-api/product-category/1/products"
          }
        }
        </pre>
        <br />
        <br />
        以下提供POSTMAN設定檔, 先予證明CRUD沒有問題
        <br />
        <a href="https://www.postman.com/downloads/">Postman載點</a>
        <br />
        <a href="https://github.com/keepprogress/spring-vue-test/tree/master/backend/postmanCollectionFiles/spring-vue-test-heruko-demo-CRUD-products.postman_collection.json">product-CRUD-collection</a>
        <br />
        <a href="https://github.com/keepprogress/spring-vue-test/tree/master/backend/postmanCollectionFiles/spring-vue-test-heroku-demo-CRUD-product-category.postman_collectio.json">product-category-CRUD-collection</a>
      </h5>
      <br />
      <h5 align="left">點擊 File >>>> Import</h5>
      <br />
      <img src="./../assets/postman_img/Postman_import.png" />
      <br />
      <h5 align="left">點擊 正中間偏下的 Upload Files</h5>
      <br />
      <img src="./../assets/postman_img/Postman_Upload_Collection.png" />
      <br />
      <h5 align="left">選擇欲載入的設定檔後點選開啟</h5>
      <br />
      <img src="./../assets/postman_img/selectCollection.png" />
      <br />
      <h5 align="left">點擊Import</h5>
      <br />
      <img src="./../assets/postman_img/finish_import.png" />
      <br />
      <h5 align="left">選擇collection裡寫好的Request測試API的CRUD功能</h5>
      <br />
      <img src="./../assets/postman_img/selectCollection_to_test.png" />
      <br />
      <h5 align="left">以POST產品為例 需確認方法為POST 且Body 選擇raw 格式選擇JSON</h5>
      <br />
      <img src="./../assets/postman_img/Post_method_example.png" />
      <br />
      <h5 align="left">此時Headers裡即有Content-Type帶有application/json的值</h5>
      <br />
      <img src="./../assets/postman_img/Post_headers.png" />
      <br />
      <h5 align="left">點擊send後回傳值在下方</h5>
      <br />
      <img src="./../assets/postman_img/Post_response.png" />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>
