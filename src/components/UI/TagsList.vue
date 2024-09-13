<template>
  <div class="tags-list">
    <div v-if="isPreview" class="tags-list">
      <div
        class="tag-item" 
        v-for="item in getNoteTags" 
        :key="item" 
        :class="{ isPreview: isPreview }"
      >
        <span> {{ item }}</span>
      </div>
    </div> 
    <div v-else class="tags-list">
      <div
        class="tag-item" 
        v-for="item in getTags" 
        :key="item" 
        @click="handleToggleTag(item.title)"
        :class="{ isActive: item.isActive }"
      >
        <span> {{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    isPreview: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleToggleTag(title) {
      this.$store.dispatch('toggleTag', title)
    } 
  },
  computed: {
    getTags() {
      return this.$store.getters.getTags
    },
    getNoteTags() {
      return this.$store.getters.getNoteTags(this.title)
    },
  }
}
</script>

<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
  &.isActive {
    background-color: #444ce0;
    color: #fff;
  }
  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: '#';
    }
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
