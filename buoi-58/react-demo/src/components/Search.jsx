const Search = () => {
  const [text, setText] = useState("");

  function handleInput(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="">
          Search:
          <input onChange={handleInput} type="text" value={text} />
        </label>
      </form>
      <h1>{text}</h1>
    </div>
  );
};

export default Search;
