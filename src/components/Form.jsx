function Form() {
  return (
    <div className="ntg">
      <form>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" defaultValue="John" />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" defaultValue="Doe" />
        <br />
      </form>
    </div>
  );
}

export default Form;
