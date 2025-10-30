import FAQItem from "./FAQItem";
import iconStar from "/images/icon-star.svg";

const FAQ = () => {
  return (
    <div className="faq">
      <h2 className="faq__heading text-preset--display">
        <img src={iconStar} alt="" />
        FAQs
      </h2>

      <ul className="faq__accordion">
        <li>
          <FAQItem
            question="What is Frontend Mentor, and how will it help me?"
            answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
          />
        </li>

        <li>
          <FAQItem
            question="Is Frontend Mentor free?"
            answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
          />
        </li>

        <li>
          <FAQItem
            question="Can I use Frontend Mentor projects in my portfolio?"
            answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
          />
        </li>

        <li>
          <FAQItem
            question="How can I get help if I'm stuck on a Frontend Mentor challenge?"
            answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
          />
        </li>
      </ul>
    </div>
  );
};

export default FAQ;
