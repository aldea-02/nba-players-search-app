export default function Search() {
  fetch('https://www.balldontlie.io/api/v1/players/?search=davis')
		.then((response) => response.json())
		.then((data) => console.log(data))

  return <div>Search</div>;
}
