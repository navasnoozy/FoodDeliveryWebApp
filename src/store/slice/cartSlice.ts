// import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// interface ITask {
//   title: string | undefined;
//   descreption: string | undefined;
//   status: "pending" | "completed";
// }

// const tasks: ITask[] = [
//   {
//     title: undefined,
//     descreption: undefined,
//     status: "pending",
//   },
// ];

// const taskSlice = createSlice({
//   name: "taskManager",
//   initialState: tasks,
//   reducers: {
//     AddToDo: (
//       state,   
//       actions: PayloadAction<{ title: string; description: string }>
//     ) => {
//       state.push({
//         title: actions.payload.title,
//         descreption: actions.payload.description,
//       });
//     },
//   },
// });

// export default taskSlice.reducer;
