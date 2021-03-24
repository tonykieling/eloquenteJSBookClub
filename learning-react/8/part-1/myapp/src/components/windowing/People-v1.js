import faker from "faker";

const Item = ({data = [], renderItem}) => {
  // console.log("data:::", data);
  return (data.length === 0)
    ? <h1 style = {{textAlign: "center", color: "green"}}>Empty data</h1>
    :
      <ol>
        {data.map((item ,i) => 
          <li key = { i }>
            {renderItem(item)}
          </li>
        )}
      </ol>
}

const bigList = [...Array(30)].map((e, i) => ({
  id: i,
  name: faker.name.findName(),
  email: faker.internet.email(),
  // avatar: faker.internet.avatar() // both use s3 which is no longer a free service
  // avatar: faker.image.avatar()   // ? why do they, faker, still keep this method???
}));

const renderItem = e => {
  // console.log("e:", e);
  return (
    <div style = {{ display: "flex"}}>
        {/* <img src = {e.avatar} alt = { `${e.name} avatar`} width = "50px" /> */}
        <p><strong> { e.name } </strong> - {e.email}</p>
    </div>
  );
}

export default function PeopleV1() {
  return (
    <Item data = { bigList } renderItem = { renderItem } />
  );
}

