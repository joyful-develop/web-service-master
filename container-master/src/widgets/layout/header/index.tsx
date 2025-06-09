import CompanyLogo from '@app/styles/images/xyz.svg?react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, EllipsisVerticalIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

import sytle from './style.ts';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Disclosure as='nav' className='bg-light dark:bg-dark'>
      <div className='max-w-container mx-auto w-full px-8 sm:px-0 lg:px-8'>
        <div className='relative flex h-64 w-full items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button*/}
            <DisclosureButton
              className={`group relative inline-flex items-center justify-center rounded-md p-8 ${sytle.headButtonHoverFocus}`}>
              <span className='absolute -inset-2' />
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon aria-hidden='true' className='block size-24 group-data-open:hidden' />
              <XMarkIcon aria-hidden='true' className='hidden size-24 group-data-open:block' />
            </DisclosureButton>
          </div>
          {/* 회사 로그 */}
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex shrink-0 items-center'>
              <CompanyLogo className='h-32 w-auto' />
            </div>
            <div className='hidden sm:ml-12 sm:block'>
              <div className='flex h-full flex-1'>
                <div className='content-center'>
                  <p className='text-2xl font-black text-red-600'>G-FDC</p>
                </div>
                <div className='ml-4 pt-12'>
                  <p className='text-dark-3 dark:text-light-3 text-xs'>Global Fault Detection & Classification</p>
                </div>
                <div className='ml-4 pt-12'>
                  <p className='text-dark-3 dark:text-light-3 text-xs'>(Ver. 3.1.202505121)</p>
                </div>
              </div>
            </div>
            <div className='hidden sm:ml-24 sm:block'>
              <div className='flex space-x-16'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'bg-light-3 dark:bg-dark-3 text-dark-0 dark:text-light-0'
                        : 'bg-light dark:bg-dark text-dark dark:text-light hover:bg-light-2 hover:dark:bg-dark-2 hover:text-dark-0 hover:dark:text-light-0',
                      'rounded-md px-8 py-4 text-sm font-medium'
                    )}>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-8 sm:static sm:inset-auto sm:ml-24 sm:pr-0'>
            <Popover>
              <PopoverButton className={`relative rounded-full p-4 ${sytle.headButtonHoverFocus}`}>
                <span className='absolute -inset-6' />
                <span className='sr-only'>View notifications</span>
                <BellIcon aria-hidden='true' className='size-24' />
              </PopoverButton>
              <PopoverPanel
                transition
                anchor='bottom'
                className='divide-y divide-white/5 rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0'>
                <div className='p-3'>
                  <a className='hover:bg-dark block rounded-lg px-3 py-2 transition' href='#'>
                    <p className='text-dark'>Insights</p>
                    <p className='text-dark'>Measure actions your users take</p>
                  </a>
                  <a className='hover:bg-dark block rounded-lg px-3 py-2 transition' href='#'>
                    <p className='text-dark'>Automations</p>
                    <p className='text-dark'>Create your own targeted content</p>
                  </a>
                  <a className='hover:bg-dark block rounded-lg px-3 py-2 transition' href='#'>
                    <p className='text-dark'>Reports</p>
                    <p className='text-dark'>Keep track of your growth</p>
                  </a>
                </div>
                <div className='p-3'>
                  <a className='block rounded-lg px-3 py-2 transition hover:bg-white/5' href='#'>
                    <p className='font-semibold text-white'>Documentation</p>
                    <p className='text-white/50'>Start integrating products and tools</p>
                  </a>
                </div>
              </PopoverPanel>
            </Popover>

            <Popover>
              <PopoverButton className={`relative ml-2 rounded-full p-4 ${sytle.headButtonHoverFocus}`}>
                <span className='absolute -inset-6' />
                <span className='sr-only'>User profile</span>
                <UserCircleIcon aria-hidden='true' className='size-24'></UserCircleIcon>
              </PopoverButton>
              <PopoverPanel
                transition
                anchor='bottom'
                className='divide-y divide-white/5 rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0'>
                <div className='hover:bg-dark block rounded-lg px-3 py-2 transition'>
                  <p className='text-dark'>User Profile</p>
                  <p className='text-dark'>사용자 프로필</p>
                </div>
                <div className='p-3'>
                  <p className='text-dark font-semibold'>User Profile</p>
                  <p className='text-dark/50'>사용자 프로필</p>
                </div>
              </PopoverPanel>
            </Popover>

            <Menu as='div' className='relative ml-2'>
              <div>
                <MenuButton className={`relative flex rounded-full p-4 ${sytle.headButtonHoverFocus}`}>
                  <span className='absolute -inset-6' />
                  <span className='sr-only'>Settings</span>
                  <EllipsisVerticalIcon aria-hidden='true' className='size-24' />
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
                item.current
                  ? 'bg-light-3 dark:bg-dark-3 text-dark-0 dark:text-light-0'
                  : 'bg-light dark:bg-dark text-dark dark:text-light hover:bg-light-2 hover:dark:bg-dark-2 hover:text-dark-0 hover:dark:text-light-0',
                'block rounded-md px-8 py-4 text-base font-medium'
              )}>
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
