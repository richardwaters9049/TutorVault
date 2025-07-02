// frontend/app/page.tsx

'use client';

import { motion } from 'framer-motion';
import { UploadCloudIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 px-6 py-12">
      {/* Animated headline */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center text-slate-900 mb-6"
      >
        Welcome to TutorVault
      </motion.h1>

      {/* Info paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg text-slate-600 text-center max-w-2xl mb-10"
      >
        Upload your study PDFs, ask questions, and get instant answers powered by AI. Just drag, drop, and start chatting.
      </motion.p>

      {/* Call-to-action */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link href="/vault">
          <Button size="lg" className="gap-2">
            <UploadCloudIcon className="w-5 h-5" />
            Upload your first PDF
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}
