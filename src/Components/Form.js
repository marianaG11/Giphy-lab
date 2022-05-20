import React, { useRef } from "react";

export default function Form(props) {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const val = inputRef.current.value;
    props.handleSubmit(val);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} placeholder="search random gif" />
      <button>Submit</button>
    </form>
  );
}
