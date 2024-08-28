import React from 'react'

function Hero() {
  return (
    <section className="bg-pink-100">
        <div className='flex items-baseline 
        justify-center pt-10'>
        <h2 className='text-pink-600 border 
            px-3 p-2 rounded-full
        text-center border-pink-700'>Let's Explore | <span className='text-violet-800 text-xl font-bold'>WipeIt</span></h2>

        </div>
  <div className="mx-auto h-screen max-w-screen-xl px-4 py-12 lg:flex  ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl text-pink-600 font-extrabold sm:text-5xl">
      Collaborative Documents
      <br />
       And Diagrams
        <strong className="font-extrabold text-violet-900 sm:block"> 
        For Engineers. </strong>
      </h1>

      <p className="mt-4 font-semibold sm:text-xl/relaxed text-pink-600">
      {/* All-in-one markdown editor, collaborative canvas, and diagram-as-code builder */}
      Integrated markdown, collaborative canvas, and code-first diagramming.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-pink-500 text-pink-100 px-12 py-3 text-sm font-medium  shadow hover:bg-pink-400 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>

       
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero