
type HeaderProps = {
  title: string;
  breadcrumb: string;
};

const Header: React.FC<HeaderProps> = ({ title, breadcrumb }) => {
  return (
    <div 
      className="text-white p-6 shadow-md pl-20 pt-20"
      style={{
        background: 'linear-gradient(to right, #000000, #000000)' 
      }}
    >
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-sm opacity-75">{breadcrumb}</p>
    </div>
  );
};

export default Header;
