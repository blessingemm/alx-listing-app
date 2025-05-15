const Button = ({ text }: { text: string }) => {
  return (
    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      {text}
    </button>
  );
};

export default Button;
