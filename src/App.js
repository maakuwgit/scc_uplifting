import logo_h from './logo--horizontal.svg'
import logo from './logo.svg'
import fpoSlide1 from './fpo__logo__american-tower.png'
import fpoSlide2 from './fpo__logo__digital-realty.png'
import fpoSlide3 from './fpo__logo__equinix.png'
import fpoSlide4 from './fpo__logo__prologis.png'
import doorway from './2701250024433300711.jpg'
import entryway from './7685682602157855425.jpg'
import redWalls from './1662784570334604561.jpg'
import redBuilding from './5315839180785235096.jpg'
import couches from './7729529688808813175.jpg'
import constructionSite from './office-building-construction-site-with-room-for-text-1570x1047.jpg'
import skyscraper from './office-building-skyscrapers-with-room-for-text-picjumbo-com.jpg'

function App() {
  const rowStyle    = "flex w-full py-16 px-24"
  const slideStyle  = "rounded-lg bg-cover p-4"

  const makeHeading = (copy) => {
    return <h3 className="mb-5 text-3xl font-bold text-white">{copy}</h3>
  }

  const makeEyebrow = (copy) => {
    return <h2 className="text-xl text-gold">{copy}</h2>
  }

  const makeSlide = (img,time,time_str,h,p,alt="") => {
    return (
      <>
        <figure className="mb-4 h-3/4 rounded-lg" style={{backgroundImage: `url(${img})`}}>
          <img alt={alt} src={img} className="w-full h-auto invisible"/>
        </figure>
        <time className="text-gold" dateTime={time}>{time_str}</time>
        <h4 className="mb-2 text-lg text-white font-bold">{h}</h4>
        <p className="pb-4 text-sm text-white">{p}</p>
      </>
    )
  }

  const makeAccordion = (title, desc, color1 = "#1F2D23", color2 = "#487555") => {
    return (
      <>
        <dt className="flex items-center cursor-pointer p-4" onClick={toggleAccordion}>
          <svg className="rounded-md mr-4" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.458748" y="-0.10791" width="31.9587" height="32.6689" fill={color1}/>
            <path d="M8.24427 25.1752L25.406 25.1752" stroke={color2} strokeLinecap="round"/>
            <path d="M7.90639 24.8044C7.71187 25.0004 7.71187 25.3182 7.90639 25.5142C8.10091 25.7102 8.41629 25.7102 8.6108 25.5142L7.90639 24.8044ZM25.7641 8.022C25.7641 7.7448 25.5411 7.5201 25.266 7.5201L20.7831 7.5201C20.5081 7.5201 20.285 7.7448 20.285 8.02199C20.285 8.29919 20.5081 8.52389 20.7831 8.52389L24.7679 8.52389L24.7679 12.5391C24.7679 12.8163 24.9909 13.041 25.266 13.041C25.5411 13.041 25.7641 12.8163 25.7641 12.5391L25.7641 8.022ZM8.6108 25.5142L25.6182 8.37689L24.9138 7.6671L7.90639 24.8044L8.6108 25.5142Z" fill={color2}/>
            <path d="M8.43578 7.52007C8.16069 7.52007 7.93768 7.74478 7.93768 8.02197L7.93768 12.5391C7.93768 12.8163 8.16069 13.041 8.43578 13.041C8.71087 13.041 8.93387 12.8163 8.93387 12.5391L8.93387 8.52387L12.9186 8.52387C13.1937 8.52387 13.4167 8.29916 13.4167 8.02197C13.4167 7.74478 13.1937 7.52007 12.9186 7.52007L8.43578 7.52007ZM25.091 25.5142C25.2855 25.7102 25.6009 25.7102 25.7954 25.5142C25.9899 25.3182 25.9899 25.0004 25.7954 24.8044L25.091 25.5142ZM8.08357 8.37687L25.091 25.5142L25.7954 24.8044L8.78798 7.66708L8.08357 8.37687Z" fill={color2}/>
          </svg>
          {title}
        </dt>
        <dd className="border-b-2 border-black px-4 text-sm">
          <span className="ml-12">{desc}</span>
        </dd>
      </>
    )
  }

  const makeContact = (title, href = '#', aTxt = "CTA", bTxt = "Call to Action") => {
    return (
      <article data-contact className="border-gold border rounded-lg p-8">
        <div></div>
        <div className="flex flex-col">
          <span className="mb-2 text-2xl font-bold">{title}</span>
          <a href={href} className="text-gold hover:text-gold-1/3 focus:text-gold-1/3">{aTxt}</a>
        </div>
        <button className="w-full mt-4 p-2 rounded-lg bg-gold-1/3 text-gold hover:bg-gold hover:text-black focus:bg-gold focus:text-black">{bTxt}</button>
      </article>
    )
  }

  const toggleAccordion = (event) => {
    let dts = document.querySelectorAll('[data-accordion] dt')
    dts.forEach((dt) => {
      dt.classList.remove('open')
    })
    if(event.target.classList.contains('open')){
      event.target.classList.remove('open')
    }else{
      event.target.classList.add('open')
    }
  }

  return (
    <main className="min-h-screen bg-neutral-850">
      <header className="fixed top-0 left-0 z-50 w-full flex nowrap items-center justify-between px-24 py-4 bg-black">
        <figure className="w-12 h-auto">
          <img alt="" src={logo}/>
        </figure>
        <nav className="flex nowrap space-x-8 text-white uppercase">
          <a href="#about_us" className="p-2">Mission</a>
          <a href="#partners" className="p-2">Partners</a>
          <a href="#portfolio" className="p-2">Portfolio</a>
          <a href="#contact" className="p-2 rounded bg-gold leading-base">Contact Us</a>
        </nav>
      </header>
      <article className={rowStyle + " min-h-screen relative items-center bg-black text-white bg-cover bg-fixed"}
       style={{backgroundImage: `url(${skyscraper})`}}>
        <div className="w-full lg:w-1/2 order-1">
          <h1 className="mb-8 text-7xl mb-4 font-extrabold drop-shadow-md">Infrastructure Creates Opportunity</h1>
          <p className="w-3/4 lg:w-2/3 drop-shadow-sm">We believe in improving services and creating new streams of revenue to sustain our cities</p>
        </div>
      </article>
      <section id="about_us" className={rowStyle + ' min-h-screen'}>
        <div className="w-1/2 order-2 p-16">
          { makeEyebrow('About Us')}
          { makeHeading('This is How We Work.')}
          <p className="text-white">With over 20 years of experience in construction and development, we are one team, driven to uplift the community and make it better.</p>
          <dl data-accordion className="text-white">
            { makeAccordion('Life-Long Performance','Lorem ipsum sin dolor amin set aqui lanis tet senim silla') }
            { makeAccordion('Professional Services','Lorem ipsum sin dolor amin set aqui lanis tet senim silla','#442920','#9C7D76') }
            { makeAccordion('Providing Guidance','Lorem ipsum sin dolor amin set aqui lanis tet senim silla','#1C2B4A','#5072B9') }
            { makeAccordion('Connecting Funding','Lorem ipsum sin dolor amin set aqui lanis tet senim silla','#3B3325','#7D6D51') }
          </dl>
        </div>
        <picture className="w-1/2 order-1 mx-4 relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 z-20 bg-cover bg-center"
           style={{
            clipPath:'polygon(0 0,50% 0, 50% 50%, 100% 50%, 100% 100%, 0 100%)',
            backgroundImage: `url(${redWalls})`
          }}>
            <img alt="" src={redWalls} className="w-full h-auto invisible"/>
          </div>
          <div className="absolute -top-5 -left-5 -right-5 -bottom-5 z-10 bg-neutral-900" style={{clipPath:'polygon(0 0, calc(50% + 20px) 0, calc(50% + 20px) calc(50% - 20px), 100% calc(50% - 20px), 100% 100%, 0 100%)'}}>
          </div>
        </picture>
      </section>
      <aside className={rowStyle + " align-center justify-center bg-cover bg-center bg-fixed"} style={{backgroundImage:`url(${constructionSite})`}}>
        <div className="outline outline-16 outline-gold-1/3 bg-gold rounded-2xl p-16 text-center">
          <h5 className="mb-4 text-6xl text-white">Get started with SCC Uplifting</h5>
          <p className="text-lg text-neutral-900">Team Members are waiting to discuss your goals for the city</p>
        </div>
      </aside>
      <section id="portfolio" className={rowStyle + " flex-wrap bg-neutral-900"}>
        <div className="w-1/2">
          { makeEyebrow('Our Portfolio')}
          { makeHeading('Our Recent Work')}
        </div>
        <ol className="grid grid-cols-3 gap-4 min-w-full -mx-4">
          <li data-slide className={slideStyle}>
            { makeSlide(redBuilding,"2021-10",'Fall 2021 - Spring 2022',"Dennis Brew Fire Station","Lorem ipsum sin dolor amin set aqui lanis tet senim silla")}
          </li>
          <li data-slide className={slideStyle}>
            { makeSlide(couches,"2021-10",'Fall 2021 - Spring 2022',"Project #2 [unnamed]","Lorem ipsum sin dolor amin set aqui lanis tet senim silla")}
          </li>
          <li data-slide className={slideStyle}>
            { makeSlide(entryway,"2021-10",'Fall 2021 - Spring 2022',"Project #3 [unnamed]","Lorem ipsum sin dolor amin set aqui lanis tet senim silla")}
          </li>
        </ol>
      </section>
      <aside id="partners" className={rowStyle + ' bg-neutral-950'}>
        <dl className="grid grid-cols-4 grid-gap-12 w-full relative">
          <dt className="sr-only">AMERICAN TOWER</dt>
          <dd>
            <img alt="AMERICAN TOWER" src={fpoSlide1}/>
          </dd>
          <dt className="sr-only">EQUINIX</dt>
          <dd>
            <img alt="EQUINIX" src={fpoSlide3}/>
          </dd>
          <dt className="sr-only">DIGITAL REALTY</dt>
          <dd>
            <img alt="DIGITAL REALTY" src={fpoSlide2}/>
          </dd>
          <dt className="sr-only">PROLOGIS</dt>
          <dd>
            <img alt="PROLOGIS" src={fpoSlide4}/>
          </dd>
        </dl>
      </aside>
      <section id="contact" className={rowStyle}>
        <picture className="w-1/2 order-1 mx-4 relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 z-20 bg-cover bg-center" 
           style={{
            clipPath:'polygon(0 50%,50% 50%,50% 0, 100% 0, 100% 100%, 0 100%)', 
            backgroundImage: `url(${doorway})`
          }}>
            <img alt="" src={doorway} className="w-full h-auto invisible"/>
          </div>
          <div className="absolute -top-5 -left-5 -right-5 -bottom-5 z-10 bg-neutral-900" style={{clipPath:'polygon(0 calc(50% - 20px), calc(50% - 20px) calc(50% - 20px), calc(50% - 20px) 0, 100% 0, 100% 100%, 0 100%)'}}>
          </div>
        </picture>
        <div className="w-1/2 text-white">
          { makeEyebrow('Contact Us')}
          { makeHeading('Talking to Us is Easy.')}
          <p className="w-4/5 mb-16">You can speak to a member of our team who will talk with you about the goals for your city, and we will work with you to see which one of our financing platforms best suits your needs.</p>
          <h3 className="mb-4 text-2xl font-bold">We offer flexible plans.</h3>
          <p className="w-4/5 mb-16">Most do not have to make a payment until two years after project completion. We will also work with you to improve revenue during those two years to make repayment easy.</p>
          <div className="grid grid-cols-2 gap-x-8 w-3/4">
            { makeContact('Call',"+18001234567890","800.123.456.7890", "Call Now")}
            { makeContact('Email',"mailto:blackhole@sccuplifting.com","sccuplifting.com", "Message Now")}
          </div>
        </div>
      </section>
      <footer className={rowStyle + " flex-wrap bg-black py-8"}>
        <div className="flex items-center justify-between w-full">
          <figure className="w-48 h-auto text-gold-1/2">
            <img alt="" src={logo_h}/>
            <figcaption className="text-md text-gold-1/2">Pillars of the Community</figcaption>
          </figure>
          <p className="ml-auto text-sm text-right text-neutral-850">&copy;2022 State County City Uplifting, All rights reserved</p>
        </div>
      </footer>
    </main>
  );
}

export default App;