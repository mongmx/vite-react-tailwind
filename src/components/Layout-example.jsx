import React, { useState } from "react";
import { Dropdown, DropdownItem } from '@windmill/react-ui'

export default function Layout() {
  return (
    <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <aside class="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-blue-900">
        <div class="sidebar-header flex items-center justify-center py-4">
          <div class="inline-flex">
            <a href="#" class="inline-flex flex-row items-center">
              <span class="leading-10 text-gray-100 text-2xl font-bold uppercase">Brandname</span>
            </a>
          </div>
        </div>
        <div class="sidebar-content px-4 py-6">
          <ul class="flex flex-col w-full">
            <li class="my-px">
              <a
                href="#"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
              >
                <span class="flex items-center justify-center text-lg">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </span>
                <span class="ml-3">Dashboard</span>
              </a>
            </li>
            <li class="my-px">
              <a
                href="#"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <span class="flex items-center justify-center text-lg">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                </span>
                <span class="ml-3">Manager</span>
              </a>
            </li>
            <li class="my-px">
              <a
                href="#"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <span class="flex items-center justify-center text-lg">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>
                <span class="ml-3">Tasks</span>
              </a>
            </li>
            <li class="my-px">
              <a
                href="#"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <span class="flex items-center justify-center text-lg">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <span class="ml-3">Clients</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <header class="header bg-white shadow py-4 px-4">
          <div class="header-content flex items-center flex-row">
            <div className="font-bold text-xl">DASHBOARD</div>
            <div class="flex ml-auto">
              <a href class="flex flex-row items-center">
                <div class="dropdown dropdown-end dropdown-hover">
                  <label tabIndex="0">
                    <img
                      src="https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png"
                      alt
                      class="h-10 w-10 bg-gray-200 border rounded-full"
                    />
                  </label>
                  <ul tabIndex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </header>
        <div class="main-content flex flex-col flex-grow p-4">
          {/* <h1 class="font-bold text-2xl text-gray-700">Dashboard</h1> */}
          <div
            class="flex flex-col flex-grow bg-white rounded mt-4"
          ></div>
        </div>
        {/* <footer class="footer px-4 py-6">
          <div class="footer-content">
            <p class="text-sm text-gray-600 text-center">© Brandname 2020. All rights reserved. <a href="https://twitter.com/iaminos">by iAmine</a></p>
          </div>
        </footer> */}
      </main>
    </div>
  );
}
