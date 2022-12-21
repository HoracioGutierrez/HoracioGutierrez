import anime from "animejs"
import { useEffect } from "react"

function App() {

  useEffect(()=>{
   
  })

  const handleHover = (e) => {
    const paths = [...e.target.querySelectorAll("path")]
    const pathsClasses = paths.map(path => path.classList[0])
    const pathsClassesStringSelectors = pathsClasses.map(pathClass => `.${pathClass}`)
    const pathsClassesString = pathsClassesStringSelectors.join(",")

    anime({
      targets: pathsClassesString,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'cubicBezier(.5, .05, .1, .3)',
      duration: 200,
      delay: function(el, i) { return i * 250 },
      loop: false,
      direction:"forwards"
    })
  }

  return (
    <div className="container">
      <div className="card">
        <svg className="card__svg" width="176" height="84" viewBox="0 0 176 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 7.71429C11.5238 0.0952378 21.0476 0.0952378 30.5714 7.71429C40.0952 15.3333 49.619 15.3333 59.1429 7.71429C68.6667 0.0952378 78.1905 0.0952378 87.7143 7.71429C97.2381 15.3333 106.762 15.3333 116.286 7.71429C125.81 0.0952378 135.333 0.0952378 144.857 7.71429C154.381 15.3333 163.905 15.3333 173.429 7.71429" stroke="black" strokeWidth="4" strokeLinecap="round" />
          <path d="M2 42C11.5238 34.3809 21.0476 34.3809 30.5714 42C40.0952 49.619 49.619 49.619 59.1429 42C68.6667 34.3809 78.1905 34.3809 87.7143 42C97.2381 49.619 106.762 49.619 116.286 42C125.81 34.3809 135.333 34.3809 144.857 42C154.381 49.619 163.905 49.619 173.429 42" stroke="black" strokeWidth="4" strokeLinecap="round" />
          <path d="M2 76.2857C11.5238 68.6666 21.0476 68.6666 30.5714 76.2857C40.0952 83.9047 49.619 83.9047 59.1429 76.2857C68.6667 68.6666 78.1905 68.6666 87.7143 76.2857C97.2381 83.9047 106.762 83.9047 116.286 76.2857C125.81 68.6666 135.333 68.6666 144.857 76.2857C154.381 83.9047 163.905 83.9047 173.429 76.2857" stroke="black" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <header className="card__header">
          <h1 className="card__title">HORACIO GUTIERREZ</h1>
          <h2 className="card__subtitle">Programador Web, ponele...</h2>
        </header>
        <main>
          <div className="card__content">
            <div className="card__heading">
              <h3 className="card__intro">UN POCO SOBRE MI</h3>
              <p className="card__date">15/12/2022</p>
            </div>
            <p className="card__text">
              Vivo en Buenos Aires, Argentina y tengo 33 años. Programo de manera freelance pero me dedico mas que nada a enseñar Javascript en general, especialmente React. Podes revisar mi portfolio mas abajo en GITHUB o mis laburos fijos en LINKEDIN.
            </p>
            <div className="card__footer">
              <div className="card__tools">

              </div>
              <div className="card__avatar">
                <div className="card__circle">
                  <img src="./avatar.png" alt="avatar" className="card__image" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>


      <nav className="social">
        <div className="social__item social__item-linkedin" onMouseEnter={handleHover} /* onMouseLeave={handleLeave} */>
          <a href="https://www.linkedin.com/in/horacioegutierrez/" className="social__link" target="_blank">LINKEDIN</a>
          <svg className="social__arrow" style={{ fill: 'none'}} width="138" height="109" viewBox="0 0 138 109" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="pt__11" d="M126.389 24.9208C128.905 25.1018 131.218 24.6615 133.755 23.9008C134.505 23.6756 135.252 23.4604 135.982 23.0552C136.364 22.8428 136.465 22.8456 136.211 23.4637C134.496 27.6434 132.428 31.3951 131.208 35.9089" stroke="black" strokeWidth="3" strokeLinecap="round" />
            <path className="pt__22" d="M5.1324 58.6927C6.04967 65.8478 6.98376 73.1394 8.49145 80.0079C9.39315 84.1157 11.0667 89.043 14.8409 88.4666C19.89 87.6956 24.813 79.8978 28.163 74.9201C32.7534 68.0994 36.3035 59.4535 41.4931 53.4547C44.4199 50.0714 45.3308 58.414 45.9105 60.7421C47.6307 67.6497 48.9057 76.9638 53.3618 81.2895C59.0736 86.8342 69.1384 76.1684 74.4654 72.1451C93.676 57.6363 112.755 42.7207 131.839 27.8238" stroke="black" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        <div className="social__item social__item-github" onMouseEnter={handleHover} /* onMouseLeave={handleLeave} */>
          <a href="https://github.com/HoracioGutierrez" className="social__link" target="_blank">GITHUB</a>
          <svg className="social__arrow" style={{ fill: 'none'}} width="138" height="109" viewBox="0 0 138 109" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="pt__21" d="M126.389 24.9208C128.905 25.1018 131.218 24.6615 133.755 23.9008C134.505 23.6756 135.252 23.4604 135.982 23.0552C136.364 22.8428 136.465 22.8456 136.211 23.4637C134.496 27.6434 132.428 31.3951 131.208 35.9089" stroke="black" strokeWidth="3" strokeLinecap="round" />
            <path className="pt__22" d="M5.1324 58.6927C6.04967 65.8478 6.98376 73.1394 8.49145 80.0079C9.39315 84.1157 11.0667 89.043 14.8409 88.4666C19.89 87.6956 24.813 79.8978 28.163 74.9201C32.7534 68.0994 36.3035 59.4535 41.4931 53.4547C44.4199 50.0714 45.3308 58.414 45.9105 60.7421C47.6307 67.6497 48.9057 76.9638 53.3618 81.2895C59.0736 86.8342 69.1384 76.1684 74.4654 72.1451C93.676 57.6363 112.755 42.7207 131.839 27.8238" stroke="black" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        <div className="social__item social__item-instagram" onMouseEnter={handleHover} /* onMouseLeave={handleLeave} */>
          <a href="https://www.instagram.com/horagutierrez/" className="social__link" target="_blank">INSTAGRAM</a>
          <svg className="social__arrow" style={{ fill: 'none'}} width="138" height="109" viewBox="0 0 138 109" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="pt__31" d="M126.389 24.9208C128.905 25.1018 131.218 24.6615 133.755 23.9008C134.505 23.6756 135.252 23.4604 135.982 23.0552C136.364 22.8428 136.465 22.8456 136.211 23.4637C134.496 27.6434 132.428 31.3951 131.208 35.9089" stroke="black" strokeWidth="3" strokeLinecap="round" />
            <path className="pt__32" d="M5.1324 58.6927C6.04967 65.8478 6.98376 73.1394 8.49145 80.0079C9.39315 84.1157 11.0667 89.043 14.8409 88.4666C19.89 87.6956 24.813 79.8978 28.163 74.9201C32.7534 68.0994 36.3035 59.4535 41.4931 53.4547C44.4199 50.0714 45.3308 58.414 45.9105 60.7421C47.6307 67.6497 48.9057 76.9638 53.3618 81.2895C59.0736 86.8342 69.1384 76.1684 74.4654 72.1451C93.676 57.6363 112.755 42.7207 131.839 27.8238" stroke="black" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </nav>

      <svg className="container__svg-square" width="284" height="284" viewBox="0 0 284 284" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M156.157 14.7463L141.992 0.581794L127.828 14.7463H156.157ZM114.496 28.0786L169.489 28.0786L182.822 41.4116L101.163 41.4116L114.496 28.0786ZM87.8302 54.7439L74.498 68.0762L209.487 68.0762L196.155 54.7439L87.8302 54.7439ZM222.819 81.4085L61.1657 81.4085L47.834 94.7402L236.151 94.7402L222.819 81.4085ZM249.483 108.072L34.5017 108.072L21.1687 121.406H262.816L249.483 108.072ZM276.148 134.738L7.83634 134.738L0.581787 141.992L6.65856 148.069L277.326 148.069L283.403 141.992L276.148 134.738ZM263.994 161.401H19.9909L33.3235 174.734L250.661 174.734L263.994 161.401ZM237.329 188.066L46.6559 188.066L59.9887 201.399H223.996L237.329 188.066ZM210.664 214.732H73.321L86.6534 228.064H197.331L210.664 214.732ZM183.999 241.396L99.9857 241.396L113.317 254.728H170.667L183.999 241.396ZM157.335 268.06L126.65 268.06L141.992 283.403L157.335 268.06Z" fill="#FFC700" />
      </svg>

      <svg className="container__svg-triangles" width="129" height="186" viewBox="0 0 129 186" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_4_105)">
          <path d="M126.333 177.37L34.5844 91L126.333 4.62953V177.37Z" fill="#FFC700" stroke="black" strokeWidth="4" />
          <path d="M94.6667 177.37L2.91782 91L94.6667 4.62953V177.37Z" stroke="black" strokeWidth="4" />
        </g>
        <defs>
          <filter id="filter0_d_4_105" x="0" y="0" width="128.333" height="186" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_105" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_105" result="shape" />
          </filter>
        </defs>
      </svg>


    </div>
  )
}

export default App
