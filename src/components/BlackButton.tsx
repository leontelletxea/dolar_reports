const BlackButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="px-4 py-1.5 rounded-md border border-gray-800 text-sm hover:border-gray-600 transition">
      {children}
    </button>
  );
};

export default BlackButton;
