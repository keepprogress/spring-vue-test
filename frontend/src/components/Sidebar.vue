<template>
    <nav
      id="sidebarMenu"
      class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div class="sidebar-sticky pt-3">
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>產品管理</span>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link class="nav-link" to = "/admin/products">
            <i class="fas fa-box-open"></i>
             產品列表
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to = "/admin/orders">
            <i class="far fa-list-alt"></i>
             訂單列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to = "/admin/coupons">
            <i class="fas fa-ticket-alt"></i>
             優惠券
            </router-link>
          </li> -->
        </ul>
         <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>需授權部分</span>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link to="/admin/protected" class = "nav-link">
              <i class="fas fa-shopping-cart"></i> 模擬訂單
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>
