import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="bg-light py-16">
        <div className="container-custom">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-bold text-dark mb-6">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="btn btn-primary px-8 py-3">
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;