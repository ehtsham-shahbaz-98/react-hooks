import { useRef } from "react";

function useRefPractice1() {
  const inputRef = useRef();

  // commit 1

  const onSubmit = e => {
    e.preventDefault();
    console.log(123);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          ref={inputRef}
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default useRefPractice1;
