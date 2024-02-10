/**
 * This original code was generated by v0 by Vercel.
 * @see https://v0.dev/t/IxtYS3s8ikh
 */

import Header from '../components/Header';

export default function Home() {
  return (
    <div key="1" className="bg-[#5590c9] min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        <Header />
      </div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Build your component library
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable.
                  Open Source.
                </p>
              </div>
              <div className="space-x-4">
                <a
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/api/auth/login?returnTo=/mypage"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">How to Use</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Learn how to make the most of our component library with these step-by-step instructions.
                </p>
              </div>
              <div>
                <img
                  alt="How to Use"
                  className="aspect-[3/2] rounded-lg object-cover"
                  height={400}
                  src="/placeholder.svg"
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">New Section 1</h2>
                <p className="text-gray-500 dark:text-gray-400">This is the content for the new section 1.</p>
              </div>
              <div>
                <img
                  alt="New Section 1"
                  className="aspect-[3/2] rounded-lg object-cover"
                  height={400}
                  src="/placeholder.svg"
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">New Section 2</h2>
                <p className="text-gray-500 dark:text-gray-400">This is the content for the new section 2.</p>
              </div>
              <div>
                <img
                  alt="New Section 2"
                  className="aspect-[3/2] rounded-lg object-cover"
                  height={400}
                  src="/placeholder.svg"
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
