import faker from "faker";
import { FixedSizeList } from "react-window";

const bigList = [...Array(5000)].map((e, index) => ({
  id: index,
  name: faker.name.findName(),
  email: faker.internet.email()
}));


export default function PeopleV2(){
  const renderItem = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <p> { bigList[index].name } - { bigList[index].email } </p>
    </div>
  );

  return(
    <FixedSizeList
      height = { window.innerHeight }
      width = { window.innerWidth - 20}
      itemCount = { bigList.length }
      itemSize = { 100 }
    >
      { renderItem }
    </FixedSizeList>
  );
}
