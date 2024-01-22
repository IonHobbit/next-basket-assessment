'use client';
import ContactBar from '@/components/ContactBar';
import Header from '@/components/Header';

export default function Home() {

  return (
    <main className="min-h-screen">
      <ContactBar />
      <Header />
    </main>
  );
}