import { Fragment } from 'react'
import { useSignOut } from 'react-auth-kit'
import { Menu, Transition } from '@headlessui/react'
import { LogoutIcon, CogIcon, UserCircleIcon } from '@heroicons/react/outline'

const Header = () => {
  const signOut = useSignOut()

  return (
    <header className="sticky top-0 bg-white shadow py-2 px-4 uppercase text-right">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button >
          <div className="inline-flex items-center justify-center w-10 h-10 text-sm text-gray-100 bg-blue-900 rounded-full right-0">
            TW
          </div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-blue-900 text-gray-300' : 'text-gray-700'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <UserCircleIcon className="w-5 h-5 mr-2" />
                    Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-blue-900 text-gray-300' : 'text-gray-700'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <CogIcon className="w-5 h-5 mr-2" />
                    Setting
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-blue-900 text-gray-300' : 'text-gray-700'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={() => signOut()}
                  >
                    <LogoutIcon className="w-5 h-5 mr-2" />
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </header>
  );
}

export default Header;
