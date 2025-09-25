const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="px-4 py-1.5 rounded-md bg-gray-100 text-gray-700 text-sm hover:bg-gray-300 transition">
      {children}
    </button>
  );
};

export default Button;
