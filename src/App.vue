<script lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import Dashboard from '@/components/Dashboard.vue';
import Controls from '@/components/Controls.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    AppHeader,
    Dashboard,
    Controls,
  }
})
</script>

<template>
  <Suspense>
    <template #default>
      <main>
        <AppHeader />
        <Dashboard />
        <Controls />
      </main>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<style>
</style>
