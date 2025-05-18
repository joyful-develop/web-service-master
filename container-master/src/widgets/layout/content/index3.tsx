function DefaultContent2() {
  return (
    <div className='main -ml-192 flex flex-grow flex-col p-16 transition-all duration-150 ease-in md:ml-0'>
      <div className='space-y-20'>
        <div className='border-b border-b-gray-200'>
          <ul className='-mb-px flex items-center gap-20 text-sm font-medium'>
            <li className='flex-1'>
              <a
                href='#'
                className='relative flex items-center justify-center gap-8 px-4 py-12 text-blue-700 after:absolute after:bottom-0 after:left-0 after:h-2 after:w-full after:bg-blue-700 hover:text-blue-700'>
                Profile
              </a>
            </li>
            <li className='flex-1'>
              <a
                href='#'
                className='flex items-center justify-center gap-8 px-4 py-12 text-gray-500 hover:text-blue-700'>
                Preferences
              </a>
            </li>
            <li className='flex-1'>
              <a
                href='#'
                className='flex items-center justify-center gap-8 px-4 py-12 text-gray-500 hover:text-blue-700'>
                Notifications
                <span className='rounded-full bg-gray-100 px-8 py-2 text-xs font-semibold text-gray-500'> 8 </span>
              </a>
            </li>
            <li className='flex-1'>
              <a
                href='#'
                className='flex items-center justify-center gap-8 px-4 py-12 text-gray-500 hover:text-blue-700'>
                Applications
              </a>
            </li>
            <li className='flex-1'>
              <a
                href='#'
                className='flex items-center justify-center gap-8 px-4 py-12 text-gray-500 hover:text-blue-700'>
                API
              </a>
            </li>
          </ul>
        </div>
      </div>
      <main className='main -ml-192 flex flex-grow flex-col p-16 transition-all duration-150 ease-in md:ml-0'>
        <div className='flex h-full items-center justify-center bg-white text-center text-5xl font-bold shadow-md'>
          Content
        </div>
      </main>
    </div>
  );
}

export default DefaultContent2;
