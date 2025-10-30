const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <details className="faq__item">
      <summary className="text-preset--title">{question}</summary>
      <p>{answer}</p>
    </details>
  );
};

export default FAQItem;
