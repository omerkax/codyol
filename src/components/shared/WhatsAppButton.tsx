const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/905074017765?text=Merhaba%2C%20Codyol%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile yazın"
      title="WhatsApp ile yazın"
      className="fixed right-4 bottom-4 z-[999] flex size-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/15 transition-transform duration-200 hover:scale-105 md:right-6 md:bottom-6 md:size-14">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-6 fill-white md:size-7" aria-hidden="true">
        <path d="M16.004 3C8.82 3 3 8.82 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.71A12.96 12.96 0 0 0 16.004 29C23.18 29 29 23.18 29 16S23.18 3 16.004 3Zm0 23.62c-1.98 0-3.92-.53-5.6-1.54l-.4-.24-3.96 1.02 1.06-3.86-.26-.4A10.6 10.6 0 0 1 5.38 16c0-5.86 4.77-10.62 10.63-10.62 5.85 0 10.61 4.76 10.61 10.62 0 5.86-4.76 10.62-10.62 10.62Zm5.83-7.95c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.72.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66 0 1.57 1.14 3.08 1.3 3.3.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
