import Script from 'next/script'
export default function Home() {
  return (
    <main className="flex flex-col max-h-screen">
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:overflow-hidden'>
        <aside className="flex flex-col justify-between col-span-1 pt-4 px-4 md:pt-16 md:pl-16">
          <div>
            <h1 className="text-xl mb-2">
              Ricardo Matias
            </h1>
            <p className='italic'>
              Full-stack Javascript Software Developer
            </p>
            <p className='mt-4'>Previously: Zalando, Camunda, A.T.U</p>
            <div className='mt-4 flex flex-col'>
              <a className='underline' href="https://github.com/ricardomatias" target="_blank" rel="noopener">Github</a>
              <a className='underline' href="https://twitter.com/ricardomatiaspt" target="_blank" rel="noopener">Twitter</a>
              <a className='underline' href="https://www.instagram.com/ricardomatiaspt/" target="_blank" rel="noopener">Instagram</a>
              <p>ricardomatias0 at gmail dot com</p>
            </div>
          </div>
          <footer className='hidden mb-8 md:flex flex-col items-start'>
            <p className='text-sm'>
              © 2023 Ricardo Matias
            </p>
          </footer>
        </aside>
        <section className="flex flex-col col-span-2 md:overflow-y-scroll pt-4 px-4 md:pt-16 md:pb-8 md:pr-16">
          <h2 className='text-xl font-bold mb-2'>PROJECTS</h2>
          <article className='flex flex-col md:flex-row'>
            <div className='flex flex-col md:w-1/4'>
              <a className='underline' href="https://eco-bot.net/">ECO-BOT</a>
              <p className='text-sm text-left mt-4'>Exposing climate change disinformation and corporate greenwashing on social media during COP26.<span className='block mt-4'>Design: Benjamin Lee</span></p>
            </div>
            <div className='flex flex-col md:w-3/4'>
              <a href="https://eco-bot.net/">
                <video src='/videos/ecobot.mp4' loop autoPlay muted />
              </a>
            </div>
          </article>
          <article className='flex flex-col md:flex-row mt-12'>
            <div className='flex flex-col md:w-1/4'>
              <a className='underline' href="https://whoiswe.nl/">Who is we?</a>
              <p className='text-sm text-left mt-4'>A hybrid platform accompanying the Who is We? exhibition at the Pavilion of the Netherlands at the Biennale Architettura 2021 in Venice.<span className='block mt-4'>Design: RNDR Studio</span></p>
            </div>
            <div className='flex flex-col md:w-3/4'>
              <a href="https://whoiswe.nl/">
                <video src='/videos/whoiswe.mp4' loop autoPlay muted />
              </a>
            </div>
          </article>
          <article className='flex flex-col md:flex-row mt-12'>
            <div className='flex flex-col md:w-1/4'>
              <a className='underline' href="https://studioneural.ai">Studioneural</a>
              <p className='text-sm text-left mt-4'>Studioneural is the world's first provider of synthetic media for long-form TV.<span className='block mt-4'>Design: Benjamin Lee</span></p>
            </div>
            <div className='flex flex-col md:w-3/4'>
              <a href="https://studioneural.ai">
                <video src='/videos/studioneural.mp4' loop autoPlay muted />
              </a>
            </div>
          </article>
          <footer className='my-4 flex md:hidden flex-col items-start'>
            <p className='text-sm'>
              © 2023 Ricardo Matias
            </p>
          </footer>
        </section>
      </div>
      <Script src="https://www.googletagmanager.com/gtag/js?id=UA-124179714-1" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'UA-124179714-1');
        `}
      </Script>
    </main>
  )
}
