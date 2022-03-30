import React, { useState } from 'react'
import ErrorPage from 'next/error'
import { icons } from '../utils/data'

export function IconsPage() {
    const [searchText, setSearchText] = useState('')
    const iconAccess = true

    if (!iconAccess) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <>
            <main className="flex-grow bg-zinc-900">
                <div className="flex flex-row items-center px-4 py-4 md:px-6 lg:px-8">
                    <svg
                        viewBox="0 0 21 21"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mr-2 md:w-7 lg:w-12 md:h-7 lg:h-12 text-zinc-700"
                    >
                        <g
                            fill="none"
                            fillRule="evenodd"
                            stroke="currentcolor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="8.5" cy="8.5" r="5" />
                            <path d="m17.571 17.5-5.571-5.5" />
                        </g>
                    </svg>
                    <input
                        autoFocus={true}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder={`Search ${icons.length} SaaSy Icons`}
                        type="text"
                        name="search"
                        autoCapitalize="off"
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck="false"
                        className="flex flex-1 bg-zinc-900 w-full text-xl tracking-tighter text-black placeholder-zinc-600 appearance-none focus:outline-none focus:ring-transparent rounded-lg focus:bg-zinc-800 px-4 focus:text-white lg:text-3xl xl:text-5xl"
                    />
                </div>
                <div className="sticky top-0 z-10 flex flex-col px-4 py-4 space-y-2 border-t border-zinc-800 md:space-y-0 md:flex-row md:px-6 lg:px-8">
                    <div className="flex flex-col p-1 space-x-0 space-y-1 bg-zinc-800 rounded md:flex-row md:space-x-1 md:space-y-0">
                        <label className="inline-flex flex-no-wrap items-center w-full h-full px-2 py-2 text-sm transition duration-200 rounded cursor-pointer lg:text-base bg-zinc-800 hover:bg-zinc-700 text-white md:w-auto md:py-0">
                            <input
                                type="radio"
                                className="hidden"
                                name="copy-svg"
                                // x-model="downloadType"
                                // :value="'copy-svg'"
                                checked
                            />
                            <span className="mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                >
                                    <g
                                        fill="none"
                                        fillRule="evenodd"
                                        stroke="currentcolor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        transform="translate(2 3)"
                                    >
                                        <line
                                            x1="10.5"
                                            x2="6.5"
                                            y1=".5"
                                            y2="14.5"
                                        />
                                        <polyline
                                            points="7.328 2.672 7.328 8.328 1.672 8.328"
                                            transform="rotate(135 4.5 5.5)"
                                        />
                                        <polyline
                                            points="15.328 6.672 15.328 12.328 9.672 12.328"
                                            transform="scale(1 -1) rotate(-45 -10.435 0)"
                                        />
                                    </g>
                                </svg>
                            </span>
                            <span className="whitespace-no-wrap">
                                Copy SVG Code
                            </span>
                        </label>
                        <label
                            className="inline-flex flex-no-wrap items-center w-full h-full px-2 py-2 text-sm transition duration-200 rounded cursor-pointer lg:text-base bg-zinc-800 hover:bg-zinc-700 text-white md:w-auto md:py-0"
                            // :class="downloadType === 'copy-cdn' ? 'shadow' : 'text-gray-600'"
                        >
                            <input
                                type="radio"
                                className="hidden"
                                name="copy-cdn"
                                // x-model="downloadType"
                                // :value="'copy-cdn'"
                            />
                            <span className="mr-2">
                                <svg
                                    height="21"
                                    viewBox="0 0 21 21"
                                    width="21"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        fill="none"
                                        fillRule="evenodd"
                                        stroke="currentcolor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        transform="translate(4 4)"
                                    >
                                        <path d="m5.5 7.5c.96940983 1.36718798 3.01111566 1.12727011 4.01111565 0l1.98888435-2c1.1243486-1.22807966 1.1641276-2.81388365 0-4-1.135619-1.15706921-2.86438099-1.15706947-4 0l-2 2" />
                                        <path
                                            d="m.64175661 12.3971156c.96940983 1.367188 3 1.1970433 4 .0697732l2-1.9748738c1.12434863-1.22807961 1.16412758-2.83900987 0-4.02512622-1.13561902-1.15706922-2.86438099-1.15706948-4 0l-2 2"
                                            transform="matrix(-1 0 0 -1 8.14 18.966)"
                                        />
                                    </g>
                                </svg>
                            </span>
                            <span className="whitespace-no-wrap">
                                Copy CDN Link
                            </span>
                        </label>
                        <label
                            className="inline-flex flex-no-wrap items-center w-full h-full px-2 py-2 text-sm transition duration-200 rounded cursor-pointer lg:text-base bg-zinc-800 hover:bg-zinc-700 text-white md:w-auto md:py-0"
                            // :class="downloadType === 'download-svg' ? 'shadow' : 'text-gray-600'"
                        >
                            <input
                                type="radio"
                                className="hidden"
                                name="download-svg"
                                // x-model="downloadType"
                                // :value="'download-svg'"
                            />
                            <span className="mr-2">
                                <svg
                                    height="21"
                                    viewBox="0 0 21 21"
                                    width="21"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        fill="none"
                                        fillRule="evenodd"
                                        stroke="currentcolor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        transform="translate(4 3)"
                                    >
                                        <path
                                            d="m9.221 4.716.165 5.821-5.792-.135"
                                            transform="matrix(-.70710678 .70710678 .70710678 .70710678 5.685139 -2.354861)"
                                        />
                                        <path d="m6.5.5v11" />
                                        <path d="m.5 14.5h12" />
                                    </g>
                                </svg>
                            </span>
                            <span className="whitespace-no-wrap">
                                Download SVG Icon
                            </span>
                        </label>
                    </div>
                    <a
                        href="images/System UIcons.zip"
                        className="flex flex-row items-center w-full p-3 ml-auto text-sm text-white rounded lg:text-base hover:bg-zinc-800 md:w-auto"
                        download
                    >
                        <span className="mr-2">
                            <svg
                                height="21"
                                viewBox="0 0 21 21"
                                width="21"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g
                                    fill="none"
                                    fillRule="evenodd"
                                    stroke="currentcolor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    transform="translate(4 3)"
                                >
                                    <path
                                        d="m9.221 4.716.165 5.821-5.792-.135"
                                        transform="matrix(-.70710678 .70710678 .70710678 .70710678 5.685139 -2.354861)"
                                    />
                                    <path d="m6.5.5v11" />
                                    <path d="m.5 14.5h12" />
                                </g>
                            </svg>
                        </span>
                        <span className="whitespace-no-wrap">
                            Download All Icons
                        </span>
                    </a>
                </div>

                <div className="grid grid-cols-2 gap-2 p-4 md:p-6 lg:p-8 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 md:gap-4">
                    {icons
                        .filter(
                            (icon) =>
                                icon.icon_name
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase()) ||
                                icon.icon_keywords
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase()),
                        )
                        .map((icon) => (
                            <a
                                key={icon.icon_name}
                                href={
                                    `/images/icons/` + icon.icon_path + `.svg`
                                }
                                // x-bind:download="downloadType === 'download-svg' && item.icon_name"
                                className="relative bg-zinc-800 text-white hover:bg-zinc-700 flex flex-col items-center justify-center h-32 p-2 transition duration-150 ease-in-out rounded shadow cursor-pointer group hover:shadow-xl md:h-40"
                                // @click="handleClick(item, downloadType, $event, $dispatch)"
                            >
                                {/* <div>
                                <div
                                    role="alert"
                                    // x-show="copied === item.icon_name"
                                    // x-on:show:toast.document="copied = $event.detail"
                                    // x-cloak
                                    className="absolute top-0 left-0 right-0 z-50 px-2 py-1 mx-auto -mt-8 text-sm text-center text-white bg-black rounded"
                                    // style="width: fit-content"
                                    // x-transition:enter="transition ease-out duration-200"
                                    // x-transition:enter-start="opacity-0 transform scale-90"
                                    // x-transition:enter-end="opacity-100 transform scale-100"
                                    // x-transition:leave="transition ease-in duration-500 "
                                    // x-transition:leave-start="opacity-100 transform scale-100"
                                    // x-transition:leave-end="opacity-0 transform scale-90"
                                >
                                    <template x-if="downloadType == 'download-svg'">
                                        <span>Downloading!</span>
                                    </template>
                                    <template x-if="downloadType == 'copy-cdn'">
                                        <span>Copied URL</span>
                                    </template>
                                    <template x-if="downloadType == 'copy-svg'">
                                        <span>Copied SVG Code</span>
                                    </template>
                                </div>
                            </div> */}
                                <img
                                    src={`/icons/${icon.icon_path}.svg`}
                                    // :src="`images/icons/` + item.icon_path + `.svg`"
                                    // :alt="item.icon_name"
                                    className="transition duration-200 text-inherit transform group-hover:scale-200"
                                    loading="lazy"
                                />
                                <p className="mt-4 text-xs leading-none tracking-tight text-center text-zinc-400 md:mt-8">
                                    {icon.icon_name}
                                </p>
                                <span className="hidden">
                                    {icon.icon_keywords}
                                </span>
                            </a>
                        ))}
                    <div
                        x-show="filteredIcons.length === 0"
                        className="col-span-2"
                    >
                        <h3 className="text-xl text-gray-500">
                            No Matches Found
                        </h3>
                    </div>
                </div>
            </main>
        </>
    )
}

export default IconsPage
