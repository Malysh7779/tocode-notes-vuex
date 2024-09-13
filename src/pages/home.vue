<template>
  <Form />
  <List />
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'

export default {
  components: {
    Form,
    List
  }
  // data() {
  //   return {
  //     notes: [
  //       {
  //         title: 'Learn Vue 3',
  //         tags: ['work']
  //       },
  //       {
  //         title: 'Finish course',
  //         tags: ['work', 'home']
  //       },
  //       {
  //         title: 'hello',
  //         tags: []
  //       }
  //     ]
  //   }
  // },
  // mounted() {
  //   this.getNotes()
  // },
  // watch: {
  //   notes: {
  //     handler(updatedList) {
  //       localStorage.setItem('notes', JSON.stringify(updatedList))
  //     },
  //     deep: true
  //   }
  // },
  // methods: {
  //   getNotes() {
  //     const localNotes = localStorage.getItem("notes")
  //     if (localNotes) {
  //       this.notes = JSON.parse(localNotes)
  //     }
  //   },
  //   handleSubmit(comp) {
  //     let activeTags = []
  //     comp.tags.forEach(e => {
  //       if (e.isActive) {
  //         activeTags.push(e.title)
  //       }
  //     })
  //     const note = {
  //       title: comp.value,
  //       tags: activeTags
  //     }
  //     this.notes.push(note)
  //   },
  //   handleRemove(index) {
  //     this.notes.splice(index, 1)
  //   }
  // }
}
</script>