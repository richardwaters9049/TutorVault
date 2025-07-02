// frontend/app/vault/page.tsx

'use client';

import Dropzone from '@/components/Dropzone';
import { useState } from 'react';
import { toast } from 'sonner';

export default function VaultPage() {
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);

    const handleFileUpload = async (file: File) => {
        setUploadedFile(file);

        const formData = new FormData();
        formData.append('file', file);

        try {
            // Send to backend — update endpoint if needed
            const res = await fetch('http://localhost:8000/api/chat/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.detail || 'Upload failed');

            toast.success('PDF uploaded successfully.');
            // You can now redirect to /chat/[id] or update state
        } catch (err: any) {
            toast.error(err.message || 'Failed to upload file.');
        }
    };

    return (
        <div className="min-h-screen bg-white px-4 py-10 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6">Your Vault</h2>
            <p className="text-slate-600 mb-8 max-w-md text-center">
                Upload a PDF to begin asking questions. We'll scan it and return answers instantly.
            </p>

            <Dropzone onFileAccepted={handleFileUpload} />

            {uploadedFile && (
                <div className="mt-6 text-sm text-slate-500">
                    <strong>Selected file:</strong> {uploadedFile.name}
                </div>
            )}
        </div>
    );
}
