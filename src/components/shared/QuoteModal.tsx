'use client';

import { useModalContext } from '@/context/ModalContext';
import { MouseEvent, useState } from 'react';

const QuoteModal = () => {
  const { quoteModal } = useModalContext();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  });

  const handleOverlayClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      quoteModal.closeModal();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Backend entegrasyonu henüz yok; şimdilik modalı kapatıyoruz.
    quoteModal.closeModal();
  };

  return (
    <dialog
      ref={quoteModal.modalRef}
      className="modal-overlay modal-close fixed top-0 left-0 !z-[9999] h-full w-full bg-black/70 backdrop-blur-sm"
      onClick={handleOverlayClick}>
      <div
        ref={quoteModal.contentRef}
        className="modal-content fixed top-1/2 left-1/2 w-[92%] max-w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-white dark:bg-background-8 p-6 sm:p-8 shadow-2xl">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <p className="badge badge-green mb-3">Teklif Al</p>
            <h3 className="text-heading-5 font-normal">İhtiyacınızı paylaşın, size geri dönüş yapalım</h3>
            <p className="text-secondary/60 dark:text-accent/60 text-tagline-2 mt-1">
              Minimum 25.000 TL bütçe ile başlayabilir, 50.000 TL ve üzeri projeler için detaylı teklif alabilirsiniz.
            </p>
          </div>
          <button
            onClick={quoteModal.closeModal}
            aria-label="Teklif formunu kapat"
            className="shrink-0 size-9 rounded-full bg-background-2 dark:bg-background-6 flex items-center justify-center text-secondary hover:bg-background-3 dark:hover:bg-background-5 transition">
            ✕
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name" className="text-tagline-2 font-medium text-secondary dark:text-accent">
              Ad Soyad
            </label>
            <input
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              placeholder="Adınızı ve soyadınızı girin"
              className="w-full rounded-full border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-7 px-4 py-3 text-tagline-2 text-secondary dark:text-accent placeholder:text-secondary/60 dark:placeholder:text-accent/60 focus:outline-none focus:border-primary-500"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-tagline-2 font-medium text-secondary dark:text-accent">
                E-posta
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder="E-posta adresinizi girin"
                className="w-full rounded-full border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-7 px-4 py-3 text-tagline-2 text-secondary dark:text-accent placeholder:text-secondary/60 dark:placeholder:text-accent/60 focus:outline-none focus:border-primary-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-tagline-2 font-medium text-secondary dark:text-accent">
                Telefon
              </label>
              <input
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder="+90 (5__) ___ __ __"
                className="w-full rounded-full border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-7 px-4 py-3 text-tagline-2 text-secondary dark:text-accent placeholder:text-secondary/60 dark:placeholder:text-accent/60 focus:outline-none focus:border-primary-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="budget" className="text-tagline-2 font-medium text-secondary dark:text-accent">
              Bütçe Aralığı
            </label>
            <select
              id="budget"
              name="budget"
              value={formState.budget}
              onChange={handleChange}
              required
              className="w-full rounded-full border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-7 px-4 py-3 text-tagline-2 text-secondary dark:text-accent focus:outline-none focus:border-primary-500">
              <option value="">Seçiniz</option>
              <option value="25-50">25.000 - 50.000 TL</option>
              <option value="50-150">50.000 - 150.000 TL</option>
              <option value="150+">150.000 TL+</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-tagline-2 font-medium text-secondary dark:text-accent">
              Mesajınız
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={4}
              placeholder="Kısaca projenizi anlatın"
              className="w-full rounded-xl border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-7 px-4 py-3 text-tagline-2 text-secondary dark:text-accent placeholder:text-secondary/60 dark:placeholder:text-accent/60 focus:outline-none focus:border-primary-500"
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="btn btn-lg btn-secondary dark:btn-accent hover:btn-primary px-10 py-4 w-full max-w-[320px] rounded-2xl shadow-md transition-all duration-200 first-letter:uppercase before:content-none"
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default QuoteModal;

