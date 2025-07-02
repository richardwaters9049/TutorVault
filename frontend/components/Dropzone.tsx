// frontend/components/Dropzone.tsx

'use client';

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloudIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface DropzoneProps {
    onFileAccepted: (file: File) => Promise<void> | void;
}

export default function Dropzone({ onFileAccepted }: DropzoneProps) {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const pdf = acceptedFiles[0];

        if (!pdf || pdf.type !== 'application/pdf') {
            toast.error('Only PDF files are supported.');
            return;
        }

        // Pass the valid PDF to parent
        onFileAccepted(pdf);
    }, [onFileAccepted]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        accept: { 'application/pdf': ['.pdf'] },
    });

    // The type of `getRootProps()` is `DropzoneRootProps` which includes standard HTML attributes.
    return (
        <div
            {...getRootProps()}
            className={`flex flex-col items-center justify-center w-full max-w-xl border-2 border-dashed rounded-lg p-10 cursor-pointer transition ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-slate-300 bg-white'
                }`}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                className="w-full h-full flex flex-col items-center justify-center"
            >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center justify-center text-slate-600">
                    <UploadCloudIcon className="w-10 h-10 mb-4" />
                    <p className="text-lg font-medium mb-2">
                        {isDragActive ? 'Drop your PDF here...' : 'Drag & drop your PDF here'}
                    </p>
                    <p className="text-sm text-slate-400">or click to browse</p>
                </div>
            </motion.div>
        </div>
    );
}
