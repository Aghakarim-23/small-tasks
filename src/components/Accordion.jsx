import { useState } from "react";

const Accordion = () => {
  const accordionItems = [
    {
      id: 1,
      question: "What is Netflix",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      id: 2,
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 11.99 a month (pre-tax). No extra costs, no contracts.",
    },
    {
      id: 3,
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
  ];

  const [isActive, setIsActive] = useState([]);

  const handleClicker = (id) => {
    setIsActive((prevState) => 
        prevState.includes(id) ? prevState.filter((item) => item !== id)  : [...prevState,id]
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {accordionItems.map((item) => (
        <>
            <div
              onClick={() => handleClicker(item.id)}
              className="w-[800px] flex justify-between border-1 py-4 hover:cursor-pointer px-2 rounded-md"
              key={item.id}
            >
              {item.question}
              <span>{isActive.includes(item.id) ? "-" : "+"}</span>
            </div>
            {isActive.includes(item.id) && <p className="w-[800px] py-2">{item.answer}</p>}
        </>
      ))}
    </div>
  );
};

export default Accordion;
