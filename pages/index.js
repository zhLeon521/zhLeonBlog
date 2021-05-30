/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-28 11:49:21
 * @LastEditTime: 2021-05-30 15:18:44
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
export default function Home() {
  return (
    <div>
      {/* 最顶端 */}
      < div className="bg-white">
        <header>
          <nav className="max-w-5xl mx-auto pt-5">
            {/* 最上面导航，左侧 */}
            <div className="flex items-center space-x-2">
              <VercelLogo className="h-6" />
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
                      <img
                        className="h-7 w-7 rounded-full border border-gray-200"
                        src="/avatar.svg" alt="" />
                    </span>
                    <span className="text-sm text-black-300 font-semibold antialiased">Blueheart  Leon</span>
                  </a>
                </Link>
                <button className="inline-flex items-center border rounded-md border-transparent p-0.2 hover:border-gray-200 hover:boder-gray-50 transition ease-in-out duration-200">
                  <SelectorIcon className="h-5 w-5 text-gray-300 " />
                </button>
              </span>
            </div>

            <div>
              <button type='button' >
                Feedback
              </button>
              <Link href="#">
                <a>Blog</a>
              </Link>
              <Link href="#">
                <a>Support</a>
              </Link>
              <Link href="#">
                <a>Docs</a>
              </Link>
              <button type="button">
                <DotsHorizontal />
              </button>
              <button type="button">
                <img src="/avatar.svg" alt="zhLeon" />
              </button>
            </div>
          </nav>
        </header >
      </ div >
    </div>


  )

}
