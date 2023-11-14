import ItemTable from "./ItemTable";

function Navbar({ initialData }) {
  
  return (
    <>
      <ItemTable initialItemData={initialData} />
    </>
  );
}

export default Navbar;