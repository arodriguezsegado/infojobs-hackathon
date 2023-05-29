import { Navbar } from './components/Navbar';

export default async function Home() {

  return (
    <div className='grid grid-cols-2 h-screen'>
      <Navbar />
      <div className='h-full w-full bg-blue-800 grid grid-cols-1 place-items-center'>
        <div className='text-white px-10'>
          <p className='text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-extrabold'>Infojobs</p>
          <p className='text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-extrabold'>Hackathon</p>
          <p className='text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold mt-8'>Tu currículum en InfoJobs con un toque mágico</p>
          <p className='text-xl  md:text-2xl font-medium italic mt-4'>by Alejandro Rodríguez</p>
        </div>
      </div>
      <div className='h-full w-full bg-gray-200 grid grid-cols-1 place-items-center'>
        <div>
          <a href='/app' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2">
            <svg aria-hidden="true" className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Icon description</span>
          </a>
        </div>
      </div>
    </div>
  )
}
