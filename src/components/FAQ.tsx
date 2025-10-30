import iconStar from "/images/icon-star.svg";

const FAQ = () => {
  return (
    <div className="faq">
      <h2 className="faq__heading">
        <img src={iconStar} alt="" />
        FAQs
      </h2>

      <ul className="faq__accordion">
        <li>
          <details className="faq__item">
            <summary>What is Frontend Mentor, and how will it help me?</summary>
            <p>
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skills with projects in
              HTML, CSS, and JavaScript. It's suitable for all levels and ideal
              for portfolio building.
            </p>
          </details>
        </li>

        <li>
          <details className="faq__item">
            <summary>Is Frontend Mentor free?</summary>
            <p>
              Yes, Frontend Mentor offers both free and premium coding
              challenges, with the free option providing access to a range of
              projects suitable for all skill levels.
            </p>
          </details>
        </li>

        <li>
          <details className="faq__item">
            <summary>
              Can I use Frontend Mentor projects in my portfolio?
            </summary>
            <p>
              Yes, you can use projects completed on Frontend Mentor in your
              portfolio. It's an excellent way to showcase your skills to
              potential employers!
            </p>
          </details>
        </li>

        <li>
          <details className="faq__item">
            <summary>
              How can I get help if I'm stuck on a Frontend Mentor challenge?
            </summary>
            <p>
              The best place to get help is inside Frontend Mentor's Discord
              community. There's a help channel where you can ask questions and
              seek support from other community members.
            </p>
          </details>
        </li>
      </ul>
    </div>
  );
};

export default FAQ;
