<script setup>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import SyntaxPreferenceSwitch from "./SyntaxPreferenceSwitch.vue";

const buttons = [
  {
    ariaLabel: "GitHub",
    url: "https://www.github.com/istanbulnode/docs",
    icon: "bx bxl-github",
  },
  {
    ariaLabel: "Twitter",
    url: "https://twitter.com/istanbuljs",
    icon: "bx bxl-twitter",
  },
  {
    ariaLabel: "LinkedIn",
    url: "https://www.linkedin.com/company/istanbuljs",
    icon: "bx bxl-linkedin",
  },
];
</script>

<template>
  <teleport to="head">
    <link
      href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
      rel="stylesheet"
    />
  </teleport>
  <ParentLayout>
    <template #sidebar-top> </template>
    <template #navbar-after>
      <syntax-preference-switch></syntax-preference-switch>
      <a
        v-for="(button, index) in buttons"
        :key="index"
        class="external-link navbar-button"
        rel="noopener noreferrer"
        target="_blank"
        :aria-label="button.ariaLabel"
        :href="button.url"
        :title="button.ariaLabel"
      >
        <i :class="button.icon"></i>
      </a>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
.navbar-button {
  display: flex;
  margin: auto;
  margin-left: 0.5rem;
  border: 0;
  background: none;
  color: var(--c-text);
  opacity: 0.8;
  cursor: pointer;
  font-size: 1.25rem;
  &:hover {
    opacity: 1;
  }
}
.toggle-color-mode-button {
  margin-left: 0.5rem;
  padding: 0;
}

@media screen and (max-width: 720px) {
  .navbar-items-wrapper {
    .search-box {
      margin-left: 0;
    }
  }
}
</style>
