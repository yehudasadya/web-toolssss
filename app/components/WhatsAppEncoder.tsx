'use client';
import { useState } from 'react';

export default function WhatsAppEncoder() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [encodedLink, setEncodedLink] = useState('');
    const [error, setError] = useState('');

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        setPhoneNumber(value);
        setError('');
    };

    const generateLink = () => {
        if (!phoneNumber) {
            setError('נא להזין מספר טלפון');
            return;
        }

        let formattedPhone = phoneNumber;
        if (formattedPhone.startsWith('0')) {
            formattedPhone = formattedPhone.substring(1);
        }
        
        if (!formattedPhone.startsWith('972')) {
            formattedPhone = '972' + formattedPhone;
        }

        const encodedMessage = encodeURIComponent(message);
        const link = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
        setEncodedLink(link);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(encodedLink);
    };

    return (
        <div className="bg-white rounded-lg shadow p-6 max-w-2xl mx-auto">
            <div className="space-y-6 text-right">
                <h2 className="text-2xl font-bold mb-4">יוצר קישורי וואטסאפ מקודדים</h2>
                
                <div className="space-y-2">
                    <label className="block font-medium">מספר טלפון:</label>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        className="w-full p-2 border rounded-lg text-right"
                        placeholder="הזן מספר טלפון (עם או בלי 0)"
                        dir="rtl"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>

                <div className="space-y-2">
                    <label className="block font-medium">הודעה:</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 border rounded-lg min-h-32 text-right"
                        placeholder="הזן את ההודעה כאן"
                        dir="rtl"
                    />
                </div>

                <button 
                    onClick={generateLink}
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                    צור קישור
                </button>

                {encodedLink && (
                    <div className="space-y-2 mt-4">
                        <label className="block font-medium">הקישור המקודד:</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={encodedLink}
                                readOnly
                                className="w-full p-2 border rounded-lg bg-gray-50"
                            />
                            <button 
                                onClick={copyToClipboard}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                            >
                                העתק
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}