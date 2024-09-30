
export const CandidatesData = [
  {
    id: "1",
    task: "Lorem ipsum dolor sit amet.",
    assigned_To: "Beltran",
    assignee: "Romona",
    status: "To-do",
    priority: "Low",
    due_Date: "25-May-2024",
  },
  {
    id: "2",
    task: "Fix Styling",
    assigned_To: "Dave",
    assignee: "Romona",
    status: "To-do",
    priority: "Low",
    due_Date: "26-Aug-2024",
  },
  {
    id: "3",
    task: "Handle Door Specs",
    assigned_To: "Roman",
    assignee: "Romona",
    status: "To-do",
    priority: "Low",
    due_Date: "27-Sep-2024",
  },
  {
    id: "4",
    task: "morbi",
    assigned_To: "Gawen",
    assignee: "Kai",
    status: "Done",
    priority: "High",
    due_Date: "23-Aug-2024",
  },
  {
    id: "5",
    task: "proin",
    assigned_To: "Bondon",
    assignee: "Antoinette",
    status: "In Progress",
    priority: "Medium",
    due_Date: "05-Jan-2023",
  },
];

export const columnsFromBackend = {
  todo: {
    title: "To-Do",
    items: CandidatesData.filter(item => item.status === "To-do"),
  },
  inProgress: {
    title: "In Progress",
    items: CandidatesData.filter(item => item.status === "In Progress"),
  },
  testing: {
    title: "Testing",
    items: [],
  },
  done: {
    title: "Done",
    items: CandidatesData.filter(item => item.status === "Done"),
  },
};
