export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      const taskId = state.length ? state[state.length - 1].id + 1 : 1;

      return [
        ...state,
        {
          id: taskId,
          name: action.payload.text,
          complete: action.payload.complete,
        },
      ];

    case 'REMOVE_TASK':
      return state.filter((obj) => obj.id !== action.payload);

    default:
      return state;
  }
}
