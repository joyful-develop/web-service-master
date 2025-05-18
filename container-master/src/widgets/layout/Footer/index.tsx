export default function DefaultFooter() {
  return (
    <footer className='max-w-container mx-auto mt-128 w-full px-16 sm:px-24 lg:px-32' aria-labelledby='footer-heading'>
      <div className='items-centers grid grid-cols-1 justify-between gap-16 border-t border-gray-100 py-24 md:grid-cols-2'>
        <p className='text-sm/24 text-gray-600 max-md:text-center'>
          © 2024
          <a href='https://learnwithsumit.com/'>Learn with Sumit</a>. All rights reserved.
        </p>
        <div className='flex items-center justify-center space-x-16 text-sm/24 text-gray-500 md:justify-end'>
          <a href='https://learnwithsumit.com/privacy-policy'>Privacy policy</a>
          <div className='h-16 w-px bg-gray-200'></div>
          <a href='https://learnwithsumit.com/terms'>Terms</a>
        </div>
      </div>
    </footer>
  );
}
