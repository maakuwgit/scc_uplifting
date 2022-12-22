import logo_stacked from './logo--stacked.svg'
import logo from './logo--gold.svg'
import entryway from './7685682602157855425.jpg'
import redWalls from './1662784570334604561.jpg'
import office from './office-building-construction-site-with-room-for-text-1570x1047.jpg'
import redBuilding from './5315839180785235096.jpg'
import couches from './7729529688808813175.jpg'
import skyscraper from './office-building-skyscrapers-with-room-for-text-picjumbo-com.jpg'

function App() {
  const rowStyle    = "flex flex-wrap h-auto w-full"
  const conStyle    = "py-8 md:py-16 px-4 md:px-12 xl:px-24"
  const fDdStyle    = "md:order-2 mb-4 md:mb-0 text-gold"
  const fDtStyle    = "md:order-1 font-semibold mb-1 md:mb-2"
  const naStyle     = "p-1 md:p-2 text-sm"
  const slideStyle  = "p-2 md:p-4 mb-4 md:mb-auto cursor-pointer"

  const makeHeading = (copy) => {
    return <h3 className="mb-2 md:mb-6 text-2xl md:text-3xl lg:text-5xl font-extrabold text-white">{copy}</h3>
  }

  const makeSubheading = (copy) => {
    return <h3 className="mb-2 md:mb-5 text-xl md:text-2xl lg:text-4xl leading-tight md:leading-tight lg:leading-tight font-semibold text-white">{copy}</h3>
  }

  const makeEyebrow = (copy) => {
    return <h2 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-white">{copy}</h2>
  }

  const makeSlide = (img,h,c0="#542825",c1="rgba(27, 40, 55, 0.84)",c2="hsla(8, 27%, 59%, 1)",alt="",width="",height="") => {
    return (
      <>
        <figure className="relative h-full w-full" style={{
          backgroundImage: `linear-gradient(180deg, ${c0} 0%, ${c1} 100%), url(${img})`,
          backgroundSize: 'cover, cover', backgroundPosition: 'center, center', backgroundRepeat: 'no-repeat, no-repeat'
        }} onMouseEnter={(event) => {
          event.target.style.backgroundImage =`url(${img})`
          event.target.style.backgroundSize = 'cover'
          event.target.style.backgroundPosition = 'center'
          event.target.style.backgroundRepeat = 'no-repeat'
        }} onMouseLeave={(event) => {
          event.target.style.backgroundImage = `linear-gradient(180deg, ${c0} 0%, ${c1} 100%), url(${img})`
          event.target.style.backgroundSize = 'cover, cover'
          event.target.style.backgroundPosition = 'center, center'
          event.target.style.backgroundRepeat = 'no-repeat, no-repeat'
        }}>
          <img alt={alt} src={img} width={width} height={height} className="invisible"/>
          <figcaption className="pointer-events-none absolute top-0 left-0 w-full p-4 md:p-8 lg:p-16 text-center">
            <h4 className="w-full w-1/2 md:mb-2 mx-auto text-lg font-semibold" style={{color:c2}}>{h}</h4>
            <hr className="w-20 mb-12" style={{backgroundColor:c2}}/>
          </figcaption>
        </figure>
      </>
    )
  }

  const makeAccordion = (title, desc) => {
    return (
      <>
        <dt className="flex items-center justify-between cursor-pointer py-4" onClick={toggleAccordion}>
          {title}
          <svg className="w-4 h-4" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8536 4.35355C15.0488 4.15829 15.0488 3.84171 14.8536 3.64645L11.6716 0.464466C11.4763 0.269204 11.1597 0.269204 10.9645 0.464466C10.7692 0.659728 10.7692 0.976311 10.9645 1.17157L13.7929 4L10.9645 6.82843C10.7692 7.02369 10.7692 7.34027 10.9645 7.53553C11.1597 7.7308 11.4763 7.7308 11.6716 7.53553L14.8536 4.35355ZM0.5 4.5H14.5V3.5H0.5V4.5Z" fill="white"/>
          </svg>
        </dt>
        <dd className="border-b border-chocolate-100 text-sm">{desc}</dd>
      </>
    )
  }

  const makeCross = (title,color1 = "#1F2D23", color2 = "#487555") => {
    return (
      <>
        <li className="flex items-center justify-start py-4 md:py-8">
          <div className="text-5xl sm:text-6xl md:text-8xl">
            <svg style={{width:'1em',height:'1em'}} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.458748" y="-0.10791" width="31.9587" height="32.6689" fill={color1}/>
              <path d="M8.24427 25.1752L25.406 25.1752" stroke={color2} strokeLinecap="round"/>
              <path d="M7.90639 24.8044C7.71187 25.0004 7.71187 25.3182 7.90639 25.5142C8.10091 25.7102 8.41629 25.7102 8.6108 25.5142L7.90639 24.8044ZM25.7641 8.022C25.7641 7.7448 25.5411 7.5201 25.266 7.5201L20.7831 7.5201C20.5081 7.5201 20.285 7.7448 20.285 8.02199C20.285 8.29919 20.5081 8.52389 20.7831 8.52389L24.7679 8.52389L24.7679 12.5391C24.7679 12.8163 24.9909 13.041 25.266 13.041C25.5411 13.041 25.7641 12.8163 25.7641 12.5391L25.7641 8.022ZM8.6108 25.5142L25.6182 8.37689L24.9138 7.6671L7.90639 24.8044L8.6108 25.5142Z" fill={color2}/>
              <path d="M8.43578 7.52007C8.16069 7.52007 7.93768 7.74478 7.93768 8.02197L7.93768 12.5391C7.93768 12.8163 8.16069 13.041 8.43578 13.041C8.71087 13.041 8.93387 12.8163 8.93387 12.5391L8.93387 8.52387L12.9186 8.52387C13.1937 8.52387 13.4167 8.29916 13.4167 8.02197C13.4167 7.74478 13.1937 7.52007 12.9186 7.52007L8.43578 7.52007ZM25.091 25.5142C25.2855 25.7102 25.6009 25.7102 25.7954 25.5142C25.9899 25.3182 25.9899 25.0004 25.7954 24.8044L25.091 25.5142ZM8.08357 8.37687L25.091 25.5142L25.7954 24.8044L8.78798 7.66708L8.08357 8.37687Z" fill={color2}/>
            </svg>
          </div>
          <span className="block ml-4 md:mr-12">{title}</span>
        </li>
      </>
    )
  }

  const makeTout = (title, description) => {
    return (
      <>
        <dt data-tout className="md:order-1 mt-8 md:mt-auto mb-2 md:mb-4 font-semibold">{title}</dt>
        <dd className="md:order-2 text-sm md:text-base">
          <p>{description}</p>
        </dd>
      </>
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
    <main className="md:min-h-screen bg-neutral-850">
      <header className="absolute top-0 left-0 z-50 w-full flex nowrap items-center justify-start px-4 sm:px-8 py-2 md:py-4 bg-black-1/3">
        <figure className="w-full w-36 w-48 md:w-72 lg:w-96 h-auto flex flex-nowrap items-center text-lg sm:text-2xl lg:text-3xl font-semibold">
          <img alt="" src={logo} width="48" height="48" className="w-6 sm:w-8 md:w-12 h-auto"/>
          <figcaption className="uppercase text-white ml-4 lg:ml-12">SCC Uplifting</figcaption>
        </figure>
        <nav className="hidden md:flex flex-nowrap space-x-2 md:space-x-4 lg:space-x-8 text-gold">
          <a href="#mission" className={naStyle}>About</a>
          <a href="#portfolio" className={naStyle}>Portfolio</a>
          <a href="#process" className={naStyle}>Process</a>
          <a href="#case_studies" className={naStyle+' hidden'}>Case Studies</a>
          <a href="mailto:contact@sccupliftinginc.com" className={naStyle}>Contact</a>
        </nav>
      </header>
      <article className={rowStyle + " " + conStyle + " pt-24 md:min-h-screen relative items-center bg-black text-white bg-cover bg-fixed bg-bottom bg-right"}
       style={{
        backgroundImage: `radial-gradient(73.8% 46.24% at 49.99% 46.26%, rgba(44, 28, 28, 0) 0%, rgba(44, 28, 28, 0.79) 100%), url(${skyscraper})`,
        backgroundSize: 'cover', 
        backgroundAttachment: 'fixed', 
        backgroundPosition: 'bottom right'
      }}>
        <div className="w-full p-8 sm:px-16 sm:py-24 md:p-0">
          <h1 className="mb-4 md:mb-8 text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-4 font-extrabold drop-shadow-md">Infrastructure Creates Opportunity</h1>
          <hr className="w-12 lg:w-44 h-1 bg-periwinkle ml-0 mb-4 md:mb-8"/>
          <p className="w-full md:w-2/3 drop-shadow-sm text-xl md:text-2xl">We believe in improving services and creating new streams of revenue to sustain our cities</p>
        </div>
      </article>
      <section id="portfolio" className={rowStyle + " " + conStyle + " flex-wrap"}>
        <div className="relative w-full text-center mb-4">
          { makeEyebrow('Our Portfolio')}
          { makeHeading('Our Recent Work')}
          <hr className="w-12 lg:w-28 bg-teal md:-mt-3 mb-2 md:mb-5"/>
          <p className="text-neutral-400 text-sm md:text-base hidden">Sed&nbsp;finibus rutrum leo vitae congue. Sed nec erat convallis, convallis nulla a, placerat ipsum. Nunc posuere leo non justo lacinia, sed feugiat nisi commodo. Proin vulputate risus vitae quam viverra vestibulum ut a lacus.</p>
        </div>
        <ol className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 min-w-full md:-mx-4">
          <li data-slide className={slideStyle}>
            { makeSlide(redBuilding,
              "Dennis Brew Fire Station", 
              'rgb(94 0 75)', 'rgb(160 122 145/ 0.4)','#a07a91','',640,427)}
          </li>
          <li data-slide className={slideStyle}>
            { makeSlide(couches, 
              "Project #2 Unnamed",
              undefined, undefined,undefined,'',640,427)}
          </li>
          <li data-slide className={slideStyle + " block sm:hidden md:block"}>
            { makeSlide(entryway, 
              "Project #3 Unnamed",
              '#203837', 'rgba(44, 28, 28, 0.45)','hsla(177, 26%, 55%, 1)','',640,427)}
          </li>
        </ol>
        <div id="mission" className="flex flex-wrap md:flex-nowrap justify-between order-2 pt-8 md:pt-16 gap-4 md:gap-24">
          <div className="w-full md:w-2/5 md:pr-24">
            { makeSubheading('Improving Underserved Communities')}
            <p className="text-neutral-400 text-sm md:text-base">With over 20 years of experience in construction and development, we are one team, driven to uplift the community and make it better.</p>
          </div>
          <ul data-cross className="relative w-full px-2 md:w-3/5 grid sm:grid-cols-2 text-white">
            { makeCross('Professional services spanning cities','#442920','#9C7D76') }
            { makeCross('Performance throughout the project lifespan') }
            { makeCross('Understanding the challenges our communities face','#5e0039','#a07a91') }
            { makeCross('Working to connect funding and provide guidance','#1C2B4A','#5072B9') }
          </ul>
        </div>
      </section>
      <section id="case_studies" className={rowStyle + '  md:flex-nowrap min-h-screen bg-chocolate hidden'}>
        <div className="w-full md:w-1/2 order-2 px-4 pt-8 pb-0 md:p-16 bg-chocolate-gradient">
          { makeSubheading('This is Where We Put Our Case Study Which Talks About the Project')}
          <p className="text-neutral-400 text-sm md:text-base">Cras in felis eu nunc efficitur bibendum. Praesent tortor purus, efficitur non ultricies sed, accumsan in elit. Suspendisse rhoncus mauris at turpis interdum, in varius arcu tempor.</p>
          <dl data-accordion className="text-white">
            { makeAccordion('We Did This Thing','Lorem ipsum sin dolor amin set aqui lanis tet senim silla') }
            { makeAccordion('We Added This Feature','Lorem ipsum sin dolor amin set aqui lanis tet senim silla') }
            { makeAccordion('We Pulled In Our Partner','Lorem ipsum sin dolor amin set aqui lanis tet senim silla') }
            { makeAccordion('The Project Came Together','Lorem ipsum sin dolor amin set aqui lanis tet senim silla') }
          </dl>
        </div>
        <picture className="w-full md:w-1/2 order-1 relative" style={{minHeight:'20rem'}}>
          <div className="absolute top-0 left-0 right-0 bottom-0 z-20 bg-cover bg-center"
           style={{
            backgroundImage: `url(${redWalls})`
          }}>
            <img width="480" height="320" alt="" src={redWalls} className="invisible"/>
          </div>
        </picture>
      </section>
      <aside id="process" className="flex flex-wrap md:flex-nowrap w-full h-auto py-8 md:py-16 px-4 md:px-12 xl:px-24 align-center justify-center py-24 bg-cover bg-center bg-fixed" 
      style={{
        backgroundImage: `url(${office})`
      }}>
        <div className="outline outline-4 md:outline-8 lg:outline-16 outline-eggplant-1/3 bg-eggplant rounded-lg md:rounded-xl lg:rounded-2xl p-8 lg:p-16 text-center">
          <h3 className="mb-2 md:mb-4 text-3xl md:text-4xl lg:text-6xl font-extrabold text-white">This is How We Work</h3>
          <dl data-touts className="w-full grid md:grid-cols-3 gap-x-24 -mt-8 md:mt-auto text-white">
            { makeTout('We are accessible',"Team Members are available to speak about goals for your city")}
            { makeTout('We offer flexible plans',"Make your first payment two years after project completion")}
            { makeTout('We work with you',"Improving first and second year revenue, to make repayment easy!")}
          </dl>
        </div>
      </aside>
      <footer id="footer" className={rowStyle + " " + conStyle + " flex-wrap bg-chocolate py-4 md:py-8"}>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between w-full">
          <figure className="w-24 md:w-48 h-auto text-gold-1/2 mx-auto mb-4 md:ml-0 md:mb-auto">
            <img alt="SCC UPLIFTING" width="86" height="117" src={logo_stacked}/>
          </figure>  
          <div className="w-full md:w-3/4">
            <dl className="grid grid-cols-1 md:grid-cols-3 md:justify-between w-full text-center md:text-left text-white text-xs md:text-sm">
              <dt className={fDtStyle}>Phone</dt>
              <dd className={fDdStyle}>
                <a href="tel:+18001234567890">[800] 123.456.7890</a>
              </dd>
              <dt className={fDtStyle}>Email</dt>
              <dd className={fDdStyle}>
                <a href="mailto:contact@sccupliftinginc.com">contact@sccuplifting.com</a>
              </dd>
              <dt className={fDtStyle}>Hours</dt>
              <dd className={fDdStyle}>Mon &ndash; Fri 8a &ndash; 5p</dd>
            </dl>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;