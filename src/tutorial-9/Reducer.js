export function reducer(state, action) {
  switch (action.type) {
    case 'ON_CHANGE_INPUT':
      return {
        ...state,
        taskName: action.payload,
      };

    case 'TASK_COMPLETE':
      return {
        ...state,
        taskComplete: action.payload,
      };

    case 'ADD_TASK':
      let taskId = null;

      if (!state.tasks.length) {
        taskId = 1;
      } else {
        taskId = state.tasks[state.tasks.length - 1].id + 1;
      }

      return {
        taskName: '',
        taskComplete: false,
        tasks: [
          ...state.tasks,
          {
            id: taskId,
            taskName: action.payload.taskName,
            taskComplete: action.payload.taskComplete,
          },
        ],
      };

    default:
      return state;
  }
}
