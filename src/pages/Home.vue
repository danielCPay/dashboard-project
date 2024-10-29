<template>
  <div class="row q-pt-sm">
    <div class="col-10 q-px-sm">
      <q-card class="card-container">
        <q-card-section class="column">
          <div class="text-title">Claims</div>
          <div class="text-subtitle">Count Onboarding Status</div>
          <div class="q-pa-md row items-start q-gutter-md">
            <claims-pie />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
//Components
import ClaimsPie from "../components/Chart/ClaimsPie.vue";
export default {
  name: "Home",
  components: { ClaimsPie },
};
</script>

<style lang="scss" scoped>
.text-title {
  color: var(--primary-dark-shade, #05004e);

  /* xl/Semibold */
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  /* 160% */
}

.text-subtitle {
  color: var(--greys-blue-grey-700, #737791);

  /* base/Regular */
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 187.5% */
}

.my-card-sales-1 {
  width: 130px;
  height: 155px;
  flex-shrink: 0;

  border-radius: 16px;
  background: #ffe2e5;

  .text-title {
    color: var(--greys-blue-grey-900, #151d48);

    /* 2xl/Semibold */
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    /* 133.333% */
  }

  .text-sub-title {
    color: #425166;

    /* base/Medium */
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    /* 150% */
  }

  .text {
    color: var(--primary-800, #4079ed);

    /* xs/Medium */
    font-family: Poppins;
    font-size: 9px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    /* 133.333% */
  }
}

.my-card-sales-2 {
  width: 130px;
  height: 155px;
  flex-shrink: 0;

  border-radius: 16px;
  background: #fff4de;

  .text-title {
    color: var(--greys-blue-grey-900, #151d48);

    /* 2xl/Semibold */
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    /* 133.333% */
  }

  .text-sub-title {
    color: #425166;

    /* base/Medium */
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    /* 150% */
  }

  .text {
    color: var(--primary-800, #4079ed);

    /* xs/Medium */
    font-family: Poppins;
    font-size: 9px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    /* 133.333% */
  }
}

.my-card-sales-3 {
  width: 130px;
  height: 155px;
  flex-shrink: 0;

  border-radius: 16px;
  background: var(--colors-green-100, #dcfce7);

  .text-title {
    color: var(--greys-blue-grey-900, #151d48);

    /* 2xl/Semibold */
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    /* 133.333% */
  }

  .text-sub-title {
    color: #425166;

    /* base/Medium */
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    /* 150% */
  }

  .text {
    color: var(--primary-800, #4079ed);

    /* xs/Medium */
    font-family: Poppins;
    font-size: 9px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    /* 133.333% */
  }
}

.my-card-sales-4 {
  width: 130px;
  height: 155px;
  flex-shrink: 0;

  border-radius: 16px;
  background: var(--colors-purple-100, #f3e8ff);

  .text-title {
    color: var(--greys-blue-grey-900, #151d48);

    /* 2xl/Semibold */
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    /* 133.333% */
  }

  .text-sub-title {
    color: #425166;

    /* base/Medium */
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    /* 150% */
  }

  .text {
    color: var(--primary-800, #4079ed);

    /* xs/Medium */
    font-family: Poppins;
    font-size: 9px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    /* 133.333% */
  }
}
</style>