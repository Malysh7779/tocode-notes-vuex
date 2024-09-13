import { createStore } from 'vuex'

export const store = createStore({
  state: {
    tags: [
      { title: 'home', isActive: false },
      { title: 'work', isActive: false },
      { title: 'travel', isActive: false },
      { title: 'test', isActive: false },
    ],
    notes: [
      { title: 'Learn Vue 3',
        tags: ['work']
      },
      {
        title: 'Finish course',
        tags: ['work', 'home']
      },
      {
        title: 'hello',
        tags: []
      }
    ]  
  },
  getters: {
    getTags(state) {
      return state.tags
    },
    getNotes(state) {
      return state.notes
    },
    getNoteTags: (state) => (title) => {
      const index = state.notes.findIndex(e => e.title === title)
      const tags = state.notes[index].tags
      return tags
    },
    getActiveTags(state) {
      let tags = []
      const activeTags = state.tags.filter(e => e.isActive)
      activeTags.forEach(e => tags.push(e.title))
      return tags
    }
  },      
  mutations: {
    toggleTag (state, title) {
      const index = state.tags.findIndex(e => e.title === title)
      state.tags[index].isActive = ! state.tags[index].isActive 
    },
    addNote(state, note) {
      state.notes.push(note)
    },
    destroyNote(state, title) {
      const index = state.notes.findIndex(e => e.title === title)
      state.notes.splice(index, 1)
    }
  },
  actions: {
    toggleTag (context, title) {
      context.commit('toggleTag', title)
    },
    addNote(context, note) {
      context.commit('addNote', note)
    },
    destroyNote(context, title) {
      context.commit('destroyNote', title)
    },
    initializeStore({ state }) {
      if (localStorage.getItem('state')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('state')))
        )
      }
    }
  }
})