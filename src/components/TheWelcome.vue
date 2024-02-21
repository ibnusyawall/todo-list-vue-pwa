<template>
 
  <div
    :class="{ 
      'app-container d-flex align-items-center justify-content-center flex-column': visible, 
      'd-none': !visible 
    }"
  >
    <h3 class="mb-4">Todo App</h3>
   
    <div class="d-flex align-items-center mb-3">
      <div class="form-group mr-2 mb-0">
        <input
          type="text"
          id="task"
          class="form-control"
          placeholder="Enter a task here"
          v-model="form.name"
          @keyup.enter="onSave"
          autofocus
        />
      </div>
      <button
        type="button"
        class="btn btn-primary mr-2"
        @click="onSave"
      >
        Save
      </button>
      <button 
        type="button" 
        class="btn btn-warning"
        @click="onClear"
      >
        Clear
      </button>
    </div>

    <div class="top-left-alert">
      <div 
        class="alert alert-success alert-dismissible fade" 
        :class="{ 'show': success, 'd-none': !success }"
        role="alert"
      >
        Successfull added data.
        <button 
          type="button" 
          class="close" 
          data-dismiss="alert" 
          aria-label="Close"
          @click="onCloseAlert"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>

    <div class="table-wrapper">
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>No.</th>
              <th>Todo item</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(task, index) in tasks"
            >
              <td>{{ index + 1 }}</td>
              <td>
                {{ task.name }}
              </td>
              <td>
                <button 
                  class="btn btn-danger"
                  @click="onDelete(index)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => ({
    form: {
      name: null
    },
    tasks: [],
    success: false
  }),
  methods: {
    onSave() {
      let name = this.form.name
      if (!name) return 

      this.tasks.push({
        name
      })

      this.$nextTick(() => {
        this.form.name = null
        this.success = true
        setTimeout(() => {
          this.success = false
        }, 2_000); 
      })
    },
    onDelete(index) {
      this.tasks.splice(index, 1)
    },
    onClear() {
      this.tasks = []
    },
    onCloseAlert() {
      this.success = false
    }
  }
}
</script>
<style scoped>
.app-container {
  width: 100%;
}
.complete {
  text-decoration: line-through;
}
.top-left-alert {
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  padding: 10px;
}
</style>
