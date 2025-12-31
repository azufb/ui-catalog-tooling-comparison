<template>
  <div>
    <h1>UI Catalog (Vite glob)</h1>

    <div
      v-for="item in components"
      :key="item.path"
      style="margin-bottom: 32px;"
    >
      <h2>{{ item.name }}</h2>

      <!-- 実コンポーネントをそのまま表示 -->
      <component :is="item.component" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiCatalog',

  data() {
    return {
      components: [],
    }
  },

  created() {
    // components 配下の Vue ファイルを一括取得
    const modules = import.meta.glob(
      '../components/**/*.vue',
      { eager: true }
    )

    this.components = Object.entries(modules).map(([path, mod]) => ({
      name: path.split('/').pop().replace('.vue', ''),
      component: mod.default,
      path,
    }))
  },
}
</script>
