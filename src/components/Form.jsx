import { useState } from "react";
import Input from "./Input";
const Form = () => {
  const [note, setNote] = useState({
    task: "",
    datetime: "",
  });
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        id="task"
        label="Task"
        placeholder="Add task"
        value={note.task}
        onChange={(e) => setNote({ ...note, task: e.target.value })}
      />
      <Input
        type="datetime-local"
        id="datetime"
        label="Day & Time"
        placeholder="Add date"
        value={note.datetime}
        onChange={(e) => setNote({ ...note, datetime: e.target.value })}
      />
      <button type="submit">Save Task</button>
    </form>
  );
};
export default Form;
