import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function CategoryTabs() {
  return (
    <>
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="all" title="All Items">
        <h1>All Items</h1>
      </Tab>
      <Tab eventKey="category" title="Category">
        <h1>Category</h1>
      </Tab>
    </Tabs>
      </>
  );
}

export default CategoryTabs;
