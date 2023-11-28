import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'

function CategoryTabs() {
  // const [currentTabs, setCurrentTabs] = useState([
  //   { eventKey: 'all', name: 'All Items', content: <h1>All Items</h1> },
  //   { eventKey: 'category', name: 'Category', content: <h1>Category</h1> }
  // ])

  // const addCategoryTab = () => {
  //   const index = currentTabs.length + 1
  //   const newTab = {
  //     eventKey: `category${index}`, name: `Category ${index}`, content: <h1>{`Category ${index}`}</h1>
  //   }
  //   setCurrentTabs([...currentTabs, newTab])
  // }

  // return (

  //   <>
  //     <Tabs
  //       defaultActiveKey={currentTabs[0].eventKey}
  //       transition={false}
  //       id="tab"
  //       className="mb-3"
  //     >
  //       {currentTabs.map((tab) => (
  //         <Tab key={tab.eventKey} eventKey={tab.eventKey} title={tab.name}>
  //           {tab.content}
  //         </Tab>
  //       ))}
  //     </Tabs>

  //     <Button variant="primary" onClick={addCategoryTab}>
  //       Add Category
  //     </Button>
  //   </>

  // );
}

export default CategoryTabs;
