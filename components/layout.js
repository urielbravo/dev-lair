import Head from "next/head"
import Image from 'next/future/image'
import Script from "next/script"

export default function Layout ({ title, keywords, description, children }) {
  return (
    <div className="relative min-h-screen">
      {/* <Script type="text/javascript" strategy="lazyOnload" src="../public/js/sidebar.js" /> */}

      <Script id="sidebar-show" strategy="lazyOnload">
        {`
          const btn = document.querySelector(".mobile-menu-button");
          const sidebar = document.querySelector(".sidebar");

          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            sidebar.classList.toggle("-translate-x-full");
          });

          document.addEventListener("click", () => {
            sidebar.classList.add("-translate-x-full");
          });`
        }
      </Script>
      <Head>
        <title>{title}</title>
        <meta name="keyword" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed left-0 right-0 h-16 bg-white text-gray-800 flex justify-between items-center border-b border-gray-400 px-2">
        {/* logo */}
        <div className="flex items-center space-x-1 px-4">
          <Image alt="logo" className="h-8 w-8" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/66955/gopher.svg" />
          <a href="#" className="block text-gray-800 font-bold">Uriel&apos;s Lair</a>
        </div>

        {/* mobile menu button */}
        <button className="mobile-menu-button p-4 hover:bg-gray-100 focus:outline-none md:hidden">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* sidebar */}
      <div className="sidebar overflow-y-auto bg-white text-blue-800 border-r-2 w-48 space-y-6 px-2 py-2 transform -translate-x-full fixed top-16 bottom-0 left-0 md:translate-x-0 transition duration-200 ease-in-out z-10">

        {/* nav */}
        <nav>
          <a href="#" className="py-2 5 px-4 flex items-center space-x-2  rounded hover:bg-blue-700 hover:text-white transition duration-100">Home</a>
          <a href="#" className="py-2 5 px-4 flex items-center space-x-2  rounded hover:bg-blue-700 hover:text-white transition duration-100">Blog</a>
          <a href="#" className="py-2 5 px-4 flex items-center space-x-2  rounded hover:bg-blue-700 hover:text-white transition duration-100">Contact</a>
        </nav>
      </div>
      <main className="absolute top-16 bottom-0 md:left-48 overflow-y-auto">{children}</main>
    </div>
  )
}


Layout.defaultProps = {
  title: "Welcome to devs's Lair",
  keywords: "development and coding",
  description: "The best info for developers"
}