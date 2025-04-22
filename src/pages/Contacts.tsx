import { useRef } from "react";

export function Contacts() {
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const redirectToWhatsApp = () => {
    const phoneNumber = "6289611700011";
    const name = nameRef.current?.value || "Customer";
    const message =
      messageRef.current?.value ||
      "Hello, I have a question about your products.";
    const text = `Nama: ${name}.%0A${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-2xl w-full mx-auto my-12">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Contact Our Team
        </h1>
        <p className="text-sm text-gray-600">
          We're here to help and answer any questions you might have.
        </p>
      </div>
      <div className="contact-card bg-white rounded-xl p-8 shadow-lg">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            className="input-field w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Message
          </label>
          <textarea
            id="message"
            ref={messageRef}
            className="message-box input-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            style={{ minHeight: 150, resize: "none" }}
          ></textarea>
        </div>

        <div className="flex justify-center mb-8">
          <button
            type="button"
            onClick={redirectToWhatsApp}
            className="btn-whatsapp text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-medium"
            style={{ backgroundColor: "#25D366" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 6.318h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.896 6.994c-.003 5.455-4.438 9.89-9.898 9.89zm8.413-18.303A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.674a11.876 11.876 0 005.683 1.448h.005c6.554 0 11.889-5.335 11.893-11.892a11.82 11.82 0 00-3.48-8.465z" />
            </svg>
            Chat on WhatsApp
          </button>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>
            Or call us at <span className="font-medium">+62 896 1170 0011</span>
          </p>
          <p>We typically respond within 24 hours</p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;