import Link from 'next/link';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <p className="not-found-code">404 ERROR</p>
        <h1 className="not-found-title">Product Not Found?</h1>
        <p className="not-found-message">
          The page you are looking for might have been moved. Explore our latest OEM models.
        </p>
        <div className="not-found-action">
          <Link href="/" className="not-found-button">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
