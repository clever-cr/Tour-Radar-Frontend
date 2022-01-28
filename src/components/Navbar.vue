<template>
  <div>
    <nav class="navbar shadow-sm navbar-light bg-light justify-content-between">
      <div class="container">
        <a class="navbar-brand mainColor">TourRadar</a>
        <form class="form-inline">
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
    <div class="container-fluid mt-3">
      <ul class="ml-4">
        <li class="category">Lakes</li>
        <li class="category active">Mountains</li>
        <li class="category">Clubs</li>
        <li class="category">Coffe Shops</li>
        <li class="category">Markets</li>
        <li class="category">Restaurant</li>
        <li class="category">Bars</li>
        <li class="category">
          More <font-awesome-icon :icon="['fas', 'angle-down']" class="mainColor" />
        </li>
      </ul>
      <div class="filter">
        <font-awesome-icon :icon="['fas', 'sliders-h']" class="mainColor" />
        <span class="filter-txt ml-2">Filters</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
<style>
.input-group-text {
  background-color: #fff !important;
  border-right: none !important;
  border-color: #6c5dd3 !important;
  border-top-left-radius: 15px !important;
  border-bottom-left-radius: 15px !important;
}
.mainColor {
  color: #6c5dd3 !important;
}
.navbar-brand {
  font-weight: bold;
}
.form-control {
  border-left: none !important;
  width: 300px !important;
  border-top-right-radius: 15px !important;
  border-bottom-right-radius: 15px !important;
  border-color: #6c5dd3 !important;
}

.form-control:focus {
  color: #495057 !important;
  background-color: #fff !important;
  border-color: #6c5dd3 !important;
  outline: 0;
  box-shadow: none !important;
}
.dpd {
  border: #6c5dd3 3px solid !important;
  border-radius: 30px;
}
.nav-bars {
  font-size: 0.9em !important;
  margin-bottom: 5px;
}
.nav-user {
  font-size: 2em;
  color: rgb(113, 113, 113) !important;
}
.btn {
  padding-top: 0.1rem !important;
  padding-right: 0.1rem !important;
  padding-bottom: 0.1rem !important;
}
.filter {
  position: absolute;
  right: 130px;
  display: inline;
  padding: 0.1rem 0.7rem;
  border: 3px solid #6c5dd3;
  border-radius: 30px;
}
.filter-txt {
  font-weight: bold;
}
ul {
  display: inline;
}
.category {
  display: inline-block;
  margin-left: 40px;
  font-weight: bold;
}
li.active {
  border-bottom: 3px solid #6c5dd3;
}
</style>
