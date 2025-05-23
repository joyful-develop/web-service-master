import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Disclosure as='nav' className='bg-gray-800'>
      <div className='max-w-container mx-auto px-8 sm:px-24 lg:px-32'>
        <div className='relative flex h-64 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button*/}
            <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md p-8 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-8 focus:ring-white focus:outline-hidden focus:ring-inset'>
              <span className='absolute -inset-2' />
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon aria-hidden='true' className='block size-24 group-data-open:hidden' />
              <XMarkIcon aria-hidden='true' className='hidden size-24 group-data-open:block' />
            </DisclosureButton>
          </div>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex shrink-0 items-center'>
              <img
                alt='Your Company'
                src='https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500'
                className='h-32 w-auto'
              />
            </div>
            <div className='hidden sm:ml-24 sm:block'>
              <div className='flex space-x-16'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-12 py-8 text-sm font-medium'
                    )}>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-8 sm:static sm:inset-auto sm:ml-24 sm:pr-0'>
            <button
              type='button'
              className='relative rounded-full bg-gray-800 p-4 text-gray-400 hover:text-white focus:ring-8 focus:ring-white focus:ring-offset-8 focus:ring-offset-gray-800 focus:outline-hidden'>
              <span className='absolute -inset-6' />
              <span className='sr-only'>View notifications</span>
              <BellIcon aria-hidden='true' className='size-24' />
            </button>

            {/* Profile dropdown */}
            <Menu as='div' className='relative ml-12'>
              <div>
                <MenuButton className='hover:text-whit relative flex rounded-full bg-gray-800 text-sm text-gray-400 focus:ring-8 focus:ring-white focus:ring-offset-8 focus:ring-offset-gray-800 focus:outline-hidden'>
                  <span className='absolute -inset-6' />
                  <span className='sr-only'>Open user menu</span>
                  <UserCircleIcon aria-hidden='true' className='size-24'></UserCircleIcon>
                  {/* <img
                    alt=''
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    className='size-32 rounded-full'
                  /> */}
                </MenuButton>
              </div>
              <MenuItems
                transition
                className='absolute right-0 z-10 mt-8 w-192 origin-top-right rounded-md bg-white py-4 shadow-lg ring-4 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in'>
                <MenuItem>
                  <a
                    href='#'
                    className='block px-16 py-8 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden'>
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href='#'
                    className='block px-16 py-8 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden'>
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href='#'
                    className='block px-16 py-8 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden'>
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className='sm:hidden'>
        <div className='space-y-4 px-8 pt-8 pb-12'>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as='a'
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-12 py-8 text-base font-medium'
              )}>
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
