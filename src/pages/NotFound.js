import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="section" style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '4rem', fontWeight: '700', marginBottom: '1rem', color: 'hsl(var(--text-primary))' }}>
        404
      </h1>
      <p style={{ fontSize: '1.5rem', color: 'hsl(var(--text-secondary))', marginBottom: '2rem' }}>
        Oops! Page not found
      </p>
      <Link to="/" className="btn-primary">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
