<template>
  <q-layout view="lHh lpR lFr">
    <q-header style="background: var(--color-white, #fff); color: black">
      <div class="q-pa-md">
        <div class="row q-px-sm items-center">
          <div class="col-3">
            <span class="header-title-1"> {{ $route.name }} </span>
          </div>
          <div class="col-4">
            <q-input borderless placeholder="Search here..." class="input-search">
              <template v-slot:prepend>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z"
                    fill="#5D5FEF" />
                </svg>
              </template>
            </q-input>
          </div>
          <div class="col-5">
            <div style="text-align: right">
              <q-btn round icon="notifications">
                <q-badge floating color="red" rounded />
              </q-btn>
              <span class="mnt-font-500 q-pr-sm q-pa-md">{{
                identity.fullname
              }}</span>
              <q-avatar size="38px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
              <q-icon color="accent" class="q-pr-md q-pl-sm" style="cursor: pointer">
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.99999 8.68747C6.83332 8.68747 6.67707 8.66122 6.53124 8.60872C6.3854 8.55705 6.24999 8.46872 6.12499 8.34372L0.343737 2.56247C0.11457 2.3333 0.0054031 2.04664 0.0162364 1.70247C0.0262364 1.35914 0.145819 1.07289 0.374986 0.843721C0.604153 0.614554 0.89582 0.49997 1.24999 0.49997C1.60415 0.49997 1.89582 0.614554 2.12499 0.843721L6.99999 5.71872L11.9062 0.81247C12.1354 0.583303 12.4221 0.47372 12.7662 0.48372C13.1096 0.494554 13.3958 0.614554 13.625 0.843721C13.8542 1.07289 13.9687 1.36455 13.9687 1.71872C13.9687 2.07289 13.8542 2.36455 13.625 2.59372L7.87499 8.34372C7.74999 8.46872 7.61457 8.55705 7.46874 8.60872C7.3229 8.66122 7.16665 8.68747 6.99999 8.68747Z"
                    fill="#613AE4" />
                </svg>
                <!-- <q-menu :offset="[-10, 20]">
                  <q-list class="qlist-sd menu-header" style="min-width: 220px">
                    <q-item clickable v-close-popup>
                      <q-item-section avatar>
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.7499 5C10.7499 5.74168 10.53 6.4667 10.118 7.08339C9.7059 7.70007 9.12022 8.18072 8.435 8.46455C7.74978 8.74838 6.99578 8.82264 6.26835 8.67795C5.54092 8.53325 4.87274 8.1761 4.34829 7.65165C3.82384 7.1272 3.46669 6.45902 3.32199 5.73159C3.1773 5.00416 3.25156 4.25016 3.53539 3.56494C3.81922 2.87971 4.29987 2.29404 4.91655 1.88199C5.53323 1.46993 6.25826 1.25 6.99994 1.25C7.9945 1.25 8.94833 1.64509 9.65159 2.34835C10.3549 3.05161 10.7499 4.00544 10.7499 5ZM7.74994 8.75H6.24994C4.85755 8.75 3.52219 9.30312 2.53763 10.2877C1.55306 11.2723 0.999939 12.6076 0.999939 14V14C0.999939 14.1989 1.07896 14.3897 1.21961 14.5303C1.36026 14.671 1.55103 14.75 1.74994 14.75H12.2499C12.4489 14.75 12.6396 14.671 12.7803 14.5303C12.9209 14.3897 12.9999 14.1989 12.9999 14C12.9999 12.6076 12.4468 11.2723 11.4622 10.2877C10.4777 9.30312 9.14233 8.75 7.74994 8.75V8.75Z"
                            stroke="#613AE4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </q-item-section>
                      <q-item-section class="text-left mnt-font-400">Perfil</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                      <q-item-section avatar>
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.5 8.99999C3.49949 7.67875 3.93509 6.39429 4.73922 5.34594C5.54335 4.29759 6.67103 3.54397 7.94726 3.20205C9.22349 2.86013 10.5769 2.94902 11.7974 3.45493C13.018 3.96083 14.0374 4.85547 14.6975 5.99999"
                            stroke="#613AE4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M11 6H14.75V2.25" stroke="#613AE4" stroke-width="1.6" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path
                            d="M15.5 9C15.5005 10.3212 15.0649 11.6057 14.2608 12.654C13.4566 13.7024 12.329 14.456 11.0527 14.7979C9.7765 15.1399 8.4231 15.051 7.20256 14.5451C5.98202 14.0392 4.96259 13.1445 4.30249 12"
                            stroke="#613AE4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M8 12H4.25V15.75" stroke="#613AE4" stroke-width="1.6" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </q-item-section>
                      <q-item-section class="text-left mnt-font-400">Cambiar Password
                      </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                      <q-item-section avatar>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.75 6.5V3.5C6.75 3.30109 6.82902 3.11032 6.96967 2.96967C7.11032 2.82902 7.30109 2.75 7.5 2.75H15C15.1989 2.75 15.3897 2.82902 15.5303 2.96967C15.671 3.11032 15.75 3.30109 15.75 3.5V15.5C15.75 15.6989 15.671 15.8897 15.5303 16.0303C15.3897 16.171 15.1989 16.25 15 16.25H7.5C7.30109 16.25 7.11032 16.171 6.96967 16.0303C6.82902 15.8897 6.75 15.6989 6.75 15.5V12.5"
                            stroke="#613AE4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M2.25 9.5H12.75M9.75 12.5L12.75 9.5L9.75 6.5" stroke="#613AE4" stroke-width="1.6"
                            stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </q-item-section>
                      <q-item-section class="text-left mnt-font-400" @click="logout()">Cerrar Sesion</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu> -->
              </q-icon>
            </div>
          </div>
        </div>
      </div>
    </q-header>
    <q-drawer v-if="isLogged" show-if-above :width="!showMenuClose ? 225 : 85" :breakpoint="400">
      <div class="q-pa-md" style="
          height: calc(100% - 160px);
          margin-top: 100px;
          border-right: 0px solid #ddd;
        ">
        <q-list padding class="my-menu">
          <q-item clickable v-ripple to="/home" :active="$route.name === 'Dashboard'" active-class="my-menu-link">
            <q-item-section avatar>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <mask id="mask0_8121_67" style="mask-type: luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="32"
                  height="32">
                  <rect width="32" height="32" :fill="$route.name == 'Dashboard' ? 'white' : '#737791'" />
                </mask>
                <g mask="url(#mask0_8121_67)">
                  <path
                    d="M13.6704 7.84579L14.0416 13.3657L14.2258 16.1401C14.2278 16.4255 14.2725 16.7089 14.3588 16.9813C14.5813 17.5101 15.1168 17.8461 15.6993 17.8227L24.5756 17.242C24.96 17.2357 25.3312 17.3795 25.6074 17.6417C25.8377 17.8603 25.9864 18.1461 26.0333 18.4536L26.049 18.6403C25.6817 23.7265 21.9461 27.9689 16.8704 29.064C11.7946 30.1591 6.58965 27.8457 4.08145 23.3799C3.35836 22.0824 2.90671 20.6564 2.75301 19.1853C2.68881 18.7499 2.66055 18.31 2.66848 17.87C2.66055 12.417 6.5438 7.70262 11.9796 6.5661C12.6339 6.46422 13.2752 6.81057 13.5376 7.40738C13.6054 7.54559 13.6502 7.69362 13.6704 7.84579Z"
                    :fill="$route.name == 'Dashboard' ? 'white' : '#737791'" />
                  <path opacity="0.4"
                    d="M29.3335 13.083L29.3242 13.1264L29.2973 13.1896L29.301 13.3631C29.2871 13.5929 29.1983 13.8139 29.0455 13.9926C28.8862 14.1786 28.6686 14.3053 28.429 14.3545L28.2829 14.3745L18.0418 15.0381C17.7011 15.0717 17.3619 14.9618 17.1087 14.7359C16.8975 14.5475 16.7626 14.2934 16.7245 14.0195L16.0371 3.79334C16.0251 3.75877 16.0251 3.72129 16.0371 3.6867C16.0465 3.40482 16.1706 3.13838 16.3817 2.9469C16.5926 2.75542 16.8731 2.65486 17.1602 2.66769C23.2401 2.82237 28.3499 7.19431 29.3335 13.083Z"
                    :fill="$route.name == 'Dashboard' ? 'white' : '#737791'" />
                </g>
              </svg>
            </q-item-section>

            <q-item-section v-if="!showMenuClose">Dashboard</q-item-section>
          </q-item>
          <q-separator dark spaced />
        </q-list>
      </div>
      <q-img class="cursor-pointer absolute-top" style="height: 150px">
        <div class="absolute-center bg-transparent">
          <div class="row">
            <div class="col">
              <img src="assets/image/logo.png" width="40px" height="35px" />
            </div>
            <div class="col" v-if="!showMenuClose">
              <span class="text-logo">ClaimPay</span>
            </div>
          </div>
        </div>
      </q-img>
      <div class="q-mini-drawer-hide absolute" style="float: left; width: 34px; right: -12px; top: 132px">
        <q-btn v-if="!showMenuClose" dense round unelevated icon="chevron_left" @click="showMenuClose = true"
          class="btn-expand-contract" />
        <q-btn v-if="showMenuClose" dense round unelevated icon="chevron_right" @click="showMenuClose = false"
          class="btn-expand-contract" />
      </div>
    </q-drawer>
    <q-page-container style="background: var(--greys-blue-grey-300, #f9fafb); height: 650px">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      identity: {},
      isLogged: true,
      showMenuClose: false,
    };
  },
  methods: {
    logout() {
      this.$q.localStorage.clear();
      this.$router.replace({
        name: "Login",
      });
    },
    signOut() {
      alert("Se cerro Sesión");
    },
  },
  mounted() {
    if (this.$q.localStorage.getItem("identity")) {
      this.identity = this.$q.localStorage.getItem("identity");
    }
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: Poppins;
  src: url(/assets/css/fonts/Poppins/Poppins-Regular.ttf);
}

.header-title-1 {
  color: var(--greys-blue-grey-900, #151d48);

  /* 4xl/Semibold */
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  /* 50.4px */
}

.text-logo {
  color: var(--greys-blue-grey-900, #151d48);

  /* 3xl/Semibold */
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  /* 45px */
}

.q-item:hover:not(.my-menu-link) {
  background: var(--primary-900, #f9fafb);
  border-radius: 16px;
  transform: none;
  transition: none;
}

.btn-expand-contract {
  color: var(--color-white, #fff);
  //background: var(--primary-900, #5932EA);
  background: var(--Primary, #0072DA);
}

.my-menu-link {
  align-items: center;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--primary-900, #0072DA);

  /* Shadow */
  box-shadow: 0px 20px 50px 0px rgba(55, 69, 87, 0.1);

  color: var(--color-white, #fff);
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.my-menu {
  color: var(--greys-blue-grey-700, #737791);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.input-search {
  display: flex;
  width: 513px;
  height: 60px;
  padding: 2px 32px 2px 18px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  border-radius: 16px;
  // background: var(--greys-blue-grey-300, #f9fafb);
  background: var(--backgrounds-stripe, #f4f2ff);

  color: var(--greys-blue-grey-700, #737791);

  /* Text/Text Regular 1 */
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>