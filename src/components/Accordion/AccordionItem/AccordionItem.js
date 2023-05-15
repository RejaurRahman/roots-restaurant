import React, { useEffect, useState } from "react"

const AccordionItem = ({
  accordionMobile,
  accordionNormal,
  buttonClassName,
  contentClassName,
  children,
  index,
  isList,
  title,
}) => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 991)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const isAccordionMobile = accordionMobile && isMobile
  const isAccordionNormal = accordionNormal && !isMobile

  const contentElement = isList ? (
    <ul
      className={`${isAccordionMobile || isAccordionNormal ? "accordion-collapse collapse" : ""} ${
        (isAccordionMobile || isAccordionNormal) && activeIndex === index ? "show" : ""
      } ${contentClassName}`.trim()}
    >
      {children}
    </ul>
  ) : (
    <div
      className={`${isAccordionMobile || isAccordionNormal ? "accordion-collapse collapse" : ""} ${
        (isAccordionMobile || isAccordionNormal) && activeIndex === index ? "show" : ""
      } ${contentClassName}`.trim()}
    >
      {children}
    </div>
  );

  return (
    <>
      {isAccordionMobile || isAccordionNormal ? (
        <div className="accordion-header">
          <button
            className={`accordion-button ${activeIndex !== index ? "collapsed" : ""} ${buttonClassName}`.trim()}
            onClick={() => handleItemClick(index)}
          >
            {title}
          </button>
        </div>
      ) : (
        <span className={buttonClassName}>
          {title}
        </span>
      )}
      {contentElement}
    </>
  )
}

export default AccordionItem
