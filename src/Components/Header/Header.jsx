// import styles of this component
import styles from "./Header.module.css"

// import other components
import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"
import BrickLayout from "../BrickLayout/BrickLayout";
import HeaderBoxes from "./HeaderBoxes/HeaderBoxes";

// import something from react packages
import { MessageAdd } from "iconsax-react";
import { Send2 } from "iconsax-react";

// import jsons
import JsonHeader from '../../Jsons/HeaderBoxes.json';

// Header component
const Header = () => {
  return (
    <header className={`${styles.header} flex justify-content-center`}>
        <ContainerCard className="flex flex-column">
          <div className={styles["blur-circle-shape"]}></div>

          <Nav />
          <BrickLayout />
          
          <div className={`${styles["headings-header"]} flex justify-content-center flex-column `}>
            <h2 className={styles["heading-header-title"]}>Contact <a href="mailto:hsglobal.xyz@gmail.com?subject=Consult for customizable street furniture or stainless steel products" target="_blank">hsglobal.xyz@gmail.com</a> for more info 😎🤘</h2>
            <h1 className={styles["heading-header-second-title"]}>
              Engineers make The world better <br />
              The designs makes the <span>world</span> better
            </h1>
            
            <div className={`${styles["search-bar"]} flex align-items-center`}>
              <MessageAdd size="30" color="var(--white-100)"/>
              <input type="text" className={styles["search-input"]} placeholder="Leave your email to contact us" />
              <button className={`${styles["search-btn"]} flex justify-content-center align-items-center`}>
                <Send2 size="20" color="var(--dark-900)"/>
              </button>
            </div>

            <HeaderBoxes titles_numbers={JsonHeader.informations} />
          </div>
        </ContainerCard>
    </header>
  )
}

export default Header