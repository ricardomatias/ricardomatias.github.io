import Script from 'next/script';
export default function Home() {
    return (
        <main className="flex flex-col max-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full md:overflow-hidden">
                <aside className="flex flex-col justify-between col-span-1 pt-4 px-4 md:pt-16 md:pl-16">
                    <div>
                        <h1 className="text-xl mb-2">Ricardo Matias</h1>
                        <p className="italic">Full-stack Javascript Software Developer</p>
                        <p className="mt-4">Previously: Zalando, Camunda, A.T.U</p>
                        <div className="mt-4 flex flex-col">
                            <a className="underline" href="https://github.com/ricardomatias" target="_blank" rel="noopener">
                                Github
                            </a>
                            <p>general@ricardomatias.net</p>
                        </div>
                    </div>
                    <footer className="hidden mb-8 md:flex flex-col items-start">
                        <p className="text-sm">© 2025 Ricardo Matias</p>
                    </footer>
                </aside>
                <section className="flex flex-col col-span-3 md:overflow-y-scroll pt-4 px-4 md:pt-16 md:pb-8 md:pr-16">
                    <h2 className="text-xl font-bold mb-2">CLIENT PROJECTS</h2>
                    <article className="flex flex-col md:flex-row md:gap-x-4">
                        <div className="flex flex-col md:w-1/4 md:min-w-[300px]">
                            <a className="underline" href="https://web.archive.org/web/20220203173835/https://eco-bot.net/">
                                ECO-BOT
                            </a>
                            <p className="text-sm text-left mt-4">
                                Exposing climate change disinformation and corporate greenwashing on social media during COP26.
                                <span className="block mt-4">Design: Benjamin Lee</span>
                            </p>
                        </div>
                        <div className="flex flex-col md:max-w-[856px]">
                            <a href="https://web.archive.org/web/20220203173835/https://eco-bot.net/">
                                <video src="/videos/ecobot-optim.mp4" loop autoPlay muted />
                            </a>
                        </div>
                    </article>
                    <article className="flex flex-col md:flex-row md:gap-x-4 mt-12">
                        <div className="flex flex-col md:w-1/4 md:min-w-[300px]">
                            <a className="underline" href="https://seriousoomph.com">
                                Visiorion
                            </a>
                            <p className="text-sm text-left mt-4">
                                A platform for a trading strategy with user & admin dashboards, automated trade replication
                                system.
                            </p>
                        </div>
                        <div className="flex flex-col md:max-w-[856px]">
                            <a href="https://seriousoomph.com">
                                <video src="/videos/visiorion-optim.mp4" loop autoPlay muted />
                            </a>
                        </div>
                    </article>
                    <article className="flex flex-col md:flex-row md:gap-x-4 mt-12">
                        <div className="flex flex-col md:w-1/4 md:min-w-[300px]">
                            <a className="underline" href="https://oracle.library.tudelft.nl/">
                                Oracle
                            </a>
                            <p className="text-sm text-left mt-4">
                                Oracle is the archived web version of an application that uses machine learning to map similarity
                                for over 50,000 theses and dissertations from the TU Delft.
                                <span className="block mt-4">Design: RNDR</span>
                            </p>
                        </div>
                        <div className="flex flex-col md:max-w-[856px]">
                            <a href="https://oracle.library.tudelft.nl/">
                                <video src="/videos/oracle.mp4" loop autoPlay muted />
                            </a>
                        </div>
                    </article>
                    <article className="flex flex-col md:flex-row md:gap-x-4 mt-12">
                        <div className="flex flex-col md:w-1/4 md:min-w-[300px]">
                            <a className="underline" href="https://seriousoomph.com">
                                Serious Oomph
                            </a>
                            <p className="text-sm text-left mt-4">
                                We're creative copywriters. We write words and ideas that help brands and organisations find their
                                voice, express their personality, and communicate with creativity, intelligence and energy.
                                <span className="block mt-4">Design: Benjamin Lee</span>
                            </p>
                        </div>
                        <div className="flex flex-col md:max-w-[856px]">
                            <a href="https://seriousoomph.com">
                                <video src="/videos/seriousoomph-optim.mp4" loop autoPlay muted />
                            </a>
                        </div>
                    </article>
                    <article className="flex flex-col md:flex-row md:gap-x-4 mt-12">
                        <div className="flex flex-col md:w-1/4 md:min-w-[300px]">
                            <a className="underline" href="https://whoiswe.nl/">
                                Who is we?
                            </a>
                            <p className="text-sm text-left mt-4">
                                A hybrid platform accompanying the Who is We? exhibition at the Pavilion of the Netherlands at the
                                Biennale Architettura 2021 in Venice.<span className="block mt-4">Design: RNDR Studio</span>
                            </p>
                        </div>
                        <div className="flex flex-col md:max-w-[856px]">
                            <a href="https://whoiswe.nl/">
                                <video src="/videos/whoiswe-optim.mp4" loop autoPlay muted />
                            </a>
                        </div>
                    </article>
                    <article className="flex flex-col md:flex-row md:gap-x-4 mt-12">
                        <div className="flex flex-col md:w-1/4 md:min-w-[300px]">
                            <a className="underline" href="https://studioneural.ai">
                                Studioneural
                            </a>
                            <p className="text-sm text-left mt-4">
                                Studioneural is the world's first provider of synthetic media for long-form TV.
                                <span className="block mt-4">Design: Benjamin Lee</span>
                            </p>
                        </div>
                        <div className="flex flex-col  md:max-w-[856px]">
                            <a href="https://studioneural.ai">
                                <video src="/videos/studioneural-optim.mp4" loop autoPlay muted />
                            </a>
                        </div>
                    </article>
                    <article className="flex flex-col md:flex-row md:gap-x-4 mt-12">
                        <div className="flex flex-col md:w-1/4 md:min-w-[300px]">
                            <a className="underline" href="https://www.dropcity.org/">
                                DROPCITY
                            </a>
                            <p className="text-sm text-left mt-4">
                                Dropcity is a new centre for Architecture and Design developed along Via Sammartini in Milan.
                                <span className="block mt-4">Design: RNDR Studio</span>
                            </p>
                        </div>
                        <div className="flex flex-col  md:max-w-[856px]">
                            <a href="https://www.dropcity.org/">
                                <video src="/videos/dropcity-optim.mp4" loop autoPlay muted />
                            </a>
                        </div>
                    </article>
                    <footer className="my-4 flex md:hidden flex-col items-start">
                        <p className="text-sm">© 2025 Ricardo Matias</p>
                    </footer>
                </section>
            </div>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-1Y7CJCFSDS" />
            <Script id="google-analytics">
                {`
          window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-1Y7CJCFSDS');
        `}
            </Script>
        </main>
    );
}
