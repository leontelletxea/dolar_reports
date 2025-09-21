export default function Maps() {
  return (
    <section className="w-full h-auto py-10 flex flex-col items-center bg-gray-100">
      <h1 className="text-5xl font-extrabold mb-4 text-green-700 tracking-tight drop-shadow-lg">
        Nuestra Ubicación
      </h1>
      <p className="text-lg text-gray-600 mb-6">El Soberbio, Misiones, Argentina.</p>
      <div className="w-full h-96 flex justify-center items-center px-4 md:px-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14156.493827156048!2d-54.2123456789!3d-27.2123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sEl%20Soberbio%2C%20Misiones%2C%20Argentina!5e0!3m2!1sen!2sus!4v1695291234567!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '0.5rem' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
