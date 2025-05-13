import { Link } from 'react-router-dom';

const Logo = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <div className="flex items-center">
        <svg 
          className="w-10 h-10 text-primary-600" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 12L12 17L22 12" />
        </svg>
        <span className="ml-2 text-xl font-bold text-gray-900">
          Aquila<span className="text-primary-600">Tech</span>
        </span>
      </div>
    </Link>
  );
};

export default Logo;