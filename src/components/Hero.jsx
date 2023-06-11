import {logo} from '../assets';

//unknow bug for css is not applied on mac
const Hero = () => {
  return (
    <header className=' flex justify-center
     items-center flex-col'>
        <nav className='flex justify-center items-center w-full
        mb-10 pt-3'>
            
            <img src={logo} alt="sumz_logo" 
            onClick={() => window.open('https://github.com/hanbintan2003/')}
            className= 'w-4 h-auto object-contain mx-auto'
            />
        </nav>

        <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero