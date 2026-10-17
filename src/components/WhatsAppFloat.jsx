import { waLink } from '../data/content.js';
import Icon from './Icon.jsx';

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Bermutex on WhatsApp"
    >
      <span className="wa-pulse" aria-hidden="true" />
      <Icon name="whatsapp" size={28} />
      <span className="wa-tip">Chat with us</span>
    </a>
  );
}
