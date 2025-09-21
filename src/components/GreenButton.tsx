const GreenButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="px-4 py-1.5 rounded-md bg-green-700 text-white text-sm hover:bg-green-600 transition">
      {children}
    </button>
  );
};

export default GreenButton;
