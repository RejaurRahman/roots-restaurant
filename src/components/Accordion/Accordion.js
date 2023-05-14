import "./Accordion.styles.scss"

import React, { useState } from "react"

const Accordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const AccordionItem = ({ title, children, index }) => (
    <>
      <button className="accordion-item-button" onClick={() => handleItemClick(index)}>
        {title}
      </button>
      <div className={`accordion-item-content ${activeIndex === index ? "active" : ""}`}>
        {children}
      </div>
    </>
  )

  return (
    <div className="accordion">
      {React.Children.map(children, (child, index) => (
        <AccordionItem
          key={index}
          index={index}
          {...child.props}
        />
      ))}
    </div>
  );
}

export default Accordion
