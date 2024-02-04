import { useState, useEffect } from "react";

// import styles of this component
import styles from "./App.module.css"

// import other components to use
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout';
import ContainerCard from './Components/ContainerCard/ContainerCard';
import Dropdown from './Components/Elements/Dropdown/Dropdown';

// import json files 
import images from "./Jsons/Images.json"

// App component
const App = () => {
  // dropdown items
  const ddItems = [
    {
      id: 1,
      title: "All Products",
      active: true
    },
    {
      id: 2,
      title: "Top Products",
      active: false
    },
    {
      id: 3,
      title: "Special",
      active: false
    },
    {
      id: 4,
      title: "New Ideas",
      active: false
    },
    {
      id: 5,
      title: "Discovery",
      active: false
    }
  ]

  useEffect(() => {
    images.categories["all"] = Object.values(images.categories).reduce((accumulator, currentArray) => {
      return accumulator.concat(currentArray);
    }, []);

    setCategoryImage([...images.categories.all]);
    return () => {};
  }, []);

  const [categoryImage, setCategoryImage] = useState([])

  const takeDdTitle = (ddTitle) => {
    setCategoryImage(() => {
      let categoryChoose = Object.keys(images.categories).filter(item => {
        const titleSplited = ddTitle.toLowerCase().split(" ")[0]
        return item.toLowerCase().includes(titleSplited)
      })

      return [ ...images.categories[categoryChoose] ]
    })
  }

  return (
    <>
        <Header />
        <div className="flex justify-content-center" style={{ marginTop: "50px", padding: '50px' }}>
          <ContainerCard>
              <div className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}>
                <h1>Our products</h1>
                <Dropdown title="All Products" items={ddItems} liftingDdTextUp={takeDdTitle} />
              </div>
              <MasonryLayout images={categoryImage} />
          </ContainerCard>
        </div>
    </>
  )
}

export default App