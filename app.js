// TODO
//create a GroceryList component
//contains an UL of 2 grocery items and render it
const App = () => {
  return (
  <div>
    <h2>My Grocery List</h2>
      <GroceryList items={['cucumber','kale','banana']}/>
  </div>
)};

const GroceryList = (props) => (
  <ul>
    {props.items.map((item) => (
      <GroceryListItem item={item}/>
    ))}
  </ul>
);
const { useState } = React;
const GroceryListItem = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  let style = {
    fontWeight: isSelected ? 'bold' : 'normal',
  };

  const mouseOn = () => {setIsSelected(true)}
  const mouseOff = () => {setIsSelected(false)}
  return (<li style={style} onMouseEnter={mouseOn} onMouseLeave={mouseOff}>{props.item}</li>);
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);