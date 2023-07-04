export default function SearchForm(props) {
  <form onSubmit={props.submit}>
    <input
      type="text"
      value={props.text}
      onChange={props.changeText}
      placeholder={props.placeholder}
    />
    <input type="submit" value="검색" />
  </form>;
}
