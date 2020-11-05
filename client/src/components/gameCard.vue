<template>
  <b-card no-body  style="max-width: 150px; height: 60px; ">
    <b-row no-gutters>
      <b-col >
        <!-- <b-card-img
          src="https://picsum.photos/400/400/?image=20"
          alt="Image"
          class="rounded-0"
        ></b-card-img> -->
      <!-- </b-col>
      <b-col md="6"> -->
        <!-- <b-card-body > -->

          <b-card-text v-if="ticket.toShow && ticket.sign==1" style="color: red;">
            {{ ticket.text }}
          </b-card-text>
          <b-card-text v-else>
            {{ ticket.text }}
          </b-card-text>

        <!-- </b-card-body> -->
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    ticket: {
      type: Object,
      required: true,
    },
  },
};
</script>


