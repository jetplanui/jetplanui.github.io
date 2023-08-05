<template>
  <div class="demo">
    <slot :circle="circle"></slot>
  </div>
  <div class="demo control padding">
    <!-- Position -->
    <p class="sub-title">Use circle or rectangle</p>
    <Row Y="center" spaceMode="between">
      <ActionLabel>
        <p>Click to {{ !circle ? "circle" : "rectangle" }}</p>
        <Switch>
          <input type="checkbox" v-model="circle" />
        </Switch>
      </ActionLabel>
    </Row>
    <!-- Start -->
  </div>
</template>

<script lang="ts" setup>
import { ActionLabel } from "src/components";
import { Switch, Row } from "jet-plan-ui";
import { ref } from "vue";
const circle = ref(true);
</script>
