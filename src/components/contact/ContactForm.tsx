'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'aagilli20@gmail.com';

const fieldClass =
    'w-full border-0 border-b border-brand-blue/70 bg-transparent px-0 py-2 text-sm text-white placeholder:text-white/70 focus:border-brand-mint focus:outline-none focus:ring-0';

const empty = { name: '', email: '', company: '', phone: '', message: '' };

export default function ContactForm() {
    const t = useTranslations('Contact');
    const [formData, setFormData] = useState(empty);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            await addDoc(collection(db, 'contact'), {
                ...formData,
                createdAt: new Date()
            });

            // Aviso por mail sin sacar al usuario de la página
            await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Nombre: formData.name,
                    Email: formData.email,
                    Empresa: formData.company,
                    Celular: formData.phone,
                    Mensaje: formData.message,
                    _subject: '¡Nueva consulta desde Be Data!'
                })
            });

            setStatus('success');
            setFormData(empty);
        } catch (error) {
            console.error('Error sending contact form: ', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <input className={fieldClass} type="text" name="name" required placeholder={t('name')} aria-label={t('name')} value={formData.name} onChange={handleChange} />
            <input className={fieldClass} type="email" name="email" required placeholder={t('email')} aria-label={t('email')} value={formData.email} onChange={handleChange} />
            <input className={fieldClass} type="text" name="company" placeholder={t('company')} aria-label={t('company')} value={formData.company} onChange={handleChange} />
            <input className={fieldClass} type="tel" name="phone" placeholder={t('phone')} aria-label={t('phone')} value={formData.phone} onChange={handleChange} />
            <textarea className={fieldClass} name="message" required rows={4} placeholder={t('message')} aria-label={t('message')} value={formData.message} onChange={handleChange} />

            <div className="flex justify-end">
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="rounded-full border border-white/80 px-8 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-brand-deep disabled:opacity-50"
                >
                    {status === 'loading' ? t('sending') : t('submit')}
                </button>
            </div>

            {status === 'success' && <p className="text-center text-sm text-brand-mint">{t('successMessage')}</p>}
            {status === 'error' && <p className="text-center text-sm text-red-300">{t('errorMessage')}</p>}
        </form>
    );
}
