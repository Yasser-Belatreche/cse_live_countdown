const getFirstSecondInputData = (firstText, secondText, onChange) => [
  {
    placeholder: "Write your first test here",
    type: "text",
    name: "firstText",
    value: firstText,
    onChange: onChange,
  },
  {
    placeholder: "Write your second test here",
    type: "text",
    name: "secondText",
    value: secondText,
    onChange: onChange,
  },
];

export { getFirstSecondInputData };
