import React, { useState } from "react";

const AccordionSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Quam vehicula faucibus amet lorem.",
      content:
        "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.",
    },
    {
      title: "Pellentesque tempus sed phasellus vel.",
      content: "Content for item 2",
    },
    {
      title:
        "Mauris fermentum praesent tellus euismod pellentesque urna ac massa in.",
      content: "Content for item 3",
    },
    {
      title:
        "Vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et.",
      content: "Content for item 4",
    },
    {
      title:
        "Sollicitudin ornare tempus felis nulla varius pulvinar nibh viverra ornare.",
      content: "Content for item 5",
    },
    {
      title: "Consectetur nibh velit magna consectetur leo.",
      content: "Content for item 6",
    },
    {
      title: "Quisque porttitor vitae vel amet neque scelerisque mattis.",
      content: "Content for item 7",
    },
  ];

  return (
    <div className="relative py-24 bg-[#262626] text-white px-4 sm:px-8 lg:px-16">
      {/* Section Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
        Phasellus a vitae iaculis magna.
      </h1>
      <p className="text-center mb-8">
        Phasellus a vitae iaculis magna eleifend pulvinar velit odio.
      </p>

      {/* Accordion Items */}
      <div className="space-y-4 max-w-3xl mx-auto mb-40">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`border rounded-lg overflow-hidden ${
              activeIndex === index ? "bg-gray-100 text-black" : "bg-white text-black"
            }`}
          >
            <button
              className="flex justify-between items-center bg-white w-full px-4 py-4 text-left focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium">{item.title}</span>
              <span
                className={`transform transition-transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4">{item.content}</div>
            )}
          </div>
        ))}
      </div>

      {/* Clip Path Styling */}
      <div
        style={{
          clipPath: "polygon(0 95%, 100% 0%, 100% 100%, 0% 100%)",
        }}
        className="absolute bottom-0  left-0 w-full h-36 bg-amber-100"
      ></div>
    </div>
  );
};

export default AccordionSection;
