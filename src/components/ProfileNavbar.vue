<template>
  <div class="fixed-top" style="background-color:#ffff">
    <nav class="navbar shadow-sm navbar-light bg-light justify-content-between">
      <div class="container">
        <a class="navbar-brand mainColor"> <span class="name">
          TourRadar
          </span>
          <span class="logo">

          </span>
          </a>
        <form class="form-inline mr-4 mb-2 mb-md-0 mr-md-0">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"
                ><font-awesome-icon :icon="['fas', 'search']" class="mainColor"
              /></span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Start your search"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </form>
        <div>
          <div class="msg-btn">
            <font-awesome-icon :icon="['fas', 'sms']" class="mainColor msg-icon" />
            </div>
          <div class="dpd">
            <b-dropdown
              variant="link btn"
              size="md"
              right
              toggle-class="text-decoration-none"
              no-caret
            >
              <template #button-content>
                <font-awesome-icon :icon="['fas', 'bars']" class="mainColor nav-bars" />
                <span>
                  <font-awesome-icon :icon="['fas', 'user-circle']" class="nav-user ml-2" />
                  </span>
              </template>
              <b-dropdown-item href="#"><router-link to="/">
                <font-awesome-icon :icon="['fas', 'home']" class="mainColor" />
                Home </router-link></b-dropdown-item
              >
              <b-dropdown-item href="#"><router-link to="/about">
                <font-awesome-icon :icon="['fas', 'plus-square']" class="mainColor" />
                Post </router-link></b-dropdown-item
              >
              <b-dropdown-item href="#">
                <font-awesome-icon :icon="['fas', 'bell']" class="mainColor" />
                Notification</b-dropdown-item
              >
              <b-dropdown-item href="#">
                <font-awesome-icon :icon="['fas', 'user']" class="mainColor" />
                Profile</b-dropdown-item
              >
              <b-dropdown-item href="#">
                <font-awesome-icon
                  :icon="['fas', 'sign-in-alt']"
                  class="mainColor"
                />Login</b-dropdown-item
              >
            </b-dropdown>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'ProfileNavbar',
};
</script>
