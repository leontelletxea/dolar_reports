const WhiteButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="px-4 py-1.5 rounded-md bg-white text-black text-sm font-medium hover:bg-gray-100 transition">
      {children}
    </button>
  );
};

export default WhiteButton;
