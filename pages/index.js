/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-28 11:49:21
 * @LastEditTime: 2021-05-30 23:46:24
 * @FilePath: \zhleon\pages\index.js
 */
import SelectorIcon from 'heroicons/outline/selector.svg';
import DotsHorizontal from 'heroicons/solid/dots-horizontal.svg'
import Link from 'next/link';

function VercelLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 1155 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M577.344 0L1154.69 1000H0L577.344 0Z" fill="black" />
    </svg>
  )
}


function Avatar({ src, alt = ' ' }) {
  return (
    <img
      className="h-8 w-8 rounded-full border border-gray-200"
      src={src}
      alt={alt} />
  )
}
export default function Home() {
  return (
    <div>
      {/* 最顶端 */}
      < div className="bg-white">
        <header className="border-b border-gray-200 space-y-2">
          <nav className="max-w-5xl mx-auto px-6 flex justify-between items-center pt-4">
            {/* 最上面导航，左侧 */}
            <div className="flex items-center space-x-2">
              <Link href="#">
                <a>
                  <VercelLogo className="h-6" />
                </a>
              </Link>

              <span>
                <svg
                  className="h-8 w-8 text-gray-300"
                  viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" >
                  <path d="M16.88 3.549L7.12 20.451"></path>
                </svg>
              </span>
              {/* 最上面logo + 姓名文字 */}
              <span className="inline-flex items-center space-x-2 ">
                <Link href="#">
                  <a className="inline-flex items-center space-x-2">
                    <span>
                      <Avatar src="/avatar.svg" alt="" />
                    </span>
                    <span className="text-sm text-black-300 font-semibold antialiased">Blueheart  Leon</span>
                  </a>
                </Link>
                <button className="inline-flex items-center border rounded border-transparent p-0.6 hover:border-gray-200 hover:boder-gray-50 transition ease-in-out duration-200">
                  <SelectorIcon className="h-5 w-5 text-gray-300 " />
                </button>
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-5">
                <button type='button' className="border border-gray-200 rounded px-3 py-1.5 text-sm leading-5 text-gray-500 hover:border-black transition ease-in-out duration-200" >
                  Feedback
                </button>
                <Link href="#">
                  <a className="inline-block text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-200">Blog</a>
                </Link>
                <Link href="#">
                  <a className="inline-block text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-200">Support</a>
                </Link>
                <Link href="#">
                  <a className="inline-block text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-200">Docs</a>
                </Link>
              </div>
              <button type="button">
                <DotsHorizontal className="h-5 w-5 text-gray-400" />
              </button>
              <button type="button">
                <Avatar src="/avatar.svg" alt="" />
              </button>
            </div>
          </nav>
          {/* 第二个导航条开始 */}
          <div className="max-w-5xl mx-auto px-6">
            <nav className="-mb-px flex space-x-5 text-sm leading-5">
              <Link href="#">
                <a className="border-b-2 border-black px-0.5 py-3 text-black ">Overview</a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-200">Projects</a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-200">Integrations</a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-200">Activity</a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-200">Domains</a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-200">Usage</a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-200">Settings</a>
              </Link>
            </nav>
          </div>
        </header >
        {/* 最上面导航部分结束 */}

        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 pt-14 pb-28">
          {/* 左边 */}
          <div className="flex space-x-8">
            {/* 头像 */}
            <div>
              <img className="h-24 w-24 rounded-full" src="/Avatar.svg" />
            </div>
            <div className="flex flex-col justify-between p-1 space-y-4">
              <div className="flex items-center space-x-4">
                <h1 className="text-4xl leading-10 font-bold">Blueheart</h1>
                <span className="mt-1 inline-flex rounded-full bg-gray-50 border border-gray-200 text-xs leading-4 px-2 py-0.5 font-medium text-black uppercase tracking-wide">
                  hobby</span>
              </div>
              <div >
                <dl>
                  <Link href="https://github.com/zhLeon521" >
                    <a target="_blank" className="flex items-center space-x-2 text-sm leading-5 font-bold text-gray-500">
                      <img className="h-3.5 w-3.5" src="/github.svg" alt="githubLogo" />
                      <span>zhLeon521</span>
                    </a>
                  </Link>

                  <dd className="text-xs leading-5 font-bold text-black uppercase tracking-wide">
                    🤣 FullStack Developer
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          {/* 右边 */}
          <div className="grid grid-cols-2 gap-x-7">
            <Link href="#">
              <a className="inline-flex justify-between rounded border border-gray-200  bg-white px-6 py-3 text-sm leading-5 font-semibold text-gray-500 hover:border-black hover:text-black transition ease-in-out duration-150">
                Quick View</a>
            </Link>
            <Link href="#">
              <a className="inline-flex items-center justify-between rounded border border-transparent bg-black px-7 py-3 text-sm leading-5 font-medium text-white hover:bg-white hover:border-black hover:text-black transition ease-in-out duration-150">
                Enter Blog</a>
            </Link>
          </div>

        </div>
      </ div >
    </div >


  )

}
