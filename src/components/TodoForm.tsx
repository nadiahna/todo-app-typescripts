import React, { FunctionComponent, ChangeEvent } from "react";

interface IProps {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

const TodoForm: FunctionComponent<Props> = ({
  onInputChange,
  inputValue,
  ...props
}) => {
  return (
    <form {...props}>
      <input
        className="form-control"
        placeholder="What would you like to get done?"
        onChange={onInputChange}
        value={inputValue}
      />
      <button className="btn btn-primary">Create</button>
    </form>
  );
};

export default TodoForm;
